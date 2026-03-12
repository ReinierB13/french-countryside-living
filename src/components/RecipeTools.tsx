import Image from 'next/image';
import { toolSections } from '@/lib/tools';
import type { Product } from '@/lib/tools';

function findToolById(id: string): Product | undefined {
  for (const section of toolSections) {
    const product = section.products.find((p) => p.id === id);
    if (product) return product;
  }
  return undefined;
}

interface Props {
  toolIds: string[];
}

export default function RecipeTools({ toolIds }: Props) {
  const tools = toolIds.map(findToolById).filter((t): t is Product => t !== undefined);
  if (tools.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-charcoal/10">
      <p className="text-olive text-xs font-heading uppercase tracking-widest mb-2">Equipment</p>
      <h3 className="font-heading text-xl font-semibold text-charcoal mb-1">
        Tools I use for this recipe
      </h3>
      <p className="font-body text-sm text-charcoal/50 mb-6">
        Affiliate links - I only recommend things I actually use.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group flex items-center gap-4 bg-white border border-charcoal/10 p-4 hover:border-terracotta/40 hover:shadow-md transition-all"
          >
            <div className="relative w-16 h-16 shrink-0 bg-parchment overflow-hidden rounded-sm">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                className="object-contain p-1"
                sizes="64px"
              />
            </div>
            <div className="min-w-0">
              <p className="font-heading font-semibold text-charcoal text-sm leading-snug group-hover:text-terracotta transition-colors line-clamp-2">
                {tool.name}
              </p>
              <p className="font-body text-xs text-terracotta mt-1">View on Amazon →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
