import React from "react";

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#FAF9F6]">Dashboard</h1>
        <p className="mt-3 text-[#FAF9F6]/70">
          This is the dashboard section.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-5">
          <p className="text-sm text-[#FAF9F6]/60">Total Jobs</p>
          <h2 className="mt-2 text-3xl font-bold text-[#FAF9F6]">128</h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-5">
          <p className="text-sm text-[#FAF9F6]/60">Applications</p>
          <h2 className="mt-2 text-3xl font-bold text-[#FAF9F6]">46</h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#1a1a1d] p-5">
          <p className="text-sm text-[#FAF9F6]/60">Interviews</p>
          <h2 className="mt-2 text-3xl font-bold text-[#FAF9F6]">12</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
