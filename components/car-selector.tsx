'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Car } from 'lucide-react';
import { Select } from '@/components/common/select';
import { Button } from '@/components/common/button';
import { getMakes } from '@/lib/api';
import { Make } from '@/types';

export function CarSelector() {
  const router = useRouter();
  const [makes, setMakes] = useState<Make[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => currentYear - i);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const data = await getMakes();
        setMakes(data);
      } catch (error) {
        console.error('Error fetching makes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMakes();
  }, []);

  const handleNext = () => {
    if (selectedMake && selectedYear) {
      router.push(`/result/${selectedMake}/${selectedYear}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Car className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Car Finder</h1>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Make</label>
        <Select
          value={selectedMake}
          onChange={setSelectedMake}
          disabled={loading}
          placeholder="Choose a car make"
          options={makes.map(make => ({
            value: make.MakeId.toString(),
            label: make.MakeName
          }))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
        <Select
          value={selectedYear}
          onChange={setSelectedYear}
          placeholder="Choose a year"
          options={years.map(year => ({
            value: year.toString(),
            label: year.toString()
          }))}
        />
      </div>

      <Button
        size="lg"
        className="w-full"
        onClick={handleNext}
        disabled={!selectedMake || !selectedYear}
      >
        View Models
      </Button>
    </div>
  );
}
