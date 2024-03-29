import IssuesArr from "./IssuesArr";

function IssueCard(props) {
  return (
    <div className="md:w-[24%] cursor-pointer m-2 mt-12 rounded-2xl drop-shadow-2xl bg-greenishtxt mx-auto transition-all hover:scale-105">
      <img className="w-full h-72 md:h-4/6 rounded-xl" src={props.img}></img>
      <div>
        <p className="text-center p-5 pb-8 text-base text-green-900 font-medium">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

function Issues() {
  const issuesEl = IssuesArr.map((issue) => {
    return <IssueCard key={issue.key} img={issue.img} desc={issue.desc} />;
  });
  return (
    <div
      id="issues"
      className="flex w-5/6 md:w-11/12 m-auto flex-col mb-24 mt-56 md:mt-0"
    >
      <div className="mb-10">
        <h2 className="text-5xl text-white tracking-wide font-alice md:text-center my-4">
          Lack of sustainability looms large.
        </h2>
        <p className="md:text-center text-lg text-slate-200">
          Textile Industry's Wasteful Practices Taking a Toll on our Planet
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:w-11/12 m-auto">
        {issuesEl}
      </div>
      <button className="md:w-2/12 text-lg mt-24 mb-10 md:mx-auto hover:font-medium rounded-lg transition-all font-alice tracking-wide text-green-100 rounded-br-none border-2 shadow-lg border-green-100 border-solid p-2 px-10 hover:bg-slate-100 hover:text-green-900">
        <a href="https://github.com/Nishantjain10/VogueEco#readme">
          Discover More
        </a>
      </button>
    </div>
  );
}

export default Issues;
