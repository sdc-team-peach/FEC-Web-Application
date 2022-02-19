import React, { useRef, useState } from 'react';
// import './styles.css';
import GlobalStyles from '../../GlobalStyle';

function SizesDropdownMenu({ sizes }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const listSizes = Object.keys(sizes).map((key) => <li key={key}><a href={`/${sizes[key].size}`}>{sizes[key].size}</a></li>);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>Sizes</span>
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          {listSizes}
        </ul>
      </nav>
    </div>
  );
}

export default SizesDropdownMenu;
