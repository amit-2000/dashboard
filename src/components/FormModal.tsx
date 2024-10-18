import Image from "next/image";


function FormModal({table, type, data ,id}:{
    table: 'student' | 'teacher' | 'student',
    type :"create"| "update" | "delete",
    data? : any,
    id? :number
}) {
    
const size = type === "create" ? "w-8 h-8" :"w-7 h-7" 
const bg = type === "create" ? "bg-lammaYellow" : type === "update" ? "bg-lammaSky" : "bg-lamaPurple";


  return (
   <>
   <button className={`flex items-center justify-center rounded-full ${size} ${bg} `}>
    <Image src={`/${type}.png`} width={16} height={16} alt=""/>
   </button>
   </>
  )
}

export default FormModal