import React, { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import NavBar from './NavBar';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage){
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
        default:
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
        {}
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {}
        {renderPage()}
      </div>
  );
}