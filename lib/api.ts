import { Make, Model } from '@/types';

const API_BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export async function getMakes(): Promise<Make[]> {
  const response = await fetch(`${API_BASE_URL}/GetMakesForVehicleType/car?format=json`);

  if (!response.ok) {
    throw new Error('Failed to fetch makes');
  }

  const data = await response.json();
  return data.Results;
}

export async function getModels(makeId: string, year: string): Promise<Model[]> {
  const response = await fetch(
    `${API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch models');
  }

  const data = await response.json();

  return data.Results || [];
}
