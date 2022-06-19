import { Flex } from '@chakra-ui/react'
import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Profile = () => {
  return (
    <Flex  >
        <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} mt='-7px' mb='-10px' ></MenuButton>
            <MenuList>
                <MenuItem>My Orders</MenuItem>
                <MenuItem>Cart</MenuItem>
                <MenuItem>Log out</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
  )
}

export default Profile