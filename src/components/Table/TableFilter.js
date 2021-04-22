import React from 'react'

export default function TableFilter( {filter,setFilter}) {
    return (
        <span>
          search:{''}
          <input value={filter} onChange={e=>setFilter(e.target.value)}/>  
        </span>
    )
}
