import { useQuery } from 'react-query';

import { supabase } from '../utils/supabase';

export const useQueryHands = () => {
  const getHands = async () => {
    const { data, error } = await supabase
      .from('hands')
      .select(`*,actions(*),pots(*),hand_card(*,cards(*))`)
      .order('created_at', { ascending: true });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery({
    queryKey: ['hands'],
    queryFn: getHands,
    staleTime: Infinity,
  });
};
