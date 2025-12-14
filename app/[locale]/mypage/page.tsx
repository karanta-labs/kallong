import { LookbookList } from '@/components/mypage/lookbook-list';
import { Profile } from '@/components/mypage/profile';

export default function MyPage() {
  return (
    <div className='relative bg-white flex flex-1 flex-col gap-10'>
      <Profile />
      <LookbookList />
    </div>
  );
}
