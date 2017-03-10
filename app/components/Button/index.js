/**
*
* Button
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className } />;

Button.propTypes = {

};

export default Button;



// React.render(<Stopwatch />, document.body);
