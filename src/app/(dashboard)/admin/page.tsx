import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* LEFT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <div className="flex flex-row flex-wrap gap-3 justify-between">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parents" />
            <UserCard type="staff" />
          </div>
          {/* MIDDLE CHARTS */}
          <div className="flex flex:col gap-4 lg:flex-row">
            {/* COUNT CHART */}
            <div className="w-full lg:w-1/3 h-[450px]"><CountChart /></div>
            {/* ATTENDANCE CHART */}
            <div className="w-full lg:w-2/3  h-[450px]"> <AttendanceChart/></div>
          </div>
          {/* BOTTOM CHART */}
          <div className="w-full h-[500px]"><FinanceChart/></div>

         
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">RIGHT</div>
      </div>
    </>
  );
};

export default AdminPage;
