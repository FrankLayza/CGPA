import Calculator from "./Calculator";

const Home = () => {
  return (
    <div className="mx-auto w-full flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-5xl my-10 mx-auto">
        <h2 className="text-4xl text-neo-black font-bold mt-8">GPA CALCULATOR</h2>
        <div className="">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
