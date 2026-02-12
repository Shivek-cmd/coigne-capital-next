import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center px-6">
        <span className="font-accent text-sm tracking-[0.3em] text-[#C9A962] uppercase block mb-6">
          404
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#FAFAF5] mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-lg text-[#FAFAF5]/60 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-[#C9A962] hover:text-[#C9A962]/80 transition-colors text-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
