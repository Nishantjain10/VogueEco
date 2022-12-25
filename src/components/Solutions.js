const solArr = [
  {
    key: "1",
    heading: "Plantation",
    img: "https://img.freepik.com/free-vector/flat-design-tree-planting-illustration_23-2149198757.jpg?w=2000",
    desc: "Planting trees is an important part of maintaining a healthy environment. Trees help to clean our air, provide shelter, reduce noise pollution, and even provide food. Planting trees can also be a great way to beautify your yard or community. With the right care and attention, your tree can be a beautiful addition to your home or garden.",
    but: "Plant your first tree.",
  },
  {
    key: "2",
    heading: "Donation",
    img: "https://thumbs.dreamstime.com/b/clothes-donation-young-woman-man-putting-to-boxes-hand-drawn-wardrobe-cardboard-vector-illustration-148404426.jpg",
    desc: "Donating clothes is one of the simplest and most effective ways to make a difference in someone's life. It can provide comfort, warmth, and dignity to those in need. Your donation of clothes can provide someone with basic necessities and even a sense of hope. Every donation—no matter how small—has the potential to make a big impact. So, please consider donating your gently used clothing items today. Together, we can make a difference in the lives of those in our community.",
    but: "Learn More.",
  },
];

function SolutionCard(props) {
  return (
    <div className="flex w-[1000px] m-auto bg-slate-50 rounded-2xl shadow-lg justify-around my-14 hover:scale-105 transition-all">
      <div className="w-5/12 p-5">
        <img className="w-full h-96 drop-shadow-xl" src={props.img}></img>
      </div>
      <div className="w-6/12 flex flex-col justify-center">
        <h1 className="font-alice text-4xl font-semibold my-5 text-green-900">
          {props.heading}
        </h1>
        <p className="text-green-800 text-base">{props.desc}</p>
        <button className="w-5/12 my-5 text-lg rounded-lg font-alice tracking-wide transition-all rounded-br-none border-2 bg-greenishtxt shadow-lg text-slate-50 font-medium p-2 hover:bg-greenish hover:font-medium">
          {props.but}
        </button>
      </div>
    </div>
  );
}

function Solutions() {
  const solEl = solArr.map((sol) => {
    return (
      <SolutionCard
        key={sol.key}
        img={sol.img}
        heading={sol.heading}
        desc={sol.desc}
        but={sol.but}
      />
    );
  });
  return (
    <div className="my-[5rem]">
      <h1 className="text-5xl text-green-900 tracking-wide font-alice text-center my-4">
        Some of the solutions.
      </h1>
      <p className="text-center text-lg text-green-700">
        Embracing sustainable practices for a greener future in the textile
        industry
      </p>
      <div>{solEl}</div>
    </div>
  );
}
export default Solutions;
