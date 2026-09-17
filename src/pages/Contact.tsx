import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { contact } from '../data';
import { SectionTitle } from './Home';

export default function Contact() {
  const items = [
    { icon: Phone, label: '电话咨询', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MessageSquare, label: '微信咨询', value: contact.wechat },
    { icon: MapPin, label: '工作室地址', value: contact.address },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionTitle title="联系我们" sub="CONTACT" />
      <p className="text-center text-[#4a4844]/80 text-sm leading-loose mb-14">
        无论是毛坯新房、旧房改造，还是只是想聊聊对家的想象，
        <br className="hidden sm:block" />
        都欢迎随时联系我们。
      </p>
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          const inner = (
            <>
              <Icon size={22} className="text-[#a0785a] mx-auto mb-4" />
              <p className="text-xs tracking-widest text-[#4a4844]/60 mb-2">{item.label}</p>
              <p className="text-sm font-medium break-all">{item.value}</p>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="block border border-[#ddd5c8] bg-[#faf7f1] p-8 text-center hover:border-[#a0785a] transition-colors"
            >
              {inner}
            </a>
          ) : (
            <div
              key={item.label}
              className="border border-[#ddd5c8] bg-[#faf7f1] p-8 text-center"
            >
              {inner}
            </div>
          );
        })}
      </div>
      <p className="text-center text-xs text-[#4a4844]/50 mt-12 tracking-wider">
        到访前请提前电话或微信预约，以便我们为您预留充足的沟通时间。
      </p>
    </div>
  );
}
