import styled from 'styled-components';
import A from 'components/A';

export const CenteredSection = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const TimeDisplay = styled.h1`
  padding: 0 20px;
  margin: 0;
  color: #fff;
`;

export const Control = styled(A)`
  color: #fff;
  background: rgb(89, 89, 89);
  display: block;
  font-size: 1.5rem;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
  &:hover{
    color: #e08700
  }
`;

export const ControlGroup = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;
