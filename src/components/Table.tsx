import React, { ReactNode } from 'react'
type Teacher = {
    id: number;
    teacherId: string;
    name: string;
    email?: string;
    photo: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
};

type Data = {
    id: number,
    teacherId: string,
    name: string,
    email: string,
    photo: string,
    phone:string,
    subjects: string[],
    classes: string[],
    address:string
}

function Table({columns,renderRow, data}: {columns: {
    header:string,
    accessor: string,
    className?: string
  }[],
  renderRow: (item: Teacher) =>ReactNode,
  data:any[];
 }) {
  return (

        <table className='w-full  mt-4'>
            <thead>
                <tr className='text-left text-gray-500 text-sm'>
                    {columns.map((column)=>{
                        return <th key={column.header} className={column.className} >{column.header}</th>
                    })}
                </tr>
            </thead>

            <tbody>
                {data.map((item)=>{
                    return renderRow(item)
                })}
            </tbody>
        </table>

  )
}

export default Table