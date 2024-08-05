export default function SearchBar() {
  return (
    <div className="w-screen md:w-[35rem] mt-5 mb-9">
      <div className="flex h-14">
        <input
          type="search"
          placeholder="Search Design"
          className="w-full bg-black pl-4 border-2 rounded-full"
        ></input>
      </div>
    </div>
  );
}
