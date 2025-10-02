import React, { createContext, useState, useEffect } from 'react';


type User = { id?: number; username?: string } | null;


export const AuthContext = createContext<any>(null);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [user, setUser] = useState<User>(null);


useEffect(() => {
const token = localStorage.getItem('token');
if (token) {
// opcional: decodificar o pedir profile al backend
setUser({ username: 'usuario' });
}
}, []);


const logout = () => {
localStorage.removeItem('token');
setUser(null);
};


return (
<AuthContext.Provider value={{ user, setUser, logout }}>
{children}
</AuthContext.Provider>
);
};