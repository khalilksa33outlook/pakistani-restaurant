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
          <h2 className="text-3xl font-bold text-center mb-12">Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8')" }}
                role="img"
                aria-label="Authentic Chicken Biryani with aromatic rice and spices"
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Special Chicken Biryani</h3>
                <p className="text-gray-600">
                  Our signature biryani features fragrant basmati rice layered with tender marinated chicken and aromatic spices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85')" }}
                role="img"
                aria-label="Sizzling Chicken Karahi with fresh herbs"
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chicken Karahi</h3>
                <p className="text-gray-600">
                  A beloved classic cooked in a traditional wok with hand-ground spices and fresh tomatoes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599487488170-d11ec9c172f0')" }}
                role="img"
                aria-label="Grilled Seekh Kebabs with fresh herbs"
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Seekh Kebab</h3>
                <p className="text-gray-600">
                  Hand-ground spiced lamb kebabs grilled to perfection, served with mint chutney.
                </p>
              </div>
            </div>
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
            <div 
              className="h-[400px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9')" }}
              role="img"
              aria-label="Traditional Pakistani restaurant interior with warm lighting and authentic decor"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;