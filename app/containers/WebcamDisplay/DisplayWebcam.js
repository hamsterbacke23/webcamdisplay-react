import React from 'react';

import styled from 'styled-components';

import Webcam from 'components/Webcam';

const DisplayWebcamWrapper = styled.div`
  overflow: hidden;
`;

const CoveredWebcam = styled(Webcam)`
  margin: 0 auto;
  background-color: #666;
  object-fit: cover;
`;


class DisplayWebcam extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <DisplayWebcamWrapper>
        <CoveredWebcam {...this.props} />
      </DisplayWebcamWrapper>
    );
  }
}

export default DisplayWebcam;
