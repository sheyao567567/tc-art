import { Link } from 'react-router';
import { cases } from '../data';
import { SectionTitle } from './Home';

export default function Cases() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="作品案例" sub="WORKS" />
      <div className="grid sm:grid-cols-2 gap-10">
        {cases.map((c) => (
          <Link key={c.id} to={`/cases/${c.id}`} className="group block">
            <div className="overflow-hidden mb-5">
              <div
                className="aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                style={{ background: `linear-gradient(160deg, ${c.tone} 0%, #b8a88f 100%)` }}
              />
            </div>
            <h3 className="font-serif-sc text-lg group-hover:text-[#a0785a] transition-colors">
              {c.title}
            </h3>
            <p className="text-xs text-[#4a4844]/70 mt-1 tracking-wider">
              {c.style} ｜ {c.area} ｜ {c.location}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
