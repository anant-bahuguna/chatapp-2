import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Table extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {store.productList.map((v, i) => {
              return (
                <tr>
                  <td>{v.name}</td>
                  <td>{v.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4>{store.totalPrice}</h4>
        <button onClick={() => store.addProduct("butter", 7)}>
          Add Product
        </button>
      </div>
    );
  }
}

export default Table;
