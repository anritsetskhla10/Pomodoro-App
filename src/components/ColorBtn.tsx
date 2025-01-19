type ColorBtnProps = {
  color: string;
  onClick?: () => void;
  selected?: boolean;
};

function ColorBtn({ color, onClick, selected }: ColorBtnProps) {
  return (
    <button
      className={`relative w-10 h-10 rounded-full ${color} flex items-center justify-center`}
      onClick={onClick}
      aria-label={`Color button ${color} ${selected ? "selected" : ""}`}
    >
      {selected && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
  );
}

export default ColorBtn;
