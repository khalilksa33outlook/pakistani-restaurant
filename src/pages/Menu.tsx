import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Menu items data organized by category
const menuItems = {
  'Appetizers': [
    {
      name: "Samosa",
      description: "Traditional Pakistani crispy pastries filled with spiced potatoes, green peas, and aromatic spices. Served with mint chutney.",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      alt: "Golden-brown triangular samosas served with fresh mint chutney"
    },
    {
      name: "Pakora",
      description: "Crispy vegetable fritters made with chickpea flour, mixed vegetables, and traditional Pakistani spices. Served with tamarind sauce.",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1626132647523-66c6bc3f6d8a",
      alt: "Crispy mixed vegetable pakoras with tamarind dipping sauce"
    }
  ],
  'Biryanis': [
    {
      name: "Chicken Biryani",
      description: "Fragrant basmati rice layered with tender marinated chicken, caramelized onions, and authentic Pakistani spices, garnished with fresh mint.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
      alt: "Aromatic chicken biryani garnished with fresh herbs and fried onions"
    },
    {
      name: "Mutton Biryani",
      description: "Premium basmati rice cooked with tender mutton pieces, saffron, and traditional spices in the authentic Karachi style.",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833",
      alt: "Traditional mutton biryani with saffron-infused rice"
    }
  ],
  'Karahi': [
    {
      name: "Chicken Karahi",
      description: "Fresh chicken cooked in a traditional wok with hand-ground spices, tomatoes, and green chilies. Finished with fresh ginger and cilantro.",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85",
      alt: "Sizzling chicken karahi garnished with fresh ginger and cilantro"
    }
  ],
  'Kebabs': [
    {
      name: "Seekh Kebab",
      description: "Hand-ground spiced lamb kebabs grilled to perfection on skewers. Served with mint chutney and fresh naan bread.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
      alt: "Grilled seekh kebabs served with fresh herbs and naan bread"
    }
  ],
  'Curries': [
    {
      name: "Butter Chicken",
      description: "Tender chicken tikka pieces in a rich, creamy tomato-based curry sauce with aromatic spices and fresh cream.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
      alt: "Creamy butter chicken curry garnished with cream and fenugreek leaves"
    }
  ],
  'Breads': [
    {
      name: "Naan",
      description: "Fresh clay oven-baked flatbread, brushed with ghee and garnished with fresh coriander. Perfect for scooping up curries.",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1584534582042-939e4ea9d4db",
      alt: "Freshly baked naan bread brushed with ghee"
    }
  ],
  'Vegetarian': [
    {
      name: "Dal Makhani",
      description: "Black lentils slow-cooked overnight with butter and cream, finished with our special spice blend. A vegetarian delicacy.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
      alt: "Creamy dal makhani garnished with cream and butter"
    }
  ],
  'Rice Dishes': [
    {
      name: "Jeera Rice",
      description: "Fragrant basmati rice tempered with cumin seeds and aromatic spices. The perfect accompaniment to any curry.",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
      alt: "Aromatic jeera rice garnished with fresh coriander"
    }
  ],
  'Desserts': [
    {
      name: "Gulab Jamun",
      description: "Traditional milk-based sweet dumplings, deep-fried and soaked in aromatic rose and cardamom syrup. Served warm.",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1601303516361-f2f1c1eae981",
      alt: "Warm gulab jamun in rose syrup garnished with pistachios"
    }
  ],
  'Beverages': [
    {
      name: "Mango Lassi",
      description: "Refreshing yogurt-based drink blended with fresh Alphonso mangoes and a hint of cardamom. A perfect summer cooler.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1571006682889-7e64f028d06c",
      alt: "Chilled mango lassi topped with dried rose petals"
    }
  ],
  "Chef's Specials": [
    {
      name: "Mixed Grill Platter",
      description: "A grand assortment of our finest grilled specialties including seekh kebab, chicken tikka, and lamb chops. Served with mint chutney.",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      alt: "Assorted grilled meats platter with accompaniments"
    }
  ],
  'BBQ': [
    {
      name: "Tandoori Chicken",
      description: "Whole chicken marinated in yogurt and traditional spices, slow-cooked in our clay oven. Served with mint chutney.",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91",
      alt: "Tandoori chicken with charred edges and fresh garnish"
    }
  ]
};

const Menu = () => {
  // First get the categories from menuItems
  const categories = Object.keys(menuItems);
  // Then use categories in the useState initialization
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      <Helmet>
        <title>Menu - Desi Dhaba | Authentic Pakistani Cuisine</title>
        <meta name="description" content="Explore our authentic Pakistani menu featuring hand-crafted biryanis, kebabs, curries, and traditional desserts. All dishes made fresh with premium ingredients." />
        <meta name="keywords" content="Pakistani food, biryani, kebabs, curry, tandoori, halal food, desi food, Pakistani restaurant" />
      </Helmet>

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
                role="img"
                aria-label={item.alt}
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
    </>
  );
};

export default Menu;