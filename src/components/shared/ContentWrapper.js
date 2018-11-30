import React from 'react';
import '../../stylesheets/components/shared/ContentWrapper.css';

export default class ContentWrapper extends React.PureComponent {
  render() {
    const {
      children = [],
      className = '',
    } = this.props;
    return(
      <div className={`content-wrapper ${className}`} ref={node => { return node } }>
        {children}
      </div>
    );
  }
}