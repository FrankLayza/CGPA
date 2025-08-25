import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { preview } = useAppContext();
  return (
    <div className="bg-neo-white neo-card border-3 p-4 rounded mx-6">
      <div className="flex justify-between items-center gap-3">
        {/* Add your navbar content here */}
        {/* <div className="rounded-full size-9 border-2 cursor-pointer"></div> */}
        <Link to={"/home"} className="text-3xl font-bold">
          GPAlytics
        </Link>
        <div className="avatar dropdown dropdown-bottom dropdown-hover size-9 cursor-pointer">
          <div
            tabIndex={0}
            className="ring-neutral ring-offset-base-100 rounded-full ring-2 ring-offset-2"
          >
            <img src={preview.img} alt="Profile Picture" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-20 p-2 shadow-sm"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <Link to={'/'}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
