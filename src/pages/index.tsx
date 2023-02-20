import TopTemplate from '@/features/Top/Top';
import { NextPageWithLayout } from 'next';
import Layout from '@/components/layouts/Layout';

const TopPage: NextPageWithLayout = () => <TopTemplate />;

TopPage.getLayout = (page) => <Layout>{page}</Layout>;

export default TopPage;
