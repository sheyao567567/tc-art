import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { services, cases, processSteps, testimonials } from '../data';
import SpotlightReveal from '../components/SpotlightReveal';

export default function Home() {
  return (
    <div>
      {/* Hero 首屏 */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[540px] flex items-center justify-center overflow-hidden">
        {/* 占位背景：浅氛围感渐变 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #efe9df 0%, #e3d9c9 40%, #d8c8b4 70%, #cbb79e 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[#f6f2ec]/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif-sc text-5xl md:text-7xl tracking-[0.2em] mb-6">
            TC<span className="text-[#a0785a]">.</span>Art
          </h1>
          <p className="text-[#4a4844] tracking-[0.35em] text-sm md:text-base mb-12">
            私宅全案 ｜ 软装落地
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cases"
              className="w-44 text-center px-8 py-3 bg-[#2b2a28] text-[#f6f2ec] text-sm tracking-widest hover:bg-[#a0785a] transition-colors"
            >
              查看作品
            </Link>
            <Link
              to="/contact"
              className="w-44 text-center px-8 py-3 border border-[#2b2a28]/60 text-sm tracking-widest hover:border-[#a0785a] hover:text-[#a0785a] transition-colors"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </section>

      {/* 服务入口 */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle title="我们的服务" sub="SERVICES" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.id}`}
              className="group border border-[#ddd5c8] bg-[#faf7f1] p-8 hover:border-[#a0785a] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-serif-sc text-lg mb-3 group-hover:text-[#a0785a] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[#4a4844]/80 leading-relaxed mb-6">{s.brief}</p>
              <span className="inline-flex items-center gap-1 text-xs text-[#a0785a] tracking-widest">
                了解详情 <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 精选作品 */}
      <section className="bg-[#efe9df]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionTitle title="精选项目案例" sub="SELECTED WORKS" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((c) => (
              <Link key={c.id} to={`/cases/${c.id}`} className="group block">
                <div className="overflow-hidden mb-4">
                  <div
                    className="aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                    style={{
                      background: `linear-gradient(160deg, ${c.tone} 0%, #b8a88f 100%)`,
                    }}
                  />
                </div>
                <h3 className="font-serif-sc group-hover:text-[#a0785a] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-[#4a4844]/70 mt-1 tracking-wider">
                  {c.style} ｜ {c.area}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/cases"
              className="inline-block px-10 py-3 border border-[#2b2a28]/50 text-sm tracking-widest hover:border-[#a0785a] hover:text-[#a0785a] transition-colors"
            >
              查看全部案例
            </Link>
          </div>
        </div>
      </section>

      {/* 聚光灯交互蒙版：案例 × 工艺 × 流程 */}
      <SpotlightReveal />

      {/* 设计流程 */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle title="设计服务流程" sub="PROCESS" />
        <div className="flex gap-0 overflow-x-auto pb-4 -mx-6 px-6">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex items-start shrink-0">
              <div className="w-32 text-center">
                <div className="w-9 h-9 mx-auto rounded-full border border-[#a0785a] text-[#a0785a] flex items-center justify-center text-sm mb-3">
                  {i + 1}
                </div>
                <p className="text-sm font-medium">{step.title}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="w-8 h-px bg-[#ddd5c8] mt-[18px]" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/process"
            className="inline-block px-10 py-3 bg-[#2b2a28] text-[#f6f2ec] text-sm tracking-widest hover:bg-[#a0785a] transition-colors"
          >
            查看完整流程
          </Link>
        </div>
      </section>

      {/* 工作室简介 */}
      <section className="bg-[#2b2a28] text-[#f6f2ec]">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs tracking-[0.4em] text-[#a0785a] mb-6">ABOUT US</p>
          <h2 className="font-serif-sc text-2xl md:text-3xl leading-relaxed mb-8">
            我们是一家独立设计工作室，
            <br />
            拒绝模板化的家装。
          </h2>
          <p className="text-sm text-[#f6f2ec]/70 leading-loose mb-10">
            每一个家都应回应居住者真实的生活。我们不套用风格公式，从户型、光线与习惯出发，
            为每位屋主定制独一无二的空间答案。
          </p>
          <Link
            to="/about"
            className="inline-block px-10 py-3 border border-[#f6f2ec]/40 text-sm tracking-widest hover:border-[#a0785a] hover:text-[#a0785a] transition-colors"
          >
            了解更多
          </Link>
        </div>
      </section>

      {/* 客户口碑 */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle title="客户口碑" sub="TESTIMONIALS" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.author} className="border border-[#ddd5c8] bg-[#faf7f1] p-8">
              <blockquote className="text-sm leading-loose text-[#4a4844] mb-6">
                「{t.text}」
              </blockquote>
              <figcaption className="text-xs text-[#a0785a] tracking-wider">
                —— {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-center mb-14">
      <p className="text-xs tracking-[0.4em] text-[#a0785a] mb-3">{sub}</p>
      <h2 className="font-serif-sc text-2xl md:text-3xl tracking-widest">{title}</h2>
      <div className="w-10 h-px bg-[#a0785a] mx-auto mt-6" />
    </div>
  );
}
