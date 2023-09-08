import { Avatar, Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { RiMore2Fill } from "react-icons/ri";
import { getItem } from "react-safe-storage";
import moment from "moment";

const Review = props => {

  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))
  console.log(user);

  const DisplayMenuButton = () => {

    if (!user) return;

    if(props.review.uidUser === user.uid) {
      return (
        <Menu>
          <MenuButton as={IconButton} alignSelf='self-end' my='0.3rem'aria-label='More' isRound='true' size='sm' icon={<RiMore2Fill />}/>
          <MenuList>
            <MenuItem onClick={props.onUpdate}>
              Edit
            </MenuItem>
            <MenuItem onClick={props.onDelete}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      )
    }
  }

  return ( 
    <Box display='flex' p='0.6rem' gap='1rem' key={props.idx} alignItems='center'>
      <Avatar size='sm' src={props.review.userImage} />
      <Box display='flex' justifyContent='space-between' w='full'>
        <Box>
          <Text fontFamily='Poppins-Bold' fontSize='14px'>{props.review.creator}</Text>
          <Text fontFamily='Poppins-Medium' fontSize='13px' pt='0.3rem'>{props.review.content}</Text>
        </Box>
        <Box display='flex' justifyContent='flex-end' flexDirection='column'>
          <DisplayMenuButton/>
          <Text fontFamily='Poppins-Bold' fontSize='12px' textAlign='end' color='blackAlpha.800'>
            {moment(props.review.updatedAt).format('DD/MM/YYYY, h:mm a')}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Review;