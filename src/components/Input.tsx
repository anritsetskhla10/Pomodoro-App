import { InputNumber } from 'antd';
import '../index.css';

type InputProps = {
  value: number;
  onChange: (value: number | null) => void;

};


const Input = ({ onChange }: InputProps) => (
  <InputNumber
    min={0}
    onChange={onChange}
    changeOnWheel
    className="custom-input-number"
  />
);

export default Input;
