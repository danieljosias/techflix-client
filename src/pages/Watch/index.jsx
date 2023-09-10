import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Flex, Heading } from '@chakra-ui/react'

export const Watch = () => {
    return(
        <>
            <Header/>
                <Flex bg='black' h='100vh' gap='10' flexDirection='column' justifyContent='center' textAlign='center' a>
                    <Heading as='h2' color='white'>Acima da Lei</Heading>
                    <Flex border='white' justifyContent='center'>
                        <iframe width='80%' height='350px' src="https://www.youtube.com/embed/zpDe78CNhZM?si=m8FtsBjnLze14XJJ" title="Acima da lei"></iframe>
                    </Flex>
                </Flex>
            <Footer/>
        </>
    )
}