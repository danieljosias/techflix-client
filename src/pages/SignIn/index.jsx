import { useState } from "react"
import { Heading, VStack } from "@chakra-ui/layout"
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Text,
    Box,
    Flex
} from '@chakra-ui/react'

export const SignIn = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    
    const data = [
        {
            name: name,
            password: password
        }
    ]

    const handleData = () => {
        console.log(data)
    }

    return(
        <VStack m='5' h='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
            <Heading mb='5'>Sign In</Heading>
            <FormControl isRequired borderRadius='0px 10px 0px 10px' bg='#D9D9D9' p='25'>
                <FormLabel mt='10'>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} color='white' bg='black' borderRadius='15px' variant='filled' placeholder='Name' />

                <FormLabel mt='10'>Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} color='white' bg='black' borderRadius='15px' mb='3'variant='filled' placeholder='Password' />

                <Flex mt='5'>
                    <Button onClick={handleData} cursor='pointer' w='100%' p='4' border='none' fontWeight='bold' color='white' borderRadius='15px' colorScheme='white' bg='#B83CCC' mt='3' type='submit'>Entrar</Button>
                </Flex>

                <Box display='flex' flexDirection='column' gap='2' mt='5' justifyContent='space-between'>
                    <Text fontSize='sm' fontWeight='medium'>Já possui conta? <Link href='/signup' fontSize='md' fontWeight='medium' color='black'>Cadastre-se</Link></Text> 
                    <Link href='/alter' fontSize='md' fontWeight='medium' color='black'>Esqueceu a senha?</Link>
                </Box>
            </FormControl>
        </VStack>
    )
}