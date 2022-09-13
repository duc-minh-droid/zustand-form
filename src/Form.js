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
        <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input required type='text' placeholder='' value={name} onChange={e => setName(e.target.value)} />
            <p>Age</p>
            <input required type='number' placeholder='' value={age} onChange={e => setAge(e.target.value)} />
            <p>Gender</p>
            <input required type='text' placeholder='' value={gender} onChange={e => setGender(e.target.value)} />
            <p>Major</p>
            <input required type='text' placeholder='' value={major} onChange={e => setMajor(e.target.value)} />
            <p>Mail</p>
            <input required type='email' placeholder='' value={mail} onChange={e => setMail(e.target.value)} />
            <p>Password</p>
            <input required type='password' placeholder='' value={pass} onChange={e => setPass(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form