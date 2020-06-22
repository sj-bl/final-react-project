export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === itemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return (cartItem.id = itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem);
    });
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
