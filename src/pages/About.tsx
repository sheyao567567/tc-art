import { Link } from 'react-router';
import { SectionTitle } from './Home';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionTitle title="关于我们" sub="ABOUT" />
      <div
        className="aspect-[16/7] mb-12"
        style={{ background: 'linear-gradient(150deg, #e3d9c9 0%, #c2ac90 100%)' }}
      />
      <div className="space-y-6 text-[#4a4844] leading-loose">
        <p>
          TC.Art 是一家位于重庆的独立家装设计工作室，专注于私宅全案设计与软装落地。
        </p>
        <p>
          我们相信，家不是风格的堆砌，而是生活方式的容器。因此我们拒绝模板化的套餐家装，
          坚持一案一策——从户型结构、自然光线到居住者的日常习惯，每一个细节都被认真对待。
        </p>
        <p>
          工作室规模不大，但每一个项目都由主创设计师亲自负责到底。设计、施工、软装由同一团队闭环交付，
          这是我们对「所见即所得」的承诺。
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-14 text-center">
        {[
          ['一案一策', '拒绝模板化设计'],
          ['闭环交付', '设计施工软装一体'],
          ['透明报价', '拒绝恶意增项'],
        ].map(([t, d]) => (
          <div key={t} className="border border-[#ddd5c8] bg-[#faf7f1] p-6">
            <p className="font-serif-sc mb-2">{t}</p>
            <p className="text-xs text-[#4a4844]/70">{d}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-block px-10 py-3 bg-[#2b2a28] text-[#f6f2ec] text-sm tracking-widest hover:bg-[#a0785a] transition-colors"
        >
          预约咨询
        </Link>
      </div>
    </div>
  );
}
