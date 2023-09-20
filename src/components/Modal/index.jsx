import { useState, useContext } from 'react'
import { Box, Flex, Heading, FormControl, Input, useToast, Button, Icon, FormLabel } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import Modal from 'react-modal'
import { styles } from './styles'
import { ApiContext } from '../../providers/api'


const ModalUpdateComment = ({modal, closeModal, openModal, item}) => {
    const { updateComments } = useContext(ApiContext)
    const [newContent, setNewContent] = useState('')
    
    const toast = useToast()
    const comment_id = item?.id

    const data = {
        content: newContent,
        user_id: item?.user.id,
    }
    
    const updateComment = async () => {
        if(newContent === ''){
            toast({'description':'Faça seu comentário!', 'status':'info', 'duration': 4000})
    }
    
    /* const res = await updateComments(comment_id, data)
    if(res.name !== 'AxiosError'){
        toast({'description':'Comentário atualizado!', 'status':'success', 'duration': 4000})
        closeModal()
    } */
  } 

  return (
    <Box>  
      <Modal
        isOpen={modal}
        onRequestClose={close}
        style={styles}
        ariaHideApp={false}
      >
        <Flex flexDirection='column' gap='20'>
            <Flex justifyContent='space-between'>
                <Heading as='h2'></Heading>
                <Button onClick={closeModal} border='none' bg='transparent' _hover={{color:'#B83CCC'}} cursor='pointer'><Icon as={CloseIcon}  /></Button>
            </Flex>
            
            <FormControl >
                <FormLabel mb='4' fontWeight='bold'>Novo Comentário</FormLabel>
                <Input placeholder='Digite seu comentário..' p='5'  value={newContent} onChange={(e) => setNewContent(e.target.value)} required/>
                <Button onClick={()=>updateComment()} _hover={{bg:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' cursor='pointer' bg='#D9D9D9' ml='6' p='5' fontWeight='bold' border='none' variant='ghost'>Atualizar</Button>
            </FormControl>
        </Flex>
      </Modal>
    </Box>
  )
}

export default ModalUpdateComment 