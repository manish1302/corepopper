import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SimplePopper = ({ content, trigger, placement, className, children }) => {
  const popover = (
    <Popover id="simple-popover" className={className}>
      {content}
    </Popover>
  );

  return (
    <OverlayTrigger trigger={trigger} placement={placement} overlay={popover}>
      {children}
    </OverlayTrigger>
  );
};

SimplePopper.propTypes = {
  content: PropTypes.node.isRequired,
  trigger: PropTypes.string,
  placement: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

SimplePopper.defaultProps = {
  trigger: 'hover',
  placement: 'top',
  className: '',
};

export default SimplePopper;
