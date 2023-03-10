// Mobileのみ表示させるdiv
import { styled } from '@mui/material';
import Modal from '@/components/parts/Modal';

// Mobileページ
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
  open: boolean;
  handleClose: () => void;
};

export const Sample1 = ({ open, handleClose }: Props) => {
  return (
    <>
      <Mobile hidden={!open}>
        <h3>モーダルサンプル1</h3>
        これがサンプル1です(SP表示)
      </Mobile>
      <TabletModal open={open} handleClose={handleClose}>
        <h3>モーダルサンプル1</h3>
        これがサンプル1です(PC表示)
      </TabletModal>
    </>
  );
};

export const Sample2 = ({ open, handleClose }: Props) => {
  return (
    <>
      <Mobile hidden={!open}>
        <h3>モーダルサンプル2</h3>
        これがサンプル2です(SP表示)
      </Mobile>
      <TabletModal open={open} handleClose={handleClose}>
        <h3>モーダルサンプル2</h3>
        これがサンプル2です(PC表示)
      </TabletModal>
    </>
  );
};

export const Sample3 = ({ open, handleClose }: Props) => {
  return (
    <>
      <Mobile hidden={!open}>
        <h3>モーダルサンプル3</h3>
        これがサンプル3です(SP表示)
      </Mobile>
      <TabletModal open={open} handleClose={handleClose}>
        <h3>モーダルサンプル3</h3>
        これがサンプル3です(PC表示)
      </TabletModal>
    </>
  );
};
