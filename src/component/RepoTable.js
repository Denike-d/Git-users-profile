import React from 'react';
import { Link } from "react-router-dom";


const tableHeading =[{label: "Name of Repository"},{label:"Description"},{label: "Created on"}]

export default function RepoTable(props) {
    const repoData = props.repo
    return (
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
           <tbody className="bg-white divide-y divide-gray-200">
              {repoData.map((repo,index) => (
                <tr key={index} className="divide-x divide-gray-200 items-center">
                  <td className="whitespace-nowrap px-3 py-4">{repo.name}</td>
                  <td  className="whitespace-nowrap px-3 py-4 text-indigo-600">
                  <a href ={repo.html_url}>{repo.description}</a>
                  </td>
                  <td className='whitespace-nowrap px-3 py-4'>{repo.created_at}</td>
                </tr>
              ))}
              </tbody>
              </table>

              </div>

      </div>
    )
  }