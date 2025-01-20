import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <label className='flex flex-col gap-2 font-kumbh 
  text-[12px] text-bold text-textColors-darkGray max-sm:flex-row max-sm:items-center max-sm:justify-between'>{children}</label>;
};

export default Label;