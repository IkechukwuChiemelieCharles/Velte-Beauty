import React from "react";

const Success = () => {
  return (
    <div className="bg-milk px-10 py-20 w-full overflow-hidden">
      <div className="bg-white flex flex-col px-10 py-10  w-full gap-2 relative">
        <h1 className="text-primaryBlue text-xl font-bold">
          Thank You For Your Order
        </h1>
        <p className="text-black text-sm">
          Order <b>#147258369</b> has been placed
        </p>
        <p className="text-black text-sm">
          you will receive an email confirmation shortly (lotsofmails@email.com
          )
        </p>
        <div>
          <p className="absolute top-10 right-5 text-xs cursor-pointer text-primaryBlue">
            Print Receipt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
