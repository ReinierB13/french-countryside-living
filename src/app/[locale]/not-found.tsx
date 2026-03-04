import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl mb-4">🐸</p>
      <h1 className="font-heading text-4xl font-bold text-charcoal mb-3">Page Not Found</h1>
      <p className="font-body text-charcoal/60 text-lg mb-8 max-w-md">
        Marcel searched the whole garrigue and couldn&apos;t find this page. It may have wandered off.
      </p>
      <Link
        href="/"
        className="bg-olive text-white font-body font-semibold px-6 py-3 rounded-sm hover:bg-olive-dark transition-colors"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
