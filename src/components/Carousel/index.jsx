import { Box, Heading, Image } from '@chakra-ui/react'
import Slider from 'react-slick'
import { settings } from './styles'
import { movies } from '../../mocks'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carousel(){
    return(
        <Box bg='black' p='30'>
            <Heading as='h2' color='white' mb='5'>Ação</Heading>
            <Slider {...settings}>
                {movies.map((movie => {
                    return <Box key={movie.id}><Image src={movie.url} alt='thumbnail' w='150px'/></Box>
                }))}
            </Slider>
        </Box>
    )
}
export default Carousel