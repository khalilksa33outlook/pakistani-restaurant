import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[linear-gradient(to_right,#00000099,#00000066),url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="container h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Experience Authentic Pakistani Cuisine
            </h1>
            <p className="text-xl mb-8">
              Discover the rich flavors and aromatic spices of traditional Pakistani dishes
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
            >
              View Our Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured dishes will be added here */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Signature Dish {item}</h3>
                  <p className="text-gray-600">
                    Description of this amazing Pakistani dish that will make your mouth water.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                For over two decades, Desi Dhaba has been serving authentic Pakistani cuisine,
                bringing the rich flavors and traditions of Pakistan to your table.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gray-200 h-[400px] rounded-lg">
              {/* Restaurant image will go here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;