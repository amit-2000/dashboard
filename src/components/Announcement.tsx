import React from 'react'

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

function Announcement() {
  return (
    <div className='bg-white p-3 rounded-md'>
                <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Announcements</h1>

        <span className='text-xs text-gray-400'>View all</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-lamaSkyLight rounded-md p-4'>
            <div className='flex justify-between  items-center'>
                <h1 className='font-medium'>Lorem ipsum, dolor sit.</h1>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>15/03/2000</span>
            </div>
        <p className='text-sm text-gray-400 mt-1 '>Lorem ipsum, dolor sit amet sum, dolor sit amet co consectetur adipisicing elit. Temporibus, repellat.</p>

        </div>
      </div>

      <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-LamaPurple rounded-md p-4'>
            <div className='flex justify-between  items-center'>
                <h1 className='font-medium'>Lorem ipsum, dolor sit.</h1>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>15/03/2000</span>
            </div>
        <p className='text-sm text-gray-400 mt-1 '>Lorem ipsum, dolor sit amet sum, dolor sit amet co consectetur adipisicing elit. Temporibus, repellat.</p>

        </div>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-LamaYellowLight rounded-md p-4'>
            <div className='flex justify-between  items-center'>
                <h1 className='font-medium'>Lorem ipsum, dolor sit.</h1>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>15/03/2000</span>
            </div>
        <p className='text-sm text-gray-400 mt-1 '>Lorem ipsum, dolor sit amet co sum, dolor sit amet consectetur adipisicing elit. Temporibus, repellat.</p>

        </div>
      </div>

</div>
  )
}

export default Announcement