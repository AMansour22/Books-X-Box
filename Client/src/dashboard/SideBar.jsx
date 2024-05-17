import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="/" img={user?.PhotoURL} imgAlt="Flowbite logo" className='w-16 h-16'>
        <p>
            {
                user?.displayName || "Demo User"
            }
        </p>
        </Sidebar.Logo>
    <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Item 
            href="/admin/dashboard" 
            icon={HiChartPie}>
                Dashboard
            </Sidebar.Item>
            <Sidebar.Item 
            href="/admin/dashboard/upload " 
            icon={HiOutlineCloudUpload}>
                Upload Book
            </Sidebar.Item>
            <Sidebar.Item 
            href="/admin/dashboard/mange" 
            icon={HiInbox}>
                Mange Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
                Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
            </Sidebar.Item>
            <Sidebar.Item 
            href="/login" 
            icon={HiArrowSmRight}>
                Sign In
            </Sidebar.Item>
            <Sidebar.Item 
            href="/logout" 
            icon={HiTable}>
                Log Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
        <div style={{ borderTop: '1px solid #e5e7eb', margin: '1rem 0' }}></div>
        <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
                Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
                Help
            </Sidebar.Item>
        </Sidebar.ItemGroup>
    </Sidebar.Items>
</Sidebar>
    )
}

export default SideBar
