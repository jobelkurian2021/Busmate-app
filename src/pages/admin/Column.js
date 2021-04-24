import React from 'react'
import ActionButton from './ActionButton'

export const COLUMN=[
    {
        Header:'Name',
        accessor:'name'
    },
    {
        Header:'Email',
        accessor:'email'
    },
    {
        Header:'Phone',
        accessor:'phone'
    },
    // {
    //     Header:'Address',
    //     accessor:'address'
    // },
    {
        Header:'usertype',
        accessor:'usetype'
    },
    {
        Header:'status',
        accessor:'status'
    },
    {
        Header: "Action",
        accessor: "id",
        Cell: ({ row }) => (
          <ActionButton Rows={row}/>        
        )
      }
]


