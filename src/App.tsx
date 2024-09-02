import { useState, useEffect } from 'react';
import Settings from './components/Settings';

function App() {

  const totalDuration = 10; 
  const [time, setTime] = useState(totalDuration);
  const [isPaused, setIsPaused] = useState(true);
  
  useEffect(() => {
    let interval: number;
    if (!isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };
  
  const strokeDashoffset = (283 - ((totalDuration - time) / totalDuration) * 283).toFixed(2);
  
  return (
    <div className="flex flex-col items-center pt-[48px] pb-[56px]">
      <div className="w-[156px] h-[32px] mb-[56px] cursor-pointer">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="w-[373px] h-[63px] mb-[47px] px-[7px] py-[8px] rounded-[31.5px] bg-[#161932] flex items-center justify-between z-20">
        <button className="btn">pomodoro</button>
        <button className="btnDef">short break</button>
        <button className="btnDef mr-[25px]">long break</button>
      </div>
      <div className="oval mb-[63px]">
        <div className="oval2">
          <div className="circle center relative" onClick={togglePause}>
            <svg className="absolute w-full h-full origin-center -rotate-90" viewBox="0 0 100 100" >
              <circle className="text-transparent" strokeWidth="5" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50"/>
              <circle className="text-modeColors-color1" strokeWidth="5" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" 
              strokeDasharray="283" strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
            </svg>
            <h1 className="fontMain z-10">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </h1>
            <p className="fontMain text-[16px] tracking-[15px] z-10">
              {isPaused ? 'START' : 'PAUSE'}
            </p>
          </div>
        </div>
      </div>
        <img src="/images/icon-settings.svg" alt="settings icon" />
        <Settings/>
    </div>
  );
}

export default App;
