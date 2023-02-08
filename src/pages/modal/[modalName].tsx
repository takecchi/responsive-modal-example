import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ModalPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/?modalName=${router.query.modalName}`);
  }, []);

  return <main></main>;
};
export default ModalPage;
