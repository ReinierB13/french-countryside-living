'use client';

import { useState } from 'react';
import VideoCard from './VideoCard';
import type { Video } from '@/types';

export default function VideoGrid({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState('all');

  const categories = Array.from(new Set(videos.map((v) => v.category).filter(Boolean)));

  const filtered = active === 'all' ? videos : videos.filter((v) => v.category === active);

  return (
    <>
      {/* Category dropdown */}
      <div className="flex items-center gap-3 mb-10">
        <label htmlFor="video-category" className="font-heading font-semibold text-charcoal text-sm uppercase tracking-widest">
          Categories
        </label>
        <select
          id="video-category"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="font-body text-sm text-charcoal bg-white border border-parchment px-4 py-2 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-terracotta cursor-pointer"
        >
          <option value="all">🎬 All Videos</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Video grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <p className="font-body text-charcoal/50 text-lg">No videos in this category yet.</p>
      )}
    </>
  );
}
