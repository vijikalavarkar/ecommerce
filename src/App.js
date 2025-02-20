import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
            <div class="logo">My Shop</div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
                <li><i class="fas fa-shopping-cart"></i> Cart</li>
            </ul>
        </nav>
        <div class="hero">
            <h1>Welcome to My Shop</h1>
            <p>Your one-stop shop for all your needs.</p>
            <button>Shop Now</button>
        </div>
    </header>

    <main>
        <section class="featured-products">
            <h2>Featured Products</h2>
            <div class="product-grid">
                <div class="product">
                    <img src="placeholder.jpg" alt="Product 1"/>
                    <h3>Product 1</h3>
                    <p>Description of product 1.</p>
                    <div class="price">$19.99</div>
                    <button>Add to Cart</button>
                </div>
                <div class="product">
                    <img src="placeholder.jpg" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description of product 2.</p>
                    <div class="price">$29.99</div>
                    <button>Add to Cart</button>
                </div>
                <div class="product">
                    <img src="placeholder.jpg" alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Description of product 3.</p>
                    <div class="price">$39.99</div>
                    <button>Add to Cart</button>
                </div>
                </div>
        </section>

        <section class="about-us">
            <h2>About Us</h2>
            <p>We are a passionate team dedicated to providing high-quality products and excellent customer service.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 My Shop. All rights reserved.</p>
    </footer>
    </>
  );
}

export default App;
