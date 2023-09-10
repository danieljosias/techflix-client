import { useContext, useState } from "react"
import { useHistory } from 'react-router-dom'
import { Heading, VStack } from "@chakra-ui/layout"
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

export const SignUp = () => {
    const history = useHistory()

    const toast = useToast()    

    const { createUsers } = useContext(ApiContext)

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [avatar,setAvatar] = useState('')
    const [password,setPassword] = useState('')
    
    const data = {
        'user':{
            username: name,
            email: email,
            avatar: avatar,
            password: password
        }
    }

    const handleData = async () => {
        if(name === '' || email === '' || avatar === ''|| password === ''){
            toast({description: 'Campos obrigatórios', status: 'error', duration: 4000})
        }
        
        const res = await createUsers(data)
        if(res.name !== 'AxiosError'){
            toast({title: 'Conta criada!', status: 'success', duration: 4000})
            history.push('/signin')
        }
    }

    return(
        <VStack m='5' h='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
            <Heading mb='5'>Sign Up</Heading>
            <FormControl isRequired borderRadius='0px 10px 0px 10px' bg='#D9D9D9' p='25'>
                <FormLabel mt='10'>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} color='white' bg='black' borderRadius='15px' variant='filled' placeholder='Name' />

                <FormLabel mt='10'>Avatar</FormLabel>
                <Input value={avatar} onChange={(e) => setAvatar(e.target.value)} color='white' bg='black' borderRadius='15px' variant='filled' placeholder='Avatar' />

                <FormLabel mt='10'>Email</FormLabel>
                <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} color='white' bg='black' borderRadius='15px' variant='filled' placeholder='Email' />

                <FormLabel mt='10'>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} color='white' bg='black' borderRadius='15px' mb='3'variant='filled' placeholder='Password' />

                <Flex mt='5'>
                    <Button type='submit' onClick={()=>handleData()} cursor='pointer' w='100%' p='4' border='none' fontWeight='bold' color='white' borderRadius='15px' colorScheme='white' bg='#B83CCC' mt='3' >Cadastrar</Button>
                </Flex>

                <Box display='flex' gap='2' mt='5' justifyContent='space-between'>
                    <Text fontSize='md' fontWeight='medium'>Já possui conta?</Text> 
                    <Link href='/signin' fontSize='md' fontWeight='medium' color='black'>Entrar</Link>
                </Box>
            </FormControl>
        </VStack>
    )
}