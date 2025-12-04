import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from '@/components/layouts/header';
import { LookbookStoreProvider } from '@/hooks/provider/lookbook-provider';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LookbookStoreProvider>
        <Header />
        {children}
      </LookbookStoreProvider>
    </NextIntlClientProvider>
  );
}
