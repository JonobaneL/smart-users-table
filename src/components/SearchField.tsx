type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchField = ({ value, onChange }: SearchFieldProps) => {
  return (
    <div className="relative flex items-center">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="w-full text-sm bg-transparent focus:outline-none pb-0.5"
        placeholder="Search..."
      />
      {value.length > 0 && (
        <img
          onClick={(e) => {
            e.stopPropagation();
            onChange("");
          }}
          className="absolute size-4 right-1 cursor-pointer"
          src="/remove-icon.svg"
          alt="clear"
        />
      )}
    </div>
  );
};

export default SearchField;
