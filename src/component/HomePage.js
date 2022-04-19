import {useState, useEffect}  from 'react'
import { useNavigate } from "react-router-dom";


function HomePage() {
    const [userInput, setUserInput] = useState("");
    const[error, setError] = useState('');

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
          <form>
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <input
            placeholder="Type a username"
            value={userInput}
            className="block w-full h-full py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
            onChange={handleChange}
          />
          </div>
          <div>
              <button 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClick}
              >Display Profile</button>
          </div>
          </form>
          </>
        );
      }
  export default HomePage;