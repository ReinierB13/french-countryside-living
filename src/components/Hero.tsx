interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: 'light' | 'medium' | 'dark';
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = 'large',
  children,
}: HeroProps) {
  const heights = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[40vh]',
  };

  return (
    <section
      className={`relative ${heights[height]} w-full overflow-hidden flex items-center justify-center`}
      aria-label={imageAlt}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})`, filter: 'brightness(1.3)' }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold mb-5 drop-shadow-sm leading-tight text-charcoal">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg sm:text-xl md:text-2xl text-charcoal/80 italic drop-shadow-sm max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
