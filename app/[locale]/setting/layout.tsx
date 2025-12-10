import { Header } from '@/components/layouts/header';
import { Link } from '@/i18n/navigation';
import { ICONS } from '@/shared/common/icon';

export default async function SettingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { Back } = ICONS;

  const BackButton = (
    <Link href='/mypage'>
      <Back color='black' size={24} />
    </Link>
  );

  return (
    <main className='relative bg-white max-w-[500px] w-full flex flex-1 flex-col px-5 pb-20 '>
      <Header leftComponent={BackButton} />
      {children}
    </main>
  );
}
