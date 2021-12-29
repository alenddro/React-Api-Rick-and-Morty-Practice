import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <nav>
        {prev ? (
          <button className="paginacion" onClick={handlePrevious}>
            Previous
          </button>
        ) : null}

        {next ? (
          <button className="paginacion" onClick={handleNext}>
            Next
          </button>
        ) : null}
      </nav>
    </>
  );
};

export default Pagination;
