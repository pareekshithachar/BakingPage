import React, { useState, useEffect } from "react";

const ShoppingPage = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [counts, setCounts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let tempshoppingItems = [];
    let counts = [0, 0, 0, 0];
    tempshoppingItems.push({
      name: "Cake",
      description:
        "A perfect balance of sweetness, appearance, texture, and flavour right from the chefs from Egypt",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg",
      price: "6 $",
      count: 1,
    });
    tempshoppingItems.push({
      name: "Donuts",
      description: "Item 2 Description",
      photoUrl:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
      price: "6 $",
      count: 1,
    });
    tempshoppingItems.push({
      name: "Item 3",
      description: "Item 3 Description",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg",
      price: "6 $",
      count: 1,
    });
    tempshoppingItems.push({
      name: "Item 4",
      description: "Item 4 Description",
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg",
      price: "10 $",
      count: 1,
    });

    // for (let i = 0; i < 4; ++i) {
    //   counts.push(0);
    // }
    setCounts(counts);
    setShoppingItems(tempshoppingItems);
  }, []);

  const addToCart = (item, index) => {
    let flag = 0;
    cartItems.map((cartItem) => {
      if (cartItem.name == item.name) {
        flag = 1;
        cartItem.count++;
        counts[index]++;
        return;
      }
    });
    if (flag == 0) {
      cartItems.push(item);
      counts[index]++;
    }

    update(index);
  };
  const update = (index) => {
    let x = document.getElementById(index);
    x.innerText = `No of items ${counts[index]}`;
  };
  const deletefromCart = (item, index) => {
    let idx = -1;
    cartItems.map((cartItem, mIdx) => {
      if (cartItem.name == item.name) {
        cartItem.count--;
        counts[index]--;
        if (counts[index] == 0) {
          idx = mIdx;
        }
        return;
      }
    });
    if (idx != -1) delete cartItems[idx];
    update(index);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {shoppingItems.map((item, index) => {
            return (
              <div className="card w-25">
                <img src={item?.photoUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item?.name}</h5>
                  <p className="card-text">{item?.price}</p>
                  <p className="card-text">{item?.description}.</p>
                  <a
                    href="#"
                    className="btn btn-primary mr-2"
                    onClick={() => addToCart(item, index)}
                  >
                    +
                  </a>
                  <p id={index}> No of items in cart 0</p>
                  <a
                    href="#"
                    className="btn btn-primary ml-2"
                    onClick={() => deletefromCart(item, index)}
                  >
                    -
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={() => console.log(cartItems)}>Checkout</button>
      </div>
    </>
  );
};

export default ShoppingPage;
