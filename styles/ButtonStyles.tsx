import { useColorModeValue } from "@chakra-ui/react";

export const ButtonSyles = {
    variants: {
        headers: () => ({
            bg: useColorModeValue('gray.200', 'gray.800'),
            color: useColorModeValue('gray.800', 'gray.200'),
            margin: '2px',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.02)',
                bg: useColorModeValue('gray.300', 'gray.700')
            }
        }),
    }
};