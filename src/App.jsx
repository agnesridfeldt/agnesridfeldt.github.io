import { useState } from 'react';
import './App.css';

// Screens
import StartScreen from './components/StartScreen.jsx';
import IntroScreen from './components/IntroScreen.jsx';
import LoginScreen from './components/LoginScreen.jsx';
import WrongPassword from './components/WrongPassword.jsx';
import Desktop from "./components/Desktop.jsx";
import Help from "./components/Help.jsx";

function App() {
  const [view, setView] = useState('menu');

  const handleStart = () => setView('intro');
  const handleHelp = () => setView('help');
  const handleQuit = () =>
    alert('Quit (för webben kan vi inte stänga fönstret på riktigt)');

  if (view === 'menu') {
    return (
      <StartScreen
        onStart={handleStart}
        onHelp={handleHelp}
        onQuit={handleQuit}
      />
    );
  }

  if (view === 'intro') {
    return <IntroScreen onDone={() => setView('login')} />;
  }

  if (view === 'login') {
    return (
      <LoginScreen
        onLogin={() => setView('desktop')}       // correct password
        onWrongPassword={() => setView('wrong')} // wrong password
      />
    );
  }

  if (view === 'wrong') {
    return <WrongPassword onRetry={() => setView('login')} />;
  }

  if (view === "desktop") {
    return <Desktop onLogOff={() => setView("login")} />;
  }

  if (view === "help") {
    return <Help onBack={() => setView("menu")} />;
  }

  return null;
}

export default App;