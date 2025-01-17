import { useState } from "react";
import ColorBtn from "./ColorBtn";
import Input from "./Input";
import Label from "./Label";
import { fonts, modeColors } from "../constants/constant";

type SettingsProps = {
  setShortBreak: (value: number) => void;
  setLongBreak: (value: number) => void;
  setPomodoro: (value: number) => void;
  setSelectedColor: (color: string) => void;
  selectedColor: string;
  setIsSettingsOpen: (value: boolean) => void;
};

function Settings({ setShortBreak, setLongBreak, setPomodoro, setSelectedColor , selectedColor, setIsSettingsOpen}: SettingsProps) {
  const [selectedFont, setSelectedFont] = useState("font-kumbh");

  const handleTimeChange = (setter: (value: number) => void) => (value: number | null) => {
    if (value !== null) setter(value * 60);
  };

  const fields = [
    { label: "Pomodoro", onChange: handleTimeChange(setPomodoro) },
    { label: "Short Break", onChange: handleTimeChange(setShortBreak) },
    { label: "Long Break", onChange: handleTimeChange(setLongBreak) },
  ];

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
      <div className="flex justify-between px-10 mb-6">
        {fields.map((field, index) => (
          <Label key={index}>
            <span className="opacity-40">{field.label}</span>
            <Input onChange={field.onChange} />
          </Label>
        ))}
      </div>
      <hr className="h-[1px] w-[460px] self-center bg-[#e3e1e1]" />
      <div className="flex justify-between items-center px-10 my-6">
        <h4 className="text-[13px] font-bold text-[#161932] tracking-[5px]">FONT</h4>
        <div className="flex gap-4 mt-4">
          {fonts.map((font, index) => (
            <button
              key={index}
              className={`w-10 h-10 bg-gray-200 rounded-md hover:scale-110 hover:shadow-lg ${font.class}`}
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
        <h4 className="text-[13px] font-bold text-[#161932] tracking-[5px]">COLOR</h4>
        <div className="flex gap-4">
          {Object.entries(modeColors).map(([key, value]) => (
            <ColorBtn
              key={key}
              color={value}
              onClick={() => handleColorChange(value)}
              aria-label={`Color ${key}`}
            />
          ))}
        </div>
      </div>
      <button
        className={`self-center rounded-[26.5px] ${selectedColor} px-[47px] py-4 mb-[-28px] font-bold text-[16px] text-[#fff]`}
        onClick={() => setIsSettingsOpen(false)}
      >
        Apply
      </button>
    </div>
  );
}

export default Settings;
