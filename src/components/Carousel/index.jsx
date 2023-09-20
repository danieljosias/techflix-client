import { useContext, useEffect } from 'react'
import { Box, Heading, Image, Flex, Button } from '@chakra-ui/react'
import Slider from 'react-slick'
import { settings } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ApiContext } from '../../providers/api'
import { useHistory } from 'react-router-dom'

export const Carousel = () => {
    const history = useHistory()
    
    const { movies, setFilteredMovie, } = useContext(ApiContext)

    const action_movies = movies?.filter((movies) => movies.category === 'Ação')

    const romance_movies = movies?.filter((movies => movies.category === 'Romance'))

    const takeToFilm = async (movie_id) => {
        const res = movies?.filter((movie) => movie.id === movie_id)
        setFilteredMovie(res)
        history.push('/movies') 
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(()=>{
        movies 
    },[])
    
    return(
        <Flex flexDirection='column' gap='10' bg='black' p='30px 30px'>
            <Heading as='h2' color='white'>Ação</Heading>
            <Slider {...settings}>
                {action_movies?.map((movie => {
                    return <Box key={movie.id}><Button onClick={()=>takeToFilm(movie.id)} border='none'><Image cursor='pointer' src={movie.thumbnail} alt='thumbnail' w='150px'/></Button></Box>
                }))}
                
            </Slider>
           
            <Heading as='h2' color='white'>Romance</Heading>
            <Slider {...settings}>
                {romance_movies?.map((movie => {
                    return <Box key={movie.id} cursor='pointer'><Button onClick={()=>takeToFilm(movie.id)} border='none'><Image cursor='pointer' src={movie.thumbnail} alt='thumbnail' w='150px'/></Button></Box>
                }))}  
            </Slider>
        </Flex>
    )
}
