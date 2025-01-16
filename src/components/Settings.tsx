import { useState } from "react";
import ColorBtn from "./ColorBtn";
import Input from "./Input";
import Label from "./Label";
import { fonts, modeColors } from "../constants/constant";

type SettingsProps = {
  setShortBreak: (value: number) => void;
  setLongBreak: (value: number) => void;
  setPomodoro: (value: number) => void;
};

function Settings({ setShortBreak, setLongBreak, setPomodoro }: SettingsProps) {
  const [selectedColor, setSelectedColor] = useState<string>("bg-modeColors-color1");
  const [selectedFont, setSelectedFont] = useState("font-kumbh");

  const handlePomodoroChange = (value: number | null) => {
    if (value !== null) setPomodoro(value * 60);
  };

  const handleShortBreakChange = (value: number | null) => {
    if (value !== null) setShortBreak(value * 60);
  };

  const handleLongBreakChange = (value: number | null) => {
    if (value !== null) setLongBreak(value * 60);
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
      <h4 className="text-[13px] font-bold text-[#161932] mt-[28px] mb-[31px] px-[40px] tracking-[5px]">
        TIME (MINUTES)
      </h4>
      <div className="flex justify-between px-10 mb-6 ">
        <Label>
          <span className="opacity-40">Pomodoro</span>
          <Input onChange={handlePomodoroChange} />
        </Label>
        <Label>
          <span className="opacity-40">short break</span>
          <Input onChange={handleShortBreakChange} />
        </Label>
        <Label>
          <span className="opacity-40">long break</span>
          <Input onChange={handleLongBreakChange} />
        </Label>
      </div>
      <hr className="h-[1px] w-[460px] self-center bg-[#e3e1e1]" />
      <div className="flex justify-between items-center px-10 my-6">
        <h4 className="text-[13px] font-bold text-[#161932] tracking-[5px]">
          FONT
        </h4>
        <div className="flex gap-4 mt-4">
        {fonts.map((font, index) => (
          <button
            key={index}
            className={`w-10 h-10 bg-gray-200 rounded-md hover:scale-110 hover:shadow-lg ${font.class}`}
            onClick={() => setSelectedFont(font.class)}
          >
            {font.label}
          </button>
        ))}
      </div>
      </div>
      <hr className="h-[1px] w-[460px] self-center bg-[#e3e1e1]" />
      <div className="flex justify-between items-center px-10 my-6">
        <h4 className="text-[13px] font-bold text-[#161932] tracking-[5px]">
          COLOR
        </h4>
        <div className="flex gap-4">
          {Object.entries(modeColors).map(([key, value]) => (
            <ColorBtn key={key} color={value} onClick={() => handleColorChange(value)} />
          ))}
        </div>
      </div>
      <button
        className={`self-center rounded-[26.5px] ${selectedColor} px-[47px] py-4 mb-[-28px] font-bold text-[16px] text-[#fff]`}
      >
        Apply
      </button>
    </div>
  );
}

export default Settings;
