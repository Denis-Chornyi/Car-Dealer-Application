import { CarSelector } from '@/components/car-selector';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto p-8 bg-card rounded-lg shadow-xl">
          <CarSelector />
        </div>
      </div>
    </div>
  );
}
