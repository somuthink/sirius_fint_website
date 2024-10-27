interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full  py-[1rem] px-[1.125rem] text-xs text-gray-500 bg-gray-100 rounded-2xl border-none focus:outline-none"
      {...props}
    />
  );
};

export default Input;
