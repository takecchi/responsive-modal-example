import { NextPage } from 'next';
import TopTemplate from '@/features/Top/Top';

const ModalPage: NextPage = () => {
  return (
    <main>
      <TopTemplate modalName={'sample2'} />
    </main>
  );
};
export default ModalPage;
