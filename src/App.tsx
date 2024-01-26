import { useState } from "react";
import './App.css';
import wordsData from "./wordlist.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

type WordsData = {
  words: string[];
};

function App() {
  const words: WordsData = wordsData;

  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.words.length);
    return words.words[randomIndex];
  });
  const [guessedLetter, setGuessLetter] = useState<string[]>([])

  const incorrectLetters = guessedLetter.filter(letter => !wordToGuess.includes(letter))

  return(
  <div className="container">
    <div className="header">Hangman</div>
      <div className="#">
        <HangmanDrawing numberOfGuess={incorrectLetters.length}/>
        <HangmanWord/>     
      </div>
      <div style={{alignSelf: "stretch"}}>
          <Keyboard/>
        </div>
  </div>
  )
}

export default App;
