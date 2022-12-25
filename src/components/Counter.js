import { Link } from "react-router-dom";
function Counter() {
  const counterArr = ["9", "5", "2", "0", "2", "1"];
  const counterCard = counterArr.map((count) => {
    return (
      <div className="w-[10%] h-32 text-8xl text-slate-50 rounded-md p-5 bg-greenish shadow-2xl hover:scale-[1.03]">
        {count}
      </div>
    );
  });
  return (
    <div className="w-11/12 m-auto p-20 border-b-[1px] border-green-800 border-solid">
      <div className="w-8/12  m-auto">
        <h1 className="text-5xl text-green-100 tracking-wide font-alice mt-24 text-center my-4">
          Trees planted by VogueEco users.
        </h1>
        <p className="text-center text-lg text-green-200">
          As you can see, we actively encourage and take part in a global
          initiative, thanks to which our planet has a chance to revive.
        </p>
      </div>
      <div className="w-9/12 m-auto mt-10 h-44 flex justify-evenly">
        {counterCard}
      </div>
      <div className="w-9/12 m-auto flex justify-center">
        <Link className="font-serif" to={"/plant"}>
          <button className="bg-slate-50 font-alice m-5 tracking-wide rounded-md rounded-br-none border-2 border-slate-200 border-solid p-2 px-6 text-stone-800 font-medium hover:bg-transparent hover:text-green-50">
            Plant your first tree.
          </button>
        </Link>
        <button className="rounded-lg text-green-100 font-alice m-5 tracking-wide rounded-br-none border-2 border-slate-200 border-solid p-2 px-10 hover:bg-slate-100 hover:text-green-900">
          Learn More.
        </button>
      </div>
    </div>
  );
}
export default Counter;
