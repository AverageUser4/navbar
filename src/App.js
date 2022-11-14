import React from 'react';

import logoImage from './resources/logo.svg';
import { links, social } from './resources/data.js';
import { FaBars } from 'react-icons/fa';

export default function App() {
  const [linksListHeight, setLinksListHeight] = React.useState(0);
  const sampleLinkRef = React.useRef();

  function toggleList() {
    if(linksListHeight) {
      setLinksListHeight(0);
      return;
    }

    const linkHeight = sampleLinkRef.current.getBoundingClientRect().height;
    setLinksListHeight(linkHeight * links.length);
  }

  return (
    <header className="header">

      <nav className="header-content">
      
        <img src={logoImage} className="header__logo"/>

        <ul 
          className="header__links-list"
          style={{ maxHeight: linksListHeight }}
        >

          {
            links.map((link, i) => 
              <li 
                key={link.id}
                ref={i === 0 ? sampleLinkRef : null}
              >
          
                <a 
                  className="header__links-list-link"
                  href={link.url}  
                >
                  {link.text}
                </a>
          
              </li>
            )
          }

        </ul>

        <ul className="header__socials-list">

          {
            social.map(social => 
              <li key={social.id}>
          
                <a 
                  className="header__socials-list-link"
                  href={social.url}  
                >
                  {social.icon}
                </a>
          
              </li>
            )
          }

        </ul>

        <button 
          className="header__toggle-links-button"
          onClick={toggleList}
        >
          <FaBars/>
        </button>

      </nav>

    </header>
  );
}