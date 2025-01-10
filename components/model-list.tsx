import { Car } from 'lucide-react';
import { getModels } from '@/lib/api';

interface ModelListProps {
  makeId: string;
  year: string;
}

export async function ModelList({ makeId, year }: ModelListProps) {
  const models = await getModels(makeId, year);

  if (!models.length) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">No models found for this make and year.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map(model => (
        <div
          key={model.Model_ID}
          className="p-6 bg-white hover:shadow-lg transition-shadow rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <Car className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-gray-900">{model.Model_Name}</h3>
              <p className="text-sm text-gray-600">{model.Make_Name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
