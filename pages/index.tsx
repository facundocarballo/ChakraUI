import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VStack, Box, useColorModeValue, useColorMode, Button, Slider, Input, AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  SliderTrack,
  SliderFilledTrack, Portal, HStack, Spacer, SliderThumb, Grid, GridItem} from '@chakra-ui/react'

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
  const array: String[] = ['Hello', 'World', 'ChakraUI', 'React', 'Next', 'TypeScript', 'JavaScript', 'Node', 'npm', 'Facundo', 'Carballo'];
  const arrayColors = ['red.500', 'yellow.500', 'blue.500', 'green.300', 'purple.400', 'teal.300', 'tomato', 'green.700', 'red.500', 'blue.100', 'yellow.900'];
  return (
    <Grid
    h='1000px'
    w='full'
    bg={bg}
    templateRows='repeat(7, 1fr)'
    templateColumns='repeat(7,1fr)'
    >
      {
        array.map((elem, index) => 
        <GridItem rowSpan={1} colSpan={2} bg={arrayColors[index]} key={index}>
          <h1>{elem}</h1>
        </GridItem>
        )
      }
    </Grid>

    // with VStack & HStack....
/*
    <VStack w='full' h='full' bg='gray.200'>
      <HStack w='full' h='full' bg='teal'>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
      </HStack>
      <HStack w='full' h='full' bg='teal'>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
      </HStack>
      <HStack w='full' h='full' bg='teal'>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
        <Box w='100px' h='100px' bg='red.500'>
          <h1>Hello</h1>
        </Box>
        <Spacer/>
      </HStack>
    </VStack>
    */
  )
}
export default Home
