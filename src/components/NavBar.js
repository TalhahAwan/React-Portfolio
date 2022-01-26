import React from 'react';

function Navigation ({ currentPage, handlePageChange }) {
  return (
    <ul className='nav-tabs'>
      <li className='nav-item'>
        <a href='#home' onClick={() => handlePageChange("Home")} className={currentPage === "Home" ? "nav-link active" : "nav-link"}>Home</a>
      </li>
    </ul>
  )
}