import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { services } from '../data';
import { SectionTitle } from './Home';

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="我们的服务" sub="SERVICES" />
      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((s) => (
          <Link
            key={s.id}
            to={`/services/${s.id}`}
            className="group border border-[#ddd5c8] bg-[#faf7f1] p-10 hover:border-[#a0785a] hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="font-serif-sc text-xl mb-3 group-hover:text-[#a0785a] transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-[#4a4844]/80 leading-relaxed mb-8">{s.brief}</p>
            <span className="inline-flex items-center gap-1 text-xs text-[#a0785a] tracking-widest">
              查看服务详情 <ArrowRight size={13} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
