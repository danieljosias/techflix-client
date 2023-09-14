import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Flex, Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import { ApiContext } from '../../providers/api'

export const Watch = () => {
    const { foundFilm } = useContext(ApiContext)

    return(
        <>
            <Header/>
                <Flex bg='black' h='100vh' gap='10' flexDirection='column' justifyContent='center' textAlign='center'>
                    <Heading as='h2' color='white'>{foundFilm[0].title}</Heading>
                    <Flex border='white' justifyContent='center'>
                        <iframe width='80%' height='350px' src={foundFilm[0].url} title={foundFilm[0].title}></iframe>
                    </Flex>
                </Flex>
            <Footer/>
        </>
    )
}