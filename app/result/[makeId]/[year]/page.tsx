import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/common/button';
import { ModelList } from '@/components/model-list';

interface Props {
  params: {
    makeId: string;
    year: string;
  };
}

export default function ResultPage({ params }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Search
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Available Models ({params.year})</h1>
          <p className="text-gray-600 mt-2">Showing all models for the selected make and year</p>
        </div>

        <Suspense
          fallback={
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">Loading models...</p>
            </div>
          }
        >
          <ModelList makeId={params.makeId} year={params.year} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const popularMakeIds = ['440', '441', '442', '443', '444'];
  const currentYear = new Date().getFullYear();
  const years = [currentYear.toString(), (currentYear - 1).toString()];

  return popularMakeIds.flatMap(makeId =>
    years.map(year => ({
      makeId,
      year
    }))
  );
}
