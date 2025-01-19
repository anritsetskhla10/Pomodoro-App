import { useState, useEffect } from "react";
import Settings from "./components/Settings";
import { modeButtons } from "./constants/constant";

function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [pomodoro, setPomodoro] = useState(1500); // 25 minutes
  const [shortBreak, setShortBreak] = useState(300); // 5 minutes
  const [longBreak, setLongBreak] = useState(900); // 15 minutes
  const [currentMode, setCurrentMode] = useState<"pomodoro" | "shortBreak" | "longBreak">(
    "pomodoro"
  );
  const [time, setTime] = useState(pomodoro);
  const [savedTimes, setSavedTimes] = useState({
    pomodoro,
    shortBreak,
    longBreak,
  });
  const [selectedColor, setSelectedColor] = useState<string>("bg-modeColors-color1");
  const [selectedFont, setSelectedFont] = useState("font-kumbh");

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

  // Update the timer when the mode changes
  useEffect(() => {
    setTime(savedTimes[currentMode]); 
    setIsPaused(true); 
  }, [currentMode, savedTimes]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const togglePause = () => {
    if (!isPaused) {
      setSavedTimes((prev) => ({
        ...prev,
        [currentMode]: time,
      }));
    }
    setIsPaused((prevState) => !prevState);
  };

  const handleModeChange = (mode: "pomodoro" | "shortBreak" | "longBreak") => {
    setSavedTimes((prev) => ({
      ...prev,
      [currentMode]: time,
    }));
    setCurrentMode(mode);
  };

  const resetTimer = () => {
    setSavedTimes({
      pomodoro,
      shortBreak,
      longBreak,
    });
    setTime(savedTimes[currentMode]); 
    setIsPaused(true); 
  };

  const totalDuration = savedTimes[currentMode];
  const strokeDashoffset = totalDuration
    ? (283 - ((totalDuration - time) / totalDuration) * 283).toFixed(2)
    : 283;

  return (
    <div className="flex flex-col items-center pt-[48px] pb-[56px]">
      <div className="w-[156px] h-[32px] mb-[56px] cursor-pointer">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div
        className="max-w-[410px] h-[63px] mb-[47px] px-[7px] py-[8px] rounded-[31.5px] 
        bg-[#161932] flex items-center justify-between z-20"
      >
        {modeButtons.map(({ mode, text }) => (
          <button
            key={mode}
            className={`${currentMode === mode ? `btn ${selectedColor} ${selectedFont}` : `btnDef ${selectedFont}`}`}
            onClick={() => handleModeChange(mode)}
          >
            {text}
          </button>
        ))}
      </div>
      <div className="oval mb-[63px]">
        <div className="oval2">
          <div className="circle center relative" onClick={togglePause}>
            <svg className="absolute w-full h-full origin-center -rotate-90" viewBox="0 0 100 100">
              <circle
                className="text-transparent"
                strokeWidth="5"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
              />
              <circle
                className={`${
                  selectedColor === "bg-modeColors-color1"
                    ? "text-modeColors-color1"
                    : selectedColor === "bg-modeColors-color2"
                    ? "text-modeColors-color2"
                    : "text-modeColors-color3"
                }`}
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
            <h1 className={`${selectedFont} fontMain z-10`}>
              {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
            </h1>
            <p className={`${selectedFont} fontMain text-[16px] tracking-[15px] z-10`}>
              {isPaused ? "START" : "PAUSE"}
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/icon-settings.svg"
        alt="settings icon"
        onClick={() => !isSettingsOpen && setIsSettingsOpen(true)}
        className={`${isSettingsOpen ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      />
      {isSettingsOpen && (
        <Settings
          pomodoro={pomodoro}
          shortBreak={shortBreak}
          longBreak={longBreak}
          setPomodoro={setPomodoro}
          setShortBreak={setShortBreak}
          setLongBreak={setLongBreak}
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          setIsSettingsOpen={setIsSettingsOpen}
          resetTimer={resetTimer}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
        />
      )}
    </div>
  );
}

export default App;
