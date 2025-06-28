import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-stone-800 hover:text-stone-600 transition-colors">
            Gratitude Map
          </Link>
          
          <Link 
            href="/explore" 
            className="px-6 py-2 bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-700 transition-colors font-medium"
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
}
