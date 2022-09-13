import React, { useState } from 'react'
import useStore from './store'

function Form() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(16)
    const [gender, setGender] = useState("")
    const [major, setMajor] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")

    const resetForm = () => {
        setName('')
        setAge(0)
        setGender('')
        setMajor('')
        setMail('')
        setPass('')
    }

    const postUser = useStore(state => state.postUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name,
            age,
            gender,
            major,
            mail,
            pass,
        }
        postUser(data)
        resetForm()
    }

    return (
        <form className='bg-cyan-400 p-4 rounded-lg flex flex-col'
        onSubmit={handleSubmit}>
            <div>
                <p>Name</p>
                <input className='rounded-lg pl-3'
                required type='text' placeholder='' value={name} onChange={e => setName(e.target.value)} />
                <p>Age</p>
                <input className='rounded-lg pl-3'
                required type='number' placeholder='' value={age} onChange={e => setAge(e.target.value)} />
                <p>Gender</p>
                <input className='rounded-lg pl-3'
                required type='text' placeholder='' value={gender} onChange={e => setGender(e.target.value)} />
                <p>Major</p>
                <input className='rounded-lg pl-3'
                required type='text' placeholder='' value={major} onChange={e => setMajor(e.target.value)} />
                <p>Mail</p>
                <input className='rounded-lg pl-3'
                required type='email' placeholder='' value={mail} onChange={e => setMail(e.target.value)} />
                <p>Password</p>
                <input className='rounded-lg pl-3'
                required type='password' placeholder='' value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <div className='flex justify-center w-full mt-4'>
                <button className='bg-cyan-600 py-1 px-3 rounded-lg shadow-xl'
                type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default Form