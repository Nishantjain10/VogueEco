import tree from "../assets/tree.png";
function Footer() {
  return (
    <div className="w-5/6 md:w-11/12 m-auto mt-16">
      <div className="flex w-2/12 items-center justify-center m-auto mb-10">
        <img className="w-16 mx-2" src={tree}></img>
        <h1 className="text-green-900 md:text-green-100 font-alice text-4xl">
          VogueEco
        </h1>
      </div>
      <div className="w- md:w-11/12 m-auto flex flex-col md:flex-row justify-around">
        <div className="md:w-7/12 flex justify-between">
          <div className="flex flex-col tracking-wider text-sm text-greenishtxt mr-2 text-center">
            <h4 className="text-green-900 md:text-slate-50 mb-3">Navigation</h4>
            <a className="hover:text-green-300" href="#">
              Home
            </a>
            <a className="hover:text-green-300" href="#issues">
              Issues
            </a>
            <a className="hover:text-green-300" href="#">
              Blog
            </a>
            <a className="hover:text-green-300" href="#solutions">
              How it works
            </a>
            <a className="hover:text-green-300" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="flex flex-col tracking-wider text-sm text-greenishtxt text-center">
            <h4 className="text-green-900 md:text-slate-50 mb-3">Statistics</h4>
            <a className="hover:text-green-300" href="#">
              Active users
            </a>
            <a className="hover:text-green-300" href="#">
              Environment Stats
            </a>
            <a className="hover:text-green-300" href="#">
              My Profile
            </a>
            <a className="hover:text-green-300" href="#">
              My Plants
            </a>
            <a className="hover:text-green-300" href="#">
              Awards
            </a>
          </div>
          <div className="flex flex-col tracking-wider text-sm text-greenishtxt text-center">
            <h4 className="text-green-900 md:text-slate-50 mb-3">Learn More</h4>
            <a className="hover:text-green-300" href="#">
              About VogueEco
            </a>
            <a className="hover:text-green-300" href="#">
              How to plant first tree
            </a>
            <a className="hover:text-green-300" href="#">
              About Cloth Donation
            </a>
            <a className="hover:text-green-300" href="#">
              Why you should join us
            </a>
            <a className="hover:text-green-300" href="#">
              Our Planet
            </a>
          </div>
        </div>

        <div
          id="contact"
          className="flex flex-col tracking-wider text-sm text-greenishtxt mt-5 md:mt-0 text-center"
        >
          <h4 className="text-green-900 md:text-slate-50 mb-3">Contact us</h4>
          <p>Medi-Caps University, Pigdamber</p>
          <p>Rau, Indore (M.P), India</p>
          <p>hello@vogueeco.org</p>
          <p>+91-6281090281</p>
          <a
            className="hover:text-green-300 underline"
            href="https://goo.gl/maps/JhfgUnKbQMiCtCiQ9"
          >
            Check on Google Maps
          </a>
        </div>
      </div>
      <div className="w-5/6 md:w-10/12 m-auto py-6 md:py-10 flex flex-col md:flex-row justify-between">
        <div className="md:w-3/12 flex justify-around">
          <button className="rounded-lg w-10 font-alice m-5 tracking-wide rounded-br-none border-[1px] border-slate-200 border-solid p-2 py-1 bg-slate-100 hover:scale-110 transition-all">
            <i class="fa-brands fa-youtube"></i>
          </button>
          <button className="rounded-lg w-10 font-alice m-5 tracking-wide rounded-br-none border-[1px] border-slate-200 border-solid p-2 py-1 bg-slate-100 hover:scale-110 transition-all">
            <i class="fa-brands fa-instagram"></i>
          </button>
          <button className="rounded-lg w-10 font-alice m-5 tracking-wide rounded-br-none border-[1px] border-slate-200 border-solid p-2 py-1 bg-slate-100 hover:scale-110 transition-all">
            <i class="fa-brands fa-twitter"></i>
          </button>
          <button className="rounded-lg w-10 text-lg font-alice m-5 tracking-wide rounded-br-none border-[1px] border-slate-200 border-solid p-2 py-1 bg-slate-100 hover:scale-110 transition-all">
            <i class="fa-brands fa-square-facebook"></i>
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:w-6/12 text-greenishtxt justify-evenly items-center">
          <p className="text-sm">©️ 2022. VoguEco. All Rights Reserved.</p>
          <a className="text-sm hover:text-green-300 underline" href="#">
            Terms & Conditions
          </a>
          <a className="text-sm hover:text-green-300 underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
