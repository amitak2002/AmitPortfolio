import React from 'react';

function AchievementComp() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-full px-4 sm:w-[90%] md:w-[80%] flex flex-col sm:flex-row justify-start items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-poppins text-gray-400 tracking-wider">
            #achievemnts
          </h1>
          <div className="w-full sm:w-[45%] h-[2px] bg-gray-400 mt-2 sm:mt-0 sm:ml-4"></div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full px-4 sm:px-0 sm:w-[90%] md:w-[80%] flex flex-wrap justify-center sm:justify-between items-center gap-6">
          
          {/* Card 1 */}
          <div className="w-full sm:w-[48%] md:w-[30%] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30 cursor-pointer rounded-lg">
            <img 
              src="/public/hackerrank.png"
              alt="hackerrank"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <h1 className="p-4 text-center text-2xl text-gray-300 font-poppins font-medium tracking-wider bg-[#1b1b1b] rounded-b-lg">
              5⭐ on HackerRank
            </h1>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[48%] md:w-[30%] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30 cursor-pointer rounded-lg">
            <img 
              src="/public/codechef.png"
              alt="codechef"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <h1 className="p-4 text-center text-2xl text-gray-300 font-poppins font-medium tracking-wider bg-[#1b1b1b] rounded-b-lg">
              Silver Badge
            </h1>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[48%] md:w-[30%] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30 cursor-pointer rounded-lg">
            <img 
              src="/public/gfg.png"
              alt="hackerrank"
              className="w-full h-full object-cover rounded-t-lg"
            />
            <h1 className="p-4 text-center text-2xl text-gray-300 font-poppins font-medium tracking-wider bg-[#1b1b1b] rounded-b-lg">
              solved 250+ dsa problems
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AchievementComp;
