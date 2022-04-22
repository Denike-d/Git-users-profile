import {useState, useEffect}  from 'react'
import { useNavigate } from "react-router-dom";
import Notification from './Notification';

function HomePage() {
    const [userInput, setUserInput] = useState("");
    const[error, setError] = useState('');
    const[notification, setNotification] = useState(false)

    let navigate = useNavigate()

    const handleChange = e => {
      setUserInput(e.target.value);
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      getapi(api_url);
    }

    const api_url = "https://api.github.com/users/" + userInput

    async function getapi(url) {
     const response = await fetch(url);
     if(response.ok) {
       response.json().then((userPofile) => {
         navigate("/profile", {state: userPofile});
       })
     } else if (response.status == 404) {
        //
        setError('Username is incorrect');

     }
    }
      return (
        <>
          <div className='py-40'>
          <h3 className='flex justify-center font-bold text-2xl tracking-wider'>Github user Finder</h3>
          <form className='flex justify-center px-4 sm:mt-8'>
          <div className="text-gray-400 focus-within:text-gray-600">
          <input
            placeholder="Type a username"
            value={userInput}
            className="block sm:w-64 h-full px-4 border rounded-l-lg border-gray-400 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
            onChange={handleChange}
          />
          </div>
          <div>
              <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClick}
              >Display Profile</button>
          </div>
          </form>
          {error && (<h2 className='flex justify-center mt-4'>
            Username not found</h2> )}
            </div>
          </>
        );
      }
export default HomePage;