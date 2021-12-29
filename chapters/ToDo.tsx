import React, {useState} from 'react';
import {VStack, HStack, Heading, Spacer, Input, IconButton, Box, Divider, Text, useColorModeValue} from '@chakra-ui/react';
import {AddIcon, CheckIcon, DeleteIcon} from '@chakra-ui/icons'



export const ToDo = () => {
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    const addTasks = () => {
        setTasks([...tasks, value]);
        setValue('');
    };
    const deleteTasks = (task: string) => {
        tasks.forEach((item, index) => {
            if (task === item) {
                tasks.splice(index, 1);
                setTasks([...tasks]);
            }
        })
    };
    const bgInput = useColorModeValue('gray.300', 'gray.700');
    return (
        <VStack w='full' h='full'>
            <HStack w='full'>
                <Heading size='xl' marginLeft='15px'>Tasks</Heading>
                <Spacer/>
                <Input 
                value={value}
                onChange={handleChange}
                placeholder='New Tasks...'
                w='400px'
                bg={bgInput}
                />
                <IconButton
                icon = {<AddIcon/>}
                onClick={addTasks}
                variant='headers'
                bg='blue.400'
                aria-label={'Toggle Notification'}
                />
                <Box w='15px'/>
            </HStack>
            <Divider h='1px' bg='gray.400'/>
            {
                tasks.map((task, index) => 
                <HStack key={index} w='full'>
                    <Box w='15px'/>
                    <Text>{task}</Text>
                    <Spacer/>
                    <IconButton
                    icon={<CheckIcon/>}
                    onClick={() => deleteTasks(task)}
                    variant='headers'
                    bg='green.600'
                    color='white'
                    aria-label='Toggle Notification'
                    />
                    <IconButton
                    icon={<DeleteIcon/>}
                    onClick={() => deleteTasks(task)}
                    variant='headers'
                    bg='red.600'
                    color='white'
                    aria-label='Toggle Notification'
                    />
                    <Box w='15px'/>
                </HStack>
                )
            }
        </VStack>
    );
}