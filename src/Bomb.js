import React from 'react';

class Bomb extends React.Component {
    constructor(props) { 
        super()
        this.state = { 
          secondsLeft: props.initialCount
        }
      }

      increment = () => {
        const newCount = this.state.count - 1;
        this.setState({
            count: newCount,
        });
    };

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
        return (
          <div>{message}</div>
        )
      }
    }
    
    export default Bomb;