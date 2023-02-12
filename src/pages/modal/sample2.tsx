import { GetStaticProps, NextPage, PageProps } from 'next';
import TopTemplate from '@/features/Top/Top';

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const props: PageProps = {
    withModal: true,
  };
  return { props };
};
const ModalPage: NextPage = () => {
  return (
    <main>
      <TopTemplate />
    </main>
  );
};
export default ModalPage;
