import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-[21px] top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        type="text"
        placeholder="Pesquisar evento"
        className="!text-[18px] font-regular h-auto py-[16px] pl-[50px] pr-4 border rounded-[13px] w-full shadow-none focus:outline-none focus:ring-0 focus:shadow-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
