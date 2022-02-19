import React, { useRef, useState, useEffect } from 'react';
import GlobalStyles, { Button } from '../../GlobalStyle';

function QuantityDropdownMenu({ quantity }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState('Select Quantity');
  const onClick = () => setIsActive(!isActive);
  const listQuantity = Object.keys(quantity).map((key) => <li key={key}><div onClick={ () => setCurrentQuantity(quantity[key].quantity)}>{quantity[key].quantity}</div></li>);
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
        <span>{currentQuantity}</span>
      </Button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {listQuantity}
        </ul>
      </nav>
    </div>
  );
}

export default QuantityDropdownMenu;
