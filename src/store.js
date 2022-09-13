import create from 'zustand'

const useStore = create((set) => ({
    users: [],
    postUser: ({ name, age, gender, major, mail, pass }) => set(state => {
        return ({ users: [...state.users, { name, age, gender, major, mail, pass, id: state.users.length }] })
    })
}))

export default useStore