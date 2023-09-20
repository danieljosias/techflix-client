import { Flex, Box, Heading, Icon, Link, Button  } from '@chakra-ui/react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

export const Footer = () => {
    const handleBackToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return(
        <Flex bg='#D9D9D9' justifyContent='center' alignItems='center' textAlign='center' h='250px' >
            <Box> 
                <Heading as='h2' mb='10'>Redes Sociais</Heading>
                <Flex gap='10'>
                    <Link color='black' href='https://instagram.com' isExternal _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'><Icon as={BsInstagram} boxSize='30'/></Link>
                    <Link color='black' href='https://linkedin.com' isExternal _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'><Icon as={BsLinkedin} boxSize='30'/></Link>
                    <Link color='black' href='https://facebook.com' isExternal _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'><Icon as={FaFacebookSquare} boxSize='30'/></Link>
                    <Link color='black' href='https://twitter.com' isExternal _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'><Icon as={FaTwitterSquare} boxSize='30'/></Link>
                </Flex>
                <Button onClick={handleBackToTop} position='fixed' bottom='20px' right='20px' p='10px 20px' bg='#B83CCC' color='#fff' border='none' borderRadius='5px' cursor='pointer' fontWeight='bold'>Top</Button>
            </Box>
        </Flex>
    )
}
