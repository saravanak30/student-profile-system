import { useEffect, useState } from 'react';
import './App.css';

// 1. Header Component
function Header() {
  return (
    <header className="header">
      <h1>Amazon Product Store</h1>
    </header>
  );
}

// 2. ProductCard Component
function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  return (
    <section className="product-card">
      <h2>{productName}</h2>

      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Colour:</strong> {selectedColor}</p>
      <p><strong>Deliver to:</strong> {deliveryCity}</p>
      <p><strong>Cart Quantity:</strong> {quantity}</p>

      <p>
        <strong>Total Amount:</strong> ₹{quantity * price}
      </p>

      <p>
        <strong>Status:</strong>{' '}
        {quantity === 0
          ? 'Cart is empty'
          : 'Product added to cart'}
      </p>
    </section>
  );
}

// 3. Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Amazon Product Store</p>
    </footer>
  );
}

// Main App Component
function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [deliveryCity, setDeliveryCity] = useState('Coimbatore');
  const [showProduct, setShowProduct] = useState(true);

  const productName = 'Wireless Mouse';
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main className="container">
        <h2>Product Cart</h2>

        {/* Controlled colour dropdown */}
        <div className="control-group">
          <label htmlFor="color">Select Colour:</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(event) =>
              setSelectedColor(event.target.value)
            }
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
          </select>
        </div>

        {/* Controlled delivery city input */}
        <div className="control-group">
          <label htmlFor="city">Delivery City:</label>
          <input
            id="city"
            type="text"
            value={deliveryCity}
            onChange={(event) =>
              setDeliveryCity(event.target.value)
            }
            placeholder="Enter delivery city"
          />
        </div>

        {/* Cart buttons */}
        <div className="buttons">
          <button onClick={() => setQuantity(q => q + 1)}>
            Add to Cart
          </button>

          <button
            onClick={() =>
              setQuantity(q => Math.max(0, q - 1))
            }
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct(s => !s)}>
            {showProduct ? 'Hide Product' : 'Show Product'}
          </button>
        </div>

        {/* Conditional rendering */}
        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;