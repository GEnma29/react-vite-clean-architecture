import React from 'react'
import { useToast } from '@chakra-ui/react'

export  function snabarComponent(message: string, variant: string){
    const toast = useToast();
    toast({description: message, variant})
}

