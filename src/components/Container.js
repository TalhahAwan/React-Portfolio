import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
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
        return <Projects />;
      case 'Contact':
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Fragment>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage()}
      </div>
      <Footer />
    </Fragment>
  );
}

export default Container