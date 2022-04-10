import React from 'react'

const tableHeading =[{label: "Name"},{label:"Description"},{label: "Created on"}]

export default function RepoTable(props) {
    const repoData = props.repo
    const hasRepoData = repoData.length > 0;
    return (
      <div>
      <table>
            <thead>
            <tr>
            {tableHeading.map((tableHead) => (
              <th>{tableHead.label}</th>
            ))}
            </tr>
            </thead>
            <tbody>
              {repoData.map((repo,index) => (
                <tr key={index}>
                  <td>{repo.name}</td>
                  <td>{repo.description}</td>
                  <td>{repo.created_at}</td>
                </tr>
              ))}
              </tbody>
              </table>
      </div>
    )
  }