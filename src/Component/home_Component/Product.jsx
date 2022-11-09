import React from 'react'


export default function Product({img, alt, title}) {

	return (
		<div>
			<div>{img}</div>
			<img alt={alt} src="./" />
			<div>{title}</div>
		</div>
	);
}

//export default Product; 위에서 처럼 대체 가능하다.
