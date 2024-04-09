import { useEffect } from 'react';
import { useContext } from "react";
import { ShopContext } from '../context';

export default function Alert() {
	const value = useContext(ShopContext);

	useEffect(() => {
        let timerId = setTimeout(value.closeAlert, 3000);
        
		return () => clearTimeout(timerId);
		// eslint-disable-next-line
	}, [value.alertName]);

	return (
		<>
			<div className="alert-basket text-center text-bg-dark p-2">
				{value.alertName} добавлен(а) в корзину
			</div>
		</>
	);
}
