import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Flex, Heading, Image, Button } from '@chakra-ui/react'
import { ApiContext } from '../../providers/api'
import { useContext } from 'react'

export const Film = () => {
    const { filteredMovie } = useContext(ApiContext)
    
    return(
        <>
            <Header/>
                <Flex bg='black' h='100vh' gap='10' flexDirection='column' justifyContent='center' textAlign='center'>
                    <Heading as='h2' color='white'>{filteredMovie[0].title}</Heading>
                    <Flex border='white' justifyContent='center'>
                        <iframe width='80%' height='350px' src={filteredMovie[0].url} title={filteredMovie[0].title}></iframe>
                    </Flex>
                </Flex>
            <Footer/>
        </>
    )
}