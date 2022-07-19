import './ProductTable.css'
import React from "react"
import products from '../../data/products'

export default props => {

    function getLinhas(){
        return products.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 == 0 ? 'Par' : ''}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price.toFixed(2)}</td>
                </tr>
            )
        })
        
    }

    return (
        <div className="ProductTable">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
        )
}