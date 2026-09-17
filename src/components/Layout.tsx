import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { contact } from '../data';

const navItems = [
  { to: '/', label: '首页' },
  { to: '/cases', label: '作品案例' },
  { to: '/services', label: '服务' },
  { to: '/process', label: '设计流程' },
  { to: '/about', label: '关于我们' },
  { to: '/contact', label: '联系' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 固定顶部导航 */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#f6f2ec]/90 backdrop-blur border-b border-[#ddd5c8]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif-sc text-xl tracking-widest">
            TC<span className="text-[#a0785a]">.</span>Art
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#4a4844]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-[#a0785a] ${
                    isActive ? 'text-[#a0785a] font-medium' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-block text-sm px-5 py-2 bg-[#2b2a28] text-[#f6f2ec] hover:bg-[#a0785a] transition-colors"
            >
              预约咨询
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="菜单"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {open && (
          <nav className="md:hidden border-t border-[#ddd5c8] bg-[#f6f2ec] px-6 py-4 flex flex-col gap-4 text-[#4a4844]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `py-1 ${isActive ? 'text-[#a0785a] font-medium' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 text-center px-5 py-2.5 bg-[#2b2a28] text-[#f6f2ec]"
            >
              预约咨询
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* 页脚 */}
      <footer className="bg-[#2b2a28] text-[#f6f2ec]/80">
        <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif-sc text-2xl text-[#f6f2ec] tracking-widest mb-4">
              TC<span className="text-[#a0785a]">.</span>Art
            </p>
            <p className="text-sm leading-relaxed">
              独立家装设计工作室
              <br />
              私宅全案 ｜ 软装落地
            </p>
          </div>
          <div className="text-sm leading-loose">
            <p className="text-[#f6f2ec] mb-3 tracking-widest">联系方式</p>
            <p>电话：{contact.phone}</p>
            <p>微信咨询：{contact.wechat}</p>
            <p>地址：{contact.address}</p>
          </div>
          <div className="text-sm leading-loose">
            <p className="text-[#f6f2ec] mb-3 tracking-widest">快速入口</p>
            <div className="flex flex-col gap-1">
              <Link to="/cases" className="hover:text-[#a0785a] transition-colors">作品案例</Link>
              <Link to="/services" className="hover:text-[#a0785a] transition-colors">服务</Link>
              <Link to="/process" className="hover:text-[#a0785a] transition-colors">设计流程</Link>
              <Link to="/about" className="hover:text-[#a0785a] transition-colors">关于我们</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#f6f2ec]/10 py-5 text-center text-xs text-[#f6f2ec]/40">
          © {new Date().getFullYear()} TC.Art 家装设计工作室
        </div>
      </footer>
    </div>
  );
}
