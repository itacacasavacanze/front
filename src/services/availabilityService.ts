import { api } from './api';

export interface AvailabilityData {
  date: string;
  available: boolean;
  websitePrice?: number;
  isWeekend?: boolean;
}

export const fetchAvailability = async (): Promise<AvailabilityData[]> => {
  try {
    const data = await api.getAvailability();
    // Use mock data if API returns successfully but with no data (edge case)
    if (!Array.isArray(data) || data.length === 0) {
      console.warn('API returned empty data');
      return [];
    }
    return data;
  } catch (error) {
    console.error('Failed to fetch availability:', error);
    return [];
  }
};
