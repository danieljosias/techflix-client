import { Flex ,Avatar, Text, Box, Icon, Button, useToast } from '@chakra-ui/react'
import { DeleteIcon, EditIcon }  from '@chakra-ui/icons'
import { useContext } from 'react'
import { ApiContext, } from '../../providers/api'

export const Comments = ({content, data}) => {
    const toast = useToast()

    const { deleteComments, editComments} = useContext(ApiContext)
    const comment_id = data.id
    
    const deleteComment = async () => {
        const res = await deleteComments(comment_id)
        if(res.name !== 'AxiosError'){
            toast({'description':'Comentário deletado!', 'status':'success', 'duration': 4000})
        }
    }

    const editComment = () => {}

    return(
        <Box bg='white' p='5' mb='5' w='280px'>
           <Flex alignItems='center' justifyContent='' gap='10' >
                <Avatar name='Daniel Josias' color='white' bg='black' h='30px' w='30px' fontWeight='bold' borderRadius='15px'/>
                <Text
                    fontWeight='bold'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                    overflow='hidden'
                    w='250px'
                    color='black'
                > {content} </Text>
                <Box>
                    <Button border='none' onClick={()=>deleteComment()}><Icon as={DeleteIcon} mr='10' cursor='pointer'/></Button>
                    <Button border='none' onClick={''}><Icon as={EditIcon}  cursor='pointer'/></Button>
                </Box>
           </Flex>
        </Box>
    )
}
