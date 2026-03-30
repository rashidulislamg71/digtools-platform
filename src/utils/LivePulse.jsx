import React from "react";

function LivePulse() {
  return (
    <div className="relative w-4 h-4">
      {/* Outer pulse */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-violet-700 opacity-50 animate-ping"></span>
      {/* Inner dot */}
      <span className="absolute inset-0 m-auto rounded-full h-2.5 w-2.5 bg-violet-800"></span>
    </div>
  );
}

export default LivePulse;