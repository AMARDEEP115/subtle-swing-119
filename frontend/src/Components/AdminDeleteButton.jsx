import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton=({name})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const navi=useNavigate();
    const DeletUser=(id)=>{
        axios.delete(`https://fine-ruby-rattlesnake-suit.cyclic.app/users/remove/${id}`).then(res=>console.log(res.data)).catch(err=>console.log(err));
        // return navi("/admin");
    }
    return <>
        <Button onClick={onOpen} bg="red.400" color="white">DELETE</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>DELETE USER</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <h1>Are you sure want to delete {name.name}</h1>
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
                      title: `Account Deleted ${name.name}.`,
                      status: 'success',
                      duration: 2000,
                      isClosable: true,
                    });
                    DeletUser(name._id);
                    onClose();
                  }
                }
              >
                YES
              </Button>
              <Button colorScheme='blue' mr={3} onClick={onClose} bg="red.400" color="white">
                No
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
}

export default DeleteButton;