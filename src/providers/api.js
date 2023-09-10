import { api } from '../services/services'

export const ApiProvider = ({children}) =>{
    let token = localStorage?.getItem('token')

    async function createUsers(data){
        try {
            const res = await api.post('/clients', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function login(data){
        try {
            const res = await api.post('/login', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function createMovies(data){
        try {
            const res = await api.post('/movies', {data, token})
            return res
        } catch (error) {
            return error
        }
    }

    async function listMovies(){
        try {
            const res = await api.get('/movies')
            return res
        } catch (error) {
            return error
        }
    }

    async function updateMovies(data){
        try {
            const res = await api.patch('/movies',{ data, token})
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteMovies(){
        try {
            const res = await api.delete('/movies',{token})
            return res
        } catch (error) {
            return error
        }
    }

    async function createComments(data){
        try {
            const res = await api.post('/comments', {data, token})
            return res
        } catch (error) {
            return error
        }
    }

    async function listComments(){
        try {
            const res = await api.get('/comments')
            return res
        } catch (error) {
            return error
        }
    }

    async function updateComments(data){
        try {
            const res = await api.patch('/comments', {data, token})
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteComments(){
        try {
            const res = await api.delete('/comments', {token})
            return res
        } catch (error) {
            return error
        }
    }

    
    return(
        <ApiProvider.Provider 
        value={{createUsers, login, createMovies, listMovies, updateMovies, deleteMovies, createComments, listComments, updateComments, deleteComments}}
        >
            {children}
        </ApiProvider.Provider>
    )
}