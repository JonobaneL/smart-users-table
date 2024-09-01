import { useRef, useState } from "react";
import { useEventListener } from "../../hooks/useEventListener";
import { cn } from "../../lib/ustils";

type PopoverProps = {
  children: React.ReactNode[];
};
type PopoverContentProps = {
  children: React.ReactNode;
  className?: string;
};

const Popover = ({ children }: PopoverProps) => {
  const [isVisible, setVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const onBlur = (e: Event) => {
    if (!contentRef.current?.contains(e.target as Node)) {
      setVisible(false);
    }
  };
  useEventListener("mousedown", onBlur);

  return (
    <div ref={contentRef} className="relative h-fit w-fit">
      <div
        className="flex items-center w-fit h-fit"
        onClick={() => {
          setVisible((p) => !p);
        }}
      >
        {children[0]}
      </div>
      {isVisible && children[1]}
    </div>
  );
};

const PopoverContent = ({ children, className = "" }: PopoverContentProps) => {
  return (
    <div
      className={cn(
        "absolute z-50 w-64 right-0 bg-white rounded-md shadow-md p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Popover, PopoverContent };
