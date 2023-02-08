import { Button } from '@mui/material';
import Modal from '@/components/parts/Modal';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  modalOpen: boolean;
};

const TopTemplate = ({ modalOpen }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(modalOpen);

  const handleOpen = async () => {
    setOpen(true);
    await router.push('/', '/modal/sample', { shallow: true });
  };
  const handleClose = async () => {
    setOpen(false);
    await router.push('/', '/', { shallow: true });
  };

  return (
    <>
      <h1>モーダル+url+レスポンシブサンプル</h1>
      <Button onClick={handleOpen}>モーダルを開く</Button>
      <Modal open={open} handleClose={handleClose}>
        <h3>モーダルサンプル</h3>
        これがサンプルです
      </Modal>
    </>
  );
};
export default TopTemplate;
