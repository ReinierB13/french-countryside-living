import type { Video } from '@/types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Thumbnail image or YouTube embed */}
      {video.image ? (
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-video overflow-hidden"
        >
          <img
            src={video.image}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-terracotta ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      ) : (
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
      )}

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
