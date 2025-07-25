import React from 'react';
import { ArrowRight, Play, Users, Building, Lightbulb, Target, Zap, Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We believe in providing the finest quality perfumes crafted with top-grade ingredients to offer a long-lasting fragrance experience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trusted by Millions",
      description: "With a presence across the country, Denver has earned the trust of millions of customers through consistency and excellence."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Fragrances",
      description: "We continually innovate to bring you new and exciting fragrances that match your lifestyle and personality."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mass Premium Positioning",
      description: "Denver combines affordability with luxurious fragrances, positioning itself as a mass premium brand."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "International Standards",
      description: "Our products meet global quality standards and are formulated with fragrances developed by renowned perfumers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  DENVER
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Denver is a premium lifestyle brand known for its iconic range of perfumes and grooming products. 
                  Our legacy is built on the pillars of elegance, masculinity, and class, aiming to inspire confidence 
                  through every spray. From sporty freshness to deep musky notes, each bottle encapsulates power and persona.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/api/placeholder/600/450" 
                  alt="Denver Perfume" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-gray-400">Loyal Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-400">Fragrance Variants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-gray-400">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Denver</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand for quality, confidence, and class — here’s what makes us different.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-gray-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the essence of true masculinity
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover your signature scent with Denver — crafted to inspire confidence, built to last.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gray-900">DENVER</div>
              <p className="text-gray-600">
                The mark of a real man. Explore a wide range of perfumes, deodorants, and grooming essentials.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Perfumes</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Deodorants</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Gift Packs</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Combos</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Store Locator</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Newsroom</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600">
                <p>Denver House, Lifestyle Street</p>
                <p>Grooming City, IN 400001</p>
                <p>+91 1800-123-4567</p>
                <p>support@denverformen.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2025 DENVER. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
