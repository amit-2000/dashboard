'use client'
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const event =[{
    id:12,
    title: 'Meeting',
    time: "12:00PM-03:00PM",
    description: 'Lorem ipsum dolor sit amet, consectetur adipue urna'
},{
    id:12,
    title: 'Meeting',
    time: "12:00PM-03:00PM",
    description: 'Lorem ipsum dolor sit amet, consectetur adipue urna'
},{
    id:12,
    title: 'Meeting',
    time: "12:00PM-03:00PM",
    description: 'Lorem ipsum dolor sit amet, consectetur adipue urna'
}]

function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-3 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
        <div className='flex flex-col gap-4'>
            {
                event.map(item=>{
                    return <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-200 even:border-t-LamaPurple' key={item.id}>
                        <div className='flex items-center justify-between'>
                             <h1 className='font-semibold text-gray-600'>{item.title}</h1>
                             <span className='text-xs text-gray-300'>{item.time}</span>
                        </div>
                        <p className='mt-2 text-gray-400 text-sm'>{item.description}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default EventCalendar