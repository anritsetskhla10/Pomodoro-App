
type ColorBtnProps = {
  color: string;
  onClick?: () => void;
};

function ColorBtn({ color, onClick }: ColorBtnProps) {
  return (
    <button
      className={`w-10 h-10 rounded-[50%] ${color}`}
      onClick={onClick}
    />
  );
}

export default ColorBtn;