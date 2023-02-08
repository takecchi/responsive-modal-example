import { NextPage } from 'next';
import TopTemplate from '@/components/templates/Top';

const ModalPage: NextPage = () => {
  return (
    <main>
      <TopTemplate modalOpen={true} />
    </main>
  );
};
export default ModalPage;
