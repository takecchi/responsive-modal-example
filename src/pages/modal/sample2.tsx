import { NextPage } from 'next';
import TopTemplate from '@/components/templates/Top';

const ModalPage: NextPage = () => {
  return (
    <main>
      <TopTemplate modalName={'sample2'} />
    </main>
  );
};
export default ModalPage;
