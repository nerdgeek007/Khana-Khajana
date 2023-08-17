import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/cart';
import CartProvider from './store/cartProvider';
function App() {
  const [cartShown, setCartShown] = useState(false);
  function showCartHandler() {
    setCartShown(true);
  }
  function hideCartHandler() {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
