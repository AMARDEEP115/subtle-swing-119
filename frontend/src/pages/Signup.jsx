import { Alert, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image, Input, InputGroup, InputLeftAddon, InputRightElement, PinInput, PinInputField, Text } from "@chakra-ui/react"
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";

let initialState={
    name: "",
    email: "",
    password: "",
    number: "",
    status: "user",

}

const Signup=()=>{

    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
    
    });
    const navigate = useNavigate();


    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    let handelChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        setUser({ ...user, [name]: val });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post("https://fine-ruby-rattlesnake-suit.cyclic.app/users/register", user).then(res => {if(res.data.mess==="Registred"){navigate("/login")}}).catch((err) => navigate("/login"))
        console.log(user);
        setUser(initialState);
    }


    return <>
            <Navbar />
            <div style={{paddingTop:"70px"}}>
            <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center">

                <Container  >
                    <Grid w="400px" bg="#FFF" boxShadow="xl">
                        <Grid>
                            <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                        </Grid>
                        <Grid gap={5} p={8} display="grid" justifyContent="center">

                            <Grid display="grid" alignItems="baseline" textAlign="center" gap={2} ><Heading size="md">SIGNUP </Heading>



                            </Grid>
                            <Grid gap={3}>
                                <GridItem>
                                    <Input variant='outline' borderRadius="0px" name='name' onChange={handelChange} value={user.name} placeholder='Enter Your Full Name' />
                                </GridItem>

                                <GridItem>
                                    <Input variant='outline' name='email' borderRadius="0px" onChange={handelChange} value={user.email} placeholder='Enter Your Email' />
                                </GridItem>
                                <GridItem>
                                    <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            type={show ? 'text' : 'password'}
                                            placeholder='Enter Your  Password'
                                            borderRadius="0px"
                                            onChange={handelChange} value={user.password}
                                            name='password'
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </GridItem>

                            </Grid>
                            <Flex >
                                <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                            </Flex>
                            <Flex>
                                <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={handelSubmit}>
                                    <b>   CONTINUE</b>
                                </Button>
                            </Flex>
                            <Flex color="#FF3F6C"> <Link to="/login" >Already Have a Account?</Link></Flex>


                        </Grid>
                    </Grid>

                </Container>

            </Grid>
        </div>

        </>
};

export default Signup;