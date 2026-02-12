import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="text-center px-6">
        <span className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-6">
          404
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-lg text-ivory/60 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-gold hover:text-gold/80 transition-colors text-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
