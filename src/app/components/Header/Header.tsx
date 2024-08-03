export default function Header() {
  return (
    <div className="w-full h-52 min-h-52 items-center justify-between text-black">
      <div className="w-11/12 h-32 flex items-center justify-between m-auto">
        <div>SKINNY.</div>

        <div className="flex gap-14 items-center">
          <nav>
            <ul className="flex gap-14">
              <li>HOME</li>
              <li>PRODUCT</li>
              <li>SHOP</li>
              <li>CONTACTS</li>
            </ul>
          </nav>

          <div className="flex border-2 border-gray-400 w-36 p-4 rounded-full place-content-center">
            <span>Be a reseller</span>
          </div>
        </div>
      </div>
    </div>
  );
}
