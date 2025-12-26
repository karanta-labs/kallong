import { Profile } from '@/components/setting/profile';
import { SettingItem } from '@/components/setting/setting-item';

export default function UserInfoPage() {
  return (
    <div className='bg-white w-full flex flex-1 flex-col'>
      <Profile />
      <div className='flex flex-col mt-8'>
        <SettingItem url='/auth/password/reset' title='비밀번호 변경' />
        <SettingItem url='/auth/nickname' title='닉네임 변경' />
      </div>
    </div>
  );
}
