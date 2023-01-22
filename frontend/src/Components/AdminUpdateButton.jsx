import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";

const UpdateButton=({name})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    return <>
        <Button onClick={onOpen} bg="blue.400" color="white">UPDATE</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <h1>{name.name}</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente veritatis voluptatem dolores. Debitis impedit facere doloremque corporis ipsam placeat cupiditate nemo. Excepturi nesciunt consectetur tenetur maxime cumque. Cupiditate, cumque saepe?
              Eum, temporibus iusto. Perferendis nam, facere voluptates minus voluptas doloribus, dicta eveniet nisi hic rerum alias aspernatur molestias ipsam enim reiciendis voluptatibus quos distinctio. Fuga repellat asperiores laborum odio dolorum?</p>
            </ModalBody>
            <ModalFooter>
              <Button
                bg="blue.400" color="white" mr="17px"
                onClick={() =>{
                    // toast({
                    //   title: `Account ${name}.`,
                    //   description: "We've created your account for you.",
                    //   status: 'success',
                    //   duration: 9000,
                    //   isClosable: true,
                    // });
                    toast({
                      title: `Account Updated.`,
                      status: 'success',
                      duration: 2000,
                      isClosable: true,
                    });
                    onClose();
                  }
                }
              >
                DONE
              </Button>
              <Button onClick={onClose} bg="red.400" color="white">CANCLE</Button>
              {/* variant='ghost' */}
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
}

export default UpdateButton;