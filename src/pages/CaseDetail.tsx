import { Link, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { cases } from '../data';

export default function CaseDetail() {
  const { id } = useParams();
  const item = cases.find((c) => c.id === id);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="mb-6">未找到该案例。</p>
        <Link to="/cases" className="text-[#a0785a] underline">返回案例列表</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link
        to="/cases"
        className="inline-flex items-center gap-2 text-sm text-[#4a4844] hover:text-[#a0785a] transition-colors mb-10"
      >
        <ArrowLeft size={15} /> 返回案例列表
      </Link>

      <div
        className="aspect-[16/9] mb-12"
        style={{ background: `linear-gradient(160deg, ${item.tone} 0%, #b8a88f 100%)` }}
      />

      <p className="text-xs tracking-[0.4em] text-[#a0785a] mb-3">
        {item.style} ｜ {item.area} ｜ {item.location}
      </p>
      <h1 className="font-serif-sc text-3xl md:text-4xl mb-8">{item.title}</h1>
      <p className="text-[#4a4844] leading-loose max-w-2xl">{item.desc}</p>

      <div className="grid grid-cols-2 gap-4 mt-12">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="aspect-[4/3]"
            style={{
              background: `linear-gradient(${150 + i * 40}deg, ${item.tone} 0%, #c2b198 100%)`,
            }}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/contact"
          className="inline-block px-10 py-3 bg-[#2b2a28] text-[#f6f2ec] text-sm tracking-widest hover:bg-[#a0785a] transition-colors"
        >
          喜欢这种风格？预约咨询
        </Link>
      </div>
    </div>
  );
}
