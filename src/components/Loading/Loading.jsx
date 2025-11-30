
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="max-w-sm relative">
         <span class="loading loading-spinner loading-xs"></span>
      </div>
    </div>
  );
};

export default Loading;