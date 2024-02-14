import React from 'react'
import { useParams } from 'react-router-dom'  // It show the ids of the any components

function User() {
    const  {UserId}= useParams()
  return (
    <div>
      <div className=' text-center'>user: {UserId}</div>
    </div>
  )
}

export default User
