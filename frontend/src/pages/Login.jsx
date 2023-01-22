import { Alert, Button, Container, Flex, Grid, Heading, HStack, Image, Input, InputGroup, InputLeftAddon, PinInput, PinInputField, Text } from "@chakra-ui/react"
import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login=()=>{
    const [otpAlert, setOtpAlert] = React.useState(false)
    const [togalOtp, setTogalOtp] = React.useState(true)
    const [otp, setOtp] = React.useState(null);
    const [mail,setMail]=React.useState("");
    const [pass,setPass]=React.useState("");

    const navi=useNavigate();
    const submitOTP = () => {

        setOtpAlert(true);
        setInterval(() => {
            setOtpAlert(false)
        }, 3000)
        setTogalOtp(false)
        


    }

    const auth = () => {
        let obj={
            email:mail,
            password:pass
        };
        axios.post("https://fine-ruby-rattlesnake-suit.cyclic.app/users/login",obj).then(res=>{
            let resp=res.data;
            console.log(res);
            if(resp==="Inavalid Password"){
                alert("Inavalid Password");
            } else if(resp==="Invalid User"){
                alert("Invalid User");
            } else if(resp.message==="login successful"){
                localStorage.setItem("token",JSON.stringify(resp.token));
                localStorage.setItem("LoggedinName",JSON.stringify(resp.LoggedinName));
                localStorage.setItem("LoggedinEmail",JSON.stringify(resp.LoggedinEmail));
                navi("/");
            } else {
                if(resp.message==="Admin"){
                    localStorage.setItem("token",JSON.stringify(resp.token));
                    navi("/admin");
                }

            }
        }).catch(err=>console.log(err));
    };


    return <>
    <Navbar/>
    <div style={{paddingTop:"70px"}}>
    <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center">
        {otpAlert && <Alert status='success'> Otp Sent  </Alert>}
        <Container>
            <Grid w="400px" bg="#FFF" boxShadow="xl">
                <Grid>
                    <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                </Grid>
                <Grid gap={5} p={8} display="grid" justifyContent="center">

                    <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} ><Heading size="md">Login or Signup</Heading>
                        {
                            togalOtp ? <Text>Enter Your Email ID and Password</Text> : <Text>Enter Your OTP</Text>
                        }

                    </Grid>
                    <Flex>
                        {
                            togalOtp ? <InputGroup >
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <p style={{marginTop:"15px"}}>.</p>
                                <Input type='email' placeholder='Enter Email' value={mail} onChange={(e) => setMail(e.target.value)} />
                                <p style={{marginTop:"15px"}}>.</p>
                                <Input type='password' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                                </div>
                            </InputGroup> :

                                <HStack>
                                    <PinInput value={otp} onChange={(e) => setOtp(e)}>
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                        <PinInputField />
                                    </PinInput>
                                </HStack>

                        }
                    </Flex>
                    <Flex >
                        <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                    </Flex>
                    <Flex>
                        {/* {
                            togalOtp ? <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={submitOTP}>
                                <b>CONTINUE</b>
                            </Button> : <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={auth}>
                                <b>LOGIN</b>
                            </Button>
                        } */}
                        <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={auth}><b>LOGIN</b></Button>
                    </Flex>
                    <Flex color="#FF3F6C"> <Link to="/login" >Want's To Login With Email ?</Link></Flex>
                    <Flex color="#FF3F6C"> <Link to="/signup" >Don't Have Account?</Link></Flex>

                </Grid>
            </Grid>

        </Container>
    </Grid>
    </div>
    </>
};

export default Login;