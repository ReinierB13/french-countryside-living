interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  height?: 'full' | 'large' | 'medium';
  overlay?: 'light' | 'medium' | 'dark';
  imagePosition?: string;
  contentAlign?: 'center' | 'bottom';
  darkText?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = 'large',
  overlay = 'light',
  imagePosition = 'center',
  contentAlign = 'center',
  darkText = false,
  children,
}: HeroProps) {
  const heights = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[40vh]',
  };

  const overlayStrength = {
    light: 'from-black/40 via-black/10',
    medium: 'from-black/60 via-black/20',
    dark: 'from-black/75 via-black/30',
  };

  return (
    <section
      className={`relative ${heights[height]} w-full overflow-hidden flex ${contentAlign === 'bottom' ? 'items-end' : 'items-center'} justify-center`}
      aria-label={imageAlt}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})`, backgroundPosition: imagePosition }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Bottom gradient overlay for text readability */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayStrength[overlay]} to-transparent`} />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto w-full ${contentAlign === 'bottom' ? 'pb-16 pt-8' : 'py-20'}`}>
        {title && (
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold mb-5 drop-shadow-lg leading-tight text-white">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className={`font-body text-lg sm:text-xl md:text-2xl italic drop-shadow-sm max-w-2xl mx-auto ${darkText ? 'text-charcoal/80' : 'text-parchment/90'}`}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
