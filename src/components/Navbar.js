import React from 'react'

export default function Navbar({handleTab}) {
  return (
    <div>
        <nav>
            <button onClick={()=>{handleTab('All')}}>All</button>
            <button onClick={()=>{handleTab('Active')}}>Active</button>
            <button onClick={()=>{handleTab('Completed')}}>Completed</button>

        </nav>
    </div>
  )
}
