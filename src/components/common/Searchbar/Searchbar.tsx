import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searchbar = () => {
  return (
    <div className="relative flex-1 rounded-full shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        className="text-md block w-full rounded-full bg-gray-100 py-1 pl-10 focus:outline-sky-500 dark:bg-neutral-700 lg:py-2"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
