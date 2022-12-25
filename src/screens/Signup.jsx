import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import {account} from '../appwrite/appwriteConfig'
import {useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import bgImg from "../assets/bgimg.png";

function Signup() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('');
    const [submit, setSubmit] = useState(false);
    const ALAN_Key = `96bd99c3882a0fa848348b1c9fd575412e956eca572e1d8b807a3e2338fdd0dc/stage`
  useEffect(() => {
    alanBtn({
        key: ALAN_Key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            setName(commandData.data)
          }
          if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          if(commandData.command === 'address'){
            setAddress(commandData.data)
          }
          if (commandData.command === 'submit'){ 
              document.getElementById('submit-button').click()
              document.getElementById('submit-button').focus()
              console.log('submit-working');
              console.log(document.getElementById('submit-button'));
          }
        }
    });
  }, []);



    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    //Signup 
    const signupUser = async (e) => {
        e.preventDefault()

        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        );

        promise.then(
            function(response){
                console.log(response);
                navigate("/profile") //success
            },
            function(error) {
                console.log(error); // Failure
            }
        )


    }

  return (
    <div className='h-[100vh]' style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center text-2xl font-boldtext-center font-poppins text-white ml-12 font-bold text-3xl">Sign up</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-24 w-[500px] px-12 shadow sm:rounded-xl">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                  
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                    onChange={(e) => {
                        setName({
                            ...user,
                            name: e.target.value
                        })
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                    onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }}
                    />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-lg"
                    onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-700 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={signupUser}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup