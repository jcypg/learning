import React from 'react';
import TranslationComponent from '../components/TranslationComponents';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
`;

const HomePage = () => {
  return (
    <div>
      <H1>Welcome to Language Learner</H1>
      <TranslationComponent />
    </div>
  );
};

export default HomePage;
