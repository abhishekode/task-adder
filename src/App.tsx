import React from 'react';
import Layout from 'components/layout';
import { ToastContainer } from 'react-toastify';
import { TodoProvider } from 'context/todoTaskContext';

const App = () => (
	<TodoProvider>
		<ToastContainer progressClassName="toastProgress" position='top-center' />
		<Layout />
	</TodoProvider>
);

export default App;
