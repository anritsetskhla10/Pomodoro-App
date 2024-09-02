import ColorBtn from "./ColorBtn"
import Input from "./Input"
import Label from "./Label"

function Settings() {
  return (
    <div className=" bg-white pt-[34px]  rounded-3xl absolute z-50 top-[155px] ">
      <div className="flex flex-col relative">
        <h2 className="text-[28px] font-bold text-[#161932] mb-[31px] px-[40px]">Settings</h2>
        <hr className="h-[1px] w-full bg-[#e3e1e1]"/>
        <h4 className="text-[13px] font-bold text-[#161932] mt-[28px] mb-[31px] px-[40px] tracking-[5px]">TIME (MINUTES)</h4>
        <div className="flex gap-5 px-10 mb-6">
          <Label>
              <span className="opacity-40">Pomodoro</span>
              <Input></Input>
          </Label>
          <Label>
              <span className="opacity-40">short break</span>
              <Input></Input>
          </Label>
          <Label>
          <span className="opacity-40">long break</span>
              <Input></Input>
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
        <button className="absolute bottom-0 self-center top-[100%] rounded-[26.5px] 
        bg-[#f87070] px-[47px] py-4 font-bold text-[16px] text-[#fff]">Apply</button>
      </div>
    </div>
  )
}

export default Settings
