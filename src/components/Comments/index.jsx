import { Flex ,Avatar, Text, Box, Icon, Button, useToast,}from '@chakra-ui/react'
import { DeleteIcon, EditIcon }  from '@chakra-ui/icons'
import { useContext, useState } from 'react'
import { ApiContext, } from '../../providers/api'
import  ModalUpdateComment  from '../Modal'

export const Comments = ({content, item}) => {
    const [modal, setModal] = useState()
    const [newContent, setNewContent] = useState('')

    const toast = useToast()

    const { deleteComments, updateComments} = useContext(ApiContext)

    const comment_id = item?.id

    const data = {
      content: newContent,
      user_id: item?.user.id,
  
    }

    const closeModal = () => {
        setModal(false)
    }

    const openModal = () => {
        setModal(true)
    }

    const deleteComment = async () => {
        const res = await deleteComments(comment_id)
        if(res.name !== 'AxiosError'){
            toast({'description':'Comentário deletado!', 'status':'success', 'duration': 4000})
        }
    }

    const updateComment = async () => {
        openModal()
        if(content === ''){
            toast({'description':'Faça seu comentário!', 'status':'info', 'duration': 4000})
        }

        const res = await updateComments(comment_id, data)
        if(res.name !== 'AxiosError'){
            toast({'description':'Comentário editado!', 'status':'success', 'duration': 4000})
        }
    }


    return(
        <Box bg='white' p='5' mb='5' w='280px'>
            <ModalUpdateComment modal={modal} closeModal={closeModal} openModal={openModal} item={item}/>
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
                    <Button border='none' bg='transparent' _hover={{color:'red'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' onClick={()=>deleteComment()}><Icon as={DeleteIcon} mr='10' cursor='pointer'/></Button>
                    <Button border='none' bg='transparent' _hover={{color:'blue'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' onClick={()=>updateComment()}><Icon as={EditIcon}  cursor='pointer'/></Button>
                </Box>
           </Flex>
        </Box>
    )
}
