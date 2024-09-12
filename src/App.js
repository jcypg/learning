import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LessonPage from './pages/LessonPage';
import VocabularyPage from './pages/VocabularyPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lessons" element={<LessonPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
