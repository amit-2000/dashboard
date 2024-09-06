import UserCard from "@/components/UserCard";

const AdminPage = ()=>{
    return <>
        <div className="flex flex-col md:flex-row gap-4 p-4">
            {/* LEFT */}
         <div className="w-full lg:w-2/3">
            <div className="flex flex-row flex-wrap gap-3 justify-between">
                <UserCard type="student"/>
                <UserCard type="teacher"/>
                <UserCard type="parents"/>
                <UserCard type="staff"/>
            </div>
         </div>
            {/* RIGHT */}
         <div className="w-full lg:w-1/3">RIGHT</div>

        </div>
    </>
}

export default AdminPage;