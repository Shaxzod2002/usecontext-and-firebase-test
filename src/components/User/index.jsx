import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const User = () => {
  const { user } = useContext(LoginContext);

  return (
    <div className="user-page p-2 w-[80%] min-h-[400px] bg-white rounded-md flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl">User WareHouse</h2>
      {user.map((item) => (
        <div
          className="user-security bg-black text-white w-[80%] rounded-lg flex flex-col gap-2 py-2"
          key={item.id}
        >
          <h2 className="text-3xl text-center">{item.userName}</h2>
          <h2 className="text-3xl text-center">{item.email}</h2>
          <h2 className="text-3xl text-center">{item.phone}</h2>
        </div>
      ))}
    </div>
  );
};

export default User;
