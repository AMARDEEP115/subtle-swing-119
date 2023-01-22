import React from "react";
import adminStyle from "./AdminSidebar.module.css";
import {MdDashboard,MdBookmarkBorder,MdOutlineProductionQuantityLimits} from "react-icons/md";
import {FaUser} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import {BiLogOut,BiMenu} from "react-icons/bi";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminSidebar=({SelectUsers,SelectProducts,SelectOrders,SelectDashboard})=>{
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navi=useNavigate();

    const AdminLogout=()=>{
        localStorage.removeItem("token");
        return navi("/");
    }
    
    return <div style={{display:"flex",border:"2px solid rgb(200, 200, 200)",height:"100vh"}}>
        <div style={{marginTop:"20px"}} className={adminStyle.SideFull}>
            <div style={{fontWeight:"900",fontSize:"18px",color:"#2B65EC",marginBottom:"20px"}}>ADMIN</div>
            <hr style={{marginBottom:"40px"}}/>
            <div>
                <h2 className={adminStyle.TagName}>MAIN</h2>
                <div className={adminStyle.TagItems} onClick={()=>SelectDashboard()}>
                    <MdDashboard size="1.2rem" color="#2B65EC"/> <h3>Dashboard</h3>
                </div>
            </div>
            <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
            <div>
                <h2 className={adminStyle.TagName}>LISTS</h2>
                <div className={adminStyle.TagItems} onClick={()=>SelectUsers()}>
                    <FaUser size="1.2rem" color="#2B65EC"/> <h3>Users</h3>
                </div>
                <div className={adminStyle.TagItems} onClick={()=>SelectProducts()}>
                    <MdOutlineProductionQuantityLimits size="1.2rem" color="#2B65EC"/> <h3>Products</h3>
                </div>
                <div className={adminStyle.TagItems} onClick={()=>SelectOrders()}>
                    <MdBookmarkBorder size="1.2rem" color="#2B65EC"/> <h3>Orders</h3>
                </div>
            </div>
            <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
            <div>
                <h2 className={adminStyle.TagName}>USEFULL</h2>
                <div className={adminStyle.TagItems}>
                    <IoNotifications size="1.2rem" color="#2B65EC"/> <h3>Notifiaction</h3>
                </div>
            </div>
            <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
            <div>
                <h2 className={adminStyle.TagName}>ADMIN</h2>
                <div className={adminStyle.TagItems}  onClick={()=>AdminLogout()}>
                    <BiLogOut size="1.2rem" color="#2B65EC"/> <h3>Logout</h3>
                </div>
            </div>
        </div>
        <div className={adminStyle.SideSmall}>
            <Button key="xs" m={4} onClick={() => onOpen()}>ADMIN <BiMenu size="1.3rem"/></Button>
            <Drawer onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>drawer contents</DrawerHeader>
                <DrawerBody>
                    <div>
                        <h2 className={adminStyle.TagName}>MAIN</h2>
                        <div className={adminStyle.TagItems} onClick={()=>SelectDashboard()}>
                            <MdDashboard size="1.2rem" color="#2B65EC"/> <h3>Dashboard</h3>
                        </div>
                    </div>
                    <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
                    <div>
                        <h2 className={adminStyle.TagName}>LISTS</h2>
                        <div className={adminStyle.TagItems} onClick={()=>SelectUsers()}>
                            <FaUser size="1.2rem" color="#2B65EC"/> <h3>Users</h3>
                        </div>
                        <div className={adminStyle.TagItems} onClick={()=>SelectProducts()}>
                            <MdOutlineProductionQuantityLimits size="1.2rem" color="#2B65EC"/> <h3>Products</h3>
                        </div>
                        <div className={adminStyle.TagItems} onClick={()=>SelectOrders()}>
                            <MdBookmarkBorder size="1.2rem" color="#2B65EC"/> <h3>Orders</h3>
                        </div>
                    </div>
                    <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
                    <div>
                        <h2 className={adminStyle.TagName}>USEFULL</h2>
                        <div className={adminStyle.TagItems}>
                            <IoNotifications size="1.2rem" color="#2B65EC"/> <h3>Notifiaction</h3>
                        </div>
                    </div>
                    <hr style={{marginTop:"20px",marginBottom:"20px"}}/>
                    <div>
                        <h2 className={adminStyle.TagName}>ADMIN</h2>
                        <div  onClick={()=>AdminLogout()} className={adminStyle.TagItems}>
                            <BiLogOut size="1.2rem" color="#2B65EC"/> <h3>Logout</h3>
                        </div>
                    </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
        </div>
    </div>
}

export default AdminSidebar;