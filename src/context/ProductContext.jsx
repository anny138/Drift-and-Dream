import {createContext,useState,useEffect} from 'react';
export const ProductContext = createContext();
export const ProductProvider = ({children}) => {
  const [products,setProducts] = useState([]); 
  const [loading,setLoading] = useState(true); 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.warn('Unexpected response format:', data);
          setProducts([]); 
        }
      } catch (err) {
        console.error('Problem fetching products:', err);
        setProducts([
          {
            id: 1,
            title: "Laptop Computer",
            price: 40000,
            buy_box_price: 38500,
            description: "High-performance laptop for work and gaming.",
            category: "electronics",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
            rating: { rate: 4.5, count: 120 }
          },
          {
            id: 2,
            title: "Wireless Headphones",
            price: 3999,
            buy_box_price: 3499,
            description: "Noise-cancelling over-ear wireless headphones.",
            category: "electronics",
            image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533161cv12d.jpg",
            rating: { rate: 4.2, count: 80 }
          },
          {
            id: 3,
            title: "Smartphone",
            price: 120000,
            buy_box_price: 108999,
            description: "Latest model smartphone with high-resolution display.",
            category: "electronics",
            image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674022/Croma%20Assets/Communication/Mobiles/Images/300819_0_aunzde.png",
            rating: { rate: 4.7, count: 200 }
          },
          {
            id: 4,
            title: "Men's Running Shoes",
            price: 2999,
            buy_box_price: 2799,
            description: "Comfortable and lightweight running shoes for men.",
            category: "Men's Clothing",
            image: "https://tse1.mm.bing.net/th/id/OIP.CGogxrdU40aBfc__Hw3EAAHaHa?pid=Api&P=0&h=180",
            rating: { rate: 4.3, count: 65 }
          },
          {
            id: 5,
            title: "Women's Handbag",
            price: 4000,
            buy_box_price: 4000,
            description: "Stylish handbag for women, perfect for all occasions.",
            category: "Womens's Clothing",
            image: "https://images-eu.ssl-images-amazon.com/images/I/814iogRTu5L.jpg",
            rating: { rate: 4.6, count: 110 }
          },
          {
            id: 6,
            title: "Stainless Steel Watch",
            price: 5876,
            buy_box_price: 5499,
            description: "Elegant stainless steel wristwatch",
            category: "fashion",
            image: "https://cdna.lystit.com/photos/2011/12/15/emporio-armani-silver-mens-stainless-steel-bracelet-watch-product-2-1968444-888635920.jpeg",
            rating: { rate: 4.4, count: 75 }
          },
          {
            id: 7,
            title: "Coffee Maker",
            price: 2800,
            buy_box_price: 2550,
            description: "Automatic drip coffee maker with programmable timer.",
            category: "home",
            image: "https://m.media-amazon.com/images/I/81c1HgSu23L._AC_SL1500_.jpg",
            rating: { rate: 4.1, count: 50 }
          },
          {
            id: 8,
            title: "Blender",
            price: 800,
            buy_box_price: 750,
            description: "High-speed blender for smoothies and shakes.",
            category: "home",
            image: "https://m.media-amazon.com/images/I/81VoJ7+UmaL._AC_SL1500_.jpg",
            rating: { rate: 4.0, count: 40 }
          },
          {
            id: 9,
            title: "Non-stick Frying Pan",
            price: 499,
            buy_box_price: 499,
            description: "Durable non-stick frying pan for everyday cooking.",
            category: "home",
            image: "https://images-na.ssl-images-amazon.com/images/I/811veiTuBuL.jpg",
            rating: { rate: 4.2, count: 60 }
          },
          {
            id: 10,
            title: "Yoga Mat",
            price: 700,
            buy_box_price: 650,
            description: "Eco-friendly yoga mat with anti-slip surface.",
            category: "sports",
            image: "https://www.protekgr.com/wp-content/uploads/2015/02/0.25-Purpul.jpg",
            rating: { rate: 4.5, count: 90 }
          },
          {
            id: 11,
            title: "Basketball",
            price: 876,
            buy_box_price: 870,
            description: "Official size basketball for indoor and outdoor play.",
            category: "sports",
            image: "https://m.media-amazon.com/images/I/51PR4Fz6XfL._SL500_.jpg",
            rating: { rate: 4.3, count: 35 }
          },
          {
            id: 12,
            title: "Mountain Bike",
            price: 15000,
            buy_box_price: 13899,
            description: "21-speed mountain bike with durable frame.",
            category: "sports",
            image: "https://p.vitalmtb.com/photos/press_releases/3049/title_image/s1600_FuelEX98_20_29090_B_Portrait_567291.jpg?1565970638",
            rating: { rate: 4.6, count: 22 }
          },
        ]);    
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

