import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white flex flex-col md:py-32 md:w-9/12 m-auto">
      <h1 className="w-5/6 mt-24 mb-2 mx-auto md:text-center text-6xl font-alice tracking-wide">
        Save the planet from your sense of style.
      </h1>
      <p className="w-5/6 md:w-9/12 mx-auto mt-4 text-lg md:text-center my-10 text-slate-200 tracking-wide">
        VogueEco is a project, which focusses on creating awareness about the
        rising issue of using Synthetic fibres for manufacturing of cheap
        clothes, which ultimately impacts our environment drastically without us
        knowing anything about it.
      </p>
      <div className="flex flex-col md:flex-row w-5/6 m-auto justify-center font-serif">
        <Link className="font-serif w-full md:w-72" to={"/Profile"}>
          <button className="bg-slate-50 text-lg w-full md:w-11/12 font-poppins md:m-5 tracking-wide rounded-md border-2  border-slate-200 border-solid p-2 md:px-6 text-stone-800 rounded-br-none hover:font-medium transition-all  hover:bg-transparent hover:scale-105 hover:text-slate-50">
            Plant your first tree.
          </button>
        </Link>
        <button className="text-lg font-poppins my-5 md:m-5 tracking-wide hover:font-medium rounded-md border-2 border-slate-200 border-solid p-2 px-10 rounded-br-none hover:scale-105 transition-all hover:text-green-900 hover:bg-slate-50">
          <a href="https://devpost.com/software/vogueeco-enkp1w">Learn More.</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
