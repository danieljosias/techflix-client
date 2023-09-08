import { Flex, Box, Heading, Avatar, Input, Icon, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const Header = () => {
    return(
        <Flex alignItems='center' justifyContent='space-between' bg='#D9D9D9' h='70px' p='5'>
            <Box>
                <Heading>Tech<span style={{'color':'#B83CCC'}}>Flix</span></Heading>
            </Box>
            
            <Flex gap='6'>
                <Avatar name='Daniel Josias' fontSize='18px' w='40px' h='40px' borderRadius='25px' fontWeight='bold' bg='black' color='white'/>
                <Input variant='filled' border='none' placeholder='Pesquise seu filme' bg='black' color='white'/>
                <Button border='none' cursor='pointer' bg='transparent' color='#B83CCC'><Icon as={SearchIcon} boxSize={25}/></Button>   
            </Flex>
        </Flex>
    ) 
}
