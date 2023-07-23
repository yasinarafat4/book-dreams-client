import React from "react";
import CountUp from "react-countup";
import { PiBookOpenTextDuotone, PiStudentFill } from "react-icons/pi";
import { TbWorldSearch } from "react-icons/tb";
import { useInView } from "react-intersection-observer";


const CounterOverview = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
      });
  return (
    <div ref={ref} className="py-12 bg-gradient-to-r from-sky-100 to-pink-100 dark:from-slate-700 dark:to-slate-700">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-16 xl:gap-20 2xl:gap-56 mx-4 md:mx-52 lg:mx-10 xl:mx-28 2xl:mx-96 border bg-gradient-to-r from-sky-300 via-sky-200 to-sky-100 dark:from-slate-700 dark:to-slate-700 p-8 rounded-3xl space-y-6 md:space-y-10 lg:space-y-0">
        <div className="flex justify-center items-center gap-2">
          <div className="bg-white px-3 py-2 rounded-lg">
            <PiStudentFill className="text-yellow-500 text-[70px] xl:text-[90px]" />
          </div>
          <div>
            <h2 className="text-4xl  xl:text-5xl font-semibold">
            <CountUp start={0} end={inView ? 200000 : 0} duration={1.5} separator="," />
            </h2>
            <p className="text-xl xl:text-2xl font-base">Students Enrolled</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-white px-3 py-2 rounded-lg">
            <PiBookOpenTextDuotone className="text-[#e84766] text-[70px] xl:text-[90px]" />
          </div>
          <div>
            <h2 className="text-4xl  xl:text-5xl font-semibold">
            <CountUp start={0} end={inView ? 210 : 0} duration={1.5} />
            </h2>
            <p className="text-xl xl:text-2xl font-base">Total Course</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-white px-3 py-2 rounded-lg">
            <TbWorldSearch className="text-violet-400 text-[70px] xl:text-[90px]" />
          </div>
          <div>
            <h2 className="text-4xl  xl:text-5xl font-semibold">
            <CountUp start={0} end={inView ? 84 : 0} duration={1.5} />            </h2>
            <p className="text-xl xl:text-2xl font-base">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOverview;
