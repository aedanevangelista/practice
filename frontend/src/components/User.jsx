import React from "react";

const User = () => {
  return (
    <button className=" m-2 w-auto">
      <div className="hover:bg-gray-400/20 ease-in-out duration:300 p-2 border rounded-3xl flex justify-between items-center">
        <div className="shadow-md shadow-cyan-600/20 sm:h-16 sm:w-16 h-12 w-12 border rounded-full">
          {" "}
        </div>

        <article className="flex flex-col items-center">
          <h1 className="text-lg font-semibold">Joshua Concepcion</h1>
          <h3 className="text-xs">Active 3 hrs ago</h3>
        </article>

        <div className="shadow-md shadow-cyan-600/20 bg-green-500 mr-4 h-4 w-4 border rounded-full">
          {" "}
        </div>
      </div>
    </button>
  );
};

export default User;
