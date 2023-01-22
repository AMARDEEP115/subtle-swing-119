import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const Admin=()=>{
    const [users,setUsers]=React.useState(false);
    const [products,setProducts]=React.useState(false);
    const [orders,setOrders]=React.useState(false);
    const [dashboard,setDashboard]=React.useState(true);
    const SelectDashboard=()=>{
        setUsers(false);
        setProducts(false);
        setOrders(false);
        setDashboard(true);
    };
    const SelectUsers=()=>{
        setUsers(true);
        setProducts(false);
        setOrders(false);
        setDashboard(false);
    };
    const SelectProducts=()=>{
        setUsers(false);
        setProducts(true);
        setOrders(false);
        setDashboard(false);
    };
    const SelectOrders=()=>{
        setUsers(false);
        setProducts(false);
        setOrders(true);
        setDashboard(false);
    };
    return <div style={{display:"flex"}}>
        <AdminSidebar SelectUsers={SelectUsers} SelectProducts={SelectProducts} SelectOrders={SelectOrders} SelectDashboard={SelectDashboard}/>
        <AdminNavbar users={users} products={products} orders={orders} dashboard={dashboard}/>
    </div>
}

export default Admin;