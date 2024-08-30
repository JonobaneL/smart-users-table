type SearchFieldProps = {};

const SearchField = ({}: SearchFieldProps) => {
  return (
    <div>
      <input
        type="text"
        className="w-full text-sm bg-transparent focus:outline-none pb-0.5"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchField;
