import React from 'react'
import { Sidebar } from 'lucide-react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
      {/* Sidebar */}
      <Sidebar/>
       {/* Navbar */}
        <div className="root-container">
            <div className="wrapper">
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout
