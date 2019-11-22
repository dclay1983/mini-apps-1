import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className='square'>
        <div className={'piece ' + this.props.value}></div>
      </div>
    )
  }
}

export default Square;