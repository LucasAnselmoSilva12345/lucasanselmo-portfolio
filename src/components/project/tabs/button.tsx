import { ButtonHTMLAttributes } from 'react';

type IButton = {
  isActive: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ isActive, children, ...props }: IButton) {
  const activeStyles = 'bg-transparent border border-gray-800 text-gray-800';
  const inactiveStyles = 'bg-neutral-200 text-neutral-400';

  return (
    <button
      className={`py-2 px-4 text-xs font-medium flex items-center gap-1 ${
        isActive ? activeStyles : inactiveStyles
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
