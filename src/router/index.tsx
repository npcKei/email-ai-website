import Home from '../views/Home';
import Download from '@/views/Download';
import Login from '@/views/Login';
import Register from '@/views/Register';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/down',
		element: <Download />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
]);

export default router;
