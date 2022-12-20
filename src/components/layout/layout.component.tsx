import React from 'react'
import { Flex } from '@chakra-ui/react'

const LayoutComponent: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Flex 
    alignItems={"center"} 
    justifyContent={"center"}
    width={"100%"}
    height={"100vh"}
    >
        {children}
    </Flex>
  )
}

export default LayoutComponent