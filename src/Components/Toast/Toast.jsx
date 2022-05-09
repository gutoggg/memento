import { Box, useToast, Button } from "@chakra-ui/react";

function Toast() {
    const toast = useToast()
    return (
        <Box>
            <Button
            onClick={() => toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })}
            >
                Toast
            </Button>
        </Box>
    )
  }
  
  export default Toast;