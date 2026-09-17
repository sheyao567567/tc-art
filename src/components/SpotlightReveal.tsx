import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const SPOTLIGHT_R = 260;
const GRID_CELL = 48;

/**
 * 聚光灯交互蒙版：底层为施工现场，鼠标（或触摸）扫过处揭示完工实景。
 * after 图通过 canvas 生成的径向渐变 mask 显示。
 */
export default function SpotlightReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const smooth = useRef({ x: -9999, y: -9999 });
  const gridOffset = useRef({ x: 0, y: 0 });
  const gridRef = useRef<SVGPatternElement>(null);
  const [mask, setMask] = useState<string>('');

  // rAF 循环：缓动跟随 + 每帧重绘径向蒙版
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      const canvas = canvasRef.current;
      if (rect && canvas) {
        // 缓动逼近鼠标位置（相对 section 坐标）
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

        // 网格随鼠标轻微漂移
        const cx = (smooth.current.x - rect.left) / rect.width - 0.5;
        const cy = (smooth.current.y - rect.top) / rect.height - 0.5;
        gridOffset.current.x += (cx * 16 - gridOffset.current.x) * 0.06;
        gridOffset.current.y += (cy * 16 - gridOffset.current.y) * 0.06;
        gridRef.current?.setAttribute('x', String(gridOffset.current.x));
        gridRef.current?.setAttribute('y', String(gridOffset.current.y));

        // 重绘蒙版
        const ctx = canvas.getContext('2d');
        if (ctx) {
          if (canvas.width !== rect.width || canvas.height !== rect.height) {
            canvas.width = rect.width;
            canvas.height = rect.height;
          }
          const x = smooth.current.x - rect.left;
          const y = smooth.current.y - rect.top;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const g = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
          g.addColorStop(0, 'rgba(255,255,255,1)');
          g.addColorStop(0.4, 'rgba(255,255,255,1)');
          g.addColorStop(0.6, 'rgba(255,255,255,0.75)');
          g.addColorStop(0.75, 'rgba(255,255,255,0.4)');
          g.addColorStop(0.88, 'rgba(255,255,255,0.12)');
          g.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, SPOTLIGHT_R, 0, Math.PI * 2);
          ctx.fill();
          setMask(canvas.toDataURL());
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (clientX: number, clientY: number) => {
    mouse.current = { x: clientX, y: clientY };
    if (smooth.current.x < -999) smooth.current = { x: clientX, y: clientY };
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden cursor-none select-none"
      style={{ height: '82vh', minHeight: 480 }}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        const t = e.touches[0];
        if (t) onMove(t.clientX, t.clientY);
      }}
    >
      {/* 网格背景 */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: 0.1 }}>
        <pattern
          id="spotlight-grid"
          ref={gridRef}
          width={GRID_CELL}
          height={GRID_CELL}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${GRID_CELL} 0 L 0 0 0 ${GRID_CELL}`}
            fill="none"
            stroke="#8a6547"
            strokeWidth="0.6"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#spotlight-grid)" />
      </svg>

      {/* 底层：施工现场 */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/craft-raw.jpg')` }}
      />
      <div className="absolute inset-0 z-10 bg-[#2b2a28]/15" />

      {/* 揭示层：完工实景（聚光灯蒙版） */}
      <canvas ref={canvasRef} className="hidden" />
      {mask && (
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-30 pointer-events-none"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/craft-finished.jpg')`,
            WebkitMaskImage: `url(${mask})`,
            maskImage: `url(${mask})`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        />
      )}

      {/* 文案 */}
      <div className="absolute bottom-10 left-5 sm:left-10 md:left-14 max-w-[280px] sm:max-w-sm z-40 pointer-events-none">
        <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.3em] text-[#f6f2ec]/80 uppercase mb-3">
          CRAFT · CASE · PROCESS
        </p>
        <h2 className="font-serif-sc text-2xl sm:text-3xl md:text-4xl text-[#f6f2ec] leading-snug mb-3 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
          移动指尖，
          <br />
          看见毛坯背后的家。
        </h2>
        <p className="text-xs sm:text-sm text-[#f6f2ec]/85 leading-relaxed mb-5 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          每一处完工实景，都来自标准化的工艺与十步流程。
        </p>
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link
            to="/cases"
            className="inline-flex items-center gap-1.5 bg-[#f6f2ec] text-[#2b2a28] text-xs sm:text-sm px-5 py-2.5 hover:bg-[#a0785a] hover:text-[#f6f2ec] transition-colors"
          >
            查看案例 <ArrowRight size={13} />
          </Link>
          <Link
            to="/process"
            className="text-[#f6f2ec] text-xs sm:text-sm border-b border-[#f6f2ec]/50 pb-0.5 hover:text-[#e8c9a8] hover:border-[#e8c9a8] transition-colors"
          >
            了解工艺与流程
          </Link>
        </div>
      </div>
    </section>
  );
}
