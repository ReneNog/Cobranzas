
import React, { useEffect, useState } from 'react';
import type { Cliente } from '../../tipos/Types';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper
} from '@mui/material';
import { useClientes } from '../../contex/ClientesContex';
import { useNavigate } from 'react-router-dom';
import { calcularFechaCobranza } from '../../utils/fechaCrobanza';

const Clientes: React.FC = () => {
  const { agregarCliente } = useClientes();
  const nav = useNavigate()
    const navegacion = () =>{
      nav("/")
    }
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = () => {
  const { nombre, apellido, numeroDeContacto, fechaDeContrato } = nuevoCliente;
  // Verifica si todos los campos tienen un valor
  const isValid = !!nombre && !!apellido && !!numeroDeContacto && !!fechaDeContrato;
  setIsFormValid(isValid);
};


  const [nuevoCliente, setNuevoCliente] = useState<Omit<Cliente, 'id' | 'fechaDeCobranza'>>({
    nombre: '',
    apellido: '',
    numeroDeContacto: '',
    fechaDeContrato: '',
  });

  useEffect(() => {
  validateForm();
}, [nuevoCliente]); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoCliente({
      ...nuevoCliente,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nuevoCliente.nombre || !nuevoCliente.apellido || !nuevoCliente.numeroDeContacto || !nuevoCliente.fechaDeContrato) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

   
    const fechaDeCobranzaCalculada = calcularFechaCobranza(nuevoCliente.fechaDeContrato);

    const clienteCompleto = {
      ...nuevoCliente,
      fechaDeCobranza: fechaDeCobranzaCalculada,
    };

    agregarCliente(clienteCompleto);
    
   
    setNuevoCliente({
      nombre: '',
      apellido: '',
      numeroDeContacto: '',
      fechaDeContrato: '',
    });
  };

  return (
    <Container component={Paper} elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Agregar Nuevo Cliente
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nombre"
          name="nombre"
          value={nuevoCliente.nombre}
          onChange={handleChange}
          required
        />
        <TextField
          label="Apellido"
          name="apellido"
          value={nuevoCliente.apellido}
          onChange={handleChange}
          required
        />
        <TextField
          label="Número de Contacto"
          name="numeroDeContacto"
          value={nuevoCliente.numeroDeContacto}
          onChange={handleChange}
          required
        />
        <TextField
          label="Fecha de Contrato"
          name="fechaDeContrato"
          type="date"
          value={nuevoCliente.fechaDeContrato}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" type="submit" onClick={navegacion} disabled={!isFormValid}>
          Agregar Cliente
        </Button>
      </Box>
    </Container>
  );
};

export default Clientes;