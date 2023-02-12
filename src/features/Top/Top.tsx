import { Button, styled } from '@mui/material';
import Modal from '@/components/parts/Modal';
import { useRouter } from 'next/router';
import { useState } from 'react';
import sample1 from '@/pages/modal/sample1';

// Mobileのみ表示させるdiv
const Mobile = styled('div')`
  ${({ theme }) => theme.breakpoints.up('tablet')} {
    display: none;
  }
`;

// Tabletにのみ表示させるモーダル
const TabletModal = styled(Modal)`
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    display: none;
  }
`;

type Props = {
  modalName?: 'sample1' | 'sample2' | 'sample3';
};

const TopTemplate = ({ modalName }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(modalName);

  const handleOpen = async (name: 'sample1' | 'sample2' | 'sample3') => {
    setOpen(name);
    await router.push('/', `/modal/${name}`, { shallow: true });
  };
  const handleClose = async () => {
    setOpen(undefined);
    await router.push('/', '/', { shallow: true });
  };

  return (
    <>
      <h1>モーダル+url+レスポンシブサンプル</h1>
      <Button
        onClick={async () => {
          await handleOpen('sample1');
        }}
      >
        モーダル1を開く
      </Button>
      <Button
        onClick={async () => {
          await handleOpen('sample2');
        }}
      >
        モーダル2を開く
      </Button>
      <Button
        onClick={async () => {
          await handleOpen('sample3');
        }}
      >
        モーダル3を開く
      </Button>

      <Mobile>
        <div>モバイル表示中</div>
        <div>現在の表示中のモーダル:{open ?? 'なし'}</div>
      </Mobile>
      <TabletModal open={open === 'sample1'} handleClose={handleClose}>
        <h3>モーダルサンプル1</h3>
        これがサンプル1です
      </TabletModal>
      <TabletModal open={open === 'sample2'} handleClose={handleClose}>
        <h3>モーダルサンプル2</h3>
        これがサンプル2です
      </TabletModal>
      <TabletModal open={open === 'sample3'} handleClose={handleClose}>
        <h3>モーダルサンプル3</h3>
        これがサンプル3です
      </TabletModal>
    </>
  );
};
export default TopTemplate;
