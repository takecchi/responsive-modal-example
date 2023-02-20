import { NextPageWithLayout } from 'next';
import TopTemplate from '@/features/Top/Top';
import Layout from '@/components/layouts/Layout';

const ModalPage: NextPageWithLayout = () => <TopTemplate />;

ModalPage.getLayout = (page) => <Layout to="/">{page}</Layout>;

export default ModalPage;
