import React, { useEffect, useState } from 'react'

function Github() {
    
    const [data, setdata]= useState({})
    useEffect (()=>{
        fetch('https://api.github.com/users/Az1402')
        .then(response=>response.json())
        .then(data=>{
            setdata(data)
        })
    })

  return (
    <div className=' text-center m-4 p-4 text-3xl bg-slate-500' >
        <img src={data.avatar_url }alt="gitProfile" width={150}/>
      Github Followers :{data.followers}

    </div>
  )
}

export default Github
