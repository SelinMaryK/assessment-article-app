import React from 'react';
import '../App.css';

//Method to update the pagination logic based on the total number of the articles rendered
const Pagination = ({ articlePerPage, totalArticles, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlePerPage); i++) {
    pageNumbers.push(i);
  }

  let renderPrevBtn = null;
    if(currentPage === 1 || totalArticles ===0) {
        renderPrevBtn = <li className='disabled page-link'><span id="btnPrev"> Prev </span></li>
    }
    else{
        renderPrevBtn = <li className="page-link"><a href='#' onClick={() => paginate(currentPage - 1)}> Prev </a></li>
    }

  let renderNextBtn = null;
    if(currentPage === totalArticles || totalArticles ===0) {
        renderNextBtn = <li className='disabled page-link'><span id="btnNext"> Next </span></li>
    }
    else{
        renderNextBtn = <li className="page-link"><a href='#' onClick={() => paginate(currentPage + 1)}> Next </a></li>
    }


  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {renderPrevBtn}
        {renderNextBtn}
      </ul>
    </nav>
  );
};

export default Pagination;
