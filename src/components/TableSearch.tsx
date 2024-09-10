import Image from "next/image"


function TableSearch() {
  return (
    <div className="w-full ring-[1.5px] ring-gray-300 flex md:w-auto px-2 items-center gap-2  text-sm rounded-full  ">
    <Image src={"/search.png"} alt="" width={14} height={14} />
    <input placeholder="search..."  className="bg-transparent p-2 w-[200px] outline-none" />
  </div>
  )
}

export default TableSearch