import axios from "axios";
import React from "react";
import { useEffect } from "react";
import {BiSearchAlt,BiMenu} from "react-icons/bi";
import {MdLanguage} from "react-icons/md";
import {VscAccount}from "react-icons/vsc";
import DeleteButton from "../Components/AdminDeleteButton";
import UpdateButton from "../Components/AdminUpdateButton";
import AdminNavStyle from "./AdminNavbar.module.css";

const AdminNavbar=({users,products,orders,dashboard})=>{
    const [disp,setDisp]=React.useState(false);
    const [count,setCount]=React.useState(0);
    const [use,setUse]=React.useState([]);
    const [pro,setPro]=React.useState([]);
    const [ord,setOrd]=React.useState([]);

    useEffect(()=>{
        axios.get("https://fine-ruby-rattlesnake-suit.cyclic.app/users").then(res=>setUse(res.data)).catch(err=>console.log(err));
    },[count]);


    return<div style={{paddingRight:"10px"}}> 
        <div style={{display:"flex",alignItems:"center",marginLeft:"50px",marginTop:"10px",justifyContent:"space-between"}}>
            <div style={{border:"1px solid black",borderRadius:"10px",height:"37px",justifyContent:"space-between",display:"flex",padding:"10px",alignItems:"center"}}><input placeholder="Searrch for query" style={{border:"none",fontSize:"20px",height:"33px"}}/><BiSearchAlt size="1.5rem"/></div>
            <div style={{display:"flex",gap:"20px"}}>
                <div className={AdminNavStyle.NaTags}><MdLanguage size="1.3rem"/>English</div>
                <div onClick={()=>setDisp(!disp)}><BiMenu size="1.3rem"/>
                    {disp && <ul style={{position:"absolute",border:"2px solid black",borderRadius:"7px",marginLeft:"-22vh",backgroundColor:"white"}}>
                        <li className={AdminNavStyle.Litags} style={{marginTop:"20px"}}>Add New User</li>
                        <li className={AdminNavStyle.Litags}>Add New Products</li>
                        <li className={AdminNavStyle.Litags}>Notification</li>
                    </ul>}
                </div>
                <div className={AdminNavStyle.NaTags}><VscAccount size="1.3rem"/></div>
            </div>
        </div>
        <hr style={{marginTop:"22px"}}/>
        {dashboard && <img style={{height:"650px",width:"170vh",marginLeft:"10px",marginTop:"10px"}} src="https://cdn.dribbble.com/users/1192034/screenshots/7545484/media/58ee2c027f82abd84d0592c9bb4d9c60.gif" alt="dashboard"/>}

        <div style={{padding:"15px",display:"flex",gap:"40px",marginLeft:"5%",flexWrap:"wrap"}}>
            {users && use?.map((el,i)=><div key={i} style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}>
                    <h1 style={{fontSize:"20px",fontWeight:"bold",marginTop:"20px"}}>{el.name}</h1>
                    <h1 style={{fontSize:"20px",fontWeight:"bold"}}>{el.email}</h1>
                </div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}  onClick={()=>setCount(prev=>prev+1)}>
                    <UpdateButton name={el}/>
                    <DeleteButton name={el}/>
                </div>
            </div>)}
        </div>
        {products && <div style={{padding:"15px",display:"flex",gap:"40px",marginLeft:"5%",flexWrap:"wrap"}}>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE1"/>
                    <DeleteButton name="UPDATE1"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE2"/>
                    <DeleteButton name="UPDATE2"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE3"/>
                    <DeleteButton name="UPDATE3"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE4"/>
                    <DeleteButton name="UPDATE4"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE5"/>
                    <DeleteButton name="UPDATE5"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE6"/>
                    <DeleteButton name="UPDATE6"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE7"/>
                    <DeleteButton name="UPDATE7"/>
                </div>
            </div>
        </div>}
        {orders && <div style={{padding:"15px",display:"flex",gap:"40px",marginLeft:"5%",flexWrap:"wrap"}}>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE1"/>
                    <DeleteButton name="UPDATE1"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE2"/>
                    <DeleteButton name="UPDATE2"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE3"/>
                    <DeleteButton name="UPDATE3"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE4"/>
                    <DeleteButton name="UPDATE4"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE5"/>
                    <DeleteButton name="UPDATE5"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE6"/>
                    <DeleteButton name="UPDATE6"/>
                </div>
            </div>
            <div style={{border:"2px solid black",width:"240px",height:"300px",borderRadius:"10px"}}>
                <div  style={{border:"2px solid black",width:"220px",height:"200px",borderRadius:"10px",margin:"auto",marginTop:"10px"}}></div>
                <div style={{display:"flex",gap:"20px",marginTop:"13px",marginLeft:"22px"}}>
                    <UpdateButton name="UPDATE7"/>
                    <DeleteButton name="UPDATE7"/>
                </div>
            </div>
        </div>}
    </div>
}

export default AdminNavbar;