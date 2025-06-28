import Map from '@/components/Map';

export default function Explore() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-stone-800 mb-8">
          Explore Ecosystem Services
        </h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
          <div className="h-[600px] w-full">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
