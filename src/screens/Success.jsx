import "./Success.css";
import bgImg from "../assets/bgimg.png";

function Success() {
  return (
    <div className="h-[100vh]" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="Success-page bg-black bg-opacity-20 h-[100vh] ">
        <div className="text-6xl pt-24 text-white font-serif text-center mx-24">
          Woah! You've{" "}
          <span className="text-green-500">
            {" "}
            Successfully Planted {localStorage.getItem("treeCount")}
          </span>{" "}
          Trees🌳
        </div>
        <div className="text-2xl text-white font-serif font-light text-center mt-10 m-auto w-3/6">
          Congratulations! on taking this important step towards a more
          sustainable future. Your actions truly make a difference, and we are
          grateful for your support.
        </div>
        <div className="text-2xl text-white font-serif text-center font-light  m-auto w-3/6">
          We sincerely appreciate your generous donation and are excited to
          create a tailored planting schedule for you.🎉
        </div>
        <div className="text-lg text-white font-extralight text-center mt-24 mb-12  m-auto w-[98ch]">
          This graph shows the number of users who used our website for donation
          of clothes and plantation. It is very encouraging to see that there
          are a significant number of people who are actively involved in
          donation activities. This reflects the positive attitude of the people
          towards the environment and their willingness to contribute to making
          the world a better place. We hope that this trend continues and more
          and more people join us in this noble cause.
        </div>

        <div className="graph-container mx-auto text-white h-auto flex flex-row items-center justify-center ">
          <div className="graph">
            <ul className="months">
              <li>Jan</li>
              <li>Feb</li>
              <li>Mar</li>
              <li>Apr</li>
              <li>May</li>
              <li>Jun</li>
              <li>Jul</li>
              <li>Aug</li>
              <li>Sep</li>
              <li>Oct</li>
              <li>Nov</li>
              <li>Dec</li>
            </ul>
            <ul className="days">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="squares"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;

setTimeout(() => {
  const squares = document.querySelector(".squares");
  for (var i = 1; i < 365; i++) {
    const level = Math.floor(Math.random() * 3);
    squares.insertAdjacentHTML("beforeend", `<li data-level="${level}"></li>`);
    if (i === 365) {
      break;
    }
  }
}, 1000);
