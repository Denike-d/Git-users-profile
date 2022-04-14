import React from 'react'

export default function ProfileDisplay(props) {

  const profileData = props.profileData
  const error = props.error
  return (
    <>
        <div className='mx-auto max-w-sm w-full'>
         <img src={profileData.avatar_url} className='rounded-full' />
         <div className='px-auto'>
          <p className='text-xl font-bold'>{profileData.name}</p>
          <p className='text-md'>{profileData.login}</p>
          </div>
        </div>
    </>
  )
}