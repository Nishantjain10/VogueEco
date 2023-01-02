import React, { useState, useEffect } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import bgImg from "../assets/bgimg.png";
import infoImg from "../assets/information.png";

const people = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 4,
    name: "4",
  },
  {
    id: 5,
    name: "5",
  },
  {
    id: 6,
    name: "6",
  },
  {
    id: 7,
    name: "7",
  },
  {
    id: 8,
    name: "8",
  },
  {
    id: 9,
    name: "9",
  },
  {
    id: 10,
    name: "10",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Profile() {
  const [selected, setSelected] = useState(people[3]);

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
        console.log(userDetails);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="h-[110vh] flex"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {userDetails ? (
        <div>
          <div className="min-h-min max-w-7xl mx-auto shadow-lg flex justify-between bg-lime-800 text-right py-3 px-3 rounded-md">
            <div>
              <p className="text-xl text-slate-50">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 px-10 text-white py-2 justify-self-center rounded-md hover:bg-transparent hover:border-[1px] hover:border-slate-50"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 mx-24 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-slate-200">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-200 mb-10">
                    Use a permanent address where you can receive mail.
                  </p>
                  <img src={infoImg}></img>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={userDetails?.name}
                            className="mt-1 block w-full rounded-md border-[1px] border-gray-400 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-[1px] border-gray-400 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            value={userDetails?.email}
                            className="mt-1 block w-full rounded-md border-gray-400 border-[1px] p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border-[1px] border-gray-400 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>India</option>
                            <option>United Kingdom</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-md border-gray-400 border-[1px] p-[1.5px] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 block w-full rounded-md border-gray-400 border-[1px] p-[1.5px] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 block w-full rounded-md border-gray-400 border-[1px] p-[1.5px] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="mt-1 block w-full rounded-md border-gray-400 border-[1px] p-[1.5px] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-lime-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-xl text-center my-5 font-medium text-slate-50">
                  Plant A Tree🌳
                </Listbox.Label>
                <div className="relative flex flex-row  justify-center items-center  mt-4">
                  <Listbox.Button className=" relative w-1/6  cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute  z-10 mt-1 max-h-56 w-1/6 overflow-auto text-center rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "  block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <div className="flex flex-row  justify-center my-5">
            <Link
              className="group relative flex flex-row  justify-center items-center w-2/6 rounded-md border border-transparent bg-lime-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              to={"/success"}
              onClick={() => {
                let noOfTrees = selected;
                localStorage.setItem("treeCount", selected.name);
              }}
            >
              <button type="submit" className="">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Submit the form.
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-4/12 m-auto shadow-lg flex flex-col items-center bg-slate-100 py-3 px-3 rounded-lg">
          <p className="text-2xl text-green-900 font-semibold m-10">
            Oops.. Please Login to see Profile
          </p>
          <img src={infoImg}></img>
          <Link className="w-8/12 flex" to="/login">
            <button className="bg-green-700 m-auto my-10 w-full px-10 text-white text-xl py-2 justify-self-center rounded-md hover:bg-transparent hover:border-[1px] hover:border-stone-700 hover:text-lime-800 ">
              Go to Login Page.
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profile;

const greetArr = [
  "Howdy!",
  "What's up?",
  "Hola!",
  "Yo!",
  "Sup?",
  "Hail!",
  "Salutations!",
  "Cheers!",
];

const getRandomResearchTitle = () => {
  return greetArr[Math.floor(Math.random() * greetArr.length)];
};
