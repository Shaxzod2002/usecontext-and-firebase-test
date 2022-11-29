import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const Home = () => {
  const { user } = useContext(LoginContext);
  return (
    <>
      <div className="home w-[800px] max-w-[95%] min-h-[400px] bg-white rounded-xl shadow-md flex justify-center items-center">
        <div className="table-responsive w-full">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="p-2">№</th>
                <th className="p-2">User Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{item.userName}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2">{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
