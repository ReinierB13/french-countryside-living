import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import VideoGrid from '@/components/VideoGrid';
import Marcel from '@/components/Marcel';
import ShareButtons from '@/components/ShareButtons';
import { videos } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Videos',
    description: 'Watch life unfold in the Provençal countryside - hunting, cooking, and village life.',
  };
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('VideosPage');

  const shareLabels = {
    share: t('share'),
    copyLink: t('copyLink'),
    copied: t('copied'),
    email: t('shareByEmail'),
    whatsapp: t('shareWhatsApp'),
    facebook: t('shareFacebook'),
  };

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
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-charcoal/60 text-sm">
            {videos.length} videos - and more on our{' '}
            <a
              href="https://www.youtube.com/@christophereinier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline"
            >
              YouTube channel
            </a>
          </p>
          <ShareButtons
            title="French Countryside Living - Videos"
            path={`/${locale}/videos`}
            labels={shareLabels}
            compact
          />
        </div>

        <VideoGrid videos={videos} />
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <Marcel
          type="default"
          text="Subscribe to the YouTube channel. We add new videos every month - hunts, recipes, walks through the countryside. It's free, and it's better than television."
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <ShareButtons
          title="French Countryside Living - Videos"
          path={`/${locale}/videos`}
          labels={shareLabels}
        />
      </div>
    </>
  );
}
