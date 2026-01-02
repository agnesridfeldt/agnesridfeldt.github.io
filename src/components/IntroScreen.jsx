import { useEffect, useState } from 'react';
import './IntroScreen.css';

const LINES = [
    'They said she left by choice.',
    ' My sister. Just... gone.',
    ' But her things are still here.',
    ' Her music, her words, her memories, everything she was.',
    ' If I piece them together, maybe I\'ll see what everyone else missed.',
    ' Maybe I\'ll finally see the parts of her she kept hidden.',
];

const TYPING_DELAY = 75;    // ms per character
const LINE_PAUSE = 600;     // pause between lines (ms)

export default function IntroScreen({ onDone }) {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [finishedLines, setFinishedLines] = useState([])
    const [isComplete, setIsComplete] = useState(false);

    // Typing effect
    useEffect(() => {
        if (isComplete) return;

        const currentLine = LINES[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
            const timeout = setTimeout(() => {
                setCurrentCharIndex(prev => prev + 1);
            }, TYPING_DELAY);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                const newFinished = [...finishedLines, currentLine];
                setFinishedLines(newFinished);

                if (currentLineIndex === LINES.length - 1) {
                    setIsComplete(true);
                } else {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }
            }, LINE_PAUSE);

            return () => clearTimeout(timeout);
        }
    }, [currentCharIndex, currentLineIndex, finishedLines, isComplete]);

    // Input for "press any key"
    useEffect(() => {
        if (!isComplete) return;
        const handleContinue = () => {
            onDone();
        };

        window.addEventListener('keydown', handleContinue);
        window.addEventListener('mousedown', handleContinue);

        return () => {
            window.removeEventListener('keydown', handleContinue);
            window.removeEventListener('mousedown', handleContinue);
        };
    }, [isComplete, onDone]);

    const currentLine = LINES[currentLineIndex] ?? '';
    const visibleCurrent = currentLine.slice(0, currentCharIndex);

    return (
        <div className="intro-screen">
            <div className="intro-screen__content">
                <p className="intro-screen__line">
                    {finishedLines.join('')}
                    {!isComplete && visibleCurrent}
                    {!isComplete && <span className="intro-screen__cursor">▌</span>}
                </p>

                {isComplete && (
                    <p className="intro-screen__continue">
                        Press any key or click to continue.
                    </p>
                )}
            </div>
        </div>
    );
}