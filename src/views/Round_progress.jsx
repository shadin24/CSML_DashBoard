import React from 'react'
import 'assets/css/styles.css'; // Import your Tailwind CSS file here

function Round_progress({colour,value,border}) {
  return (
    <div>
        <div class="w-max relative m-14"> 
          <div className={`bg-white rounded-full p-1 border-2 ${border}`}>
            <div className={`${colour} p-3 rounded-full`}>
              <div className="bg-white rounded-full w-24 h-24 flex flex-col justify-center items-center">
                <p className="text-black text-2xl font-bold">{value}</p>
                <p className="text-slate-500 font-medium smaller-text">PM 2.5</p>

              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-[-3px]">
            <div className={`bg-${colour} rounded-full p-[1px] border-2 ${border}`}>
              <div className=" bg-white p-[2px] rounded-full">
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-[-3px]">
            <div className={`bg-${colour} rounded-full p-[1px] border-2 ${border}`}>
                <div className=" bg-white p-[2px] rounded-full">
                </div>
              </div>
          </div>
        </div>


</div>
   
  )
}

export default Round_progress
