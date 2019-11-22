import React from 'react';
//import ReactDom from 'react-dom';
import Board from './Board.jsx';

var newMatrix = () => {
  let matrix = [];
  for (let i = 0; i < 6; i++) {
    matrix[i] = [...Array(7).fill('')];
  }
  return matrix;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: newMatrix()
    }
  }

  render() {
    return (
      <div>
        <h1 className="header">CONNECT 4</h1>
        <div className='center'>
          <Board matrix = {this.state.matrix} />
        </div>
      </div>
    )
  }
}

export default App;