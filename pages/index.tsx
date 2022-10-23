import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <h1 className='text-3xl font-bold mb-2'>페이지 리스트</h1>
      <ul>
        <li>
          <Link href={'./pubs/main'}>메인페이지</Link>
        </li>
      </ul>
    </div>
  );
};

// TODO - TYPE
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
