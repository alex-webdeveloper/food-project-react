// import { useState, useEffect } from 'react';
// // import { API_KEY, API_URL } from '../config';
// import Preloader from './Preloader';
// import GoodList from './GoodList';
// import Cart from './Cart';
// import BasketList from './BasketList';
// import Alert from './Alert';
// import { useContext } from "react";
// import { ShopContext } from '../context';

// export default function Shop() {
// 	const value = useContext(ShopContext);

// 	useEffect(function getGoods() {
// 		fetch(API_URL, {
// 			headers: {
// 				Authorization: API_KEY,
// 			},
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				data.shop && value.getGoods(data.shop);
// 			});
// 		// eslint-disable-next-line
// 	}, []);

// 	return (
// 		<main className="container content">
// 			<Cart />
// 			{value.loading ? (
// 				<Preloader />
// 			) : (
// 				<GoodList />
// 			)}
// 			{value.basketShow && (
// 				<BasketList />
//             )}
// 			{value.alertName && <Alert/>}
// 		</main>
// 	);
// }
