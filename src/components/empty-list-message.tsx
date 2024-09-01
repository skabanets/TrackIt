"use client";

interface EmptyListMessageProps {
  message: string;
}

export const EmptyListMessage = ({ message }: EmptyListMessageProps) => {
  return (
    <div className="w-fll flex h-[calc(100vh-400px)] items-center justify-center">
      <h2 className="text-2xl text-textColor">{message}</h2>
    </div>
  );
};
