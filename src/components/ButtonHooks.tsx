import React from "react";

interface IProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonHooks = ({ children, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="text-xl font-bold bg-purple-600 text-white p-4 rounded shadow hover:bg-purple-700 focus:outline-none active:bg-purple-800"
    >
      {children}
    </button>
  );
};

export default ButtonHooks;
