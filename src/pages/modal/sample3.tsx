import { NextPage } from 'next';
import TopTemplate from '@/features/Top/Top';

const ModalPage: NextPage = () => {
  return (
    <main>
      <TopTemplate modalName={'sample3'} />
    </main>
  );
};
export default ModalPage;
