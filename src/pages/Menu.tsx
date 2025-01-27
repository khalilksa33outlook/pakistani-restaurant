import { useState } from 'react';

// Menu items data organized by category
const menuItems = {
  'Appetizers': [
    {
      name: "Samosa",
      description: "Crispy pastry filled with spiced potatoes and peas",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Pakora",
      description: "Mixed vegetable fritters with mint chutney",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
    }
  ],
  'Biryanis': [
    {
      name: "Chicken Biryani",
      description: "Aromatic rice dish with tender chicken and saffron",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    },
    {
      name: "Mutton Biryani",
      description: "Traditional rice preparation with tender mutton",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    }
  ],
  'Karahi': [
    {
      name: "Chicken Karahi",
      description: "Tender chicken cooked with tomatoes and green chilies",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
    }
  ],
  'Kebabs': [
    {
      name: "Seekh Kebab",
      description: "Minced meat skewers with aromatic spices",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    }
  ],
  'Curries': [
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    }
  ],
  'Breads': [
    {
      name: "Naan",
      description: "Traditional clay oven-baked flatbread",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
    }
  ],
  'Vegetarian': [
    {
      name: "Dal Makhani",
      description: "Creamy black lentils simmered overnight",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    }
  ],
  'Rice Dishes': [
    {
      name: "Jeera Rice",
      description: "Aromatic cumin-flavored basmati rice",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    }
  ],
  'Desserts': [
    {
      name: "Gulab Jamun",
      description: "Sweet milk dumplings in rose syrup",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
    }
  ],
  'Beverages': [
    {
      name: "Mango Lassi",
      description: "Sweet yogurt drink with mango pulp",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
    }
  ],
  "Chef's Specials": [
    {
      name: "Mixed Grill Platter",
      description: "Assortment of grilled meats and kebabs",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    }
  ],
  'BBQ': [
    {
      name: "Tandoori Chicken",
      description: "Clay oven-roasted chicken with special marinade",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
    }
  ]
};

const categories = Object.keys(menuItems);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container py-12 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems[activeCategory]?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <span className="text-primary font-bold">${item.price}</span>
              </div>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;