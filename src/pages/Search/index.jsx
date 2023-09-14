import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Flex, Heading, Image, Button } from '@chakra-ui/react'
import { ApiContext } from '../../providers/api'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

export const Search = () => {
    const { foundFilm } = useContext(ApiContext)
    const history = useHistory()
    
    const takeToWatchFilm = () => {
        history.push('/watch') 
    }
    
    return(
        <>
            <Header/>
            <Flex bg='black' p='10' h='60vh' gap='10' flexDirection='column' justifyContent='center' textAlign='center'>
                <Heading as='h2' color='white'>Resultado de Busca</Heading>
                <Flex border='white' justifyContent='center'>
                    <Button onClick={()=>takeToWatchFilm()} cursor='pointer' borderColor='white'><Image h='150px' src={foundFilm[0].thumbnail} title={foundFilm[0].title}/></Button>
                </Flex>
            </Flex>
            <Footer/>
        </>
    )
}