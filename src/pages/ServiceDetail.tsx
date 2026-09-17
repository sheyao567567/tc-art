import { Link, useParams } from 'react-router';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data';

export default function ServiceDetail() {
  const { id } = useParams();
  const item = services.find((s) => s.id === id);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="mb-6">未找到该服务。</p>
        <Link to="/services" className="text-[#a0785a] underline">返回服务列表</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-sm text-[#4a4844] hover:text-[#a0785a] transition-colors mb-10"
      >
        <ArrowLeft size={15} /> 返回服务列表
      </Link>

      <p className="text-xs tracking-[0.4em] text-[#a0785a] mb-3">SERVICE</p>
      <h1 className="font-serif-sc text-3xl md:text-4xl mb-4">{item.title}</h1>
      <p className="text-[#4a4844]/80 mb-10">{item.brief}</p>

      {item.desc.map((p) => (
        <p key={p.slice(0, 8)} className="text-[#4a4844] leading-loose mb-5">
          {p}
        </p>
      ))}

      <div className="border border-[#ddd5c8] bg-[#faf7f1] p-8 mt-10">
        <p className="text-sm tracking-widest mb-5 text-[#a0785a]">服务要点</p>
        <ul className="space-y-3">
          {item.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-sm text-[#4a4844]">
              <Check size={15} className="text-[#a0785a] mt-0.5 shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-block px-10 py-3 bg-[#2b2a28] text-[#f6f2ec] text-sm tracking-widest hover:bg-[#a0785a] transition-colors"
        >
          预约咨询此项服务
        </Link>
      </div>
    </div>
  );
}
