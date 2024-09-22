import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

function Teacher() {
  return (
    <div className="flex flex-1 flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-1 flex-col gap-4 lg:flex-row " >
          {/* user info card */}
          <div className="bg-lamaSkyLight py-6 px-4 rounded-md flex-1 flex gap-4">
            <div>
            <Image src={  "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"} alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
            </div>
            <div className="flex flex-col gap-4 w-2/3 justify-between">
              <h1 className="text-xl font-semibold">Amit Perane</h1>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet. Lorem ipsumt consectetur adipisicing elit. Sunt, at!</p>
              <div className="flex flex-col  md:flex-row items-start md:items-center  justify-between gap-2 flex-wrap text-sm font-medium">
                <div className="flex w:full md:w-1/3 lg:w-full 2xl:w-1/3  items-center gap-2"> 
                <Image src="/blood.png" alt="" width={14} height={14}/>
                <p>A+</p>
                </div>
                <div className="flex w:full md:w-1/3 lg:w-full 2xl:w-1/3  items-center gap-2"> 

                <Image src="/date.png" alt="" width={14} height={14}/>
                <p>Jan 2025</p>
                </div>
                <div className="flex w:full md:w-1/3 lg:w-full 2xl:w-1/3  items-center gap-2"> 
                
                <Image src="/mail.png" alt="" width={14} height={14}/>
                <p>teacher@gmail.com</p>
                </div>
                <div className="flex w:full md:w-1/3 lg:w-full 2xl:w-1/3  items-center gap-2"> 
               
                <Image src="/phone.png" alt="" width={14} height={14}/>
                <p>+918354445348</p>
                </div>
         
              </div>
            </div>
          </div>

          {/* user small card */}
          <div className="flex-1 flex-col lg:flex-row flex gap-4 flex-wrap justify-between">
            {/* CARDS */}
            <div className="w-full rounded-md gap-4 p-4 flex bg-white md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src={"/singleAttendance.png"} alt="" width={24} height={24} className="w-6 h-6"/>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-gray-500">90%</h1>
                <p className="text-sm text-gray-500">Attendance</p>
              </div>
            </div>
            <div className="w-full rounded-md gap-4 p-4 flex bg-white md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image    src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-gray-500">5</h1>
                <p className="text-sm text-gray-500">Lesson</p>
              </div>
            </div>
            <div className="w-full rounded-md gap-4 p-4 flex bg-white md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image  src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
            <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-gray-500">8</h1>
                <p className="text-sm text-gray-500">Branch</p>
              </div>
            </div>
            <div className="w-full rounded-md gap-4 p-4 flex bg-white md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
            <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
            <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-gray-500">6</h1>
                <p className="text-sm text-gray-500">Class</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="font-semibold">Teacher&apos;s Schedule</h1>

          {/* Calendar component */}
          <BigCalendar/>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="rounded-md bg-white p-4 ">
          <h1 className="text-xl font-semibold ">Shortcuts</h1>
          <div className=" m-4 flex gap-4 flex-wrap text-sm text-gray-500">
            <Link href={"/"} className="p-3 rounded-md bg-lamaSkyLight"> Teahcer&apos;s Classess</Link>
            <Link href={"/"} className="p-3 rounded-md bg-purple-100"> Teahcer&apos;s Student</Link>
            <Link href={"/"} className="p-3 rounded-md bg-LamaYellowLight"> Teahcer&apos;s Lesson</Link>
            <Link href={"/"} className="p-3 rounded-md bg-pink-50"> Teahcer&apos;s Exam</Link>
            <Link href={"/"} className="p-3 rounded-md bg-green-100"> Teahcer&apos;s Assignment</Link>
          </div>
        </div> 
        {/* PIE Chart */}
        <Performance/>
        <Announcement/>
      </div>
    </div>
  );
}

export default Teacher;
