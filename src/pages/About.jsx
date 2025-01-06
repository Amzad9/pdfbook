import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import PropTypes from "prop-types";

const About = () => {
  const flipBookRef = useRef(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleNext = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const onPageFlip = (e) => {
    setPage(e.data);
  };

  const onBookReady = () => {
    if (flipBookRef.current) {
      setTotalPages(flipBookRef.current.pageFlip().getPageCount());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
 {/* Navigation Buttons */}
      <div className="mb-6 flex items-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-600"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {page} of {totalPages}
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-600"
        >
          Next
        </button>
      </div>
      {/* Flipbook Container */}
      <div className="relative w-full max-w-screen-sm mx-auto">
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={200}
          maxWidth={600}
          minHeight={300}
          maxHeight={800}
          mobileScrollSupport={true}
          onFlip={onPageFlip}
          onInit={onBookReady}
          className="demo-book shadow-lg"
          ref={flipBookRef}
        >
          <PageCover>BOOK TITLE</PageCover>
          <Page number={1} className="bg-red-400 px-6">Page 1 content</Page>
          <Page number={2} className="bg-blue-400 px-6">Page 2 content</Page>
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

const PageCover = React.forwardRef((props, ref) => (
  <div
    className="page page-cover bg-blue-200 flex items-center justify-center h-full text-xl font-bold"
    ref={ref}
    data-density="hard"
  >
    <div className="page-content">
      <h2>{props.children}</h2>
    </div>
  </div>
));
PageCover.displayName = "PageCover";

const Page = React.forwardRef((props, ref) => (
  <div className={"page " + props.className} ref={ref}>
    <div className="page-content">
      <h2 className="text-xl font-bold">Page {props.number}</h2>
      <p className="text-base">{props.children}</p>
    </div>
  </div>
));
Page.displayName = "Page";

PageCover.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Page.propTypes = {
  children: PropTypes.node.isRequired,
  number: PropTypes.number,
  className: PropTypes.string,
};

export default About;
