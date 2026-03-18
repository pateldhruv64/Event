import React from 'react';

function Navbar() {
  return (
    <div>
      <div className="bg-amber-200 w-screen pl-10 pr-10 pt-5 pb-5 flex flex-wrap justify-between">
        <div className="bg-amber-900 w-20 ">logo</div>
        <div className="bg-amber-500 flex justify-between gap-2  w-50  ">
          <div className="bg-amber-900">Home</div>
          <div>About</div>
          <div>Register</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
