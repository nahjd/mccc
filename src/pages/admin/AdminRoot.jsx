import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../layout/AdminNavbar'

function AdminRoot() {
  return (
    <>
        <AdminNavbar/>
        <Outlet/>
    </>
  )
}

export default AdminRoot