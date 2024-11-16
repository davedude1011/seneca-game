import { ReactNode } from "react";

export default function QuestionBlock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-fit w-fit max-w-[70rem] items-center rounded-md border-[1px] border-gray-600 bg-card ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
