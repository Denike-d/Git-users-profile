import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LocationLogo from './LocationLogo.png'
import LocationMarkerIcon from "@heroicons/react/outline"

const tableHeading =[{label: "Name of Repository"},{label:"Description"},{label: "Created on"}]

export default function ProfileDisplay() {
  const[repo, setRepo] = useState([{}])
  const location = useLocation()
  const profile= location.state;

  const repo_url = "https://api.github.com/users/" + profile.login +"/repos";
  const address = "https://www.google.com/maps/place/" + profile.location

  fetch(repo_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setRepo(data);
  });

  return (
    <>
      <div> 
      <div className="block lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 border-r border-gray-200">
        <div className='flex-1 p-8 flex min-h-0 bg-zinc-200'>
         <div className='mx-auto space-y-2'>
         <img src={profile.avatar_url} className='rounded-full w-40 h-40 mx-auto' />
          <p className='text-xl font-bold'>{profile.name}</p>
          <p className='text-md'>@{profile.login}</p>
          <div className='flex justify-between text-cyan-700'>
          <p>{profile.location}</p>
          <a href={address}>
          <LocationMarkerIcon className="w-4 h-4" />
          </a>
          </div>
          <hr className='bg-gray-400'></hr>
          <p className='flex justify-between'>Followers <span className='px-2 rounded-lg text-white bg-cyan-700'>{profile.followers}</span></p>
          <p className='flex justify-between'>Following <span className='px-2 rounded-lg text-white bg-cyan-700'>{profile.following}</span></p>
          <p className='flex justify-between'>Public Repos <span className='px-2 rounded-lg text-white bg-cyan-700'>{profile.public_repos}</span></p>
          </div>
        </div>
      </div>
      <div className="lg:ml-72 min-h-screen">
      <div className="md:p-8 container mx-auto">
      <h3 className='font-medium text-xl mb-4 text-cyan-700'>Public Repositories</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {repo.map((repoData, index) => (
        <div
          key={index}
          className="relative rounded-lg border border-gray-300 bg-white px-5 py-4 shadow-sm flex items-center hover:border-cyan-700 hover:border-2 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <a href={repoData.html_url}>
          <div className="flex-1 min-w-0 space-y-2">
            <p className="text-sm font-medium text-indigo-500">{repoData.name}</p>
            <div>
            <p></p><span className='text-gray-900'>{repoData.description}</span>
            </div>
          </div>
          </a>
        </div>
      ))}
    </div>        
      </div>
      </div>
      </div>
    </>
  )
}
