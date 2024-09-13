import React, { useState, useEffect } from 'react';
import { translateText } from '../services/api';
import { removeAccents } from '../services/helpers';
import styled from 'styled-components'; 


const TextTitle = styled.h1`
    text-align: center;
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

const Textarea = styled.input`
    text-align: center;
    width: 200px;
    height: 50px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
`;

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

const Buttonn = styled.button `
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


const phrases = [
  { text: 'Hello', targetLang: 'es' },
  { text: 'Good morning', targetLang: 'es' },
  { text: 'How are you?', targetLang: 'es' },
  { text: 'Good afternoon', targetLang: 'es' },
  { text: 'Good evening', targetLang: 'es' },
  { text: 'Take care', targetLang: 'es' },
  { text: 'Have a nice day', targetLang: 'es' },
  { text: 'Goodbye', targetLang: 'es' },
  { text: 'See you later', targetLang: 'es' },
  { text: 'See you soon', targetLang: 'es' },
  { text: 'I’m tired', targetLang: 'es' },
  { text: 'I have a reservation', targetLang: 'es' },
  { text: 'I think that', targetLang: 'es' },
  { text: 'In my opinion', targetLang: 'es' },
  { text: 'I agree', targetLang: 'es' },
  { text: 'Of course', targetLang: 'es' },
];

const QuizPage = () => {
  
  const [currentPhrase, setCurrentPhrase] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [setCorrectAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  
  const isAnswerCorrect = (userAnswer, correctAnswer) => {
    
    return removeAccents(userAnswer.trim().toLowerCase()) === removeAccents(correctAnswer.trim().toLowerCase());
  };

  
  const handleCheckAnswer = async () => {
    const { text, targetLang } = currentPhrase;
    const translation = await translateText(text, targetLang);
    setCorrectAnswer(translation);

    if (isAnswerCorrect(userAnswer, translation)) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The correct answer is: ${translation}`);
    }
  };

  
  const handleNext = () => {
    const newPhrase = getRandomPhrase();
    setCurrentPhrase(newPhrase);
    setUserAnswer('');
    setFeedback('');
  };

  
  useEffect(() => {
    handleNext();
  }, );

  return (
    <Container>
      <TextTitle>Translation Quiz</TextTitle>
      <p>Translate "{currentPhrase.text}" to Spanish</p>
      <Textarea
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Enter your translation"
      />
      <Button onClick={handleCheckAnswer}>Check Answer</Button>
      <Buttonn onClick={handleNext}>Next</Buttonn>

      {feedback && <p>{feedback}</p>}
    </Container>
  );
};

export default QuizPage;

