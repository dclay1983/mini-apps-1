import React from 'react';
import Square from './Square.jsx';
import AddToken from ',/AddTokenButton.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  createSquare(key, value) {
    return <Square key = {key} value = {value}/>;
  }

  createRow(row, rowIndex) {
    return (<div className='row' key = {rowIndex}>
      {row.map( (val, index) => {
        let key = rowIndex + (index + 1).toString();
        return this.createSquare(key, val)
      })
      }
    </div>)
  }

  createBoard() {
    return (this.props.matrix.map((row, index) => {
      let rowIndex = String.fromCharCode('A'.charCodeAt(0) + index)
      return this.createRow(row, rowIndex);
    }))
  }
  render() {
    return (
      <div className = 'board'>
        {this.createBoard()}
      </div>
    )
  }
}

export default Board;