import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Flex, Heading, Image } from '@chakra-ui/react'

export const Search = () => {
    return(
        <>
            <Header/>
            <Flex bg='black' p='10' h='50vh' gap='10' flexDirection='column' justifyContent='center' textAlign='center'>
                <Heading as='h2' color='white'>Resultado de Busca</Heading>
                <Flex border='white' justifyContent='center'>
                    <Image h src="https://ottvsimg.ottvs.com.br/cov/prg.201818/0201818_127.jpg?837743772" title="Acima da lei"/>
                </Flex>
            </Flex>
            <Footer/>
        </>
    )
}