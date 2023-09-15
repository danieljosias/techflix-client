import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Comments } from '../../components/Comments'
import { Box, Button, Flex, Heading, Text, Input } from '@chakra-ui/react'
import { comments } from '../../mocks'
import { useContext } from 'react'
import { ApiContext } from '../../providers/api'
import { useHistory } from 'react-router-dom'

export const Movies = () => {
    const { filteredMovie } = useContext(ApiContext)
    const history = useHistory()

    const takeToWatchFilm = () => {
        history.push('/film') 
    }

    return(
        <Box bg='black'>
            <Header/> 
            {filteredMovie.map((movies)=>{
                return  <Flex key={movies.id} flexDirection='column' gap='10'  p='10' backgroundSize='100% 100%' backgroundRepeat='no-repeat' backgroundImage={movies.background}> 
                <Box>
                    <Heading as='h2' color='white'>{movies.title}</Heading>
                    <Text color='white'>{movies.category}, {movies.classification}</Text>
                </Box>
                <Box>
                    <Text color='white' w='50%'>{movies.sinopse}</Text>
                </Box>
                <Box>
                    <Heading as='h2' color='white'>Atores</Heading>
                    <Text color='white' w='50%'>{movies.actors}</Text>
                </Box>
                <Box>
                    <Heading as='h2' color='white'>Diretores</Heading>
                    <Text color='white'>{movies.directors}</Text>
                </Box>

                <Box>
                    <Button onClick={()=>takeToWatchFilm()} border='none' w='150px' p='10' color='white' fontSize='16px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Assistir</Button>
                </Box>
            </Flex>
            })}
            
            <Flex bg ='black' flexDirection='column' justifyContent='center' alignItems='center' p='10' m='10'>
                <Heading as='h2' color='white' fontWeight='bold' p='10'>Comentários</Heading>
                <Flex bg='#D9D9D9' h='300px' w='100%' p='10px' borderRadius='15px' justifyContent='center' alignItems='center'>
                   <Box>
                        <Input type='text' w='66%' bg='black' border='none' ml='10' p='10' color='white' />
                        <Button border='none' p='10' ml='10' color='white' fontSize='16px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Enviar</Button>
                        {comments.map((data)=>{
                            return <Comments key={data.id} data={data}/>
                        })}   
                   </Box>
                </Flex>
            </Flex>
            <Footer/>
        </Box>
    )
}