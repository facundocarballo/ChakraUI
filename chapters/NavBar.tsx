import React from 'react';
import NextLink from 'next/link';
import {Container, HStack, Image, Heading, Spacer, Box, Button, useColorMode, useColorModeValue, IconButton, useDisclosure, Collapse, Stack} from '@chakra-ui/react'
import {SunIcon, MoonIcon, CloseIcon, HamburgerIcon} from '@chakra-ui/icons'

export interface NavBarItem {
    label: string,
    href: string
};
export interface INavBar {
    photoURL?: string,
    title?: string,
    navItems: NavBarItem[]
}
interface TheINavBar {
    props: INavBar
};

export const NavBar = ({props}: TheINavBar) => {
    const {colorMode, toggleColorMode} = useColorMode();
    const bg = useColorModeValue('gray.200', 'gray.800');
    const isDark = colorMode === 'dark';
    const {isOpen, onToggle} = useDisclosure();
    return(
        <Container maxW='100%' p={4} style={{position: 'fixed', zIndex: 100}}>
            <HStack w='full'>
                {
                    props.photoURL != null ?
                    <Image
                    boxSize='50px'
                    src={props.photoURL}
                    alt='Logo'
                    /> : null
                }
                {
                    props.title != null ? 
                    <HStack>
                        <Box w='5px'/>
                        <Heading>{props.title}</Heading>
                    </HStack>
                    : null
                }
                <Spacer/>
                <Box display={{lg: 'flex', md: 'none', sm: 'none', base: 'none'}}>
                    {
                        props.navItems.map((navItem, index) => 
                            <NextLink href={navItem.href} passHref key={index}>
                                <Button as='a' variant='headers'>{navItem.label}</Button>
                            </NextLink>
                        )
                    }
                </Box>
                <Button onClick={toggleColorMode} variant='headers'>
                    { isDark ? <SunIcon/> : <MoonIcon/>}
                </Button>
                <Box display={{lg: 'none', md:'flex', sm: 'flex', base: 'flex'}}>
                    <IconButton
                    icon = {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                    onClick={onToggle}
                    variant='headers'
                    aria-label = {'Toggle Navigation'}
                    />
                </Box>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
                <Stack
                bg = {bg}
                p={4}
                >
                    {
                        props.navItems.map((navItem, index) => 
                            <NextLink href={navItem.href} passHref key={index}>
                                <Button as='a' variant='headers' onClick={onToggle}>{navItem.label}</Button>
                            </NextLink>
                        )
                    }
                </Stack>
            </Collapse>
        </Container>
    );
}