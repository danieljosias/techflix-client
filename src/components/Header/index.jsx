import { Flex, Box, Heading, Input, Icon, Button, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { RiLogoutBoxRFill } from 'react-icons/ri'
import { useState, useContext } from 'react'
import { ApiContext } from '../../providers/api'
import { useHistory } from 'react-router-dom'

export const Header = () => {
    const { movies, setFoundFilm } = useContext(ApiContext)

    const [film, setFilm] = useState('')
    
    const history = useHistory()

    const logout = () => {
        history.push('/signin')
        localStorage.removeItem('token')
    }

    const searchFilm = () => {
        const found_film = movies.filter((movie) => movie.title === film || movie.title.toLowerCase() === film || movie.title.toUpperCase() === film)
         if(found_film.length === 0){
            history.push('/not-found')
        }else{
            history.push('/search')
            setFoundFilm(found_film)
        }  
    }

    const takeHomepage = () => {
        history.push('/homepage')
          
    }
    return(
        <Flex alignItems='center' justifyContent='space-between' bg='#D9D9D9' h='70px' p='5'>
            <Box>
                <Button border='none' bg='transparent' cursor='pointer' onClick={takeHomepage}><Heading>Tech<span style={{'color':'#B83CCC'}}>Flix</span></Heading></Button>
            </Box>
            
            <Flex gap='6'>
                <Input hideBelow='375px' borderRadius='5px' value={film} onChange={(e) => setFilm(e.target.value)} p='8' variant='filled' border='none' placeholder='Pesquise seu filme' bg='black' color='white'/>
                <Button cursor='pointer' onClick={()=>searchFilm()} hideBelow='375px' border='none' bg='transparent' _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'><Icon as={SearchIcon} boxSize={20}/></Button>   
            </Flex>

            <Flex gap='3' alignItems='center'>
                <Text fontWeight='bold' fontSize='25px'>Sair</Text>
                <Button cursor='pointer'onClick={()=>logout()} border='none' bg='transparent' _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)'>
                    <RiLogoutBoxRFill size='25px'/>
                </Button>
            </Flex>
        </Flex>
    ) 
}
