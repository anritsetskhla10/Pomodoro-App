import ColorBtn from "./ColorBtn";
import Input from "./Input";
import Label from "./Label";

type SettingsProps = { 
  setShortBreak: (value: number) => void, 
  setLongBreak: (value: number) => void ,
  setPomodoro: (value: number) => void 
}

function Settings({ setShortBreak, setLongBreak, setPomodoro }: SettingsProps) {
  
  const handlePomodoroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPomodoro(Number(event.target.value));
  };

  const handleShortBreakChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShortBreak(Number(event.target.value));
  };

  const handleLongBreakChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongBreak(Number(event.target.value));
  };

  return (
    <div className=" bg-white pt-[34px]  rounded-3xl absolute z-50 top-[155px] ">
        <h2 className="text-[28px] font-bold text-[#161932] mb-[31px] px-[40px]">Settings</h2>
        <hr className="h-[1px] w-full bg-[#e3e1e1]"/>
        <h4 className="text-[13px] font-bold text-[#161932] mt-[28px] mb-[31px] px-[40px] tracking-[5px]">TIME (MINUTES)</h4>
        <div className="flex gap-5 px-10 mb-6">
          <Label>
              <span className="opacity-40">Pomodoro</span>
              <Input onChange={handlePomodoroChange}></Input>
          </Label>
          <Label>
              <span className="opacity-40">short break</span>
              <Input onChange={handleShortBreakChange}></Input>
          </Label>
          <Label>
          <span className="opacity-40">long break</span>
              <Input onChange={handleLongBreakChange}></Input>
          </Label>
        </div>
        <hr  className="h-[1px] w-[460px] self-center bg-[#e3e1e1] "/>
        <div className="flex justify-between items-center px-10 my-6">
          <h4 className="text-[13px] font-bold text-[#161932]  tracking-[5px]">FONT</h4>
          <div className="flex gap-4"> 
              <button className="FontBtnDef font-kumbh">Aa</button>
              <button className="FontBtnDef font-roboto">Aa</button>
              <button className="FontBtnDef font-space">Aa</button>
          </div>
        </div>
        <hr  className="h-[1px] w-[460px] self-center bg-[#e3e1e1] "/>
        <div className="flex justify-between items-center px-10 my-6">
          <h4 className="text-[13px] font-bold text-[#161932]   tracking-[5px]">COLOR</h4>
          <div className="flex gap-4">
              <ColorBtn  />
              <ColorBtn  />
              <ColorBtn  />
          </div>
        </div>
        <button className="self-center rounded-[26.5px] 
        bg-[#f87070] px-[47px] py-4 mb-[-28px] font-bold text-[16px] text-[#fff]">
          Apply
        </button>
      </div>
  )
}

export default Settings
