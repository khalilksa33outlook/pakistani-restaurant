import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container py-12 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>(123) 456-7890</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>info@desidhaba.com</span>
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span>123 Food Street, Cuisine City</span>
            </p>
            <p className="flex items-center gap-3">
              <Clock className="text-primary" />
              <span>Mon-Thu: 11:00 AM - 10:00 PM</span>
            </p>
          </div>
        </div>
        
        <div className="bg-gray-200 rounded-lg min-h-[400px]">
          {/* Map will go here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;