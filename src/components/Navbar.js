import tree from "../assets/tree.png";
import user from "../assets/user.svg";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";

function Navbar() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenu = () => {
    setOpenNav(!openNav);
  };

  console.log(openNav);

  return (
    <>
      <div className="flex justify-between md:justify-around md:w-11/12 m-auto text-slate-300 p-5">
        <div className="flex w-2/12">
          <img className="w-12 mb-1 mr-2" src={tree}></img>
          <h1 className="text-slate-50 mt-1 font-alice text-3xl">VogueEco</h1>
        </div>
        <button onClick={handleMenu}>
          {!openNav ? (
            <HiMenu className="w-10 h-10 md:hidden cursor-pointer" />
          ) : (
            <RxCross2 className="w-10 h-10 md:hidden cursor-pointer" />
          )}
        </button>

        <div className="hidden md:block w-6/12">
          <ul className="flex text-lg justify-around mt-2 p-2">
            <li>
              <a
                className="hover:text-white transition-all text-white font-medium"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#issues">
                Issues
              </a>
            </li>

            <li>
              <a className="hover:text-white" href="#solutions">
                How it works
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contact">
                Get in Touch
              </a>
            </li>
            <li>
              <a
                className="hover:text-white"
                href="https://github.com/Nishantjain10/VogueEco#readme"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          {userDetails ? (
            <Link className="font-serif" to={"/"}>
              <button
                className="text-lg flex p-3 text-slate-50 border-2 rounded-lg border-slate-500 border-solid hover:bg-slate-50  hover:text-green-900 transition-all"
                onClick={handleLogout}
              >
                <img className="mr-2 hover:" src={user}></img> Logout
              </button>
            </Link>
          ) : (
            <Link className="font-serif" to={"/login"}>
              <button className=" text-lg flex p-3 text-slate-50 border-2 rounded-lg border-slate-500 border-solid hover:bg-slate-50  hover:text-green-900 transition-all">
                <img className="mr-2 hover:" src={user}></img> Login/Signup
              </button>
            </Link>
          )}
        </div>
      </div>
      {openNav && (
        <>
          <ul className="bg-greenishtxt">
            <li className="text-center py-3 text-base hover:bg-greenish hover:text-green-200 border border-greenish/50 hover:font-bold">
              <a href="#">Home</a>
            </li>
            <li className="text-center py-3 text-base hover:bg-greenish hover:text-green-200 border border-greenish/50 hover:font-bold">
              <a href="#issues">Issues</a>
            </li>
            <li className="text-center py-3 text-base hover:bg-greenish hover:text-green-200 border border-greenish/50 hover:font-bold">
              <a href="#solutions">How it Works</a>
            </li>
            <li className="text-center py-3 text-base hover:bg-greenish hover:text-green-200 border border-greenish/50 hover:font-bold">
              <a href="#contact">Get in Touch</a>
            </li>
          </ul>
          <div>
            {userDetails ? (
              <Link className="font-serif " to={"/"}>
                <button
                  className="text-base bg-greenishtxt flex justify-center p-2 text-slate-800 border-2 w-full border-slate-500 border-solid hover:bg-slate-50 hover:font-bold hover:text-green-900 transition-all"
                  onClick={handleLogout}
                >
                  Logout <img className="ml-2" src={user}></img>
                </button>
              </Link>
            ) : (
              <Link className="font-serif" to={"/login"}>
                <button className=" text-base bg-greenishtxt flex justify-center p-2 text-slate-800 border-2 w-full border-slate-500 border-solid hover:bg-slate-50 hover:font-bold hover:text-green-900 transition-all">
                  Login/Signup <img className="ml-2 " src={user}></img>
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
