import { useState } from "react";
import ColorBtn from "./ColorBtn";
import Input from "./Input";
import Label from "./Label";
import { fonts, modeColors } from "../constants/constant";

type SettingsProps = {
  setShortBreak: (value: number) => void;
  setLongBreak: (value: number) => void;
  setPomodoro: (value: number) => void;
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  setSelectedColor: (color: string) => void;
  selectedColor: string;
  setIsSettingsOpen: (value: boolean) => void;
  resetTimer: () => void;
  selectedFont: string;
  setSelectedFont: (value: string) => void;
};

function Settings({
  setSelectedColor,
  selectedColor,
  setIsSettingsOpen,
  resetTimer,
  setPomodoro,
  setShortBreak,
  setLongBreak,
  pomodoro,
  shortBreak,
  longBreak,
  selectedFont,
  setSelectedFont,
}: SettingsProps) {
  const [localPomodoro, setLocalPomodoro] = useState(pomodoro / 60);
  const [localShortBreak, setLocalShortBreak] = useState(shortBreak / 60);
  const [localLongBreak, setLocalLongBreak] = useState(longBreak / 60);

  const handleLocalPomodoro = (value: number | null) => {
    const newValue = value || 0;
    setLocalPomodoro(newValue);
    setPomodoro(newValue * 60);
  };

  const handleLocalShortBreak = (value: number | null) => {
    const newValue = value || 0;
    setLocalShortBreak(newValue);
    setShortBreak(newValue * 60);
  };

  const handleLocalLongBreak = (value: number | null) => {
    const newValue = value || 0;
    setLocalLongBreak(newValue);
    setLongBreak(newValue * 60);
  };

  const handleApply = () => {
    setIsSettingsOpen(false);
    resetTimer();
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="bg-white pt-[34px] rounded-3xl absolute z-50 top-[155px] flex flex-col">
      <h2 className={`${selectedFont} text-[28px] font-bold text-[#161932] mb-[31px] px-[40px]`}>
        Settings
      </h2>
      <hr className="h-[1px] w-full bg-[#e3e1e1]" />
      <h4 className={`${selectedFont} text-[13px] font-bold text-[#161932] mt-[28px] mb-[31px] px-[40px] tracking-[5px]`}>
        TIMER SETTINGS
      </h4>
      <div className="flex justify-between px-10 mb-6">
        <Label>
          <span className={`${selectedFont} opacity-40`}>Pomodoro</span>
          <Input
            value={localPomodoro}
            onChange={handleLocalPomodoro}
            aria-label="Set Pomodoro time in minutes"
          />
        </Label>
        <Label>
          <span className={`${selectedFont} opacity-40`}>Short Break</span>
          <Input
            value={localShortBreak}
            onChange={handleLocalShortBreak}
            aria-label="Set Short Break time in minutes"
          />
        </Label>
        <Label>
          <span className={`${selectedFont} opacity-40`}>Long Break</span>
          <Input
            value={localLongBreak}
            onChange={handleLocalLongBreak}
            aria-label="Set Long Break time in minutes"
          />
        </Label>
      </div>
      <hr className="h-[1px] w-[460px] self-center bg-[#e3e1e1]" />
      <div className="flex justify-between items-center px-10 my-6">
        <h4 className={`${selectedFont} text-[13px] font-bold text-[#161932] tracking-[5px]`}>FONT</h4>
        <div className="flex gap-4 mt-4">
          {fonts?.length > 0 &&
            fonts.map((font, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full hover:scale-110 hover:shadow-lg ${
                  selectedFont === font.class ? "bg-black text-white" : "bg-gray-200"
                } ${font.class}`}
                onClick={() => setSelectedFont(font.class)}
                aria-label={font.label}
              >
                {font.label}
              </button>
            ))}
        </div>
      </div>
      <hr className="h-[1px] w-[460px] self-center bg-[#e3e1e1]" />
      <div className="flex justify-between items-center px-10 my-6">
        <h4 className={`${selectedFont} text-[13px] font-bold text-[#161932] tracking-[5px]`}>COLOR</h4>
        <div className="flex gap-4">
          {Object.keys(modeColors)?.length > 0 &&
            Object.entries(modeColors).map(([key, value]) => (
              <ColorBtn
                key={key}
                color={value}
                onClick={() => handleColorChange(value)}
                selected={selectedColor === value}
                aria-label={`Color ${key}`}
              />
            ))}
        </div>
      </div>
      <button
        className={`self-center rounded-[26.5px] ${selectedColor} ${selectedFont} px-[47px] py-4 mb-[-28px] font-bold text-[16px] text-[#fff]`}
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
}

export default Settings;
