import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Flex, Heading } from '@chakra-ui/react'

export const NotFound = () => {
    return(
        <>
            <Header/>
            <Flex bg='black' p='10' h='50vh' gap='10' flexDirection='column' justifyContent='center' textAlign='center'>
                <Heading as='h2' color='white'>Filme não encontrado</Heading>
            </Flex>
            <Footer/>
        </>
    )
}