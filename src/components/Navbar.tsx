import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* search box LEFT */}
      <div className=" hidden ring-[1.5px] ring-gray-300 md:flex px-2 items-center gap-2  text-sm rounded-full  ">
        <Image src={"/search.png"} alt="" width={14} height={14} />
        <input placeholder="search..."  className="bg-transparent p-2 w-[200px] outline-none" />
      </div>
      {/* cotrol pannel RIGHT */}
      <div className="flex items-center justify-end w-full gap-6">
        <div className="rounded-full h-7 w-7 bg-white flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="rounded-full h-7 w-7 bg-white flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3  rounded-full h-5 w-5 text-center text-sm flex items-center justify-center bg-purple-500 text-white">
1          </div>
        </div>

        <div className="flex flex-col">
          <span className="leading-3 text-xs font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
          <Image
            alt=""
            src={"/avatar.png"}
            width={36}
            height={36}
            className="rounded-full"
          />
      </div>
    </div>
  );
};

export default Navbar;
