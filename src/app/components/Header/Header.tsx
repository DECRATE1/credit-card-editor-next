export default function Header() {
  return (
    <div className="w-11/12 md:w-full m-auto h-52 min-h-52 items-center md:justify-between text-black">
      <div className="md:w-11/12 h-32 flex items-center md:justify-between justify-center m-auto">
        <div className="hidden md:flex">SKINNY.</div>

        <div className="flex gap-4 md:gap-14 items-center">
          <nav>
            <ul className="flex gap-4 md:gap-14 items-center">
              <div>
                <li>HOME</li>
              </div>
              <div>
                <li>PRODUCT</li>
              </div>
              <div>
                <li>SHOP</li>
              </div>
              <div>
                <li>CONTACTS</li>
              </div>
            </ul>
          </nav>

          <div className="hidden md:flex border-2 border-gray-400 w-36 p-4 rounded-full place-content-center">
            <span>Be a reseller</span>
          </div>
        </div>
      </div>
    </div>
  );
}
