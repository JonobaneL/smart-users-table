type CheckboxProps = {
  label: string;
  checked?: boolean;
  changeHandler: () => void;
};

const Checkbox = ({ label, checked, changeHandler }: CheckboxProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-sm">
      <div className="flex items-center relative justify-center">
        <input
          type="checkbox"
          checked={checked}
          className="peer size-5 appearance-none border border-gray-300 rounded-sm checked:border-primary"
          onClick={changeHandler}
          onChange={() => {}}
        />
        <img
          src="/check-icon.svg"
          className="size-3 absolute opacity-0 peer-checked:opacity-100"
          alt="indicator"
        />
      </div>

      {label}
    </label>
  );
};

export default Checkbox;
