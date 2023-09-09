import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Comments } from '../../components/Comments'
import { movies } from '../../mocks/movies'
import { Box, Button, Flex, Heading, Text, Image, Input } from '@chakra-ui/react'

export const Movies = () => {
    return(
        <Box bg='black'>
            <Header/>
            {movies.map((movies)=>{})}   
            <Flex flexDirection='column' gap='10' m='10' backgroundSize='auto auto' backgroundImage='https://ottvsimg.ottvs.com.br/ban/prg.201818/looke_4001.jpg?165573093'>
                <Box>
                    <Heading as='h2' color='white'> Acima da Lei</Heading>
                    <Text color='white'>Violência, A14</Text>
                </Box>
                <Box>
                    <Text w='350px' color='white'>Uma mulher pede a seu ex-marido, um advogado renomado,
                    que defenda seu irmão criminoso, acusado de matar um promotor
                    público. Mas o processo esconde complicações misteriosas e ele
                    vai precisar de muito mais do que só suas habilidades jurídicas para
                    se manter vivo e ganhar o caso.
                    </Text>
                </Box>
                <Box>
                    <Heading as='h2' color='white'>Atores</Heading>
                    <Text color='white'>Eric Close, Gregory Alan Williams,
                    Gunner Willis, Kevin Sizemore</Text>
                </Box>
                <Box>
                    <Heading as='h2' color='white'>Diretores</Heading>
                    <Text color='white'>Brent Christy</Text>
                </Box>

                <Box>
                    <Button border='none' w='150px' p='10' color='white' fontSize='16px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Assistir</Button>
                </Box>
            </Flex>
            
            <Flex bg ='black' flexDirection='column' justifyContent='center' alignItems='center' >
                <Heading as='h2' color='white' fontWeight='bold'>Comentários</Heading>
                <Flex bg='#D9D9D9' h='300' w='300' p='10px'>
                   <Box>
                    <Input type='text' bg='black' border='none' p='10' color='white'/>
                        <Button border='none' w='sm' p='10' color='white' fontSize='16px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Enviar</Button>
                   </Box>
                </Flex>
            </Flex>
            <Footer/>
        </Box>
    )
}