import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { getDailyOutfitInMonth } from '@/apis/actions/outfit';
import queryKeys from '@/apis/queryKeys';
import type { OutfitDetail } from '@/apis/types/api';

export function useGetDailyOutfitInMonth(currentDay: Date) {
  const yearMonth = dayjs(currentDay).format('YYYY-MM');

  return useQuery<OutfitDetail[]>({
    queryFn: () => getDailyOutfitInMonth(yearMonth),
    queryKey: queryKeys.outfit.inMonth(yearMonth),
  });
}
