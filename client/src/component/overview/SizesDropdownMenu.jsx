import React, { useRef, useState, useEffect } from 'react';
// import './styles.css';
import GlobalStyles, { Button } from '../../GlobalStyle';

function SizesDropdownMenu({ sizes }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentSize, setCurrentSize] = useState('Select Size');
  const onClick = () => setIsActive(!isActive);
  const listSizes = Object.keys(sizes).map((key) => <li key={key}><div onClick={ () => setCurrentSize(sizes[key].size)}>{sizes[key].size}</div></li>);
  useEffect(() => {
    const pageClickEvent = (e) => {
      console.log(e);
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);
  return (
    <div className="menu-container">
      <Button onClick={onClick} className="menu-trigger">
        <span>{currentSize}</span>
      </Button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {listSizes}
        </ul>
      </nav>
    </div>
  );
}

export default SizesDropdownMenu;
