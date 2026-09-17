import { Link } from 'react-router';
import { processSteps } from '../data';
import { SectionTitle } from './Home';

export default function Process() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionTitle title="设计服务流程" sub="PROCESS" />
      <div className="relative">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-[#ddd5c8]" />
        <ol className="space-y-10">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative pl-16">
              <div className="absolute left-0 top-0 w-9 h-9 rounded-full border border-[#a0785a] bg-[#f6f2ec] text-[#a0785a] flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <h3 className="font-serif-sc text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-[#4a4844]/80 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-block px-10 py-3 bg-[#2b2a28] text-[#f6f2ec] text-sm tracking-widest hover:bg-[#a0785a] transition-colors"
        >
          开启第一步：预约沟通
        </Link>
      </div>
    </div>
  );
}
