import { useState } from "react";

type PopoverProps = {
  children: React.ReactNode[];
};

const Popover = ({ children }: PopoverProps) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="relative h-fit w-fit">
      <div onClick={() => setVisible((p) => !p)}>{children[0]}</div>
      {isVisible && (
        <div
          onBlur={() => setVisible(false)}
          className="absolute z-50 w-64 right-0  bg-white rounded-md shadow-md p-2"
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};

export default Popover;
