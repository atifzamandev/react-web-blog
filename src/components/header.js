import React from 'react';
import logoUrl from './logo.png';
import Nav from './nav';



function Header ({title}) {
  return (
      
      <header className='header'>
        <div className='logo'>
            <img src={logoUrl} alt=""   />   
            <h1>{title}</h1>        
        </div>
        <Nav />          
      </header>
  );
};

Header.defaultProps = {
    title : 'Web Blog ',
}



export default Header;
