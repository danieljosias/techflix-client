import { useState, useContext } from 'react'
import Modal from 'react-modal'
import { styles } from './styles'
import { ApiContext } from '../../providers/api'
import { Box, Flex, Heading } from '@chakra-ui/react'


const ModalUpdateComment = ({modal, closeModal, openModal, item}) => {
  const { updateComments } = useContext(ApiContext)
  const [newContent, setNewContent] = useState('')
  
  const toast = useToast()
  const comment_id = item?.id

  const data = {
      content: newContent,
      user_id: item?.user.id,
  
    }
  const updateComment = async (comment_id, data) => {
    
    const res = await updateComments(comment_id, data)
    if(res.name !== 'AxiosError'){
        toast({'description':'Comentário atualizado!', 'status':'success', 'duration': 4000})
      closeModal()
    }

    if (res.name !== 'AxiosError') {
      toast.success('✔️ Post editado com sucesso!')
      closeModal()
    }
  } 

  return (
    <Box>  
      <Modal
        isOpen={modal}
        onRequestClose={close}
        style={styles}
        ariaHideApp={false}
      >
        <Flex>
            <Box className='modalHeader'>
                <Heading as='h2'>Editar Post</Heading>
                <Button onClick={closeModal}><IoMdCloseCircleOutline/></Button>
            </Box>
            
            <form className='modalForm' onSubmit={(e)=> e.preventDefault()}>
            <input placeholder='Digite seu novo post..' value={newContent} onChange={(e) => setNewContent(e.target.value)} required/>
            <button onClick={updateComment} type='submit'>Editar</button>
            </form>
        </Flex>
      </Modal>
    </Box>
  )
}

export default ModalUpdateComment 