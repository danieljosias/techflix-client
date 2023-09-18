import { Box , Image } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import Slider from 'react-slick'
import { settings } from './styles'
import { carousel } from '../../mocks'

export const Homepage = () => {
    return(
        <Box bg='black'> 
            <Header/>
                <Box m='10px 25px 0px'  p='10px'>
                    <Slider {...settings}>
                        {carousel.map((images => {
                            return <Box key={images.id} cursor='pointer'><Image src={images.url} alt='carousel-images' w='100%' /></Box>
                        }))}
                    </Slider>
                </Box>
            <Carousel/>
            <Footer/>
        </Box>
    )
}