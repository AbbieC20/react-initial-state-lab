import React from 'react';

class ImageSlider extends React.Component {
    constructor() {
        super();

        this.state = {
            currentSlideIndex: 0
        };
      }

    increment = () => {
        const newCount = this.state.count + 1;
        this.setState({
            count: newCount,
        });
    };

    render() {
        return (
          <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
      }
}
    
    export default ImageSlider;