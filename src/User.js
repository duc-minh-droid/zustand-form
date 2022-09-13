import React from 'react'

function User({user}) {
  return (
    <>
        <div>
            {user.name}
        </div>
        <div>
            {user.age}
        </div>
        <div>
            {user.gender}
        </div>
        <div>
            {user.major}
        </div>
        <div>
            {user.mail}
        </div>
    </>
  )
}

export default User