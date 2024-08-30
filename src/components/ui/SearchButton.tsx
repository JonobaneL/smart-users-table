type SearchButtonProps = {
  active: boolean;
  callback: () => void;
};

const SearchButton = ({ active, callback }: SearchButtonProps) => {
  return (
    <button
      onClick={callback}
      className={`w-fit h-fit rounded-sm hover:bg-gray-100 ${
        active ? "bg-gray-100" : "bg-transparent"
      }`}
    >
      <img className="size-6" src="/search-icon.svg" alt="search" />
    </button>
  );
};

export default SearchButton;
