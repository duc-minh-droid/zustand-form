import React from 'react'
import useStore from "./store";
import User from './User';

function Users() {
  const users = useStore(state=>state.users)
  return (
    <div>
        {users.length > 0 ? users.map((user,id)=><div><User user={user}/></div>)
        : 'No user here yet'}
    </div>
  )
}

export default Users