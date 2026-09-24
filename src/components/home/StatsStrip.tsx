import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '../../data/stats';

gsap.registerPlugin(ScrollTrigger);

const StatsStrip = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const stripRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stat.value,
            duration: 1.8,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stripRef.current,
              start: 'top 80%',
              once: true,
            },
            onUpdate() {
              el.textContent = Math.round(parseFloat(el.innerText)).toLocaleString();
            },
          }
        );
      });
    }, stripRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={stripRef}
      className="bg-[#FBF0F0] py-12 md:py-16"
      aria-label="Impact statistics"
      id="stats-strip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-[#8B1A1A] font-semibold text-sm uppercase tracking-widest mb-8"
          data-aos="fade-up"
        >
          {t('stats.heading')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-4"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex items-baseline gap-0.5">
                <span
                  ref={(el) => { countersRef.current[i] = el; }}
                  className="text-4xl md:text-5xl font-bold text-[#8B1A1A]"
                  aria-live="polite"
                >
                  0
                </span>
                <span className="text-3xl md:text-4xl font-bold text-[#D4A017]">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[#5A5A5A] text-sm mt-2 font-medium leading-tight">
                {stat.label[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
