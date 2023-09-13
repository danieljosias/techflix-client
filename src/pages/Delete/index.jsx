import { useState, useContext  } from "react"
import { Heading, VStack } from "@chakra-ui/layout"
import { useHistory } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Text,
    Box,
    Flex,
    useToast,
} from '@chakra-ui/react'
import { ApiContext } from '../../providers/api'

export const Delete = () => {
    const history = useHistory()

    const toast = useToast()    

    const { retrieveUsers, deleteUsers } = useContext(ApiContext)

    const [email,setEmail] = useState('')

    const client_id = localStorage.getItem('client_id')

    const handleData = async () => {
        if(email === ''){
            toast({'description':'Campo obrigatório', status: 'error', duration: 4000})
        }
       
        const res = await retrieveUsers(client_id)
        if(res.data.user.email === email){
            const res = await deleteUsers(client_id)
                if(res.name !== 'AxiosError'){
                toast({'description':'Conta deletada!', status: 'success', duration: 4000})
                history.push('/signin') 
            }
        }
    }

    return(
        <VStack m='5' h='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
            <Heading mb='5'>Deletar Conta</Heading>
            <FormControl isRequired borderRadius='0px 10px 0px 10px' bg='#D9D9D9' p='25'>
                <FormLabel mt='10'>Email</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} color='white' bg='black' borderRadius='15px' variant='filled' placeholder='Name' />

                <Flex mt='5'>
                    <Button onClick={handleData} cursor='pointer' w='100%' p='4' border='none' fontWeight='bold' color='white' borderRadius='15px' colorScheme='white' bg='#B83CCC' mt='3' type='submit'>Deletar</Button>
                </Flex>

                <Box display='flex' flexDirection='column' gap='2' mt='5' justifyContent='space-between'>
                    <Text fontSize='sm' fontWeight='medium'>Já possui conta? <Link href='/signin' fontSize='md' fontWeight='medium' color='black'>Entrar</Link></Text> 
                    <Link href='/alter-password' fontSize='md' fontWeight='medium' color='black'>Esqueceu a senha?</Link>
                </Box>
            </FormControl>
        </VStack>
    )
}