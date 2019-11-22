import React from 'react';

class AddTokenButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    <button className={'addToken ' + this.props.current} id={this.props.index}></button>
  }
}

export default AddTokenButton;