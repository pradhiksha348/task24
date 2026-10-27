import { useState, useMemo } from "react";

// Task 1: Number Multiplication
function calculateDouble(num) {
console.log("Calculating Double...");

let result = 0;

for (let i = 0; i < 100000; i++) {
result = num * 2;
}

return result;
}

// Task 2: Product Search
function filterProducts(products, search) {
console.log("Filtering Products...");

return products.filter((product) =>
product.name.toLowerCase().includes(search.toLowerCase())
);
}

// Task 3: Shopping Cart Total
function calculateTotal(products) {
console.log("Calculating Total...");

return products.reduce(
(total, product) => total + product.price * product.quantity,
0
);
}

function App() {
// Task 1
const [number, setNumber] = useState(0);
const [theme1, setTheme1] = useState(false);

const double = useMemo(() => {
return calculateDouble(Number(number));
}, [number]);

// Task 2
const [search, setSearch] = useState("");
const [count, setCount] = useState(0);

const products = [
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Mobile", price: 20000 },
{ id: 3, name: "Headphones", price: 2000 },
{ id: 4, name: "Keyboard", price: 1500 },
{ id: 5, name: "Mouse", price: 800 }
];

const filteredProducts = useMemo(() => {
return filterProducts(products, search);
}, [search]);

// Task 3
const [cart, setCart] = useState([
{ id: 1, name: "Laptop", price: 50000, quantity: 1 },
{ id: 2, name: "Mobile", price: 20000, quantity: 2 },
{ id: 3, name: "Mouse", price: 800, quantity: 1 }
]);

const [theme3, setTheme3] = useState(false);

const total = useMemo(() => {
return calculateTotal(cart);
}, [cart]);

function updateQuantity(id, change) {
setCart(
cart.map((product) =>
product.id === id
? {
...product,
quantity: Math.max(0, product.quantity + change)
}
: product
)
);
}

return ( <div> <h1>Task 1</h1>


  <input
    type="number"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
  />

  <h3>Double: {double}</h3>

  <button onClick={() => setTheme1(!theme1)}>
    {theme1 ? "Light Theme" : "Dark Theme"}
  </button>


  <h1>Task 2</h1>

  <input
    type="text"
    placeholder="Search product"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button onClick={() => setCount(count + 1)}>
    Increment
  </button>

  <h3>Counter: {count}</h3>

  {filteredProducts.map((product) => (
    <div key={product.id}>
      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  ))}


  <h1>Task 3 </h1>

  {cart.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>
      <span> Quantity: {product.quantity} </span>

      <button onClick={() => updateQuantity(product.id, -1)}>
        less
      </button>

      

      <button onClick={() => updateQuantity(product.id, 1)}>
        add
      </button>

      <p>Subtotal: ₹{product.price * product.quantity}</p>

    </div>
  ))}

  <h2>Total Amount: ₹{total}</h2>

  <button onClick={() => setTheme3(!theme3)}>
    {theme3 ? "Light Theme" : "Dark Theme"}
  </button>
</div>


);
}

export default App;
