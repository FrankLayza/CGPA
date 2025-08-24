import { useAppContext } from "../contexts/AppContext";
const Navbar = () => {
  const { preview } = useAppContext();
  return (
    <div className="bg-neo-white neo-card border-3 p-4 rounded mx-6">
      <div className="flex justify-end items-center gap-3">
        {/* Add your navbar content here */}
        {/* <div className="rounded-full size-9 border-2 cursor-pointer"></div> */}

        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="retro"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        <div className="avatar size-9 cursor-pointer">
          <div className="ring-neutral ring-offset-base-100 rounded-full ring-2 ring-offset-2">
            <img src={preview.img} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
