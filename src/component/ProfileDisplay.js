import React from 'react'
import { useLocation } from 'react-router-dom'

const tableHeading =[{label: "Name of Repository"},{label:"Description"},{label: "Created on"}]


export default function ProfileDisplay() {
  const location = useLocation()
  const profile= location.state;
  console.log("profile" + profile)
  
  return (
    <>
        <div className='mx-auto max-w-sm w-full'>
         <img src={profile.avatar_url} className='rounded-full' />
         <div className='px-auto'>
          <p className='text-xl font-bold'>{profile.name}</p>
          <p className='text-md'>{profile.login}</p>
          </div>
        </div>
        <div className="p-2 flex mt-8 flex-col align-middle inline-block min-w-full sm:px-6 lg:px-8 flex flex-col">
        <div className="justify-between flex shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className='min-w-full divide-y divide-gray-200'>
            <thead>
            <tr className='divide-x divide-gray-200 '>
            {tableHeading.map((tableHead) => (
              <th className="px-6 py-3 text-xs font-medium text-gray-500 
              uppercase tracking-wider">{tableHead.label}</th>
            ))}
            </tr>
            </thead>  
          {/*} <tbody className="bg-white divide-y divide-gray-200">
              {repo.map((repoData,index) => (
                <tr key={index} className="divide-x divide-gray-200 items-center">
                  <td className="whitespace-nowrap px-3 py-4">{repoData.name}</td>
                  <td  className="whitespace-nowrap px-3 py-4 text-indigo-600">
                  <a href ={repoData.html_url}>{repoData.description}</a>
                  </td>
                  <td className='whitespace-nowrap px-3 py-4'>{repoData.created_at}</td>
                </tr>
              ))}
              </tbody>*/}
              </table>

              </div>

      </div>
        
    </>
  )
}