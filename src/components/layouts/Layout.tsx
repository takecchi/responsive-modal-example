import { Button, styled } from '@mui/material';
import { ModalType } from '@/types/modal';
import { NextRouter, useRouter } from 'next/router';
import { Sample1, Sample2, Sample3 } from '@/features/Modal/Sample';
import { ReactElement } from 'react';

// openかつモバイルだった場合は非表示
const HideForMobile = styled('div')<{ open: boolean }>`
  ${({ theme }) => theme.breakpoints.down('tablet')} {
    ${({ open }) => (open ? 'display: none;' : '')}
  }
`;

const getModalType = ({ asPath }: NextRouter): ModalType | undefined => {
  switch (asPath) {
    case '/modal/sample3':
      return 'sample3';
    case '/modal/sample2':
      return 'sample2';
    case '/modal/sample1':
      return 'sample1';
  }
  return undefined;
};

type Props = {
  children: ReactElement;
  to?: string; // モーダルを閉じた時の遷移先 "/"を指定するとモーダル閉じた時にトップに飛びます
};

const Layout = ({ children, to }: Props) => {
  const router = useRouter();

  const handleOpen = async (name: ModalType) => {
    await router.push('', `/modal/${name}`);
  };

  const handleClose = async () => {
    await router.push('', to ?? '');
  };

  return (
    <>
      <header>
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
      </header>
      <main>
        <HideForMobile open={getModalType(router) !== undefined}>
          {children}
        </HideForMobile>
        <Sample1
          open={getModalType(router) === 'sample1'}
          handleClose={handleClose}
        />
        <Sample2
          open={getModalType(router) === 'sample2'}
          handleClose={handleClose}
        />
        <Sample3
          open={getModalType(router) === 'sample3'}
          handleClose={handleClose}
        />
      </main>
    </>
  );
};

export default Layout;
