import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Page: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <h1 className='text-2xl mb-2 font-HDCDotum'>레귤러 폰트 적용된 모습</h1>
      <h1 className='text-2xl mb-2 font-HDCDotum font-bold'>
        볼드 폰트 적용된 모습
      </h1>
      <h1 className='text-2xl my-2'>레귤러 폰트 적용 안된 모습</h1>
      <h1 className='text-2xl mb-2 font-bold'>볼드 폰트 적용 안된 모습</h1>
    </div>
  );
};

// TODO - TYPE
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Page;
