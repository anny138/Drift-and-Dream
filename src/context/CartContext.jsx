import {createContext,useState,useEffect } from 'react';
export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([]); 
  useEffect(() => {
    const maybeSavedCart = localStorage.getItem('amazonCloneCart');
    if (maybeSavedCart) {
      try {
        const parsedCart = JSON.parse(maybeSavedCart);
        setCartItems(parsedCart);
      } catch(err){
        console.error('Failed to parse cart from storage:',err);
      }
    }
  }, []); 
  useEffect(() => {
    localStorage.setItem('amazonCloneCart',JSON.stringify(cartItems));
  },[cartItems]); 
  const addToCart =(incomingProduct)=>{
    setCartItems(currentItems => {
      const found = currentItems.find(ci=>ci.id===incomingProduct.id);
      if(found){
        return currentItems.map(ci=>ci.id===incomingProduct.id ? {...ci,quantity:ci.quantity+1}:ci);
      }
      return [...currentItems,{...incomingProduct,quantity:1}];
    });
  };
  const removeFromCart = (idToRemove) => {
    setCartItems(currentList =>{
      return currentList.filter(item =>item.id!==idToRemove);
    });
  };
  const updateQuantity = (targetId,qty) => {
    if(qty<=0) {
      removeFromCart(targetId); 
      return;
    }
    setCartItems(prev =>
      prev.map(item=>item.id===targetId?{...item,quantity:qty}:item)
    );
  };
  const getCartTotal = () => {
    let total = 0;
    for(let i=0;i<cartItems.length;i++) {
      const item = cartItems[i];
      total+=item.price*item.quantity;
    }
    return total; 
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return(
    <CartContext.Provider value={{cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
