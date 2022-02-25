import styled from 'styled-components';
import { RiShoppingCart2Fill } from 'react-icons/ri';

const CartIcon = styled(RiShoppingCart2Fill)`
  margin-right: .8rem;
  transition: all .5s ease;
  color: #fff;
  font-size: 23px;


  &:hover {
      transform: scale(1.3);
  }
`;

export default CartIcon;
