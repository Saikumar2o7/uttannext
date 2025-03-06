"use client"

import { CircularProgress } from '@mui/material';
import styled, { useTheme } from 'styled-components';

const Loader = () => {
  const theme = useTheme();
  return (
    <LoaderContainer>
      <StyledLoader $color={theme.buttons.secondaryBackground} />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1); 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 9999;
`;

const StyledLoader = styled(CircularProgress)<{ $color: string }>`
  color: ${(props) => props.$color};  
`;
