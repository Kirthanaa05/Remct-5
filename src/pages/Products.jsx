import { useState } from 'react';

const categories = [
  'Electronics',
  'Jewelry',
  "Men's clothing",
  "Women's clothing"
];

const productData = {
  Electronics: [
    { name: 'Smartphone', price: '$299' },
    { name: 'Laptop', price: '$799' },
    { name: 'Headphone', price: '$199' }
  ],
  Jewelry: [
    { name: 'Gold Necklace', price: '$499' },
    { name: 'Diamond Ring', price: '$999' },
    { name: 'Bangles', price: '$899' }
  ],
  "Men's clothing": [
    { name: 'T-shirt', price: '$19' },
    { name: 'Jeans', price: '$39' },
    { name: 'shirt', price: '$29' }
  ],
  "Women's clothing": [
    { name: 'Dress', price: '$59' },
    { name: 'Skirt', price: '$29' },
    { name: 'Kurta', price: '$49' }
  ],
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div style={{ display: 'flex',height: '80vh',width:'100%'}}>
      <div style={{ width: '200px',height:'100%',backgroundColor: 'black',color:'white',padding: '20px',margin: '0px'}}>
        <h2>Categories</h2>
        <ul style={{ listStyle: 'none', padding: 0}}>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{ marginBottom: '10px', cursor: 'pointer' }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      
      <div style={{ padding: '20px', flex: 1 }}>
      {selectedCategory ? (
        <div>
          <h2 style={{ marginBottom: '10px' }}>{selectedCategory}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            {productData[selectedCategory].map((item, index) => (
              <div key={index} style={{ padding: '15px', border: '1px solid #ccc', 
              borderRadius: '8px', backgroundColor: '#f9f9f9', width: '200px'}}>
                <h4 style={{ marginBottom: '5px' }}>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '18px' }}>Select a category to view products.</p>
      )}
      </div>
    </div>
  );
};

export default Products;
