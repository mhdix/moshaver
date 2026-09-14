import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/axios";
import type { User } from "../types";

export const UsersContext = createContext(undefined);

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/user/list");
        console.log("fetchUsers: ", response.data.data);
        setUsers(response.data.data);
      } catch (error) {
        console.error(error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);

  if (!context) throw new Error("useUsers باید داخل AuthProvider استفاده شود");

  return context;
};
