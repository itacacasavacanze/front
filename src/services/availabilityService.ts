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
    // Backend now returns the exact format we need
    return data;
  } catch (error) {
    console.error('Failed to fetch availability:', error);
    return [];
  }
};
