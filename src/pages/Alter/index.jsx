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

export const Alter = () => {
    const [email,setName] = useState('')
    const [password,setPassword] = useState('')
    
    const data = [
        {
            email: email,
            password: password
        }
    ]

    const handleData = () => {
        console.log(data)
    }

    return(
        <VStack m='5' h='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
            <Heading mb='5'>Alterar Senha</Heading>
            <FormControl isRequired borderRadius='0px 10px 0px 10px' bg='#D9D9D9' p='25'>
                <FormLabel mt='10'>Email</FormLabel>
                <Input value={email} onChange={(e) => setName(e.target.value)} color='white' bg='black' borderRadius='15px' variant='filled' placeholder='Name' />

                <FormLabel mt='10'>New Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} color='white' bg='black' borderRadius='15px' mb='3'variant='filled' placeholder='Password' />

                <Flex mt='5'>
                    <Button Button onClick={handleData} cursor='pointer' w='100%' p='4' border='none' fontWeight='bold' color='white' borderRadius='15px' colorScheme='white' bg='#B83CCC' mt='3' type='submit'>Alterar</Button>
                </Flex>

                <Box display='flex' flexDirection='column' gap='2' mt='5' justifyContent='space-between'>
                    <Text fontSize='sm' fontWeight='medium'>Já possui conta? <Link href='/signin' fontSize='md' fontWeight='medium' color='black'>Entrar</Link></Text> 
                    <Link href='/delete-account' fontSize='md' fontWeight='medium' color='black'>Deletar conta?</Link>
                </Box>
            </FormControl>
        </VStack>
    )
}