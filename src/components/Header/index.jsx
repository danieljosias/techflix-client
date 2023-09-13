import { Flex, Box, Heading, Input, Icon, Button, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
import { RiLogoutBoxRFill } from 'react-icons/ri'

export const Header = () => {
    const history = useHistory()

    const logout = () => {
        history.push('/signin')
    }
    return(
        <Flex alignItems='center' justifyContent='space-between' bg='#D9D9D9' h='70px' p='5'>
            <Box>
                <Heading>Tech<span style={{'color':'#B83CCC'}}>Flix</span></Heading>
            </Box>
            
            <Flex gap='6'>
                <Input hideBelow='375px' variant='filled' border='none' placeholder='Pesquise seu filme' bg='black' color='white'/>
                <Button cursor='pointer' hideBelow='375px' border='none' bg='transparent' color='#B83CCC'><Icon as={SearchIcon} boxSize={20}/></Button>   
            </Flex>

            <Flex gap='3' alignItems='center'>
                <Text fontWeight='bold' fontSize='20px'>Sair</Text>
                <Button cursor='pointer'onClick={()=>logout()} border='none' bg='transparent'>
                    <RiLogoutBoxRFill size='20px'/>
                </Button>
            </Flex>
        </Flex>
    ) 
}
