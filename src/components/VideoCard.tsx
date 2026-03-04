import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* YouTube embed */}
      <div className="relative aspect-video bg-charcoal overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        {video.category && (
          <span className="text-xs font-heading font-semibold text-olive uppercase tracking-widest mb-2 block">
            {video.category}
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
          {video.title}
        </h3>
        <p className="font-body text-sm text-charcoal/70 leading-relaxed line-clamp-2">
          {video.description}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-terracotta text-sm font-body font-semibold hover:underline"
        >
          Watch on YouTube →
        </a>
      </div>
    </article>
  );
}
