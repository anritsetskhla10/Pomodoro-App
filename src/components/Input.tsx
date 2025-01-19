import { InputNumber } from 'antd';
import '../index.css';


type InputProps = {

  value: number;

  onChange: (value: number | null) => void;

};


const Input = ({ value, onChange }: InputProps) => (
  <InputNumber
    min={0}
    value={value === 0 ? null : value} 
    onChange={(value) => onChange(value)}
    changeOnWheel
    className="custom-input-number"
  />
);

export default Input;
