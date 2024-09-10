import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar"
import 'react-big-calendar/lib/css/react-big-calendar.css'
const StudentPage =()=>{
    return <>
    <div className="flex flex-col xl:flex-row gap-4 p-4">
        {/* LEFT */}
        <div className="w-full xl:w-2/3 flex flex-col gap-8">
            <div className="h-full bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                <BigCalendar/>
            </div>
           
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-8">
           <EventCalendar/>
           <Announcement/>
           {/*  */}
        </div>
    </div>

    </>
}

export default StudentPage;