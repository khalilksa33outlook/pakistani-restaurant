import { useState } from 'react';

const categories = [
  'Appetizers',
  'Biryanis',
  'Karahi',
  'Kebabs',
  'Curries',
  'Breads',
  'Vegetarian',
  'Rice Dishes',
  'Desserts',
  'Beverages',
  "Chef's Specials",
  'BBQ'
];

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
        {/* Placeholder menu items */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Dish Name</h3>
                <span className="text-primary font-bold">$12.99</span>
              </div>
              <p className="text-gray-600">
                Description of this delicious Pakistani dish with its main ingredients.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;