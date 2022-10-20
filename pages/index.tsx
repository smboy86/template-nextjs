import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <h1 className='text-3xl font-bold mb-2'>
        번역을 사용해보자 (프로젝트 이름)
      </h1>
      <div className=''>{t('title')}</div>
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
