interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}
      </h2>
      {/* Gold underline accent — matches logo's warm palette */}
      <div
        className={`h-1 w-16 rounded-full bg-[#D4A017] mb-4 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
            light ? 'text-red-100' : 'text-[#5A5A5A]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
