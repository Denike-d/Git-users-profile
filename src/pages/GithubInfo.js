import React from 'react'
import ProfileDisplay from '../component/ProfileDisplay'
import RepoTable from '../component/RepoTable'

export default function GithubInfo() {
  return (
    <div>
      <ProfileDisplay />
      <RepoTable />
    </div>
  )
}
