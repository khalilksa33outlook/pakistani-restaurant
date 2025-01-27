import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@desidhaba.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Food Street, Cuisine City</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Clock size={18} />
                <span>Mon-Thu: 11:00 AM - 10:00 PM</span>
              </p>
              <p className="ml-6">Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p className="ml-6">Sun: 12:00 PM - 9:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p>Connect with us on social media for updates and special offers!</p>
            <div className="mt-4 space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 Desi Dhaba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;