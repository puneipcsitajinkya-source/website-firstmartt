import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-violet-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-slate-900">Page Not Found</h2>
      <p className="mt-2 max-w-md text-slate-600">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700"
      >
        Back to Home
      </Link>
    </section>
  );
}
