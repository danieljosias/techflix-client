import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Comments } from '../../components/Comments'
import { movies } from '../../mocks/movies'
import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react'

export const Movies = () => {
    return(
        <>
            <Header/>

            {movies.map((movies)=>{})}   
            <Flex flexDirection='column' gap='10' m='10'>
                <Box>
                    <Heading as='h2'> Acima da Lei</Heading>
                    <Text>Violência, A14</Text>
                </Box>
                <Box>
                    <Text w='350px'>Uma mulher pede a seu ex-marido, um advogado renomado,
                    que defenda seu irmão criminoso, acusado de matar um promotor
                    público. Mas o processo esconde complicações misteriosas e ele
                    vai precisar de muito mais do que só suas habilidades jurídicas para
                    se manter vivo e ganhar o caso.
                    </Text>
                </Box>
                <Box>
                    <Heading as='h2'>Atores</Heading>
                    <Text>Eric Close, Gregory Alan Williams,
                    Gunner Willis, Kevin Sizemore</Text>
                </Box>
                <Box>
                    <Heading as='h2'>Diretores</Heading>
                    <Text>Brent Christy</Text>
                </Box>

                <Box>
                    <Button border='none' w='150px' p='10' color='white' fontSize='16px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Assistir</Button>
                </Box>
            </Flex>
            
            <Flex>

            </Flex>
            <Footer/>
        </>
    )
}