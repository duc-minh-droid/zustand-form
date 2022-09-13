import React from 'react'
import useStore from "./store";
import User from './User';

function Users() {
    const users = useStore(state => state.users)
    if (users.length === 0) return "No user"
    return (
        <div className='bg-cyan-400 p-3 rounded-lg'>
            <p>List of users</p>
            <div className='grid grid-cols-5'>
                <div>Name</div>
                <div>Age</div>
                <div>Gender</div>
                <div>Major</div>
                <div>Mail</div>
                {users.length > 0 && users.map((user, id) =>
                    <User user={user} id={id}/>
                )}
            </div>
        </div>
    )
}

export default Users