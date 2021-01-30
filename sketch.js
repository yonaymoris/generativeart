const canvasSketch = require('canvas-sketch');

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
      for (let h = marginTop + (squareWidth / 2); h <= height - marginTop - (squareWidth / 2); h += 55) {
        context.strokeRect(w, h, squareWidth, squareWidth);
      }
    }
  };
};

// Start the sketch with parameters
canvasSketch(sketch, settings);