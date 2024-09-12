import React, { useState } from 'react';
import { translateText } from '../services/api';
import styled from 'styled-components';

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

const InputButtonContainer = styled.div`
  display: flex;
  gap: 10px; 
  margin-bottom: 20px; 
  padding-left: 50px;
`;

const Button = styled.button `
    background-color: violet;
    color: white;
    padding: 10px 0px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    width: 90px;
    height: 50px;
    margin-top: 6px;


    &:hover {
    background-color: darkviolet; 
    color: lightgray; 
    transform: scale(1.05);
  }

`;

const Textarea = styled.textarea`
    text-align: center;
    width: 200px;
    height: 40px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

const WordList = styled.ul`
  list-style: none;
  padding: 0;
 
`;

const ListItem = styled.li`
  font-size: 24px; /* Ajusta el tamaño de la letra aquí */
  margin: 10px 0;
  
`;

const VocabularyPage = () => {
  const [vocabWord, setVocabWord] = useState('');
  const [vocabularyList, setVocabularyList] = useState([]);
  const [translations, setTranslations] = useState({});

  const addWord = async () => {
    setVocabularyList([...vocabularyList, vocabWord]);
    const translation = await translateText(vocabWord, 'es'); // Traducir a español
    setTranslations({ ...translations, [vocabWord]: translation });
    setVocabWord('');
  };

  return (
    <Container>
      <h1>Vocabulary List</h1>
      <InputButtonContainer>
      <Textarea
        type="text"
        value={vocabWord}
        onChange={(e) => setVocabWord(e.target.value)}
        placeholder="Enter a new vocabulary word"
      />
      <Button onClick={addWord}>Add Word</Button>
      </InputButtonContainer>
      <WordList>
        {vocabularyList.map((word, index) => (
          <ListItem key={index}>
            {word} - {translations[word] || 'Translating...'}
          </ListItem>
        ))}
      </WordList>
    </Container>
  );
};

export default VocabularyPage;

