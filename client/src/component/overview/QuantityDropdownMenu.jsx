import React, { useRef, useState, useEffect, useContext } from 'react';
import AppContext from '../AppContext';
import GlobalStyles, { Button } from '../../GlobalStyle';

function QuantityDropdownMenu({ quantity }) {
  const myContext = useContext(AppContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState('Select Quantity');
  const [inventory, setInventory] = useState([0]);
  const onClick = () => setIsActive(!isActive);
  const arrayCreator = (() => {
    var tempInv = []
    for (let i = 0; i < myContext.currentSize.quantity; i +=1 ) {
      if (tempInv.length === 16) {
        setInventory(tempInv);
        return;
      }
      tempInv.push(i);
    }
    setInventory(tempInv);
  });
  const listSizes = inventory.map((currentNum) => <li key={currentNum}><div onClick={ function() {setCurrentQuantity(currentNum); myContext.setCurrentQuantity(currentNum)}}>{currentNum}</div></li>)

  useEffect(() => {
    arrayCreator();
  }, [myContext.currentSize]);
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
          <li><div>{listSizes}</div></li>
        </ul>
      </nav>
    </div>
  );
}

export default QuantityDropdownMenu;
