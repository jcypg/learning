import React, { useState } from 'react';
import { translateText } from '../services/api';
import styled from 'styled-components';


const Button = styled.button `
    background-color: violet;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;

    &:hover {
    background-color: darkviolet; 
    color: lightgray; 
    transform: scale(1.05);
  }

`;

const Textarea = styled.textarea`
    text-align: center;
    width: 300px;
    height: 100px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f7f7f7;
    padding-top: 80px;
`;


const TranslationComponent = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    if (text.trim() === '') {
        console.warn('No text to translate');
        return;
    }

    try {
      const result = await translateText(text, 'en');
      setTranslatedText(result);
      //setText('')
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <Container>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate to English"
      />
      <Button onClick={handleTranslate}>Translate</Button>
      <p>Translated Text: {translatedText}</p>
    </Container>
  );
};

export default TranslationComponent;

