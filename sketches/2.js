const canvasSketch = require('canvas-sketch');
const { polylinesToSVG } = require('canvas-sketch-util/penplot');

// function to generate a random number between min and max
const random = (min, max) => Math.random() * (max - min) + min;

// Specify some output parameters
const settings = {
  // The [ width, height ] of the artwork in pixels
  dimensions: 'A4'
};

// Start the sketch
const sketch = () => {
  let drawingAreaWidth  = 400;
  let drawingAreaHeight = 600;
  let squareWidth = 50;

  return (props) => {
    // Destructure what we need from props
    const { context, width, height } = props;

    let marginLeft = (width - drawingAreaWidth) / 2;
    let marginTop = (height - drawingAreaHeight) / 2;

    // Now draw a white rectangle in the center
    context.lineWidth = 1;
    for (let w = marginLeft + (squareWidth / 2); w <= width - marginLeft - (squareWidth / 2); w += 55) {
      let h = marginTop;
      while ( h <= height - marginTop - (squareWidth / 2)) {
        let distance = random(0, 50);
        context.strokeRect(w, h, squareWidth, squareWidth);
        h += 10 + distance;
      }
    }
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);