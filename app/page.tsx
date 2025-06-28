import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 leading-tight">
            Discover the Natural Systems
            <span className="block text-stone-600">That Support Your Life</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore the forests, watersheds, and ecosystems that sustain your community 
            through the lens of gratitude.
          </p>
          
          <Link 
            href="/explore"
            className="inline-flex items-center justify-center px-12 py-4 bg-stone-800 text-stone-50 text-lg font-semibold rounded-xl hover:bg-stone-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
