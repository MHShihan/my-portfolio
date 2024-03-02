const Navbar = () => {
  return (
    <div className=" bg-transparent text-white">
      <div className="navbar max-w-[1366px] mx-auto">
        <a className="flex-1  items-center" href="home">
          <img className="rounded-full" src="/src/assets/logo.png" alt="" />
          <span className="pl-1 text-2xl font-bold">Dev Shihan</span>
        </a>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
