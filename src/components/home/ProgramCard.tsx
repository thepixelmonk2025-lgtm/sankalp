import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { Program } from '../../data/programs';

// Lucide icons mapped to program IDs (replaces emoji)
import { BookOpen, HeartPulse, Sprout, Leaf } from 'lucide-react';

const programIcons: Record<string, React.ElementType> = {
  education:   BookOpen,
  health:      HeartPulse,
  livelihood:  Sprout,
  environment: Leaf,
};

interface ProgramCardProps {
  program: Program;
}

const ProgramCard = ({ program }: ProgramCardProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const Icon = programIcons[program.id] || BookOpen;

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
      aria-label={program.title[lang]}
    >
      {/* Image / icon area */}
      <div className="relative h-44 bg-[#FBF0F0] overflow-hidden flex items-center justify-center">
        {program.imageUrl ? (
          <img
            src={program.imageUrl}
            alt={program.title[lang]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <Icon size={56} className="text-[#8B1A1A]/30" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-lg bg-[#FBF0F0] flex items-center justify-center flex-shrink-0">
            <Icon size={18} className="text-[#8B1A1A]" aria-hidden="true" />
          </div>
          <h3 className="font-bold text-[#1A1A1A] text-lg leading-tight">
            {program.title[lang]}
          </h3>
        </div>

        <p className="text-[#5A5A5A] text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
          {program.description[lang]}
        </p>

        <Link
          to={`/programs#${program.anchor}`}
          className="inline-flex items-center gap-1 text-[#8B1A1A] font-semibold text-sm hover:text-[#D4A017] transition-colors group/link"
          id={`program-card-readmore-${program.id}`}
        >
          {t('programs_section.readMore')}
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default ProgramCard;
