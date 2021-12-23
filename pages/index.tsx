import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VHStack } from '../chapters/VHStack'
import {VStack, useColorModeValue, Box} from '@chakra-ui/react'

// NAVBAR
import { NavBarItem, INavBar, NavBar } from '../chapters/NavBar'

const item1: NavBarItem = {
  label: 'Google',
  href: 'https://www.google.com'
};
const item2: NavBarItem = {
  label: 'YouTube',
  href: 'https://youtube.com'
};

const navBar: INavBar = {
  photoURL: 'https://avatars.githubusercontent.com/u/54212428?s=200&v=4',
  title: 'Welcome',
  navItems: [item1, item2]
};

// ToDo
import {ToDo} from '../chapters/ToDo'


const Home: NextPage = () => {
  const bg = useColorModeValue('gray.200', 'gray.800');
  return (
    <VStack bg={bg} h='750px' w='full'>
      <NavBar props={navBar}/>
      <Box h='100px'/>
      <ToDo/>
    </VStack>
  )
}

export default Home
