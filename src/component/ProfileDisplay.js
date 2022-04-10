import React from 'react'

export default function ProfileDisplay(props) {

  const profileData = props.profileData
  const error = props.error
  return (
    <>
        <div>
          <img src={profileData.avatar_url} />
          <p>{profileData.name}</p>
          <p>{profileData.login}</p>
        </div>
    </>
  )
}