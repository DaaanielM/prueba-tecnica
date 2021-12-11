import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../views/Navbar';
import ViewClientes from '../views/ViewClientes';
import ViewFactura from '../views/ViewFactura';
import ViewInicio from '../views/ViewInicio';
import ViewProductos from '../views/ViewProductos';
import ViewProveedores from '../views/ViewProveedores';
function IndexLayout() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/Inicio' element={<ViewInicio />} />
				<Route path='/Clientes' element={<ViewClientes />} />
				<Route path='/Productos' element={<ViewProductos />} />
				<Route path='/Proveedores' element={<ViewProveedores />} />
				<Route path='/Factura' element={<ViewFactura />} />
			</Routes>
		</>
	);
}

export default IndexLayout;
