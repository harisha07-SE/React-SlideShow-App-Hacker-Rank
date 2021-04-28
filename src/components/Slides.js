import React from "react";

const Slides = ({ slides, currentSlide, previous, next, restart }) => {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          onClick={restart}
          disabled={currentSlide === 0}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          onClick={previous}
          disabled={currentSlide === 0}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          onClick={next}
          disabled={currentSlide === slides.length}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide] && slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide] && slides[currentSlide].text}</p>
      </div>
    </div>
  );
};

export default Slides;
