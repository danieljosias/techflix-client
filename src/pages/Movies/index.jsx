import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Comments } from '../../components/Comments'
import { Box, Button, Flex, Heading, Text, Input, useToast } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../providers/api'
import { useHistory } from 'react-router-dom'

export const Movies = () => {
    const { filteredMovie, createComments, listComments, setComments ,comments } = useContext(ApiContext)
    
    const history = useHistory()

    const takeToWatchFilm = () => {
        history.push('/film') 
    }

    const [content, setContent] = useState('')

    const toast = useToast()

    const data = {
        content: content,
        user_id: filteredMovie[0]?.user?.id,
        movie_id: filteredMovie[0]?.id,   
    }

    const handleComments = async () => {
        if(content === ''){
            toast({'description':'Escreva seu comentário', 'status':'info', 'duration': 4000})
        }
       
        const res = await createComments(data)
        if(res.name !== 'AxiosError'){
            toast({'description':'Obrigado pelo comentário!', 'status':'success', 'duration': 4000}) 
            setContent('')

        }else if(res.response.data.content[0] === 'comments with this content already exists.'){
            toast({'description':'Comentário já existe!', 'status':'error', 'duration': 4000})
        }  
    }

    useEffect(() => {
        async function getComments() {
            const list_comments = await listComments()
            setComments([list_comments])
        }
        getComments()
    }, [filteredMovie, comments]);
    
    return(
        <Box bg='black'>
            <Header/> 
            {filteredMovie?.map((movies)=>{
                return  <Flex key={movies.id} flexDirection='column' gap='10'  p='10' backgroundSize='100% 100%' backgroundRepeat='no-repeat' backgroundImage={movies.background}> 
                <Box>
                    <Heading as='h2' color='white'>{movies.title}</Heading>
                    <Text color='white'>{movies.category}, {movies.classification}</Text>
                </Box>
                <Box>
                    <Text color='white' w='50%'>{movies.sinopse}</Text>
                </Box>
                <Box>
                    <Heading as='h2' color='white'>Atores</Heading>
                    <Text color='white' w='50%'>{movies.actors}</Text>
                </Box>
                <Box>
                    <Heading as='h2' color='white'>Diretores</Heading>
                    <Text color='white'>{movies.directors}</Text>
                </Box>

                <Box>
                    <Button onClick={()=>takeToWatchFilm()} border='none' w='150px' p='10' color='white' fontSize='16px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Assistir</Button>
                </Box>
            </Flex>
            })}
            
            <Flex bg ='black' flexDirection='column' justifyContent='center' gap='4' alignItems='center' p='10' m='10'>
                <Heading as='h2' color='white' fontWeight='bold' >Comentários</Heading>
                <Flex bg='#D9D9D9' w='100%' p='10px' borderRadius='15px' justifyContent='center' alignItems='center'>
                   <Box>
                        <Input type='text' value={content} placeholder='Faça seu comentário' onChange={(e)=> setContent(e.target.value)} w='200px' bg='black' h='35px' border='none' color='white' />
                        <Button onClick={()=>handleComments()} type='submit' border='none' color='white' ml='5' fontSize='16px' w='110px' h='35px' fontWeight='bold' bg ='#B83CCC' cursor='pointer'>Enviar</Button>
                        
                        <Flex justifyContent='center' h='250px' mt='10' w='315px' bg='#929292' overflowY='scroll'>
                            
                            {filteredMovie[0]?.id === comments[0]?.data[0]?.movie.id?
                            
                            <Box h='200px' p='5'>
                                {comments?.map((comment,i) => {
                                    return <Box key={i}>
                                    {comment.data?.map((item, j) => {
                                        return <Comments key={j} content={item.content} data={item}/>
                                    })}
                                    </Box>
                                })}  
                            </Box>
                            :
                            <Box>
                                <Heading as='h2'>Nenhum comentário</Heading>
                            </Box>
                            }
                        </Flex>
                   </Box>
                </Flex>
            </Flex>
            <Footer/>
        </Box>
    )
}