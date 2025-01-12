import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const Jobs = () => {
  let jobsArray = [1, 2, 3, 4, 5,1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div>
            <FilterCard />
          </div>
          {jobsArray.length == 0 ? (
            <span>JOB NOT FOUND</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 border-red-50">
              <div className="grid grid-cols-3 gap-6">
                {" "}
                {/* Adjusted gap */}
                {jobsArray.map((job, index) => (
                  <div key={index} className="relative">
                    {/* Added padding to avoid cut-off */}
                    <div className="p-2">
                      <Job />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
