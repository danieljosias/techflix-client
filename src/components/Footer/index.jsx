import { Flex, Box, Heading, Icon, Link  } from '@chakra-ui/react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

export const Footer = () => {
    return(
        <Flex bg='#D9D9D9' justifyContent='center' alignItems='center' textAlign='center' h='250px' mt='25'>
            <Box> 
                <Heading as='h2' mb='10'>Redes Sociais</Heading>
                <Flex gap='10'>
                    <Link color='black' href='https://instagram.com' isExternal><Icon as={BsInstagram} boxSize='30'/></Link>
                    <Link color='black' href='https://linkedin.com' isExternal><Icon as={BsLinkedin} boxSize='30'/></Link>
                    <Link color='black' href='https://facebook.com' isExternal><Icon as={FaFacebookSquare} boxSize='30'/></Link>
                    <Link color='black' href='https://twitter.com' isExternal><Icon as={FaTwitterSquare} boxSize='30'/></Link>
                </Flex>
            </Box>
        </Flex>
    )
}
