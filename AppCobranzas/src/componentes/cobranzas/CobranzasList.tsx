import React from 'react';

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Alert,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useClientes } from '../../contex/ClientesContex';
import { useNavigate } from 'react-router-dom';

const ListaDeClientes: React.FC = () => {
  const { listaClientes, eliminarCliente } = useClientes(); 
  const nav = useNavigate()
  const navegacion = () =>{
    nav("/AddCliente")
  }

  return (
    <Container component={Paper} elevation={3} sx={{ p: 4, mt: 4 }}>
      <Button onClick={navegacion}> Agregar Cliente </Button>
      <Typography variant="h5" component="h3" gutterBottom>
        Lista de Clientes
      </Typography>
      {listaClientes.length > 0 ? (
        <List>
          {listaClientes.map((cliente) => (
            <ListItem
              key={cliente.id}
              divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="eliminar"
                  onClick={() => eliminarCliente(cliente.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={`${cliente.nombre} ${cliente.apellido}`}
                secondary={`Contacto: ${cliente.numeroDeContacto} | Contrato: ${cliente.fechaDeContrato} | Cobranza: ${cliente.fechaDeCobranza}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Alert severity="info">
          No hay clientes registrados.
        </Alert>
        
      )}
    </Container>
  );
};

export default ListaDeClientes;
