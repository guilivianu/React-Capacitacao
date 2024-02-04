import React from "react";

interface IProps {
  children: React.ReactNode;
  disable?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, disable, onClick }: IProps) => {
  const handleClick = () => {
    console.log("Oi!");
  };
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className="p-2 bg-red-200 rounded shadow-xl hover:bg-red-300"
    >
      {children}
    </button>
  );
};

export default Button;
