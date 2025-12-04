import { useLocale } from 'next-intl';
import { redirect } from '@/i18n/navigation';

export default function MyPage() {
  const locale = useLocale();

  return redirect({ href: '/mypage/signin', locale: locale });
}
