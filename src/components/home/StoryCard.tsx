import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import type { Story } from '../../data/team';

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
      aria-label={`Impact story: ${story.name[lang]}`}
    >
      {/* Photo */}
      <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0 overflow-hidden bg-[#FBF0F0]">
        <img
          src={story.photo}
          alt={story.name[lang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-center">
        <Quote size={28} className="text-[#D4A017] mb-2" aria-hidden="true" />
        <p className="text-[#444444] text-base leading-relaxed italic mb-4">
          {story.story[lang]}
        </p>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-8 bg-[#8B1A1A] rounded-full" />
          <div>
            <p className="font-bold text-[#1A1A1A] text-sm">{story.name[lang]}</p>
            <p className="text-[#5A5A5A] text-xs">{story.location[lang]}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;
