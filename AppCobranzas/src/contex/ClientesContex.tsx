import React, { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import type { Cliente } from '../tipos/Types';


interface ClientesContextType {
  listaClientes: Cliente[];
  agregarCliente: (cliente: Omit<Cliente, 'id'>) => void;
  eliminarCliente: (id: string) => void;
}

const ClientesContext = createContext<ClientesContextType | undefined>(undefined);

export const ClientesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [listaClientes, setListaClientes] = useState<Cliente[]>(() => {
    const savedClients = localStorage.getItem('listaClientes');
    return savedClients ? JSON.parse(savedClients) : [];
  });

  useEffect(() => {
    localStorage.setItem('listaClientes', JSON.stringify(listaClientes));
  }, [listaClientes]);

  const agregarCliente = (cliente: Omit<Cliente, 'id'>) => {
    const clienteConId: Cliente = { ...cliente, id: Date.now().toString() };
    setListaClientes((prev) => [...prev, clienteConId]);
  };

  const eliminarCliente = (id: string) => {
    setListaClientes((prev) => prev.filter((cliente) => cliente.id !== id));
  };

  return (
    <ClientesContext.Provider value={{ listaClientes, agregarCliente, eliminarCliente }}>
      {children}
    </ClientesContext.Provider>
  );
};

export const useClientes = () => {
  const context = useContext(ClientesContext);
  if (context === undefined) {
    throw new Error('useClientes debe ser usado dentro de un ClientesProvider');
  }
  return context;
};