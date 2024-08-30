import { useRef, useState } from "react";
import { useEventListener } from "../../hooks/useEventListener";

type PopoverProps = {
  children: React.ReactNode[];
};

const Popover = ({ children }: PopoverProps) => {
  const [isVisible, setVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const onBlur = (e: Event) => {
    if (!contentRef.current?.contains(e.target as Node)) {
      setVisible(false);
    }
  };
  useEventListener("click", onBlur);

  return (
    <div className="relative h-fit w-fit">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setVisible((p) => !p);
        }}
      >
        {children[0]}
      </div>
      {isVisible && (
        <div
          ref={contentRef}
          className="absolute z-50 w-64 right-0  bg-white rounded-md shadow-md p-2"
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};

export default Popover;
