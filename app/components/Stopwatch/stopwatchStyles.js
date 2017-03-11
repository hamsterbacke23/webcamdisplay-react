import styled from 'styled-components';
import A from 'components/A';

export const CenteredSection = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const TimeDisplay = styled.h1`
  padding: 0;
  margin: 0;
  color: #fff;
`;

export const Control = styled(A)`
  color: #fff;
  background: rgb(89, 89, 89);
  display: block;
  cursor: pointer;
  &:hover{
    color: #e08700
  }
`;
