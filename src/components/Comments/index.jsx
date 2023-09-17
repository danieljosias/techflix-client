import { Flex ,Avatar, Text, Box, Icon } from '@chakra-ui/react'
import { DeleteIcon, EditIcon }  from '@chakra-ui/icons'


export const Comments = ({content}) => {
    return(
        <Flex alignItems='center' justifyContent='space-between' bg='white' p='5' mb='5' >
           <Flex alignItems='center' gap='10' >
                <Avatar name='Daniel Josias' color='white' bg='black' h='30px' w='30px' fontWeight='bold' borderRadius='15px'/>
                <Text
                    fontWeight='bold'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                    overflow='hidden'
                    w='250px'
                    color='black'
                > {content} </Text>
           </Flex>
           <Box>
                <Icon as={DeleteIcon} mr='10' cursor='pointer'/>
                <Icon as={EditIcon}  cursor='pointer'/>
           </Box>
        </Flex>
    )
}
