/**
*
* DragResize
*
*/

import React from 'react';
import styled from 'styled-components';
import BaseLayout from './BaseLayout';

import Rnd from 'react-rnd';

const DragResize = (props) => {
    return (
      <BaseLayout>
        <Rnd
          ref={c => { this.rnd = c; }}
          initial={{
            x: window.innerWidth / 2 - 200,
            y: window.innerHeight / 2 - 80,
            width: 400,
            height: 0.75 * 400 ,
          }}

          bounds={'parent'}
        >
        {props.children}
        </Rnd>
      </BaseLayout>
    )
}


export default DragResize;
