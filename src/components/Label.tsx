import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <label className='flex flex-col gap-2 font-kumbh 
  text-[12px] text-bold text-textColors-darkGray '>{children}</label>;
};

export default Label;