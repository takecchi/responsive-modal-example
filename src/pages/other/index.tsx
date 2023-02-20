import Link from 'next/link';
import { NextPageWithLayout } from 'next';
import Layout from '@/components/layouts/Layout';

const OtherPage: NextPageWithLayout = () => (
  <>
    <div>別ページ</div>
    <Link href={'/'}>トップページへ移動</Link>
  </>
);

OtherPage.getLayout = (page) => <Layout>{page}</Layout>;

export default OtherPage;
