import styled from 'styled-components';
// import { AiFillAliwangwang } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyle';

export const Nav = styled.nav`
  background: #000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
 `;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  padding-bottom: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
`;

// export const NavIcon = styled(AiFillAliwangwang)`
//   margin-right: .8rem;
//   transition: all .5s ease;

//   &:hover {
//       transform: scale(2);
//   }
// `;
