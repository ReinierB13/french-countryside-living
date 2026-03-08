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
  overlay = 'medium',
  children,
}: HeroProps) {
  const heights = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[40vh]',
  };

  const overlays = {
    light: 'bg-black/10',
    medium: 'bg-black/25',
    dark: 'bg-black/45',
  };

  return (
    <section
      className={`relative ${heights[height]} w-full overflow-hidden flex items-center justify-center`}
      aria-label={imageAlt}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlays[overlay]}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto py-20">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold mb-5 drop-shadow-xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg sm:text-xl md:text-2xl text-parchment/90 italic drop-shadow-md max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
