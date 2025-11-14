'use server';

import { Lookbook } from '@/shared/common/types';
import { Database } from '@/shared/supabase/database.types';
import { createSupabaseServerClient } from '@/shared/supabase/sever';
import { handleError } from '../AxiosObj';

export type LookbookRes = Database['public']['Tables']['lookbook']['Row'];

export const createLookbook = async (lookbookData: Lookbook) => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from('lookbook')
    .insert({
      nickname: lookbookData.nickname,
      image_url: lookbookData.data.finalUrl,
      name: lookbookData.name,
    })
    .select('id')
    .single();

  if (error) {
    handleError(error);
  }
  return data?.id;
};

export const getLookbook = async (id: string) => {
  const supabase = await createSupabaseServerClient();

  console.log('api 호출 id', id);
  const { data, error } = await supabase
    .from('lookbook')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    handleError(error);
  }

  return data;
};
