import { useContext } from 'react'
import { Box, Flex, Heading, FormControl, Input, Button, Icon, FormLabel, useToast } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import Modal from 'react-modal'
import { styles } from './styles'
import { ApiContext } from '../../providers/api'

const ModalUpdateComment = ({modal, closeModal, updateComment }) => {
    const { newContent, setNewContent} = useContext(ApiContext)

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
                <Button onClick={closeModal} border='none' bg='transparent' _hover={{color:'#B83CCC'}} transition='all 0.2s cubic-bezier(.08,.52,.52,1)' cursor='pointer'><Icon as={CloseIcon}  /></Button>
            </Flex>
            
            <FormControl >
                <FormLabel mb='4' fontWeight='bold'>Novo Comentário</FormLabel>
                <Input placeholder='Digite seu comentário..' p='5'  value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                <Button onClick={()=>updateComment()} cursor='pointer' bg='#B83CCC' ml='6' p='5' fontWeight='bold' color='white' border='none' variant='ghost'>Atualizar</Button>
            </FormControl>
        </Flex>
      </Modal>
    </Box>
  )
}

export default ModalUpdateComment 