import tree from "../assets/tree.png";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";

function Navbar() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

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

  return (
    <div className="flex justify-around w-11/12 m-auto text-slate-300 p-5">
      <div className=" flex w-2/12">
        <img className="w-12 mb-1 mr-2" src={tree}></img>
        <h1 className="text-slate-50 mt-1 font-alice text-3xl">VogueEco</h1>
      </div>
      <div className="w-5/12">
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
            <a className="hover:text-white" href="#">
              Blog
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
        </ul>
      </div>
      <div>
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
      {/* <div className={className}>
        <Link className="font-serif" to={"/login"}>
          <button className=" text-lg flex p-3 text-slate-50 border-2 rounded-lg border-slate-500 border-solid hover:bg-slate-50  hover:text-green-900 transition-all">
            <img className="mr-2 hover:" src={user}></img> Login/Signup
          </button>
        </Link>
      </div>
      <div className={className2}>
        <Link className="font-serif" to={"/"}>
          <button
            className="text-lg flex p-3 text-slate-50 border-2 rounded-lg border-slate-500 border-solid hover:bg-slate-50  hover:text-green-900 transition-all"
            onClick={handleLogout}
          >
            <img className="mr-2 hover:" src={user}></img> Logout
          </button>
        </Link>
      </div> */}
    </div>
  );
}

export default Navbar;
