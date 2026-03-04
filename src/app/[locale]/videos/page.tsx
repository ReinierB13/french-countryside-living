import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import VideoCard from '@/components/VideoCard';
import Marcel from '@/components/Marcel';
import { videos } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Videos',
    description: 'Watch life unfold in the Provençal countryside — hunting, cooking, and village life.',
  };
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const t = await getTranslations('VideosPage');

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        imageSrc="/images/french-countryside-banner.jpg"
        imageAlt="Filming in the Provençal countryside"
        height="medium"
        overlay="dark"
      />

      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-10 flex items-center justify-between">
          <p className="font-body text-charcoal/60 text-sm">
            {videos.length} videos — and more on our{' '}
            <a
              href="https://www.youtube.com/@christophereinier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              YouTube channel
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <Marcel
          type="default"
          text="Subscribe to the YouTube channel. We add new videos every month — hunts, recipes, walks through the countryside. It's free, and it's better than television."
        />
      </div>
    </>
  );
}
