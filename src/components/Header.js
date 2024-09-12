import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = styled.nav`
  display: flex;
  justify-content: space-between; 
  background-color: #4f86f7;
  padding: 10px 20px;
`;


const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;
  flex-grow: 1; 
  text-align: center; 

  &:hover {
    background-color: #3c6ed1;
  }
`;

const Header = () => {
  return (
    <header>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/lessons">Lessons</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/vocabulary">Vocabulary</NavLink>
      </Navbar>
    </header>
  );
};

export default Header;


