import React from "react";
import Home from "../pages/Home";
import Products from "pages/Products";


export const publicRoutes = [
	{
		id: '1',
		path: "/",
		element: <Home />,
	},
	{
		id: '2',
		path: "/products",
		element: <Products />,
	},
	// {
	// 	id: '3',
	// 	path: "/booking/:seatNumber",
	// 	element: <BookingConfirm />,
	// }
]
