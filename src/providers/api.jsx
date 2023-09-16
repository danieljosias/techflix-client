import { createContext, useState } from 'react'
import { api } from '../services/services'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    let token = localStorage?.getItem('token')

    const [movies, setMovies] = useState()
    const [filteredMovie, setFilteredMovie] = useState()
    const [foundFilm, setFoundFilm] = useState()
    const [comments, setComments] = useState([])

    async function createUsers(data){
        try {
            const res = await api.post('/clients/', data)
            return res
        } catch (error) {
           return error
        }
    }

    async function retrieveUsers(client_id){
        try {
            const res = await api.get(`/clients/${client_id}/`)
            return res
        } catch (error) {
           return error
        }
    }

    async function deleteUsers(client_id){
        try {
            const res = await api.delete(`/clients/${client_id}/`)
            return res
        } catch (error) {
           return error
        }
    }


    async function updateUsers(data, client_id){
        try {
            const res = await api.patch(`/clients/${client_id}/`, data)
            return res
        } catch (error) {
           return error
        }
    }

    async function login(data){
        try {
            const res = await api.post('/login/', data)
            return res
        } catch (error) {
            return error
        }
    }

   
    async function listMovies(){
        try {
            const res = await api.get('/movies/')
            return res
        } catch (error) {
            return error
        }
    }

    async function createComments(data){
        try {
            const res = await api.post('/comments/', data,{
                headers:{
                    'Authorization': `token ${token}`
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async function listComments(){
        try {
            const res = await api.get('/comments/')
            return res
        } catch (error) {
            return error
        }
    }

    async function updateComments(data){
        try {
            const res = await api.patch('/comments/', {data, token})
            return res
        } catch (error) {
            return error
        }
    }

    async function deleteComments(){
        try {
            const res = await api.delete('/comments/', {token})
            return res
        } catch (error) {
            return error
        }
    }

    return(
        <ApiContext.Provider 
            value={{createUsers,
            updateUsers,
            retrieveUsers,
            deleteUsers,
            login,
            listMovies,
            createComments,
            listComments,
            updateComments,
            deleteComments,
            movies,
            setMovies,
            filteredMovie,
            setFilteredMovie,
            foundFilm,
            setFoundFilm,
            comments,
            setComments
        }}
        >
            {children}
        </ApiContext.Provider>
    )
}