import Calculator from "./Calculator";
import Button from "../components/Button";

const Home = () => {
 
  return (
    <div className="font-rubik bg-neo-blue min-h-screen mx-auto my- w-full flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-5xl my-10 mx-auto">
        <h2 className="text-4xl text-neo-black font-bold">GPA CALCULATOR</h2>

        <div className="">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
