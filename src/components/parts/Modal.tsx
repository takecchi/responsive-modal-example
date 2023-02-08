import React from 'react';
import { Modal as MuiModal, styled } from '@mui/material';

const StyledBox = styled('div')`
  padding: 14px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type Props = {
  open: boolean;
  handleClose: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Modal = ({ open, handleClose, className, children }: Props) => {
  return (
    <MuiModal open={open} onClose={handleClose} className={className}>
      <StyledBox>{children}</StyledBox>
    </MuiModal>
  );
};

export default Modal;
