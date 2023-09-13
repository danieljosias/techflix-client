import { useContext } from 'react'
import { Box, Heading, Image, Flex, Button } from '@chakra-ui/react'
import Slider from 'react-slick'
import { settings } from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ApiContext } from '../../providers/api'

export const Carousel = () => {
    const { movies, setFilteredMovie, filteredMovie } = useContext(ApiContext)
    
    const [ data ] = movies

    const action_movies = data.data.filter((movies) => movies.category === 'Ação')

    const romance_movies = data.data.filter((movies => movies.category === 'Romance'))

    const takeToFilm = async (movie_id) => {
        const res = data.data.filter((movie) => movie.id === movie_id)
        setFilteredMovie(res)
        //history.push('/movies') 
    }
    
    return(
        <Flex flexDirection='column' gap='10' bg='black' p='10px 30px' >
            <Heading as='h2' color='white'>Ação</Heading>
            <Slider {...settings}>
                {action_movies.map((movie => {
                    return <Box key={movie.id}><Button onClick={()=>takeToFilm(movie.id)} border='none'><Image cursor='pointer' src={movie.thumbnail} alt='thumbnail' w='150px'/></Button></Box>
                }))}
                
            </Slider>
           
            <Heading as='h2' color='white'>Romance</Heading>
            <Slider {...settings}>
                {romance_movies.map((movie => {
                    return <Box key={movie.id} cursor='pointer'><Image src={movie.thumbnail} alt='thumbnail' w='150px'/></Box>
                }))}  
            </Slider>
        </Flex>
    )
}
