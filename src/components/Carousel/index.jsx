import { Box, Heading, Image, Flex } from '@chakra-ui/react'
import Slider from 'react-slick'
import { settings } from './styles'
import { movies } from '../../mocks'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = () => {
    const action_movies = movies.filter((movies => movies.category === 'action'))
    const romance_movies = movies.filter((movies => movies.category === 'romance'))
    
    return(
        <Flex flexDirection='column' gap='10' bg='black' p='10px 30px' >
            <Heading as='h2' color='white'>Ação</Heading>
            <Slider {...settings}>
                {action_movies.map((movie => {
                    return <Box key={movie.id} cursor='pointer'><Image src={movie.url} alt='thumbnail' w='150px'/></Box>
                }))}
                
            </Slider>
           
            <Heading as='h2' color='white'>Romance</Heading>
            <Slider {...settings}>
                {romance_movies.map((movie => {
                    return <Box key={movie.id} cursor='pointer'><Image src={movie.url} alt='thumbnail' w='150px'/></Box>
                }))}  
            </Slider>
        </Flex>
    )
}
