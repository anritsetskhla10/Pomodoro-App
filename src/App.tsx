import { useState, useEffect } from 'react';
import Settings from './components/Settings';

function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [pomodoro, setPomodoro] = useState(10 * 60); // Convert to seconds
  const [shortBreak, setShortBreak] = useState(5 * 60); // Convert to seconds
  const [longBreak, setLongBreak] = useState(15 * 60); // Convert to seconds
  const [currentMode, setCurrentMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [time, setTime] = useState(pomodoro);
  const [savedTimes, setSavedTimes] = useState({
    pomodoro,
    shortBreak,
    longBreak,
  });

  // Timer effect
  useEffect(() => {
    let interval: number;
    if (!isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Update `time` and save state when switching modes
  useEffect(() => {
    if (!isPaused) {
      // Save the current mode's time before switching
      setSavedTimes((prev) => ({
        ...prev,
        [currentMode]: time,
      }));
    }
    // Load saved time for the new mode
    setTime(savedTimes[currentMode]);

    // Pause the timer when switching modes
    setIsPaused(true);
  }, [currentMode]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  const handleModeChange = (mode: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setCurrentMode(mode);
  };

  const totalDuration =
    currentMode === 'pomodoro' ? pomodoro : currentMode === 'shortBreak' ? shortBreak : longBreak;

  const strokeDashoffset = (283 - ((totalDuration - time) / totalDuration) * 283).toFixed(2);

  return (
    <div className="flex flex-col items-center pt-[48px] pb-[56px]">
      <div className="w-[156px] h-[32px] mb-[56px] cursor-pointer">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="w-[373px] h-[63px] mb-[47px] px-[7px] py-[8px] rounded-[31.5px] bg-[#161932] flex items-center justify-between z-20">
        <button className="btn" onClick={() => handleModeChange('pomodoro')}>
          Pomodoro
        </button>
        <button className="btnDef" onClick={() => handleModeChange('shortBreak')}>
          Short Break
        </button>
        <button className="btnDef mr-[25px]" onClick={() => handleModeChange('longBreak')}>
          Long Break
        </button>
      </div>
      <div className="oval mb-[63px]">
        <div className="oval2">
          <div className="circle center relative" onClick={togglePause}>
            <svg className="absolute w-full h-full origin-center -rotate-90" viewBox="0 0 100 100">
              <circle className="text-transparent" strokeWidth="5" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
              <circle
                className="text-modeColors-color1"
                strokeWidth="5"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
                strokeDasharray="283"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <h1 className="fontMain z-10">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </h1>
            <p className="fontMain text-[16px] tracking-[15px] z-10">{isPaused ? 'START' : 'PAUSE'}</p>
          </div>
        </div>
      </div>
      <img
        src="/images/icon-settings.svg"
        alt="settings icon"
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      />
      {isSettingsOpen && (
        <Settings setPomodoro={setPomodoro} setShortBreak={setShortBreak} setLongBreak={setLongBreak} />
      )}
    </div>
  );
}

export default App;
