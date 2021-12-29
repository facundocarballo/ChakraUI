import React from 'react';
import { VStack, HStack, Spacer, Heading, Text, Button, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

export const VHStack: NextPage = () => {
    return (
        <HStack h='700px' w='full' bg='red' >
            <VStack h='full' w='100px' bg='yellow.400'>
                <p>hello</p>
                <Spacer/>
                <p>World</p>
            </VStack>
            <VStack h='full' w='100px' bg='teal.400'></VStack>
            <VStack h='full' w='100px' bg='green.400'></VStack>
            <VStack h='full' w='100px' bg='purple.400'></VStack>
            <VStack h='full' w='100px' bg='yellow.400'></VStack>
            <Spacer/>
            <VStack h='full' w='full' bg='gray.700'>
                <Heading size='2xs' as='h1'>HELLO WORLD</Heading>
                <Text>HELLO</Text>
                <Spacer/>
                <Button bg='blue.500'>Click Me!</Button>
                <Box h='10px' w='full' bg='teal'/>
            </VStack>
            <Spacer/>
            <VStack h='full' w='100px' bg='yellow.400'></VStack>
            <VStack h='full' w='100px' bg='teal.400'></VStack>
            <VStack h='full' w='100px' bg='green.400'></VStack>
            <VStack h='full' w='100px' bg='purple.400'></VStack>
            <VStack h='full' w='100px' bg='yellow.400'></VStack>
        </HStack>
    );
};