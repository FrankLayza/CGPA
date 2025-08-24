import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-neo-blue">
        <div className="py-5 px-8 rounded-md neo-form">
          <form action="">
            <div className="my-4">
            <p className="font-semibold text-xl leading-none">Sign up</p>
            <p className="text-sm font-base">
              Enter your details to create an account
            </p>
          </div>

          <label htmlFor="firstName" className="font-semibold">
            First Name
          </label>
          <br />
          <input
            className="bg-neo-white border-2 border-neo-black w-full px-2 py-1 rounded"
            type="text"
            id="firstName"
            placeholder="John"
          />
          <br />
          <label htmlFor="lastName" className="font-semibold">
            Last Name
          </label>
          <br />
          <input
            className="bg-neo-white border-2 border-neo-black w-full px-2 py-1 rounded"
            type="text"
            id="lastName"
            placeholder="Doe"
          />
          <br />
          <div className="my-5">
            <div className="flex items-center justify-between">
                <label htmlFor="" className="font-semibold">
                  Password
                </label>
                <Link className="text-xs">Forgot your password?</Link>
            </div>
            <input
              className="bg-neo-white border-2 border-neo-black w-full px-2 py-1 rounded"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-4 gap-4 text-sm font-semibold">
            <button type="button" className="bg-neo-blue cursor-pointer neo-form-button py-1 rounded" onClick={() => navigate('/home')}>Login</button>
          
          </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default SignUp;
