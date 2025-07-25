import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop",
      items: ["New Arrivals", "Best Sellers", "Gift Sets", "Limited Edition", "All Collections"],
    },
    {
      title: "Customer Care",
      items: ["Shipping & Delivery", "Returns & Exchanges", "FAQ", "Track Order", "Contact Support"],
    },
    {
      title: "Discover",
      items: ["Our Story", "Store Locator", "Ingredients & Ethics", "Scent Guide", "Journal & Tips"],
    },
    {
      title: "Legal",
      items: ["Terms of Service", "Privacy Policy", "Refund Policy", "Cookie Settings", "Accessibility"],
    },
    {
      title: "Connect",
      items: ["X (Twitter)", "Instagram", "Facebook", "Telegram", "Tik Tok"],
    },
  ];
  return (
    <footer className="bg-gradient-to-t from-black to-[orange]/90 text-white py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10"
      >
        {/* Left Section */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
            Denver is where the <br /> fragrance is found.
          </h3>
          <div className="text-sm space-y-1 text-zinc-300">
            <p>📧 customer_service@denver.com</p>
            <p>📞 0811-1090-0088</p>
            <p>☎️ 3500-233</p>
          </div>
        </div>

        {/* Link Columns */}
        {footerLinks.map((section, idx) => (
          <div key={idx} className="space-y-2 text-sm">
            <h4 className="font-semibold text-white mb-2">{section.title}</h4>
            <ul className="space-y-1 text-zinc-300">
              {section.items.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10 text-center text-xs text-zinc-400"
      >
        © 2025 All rights reserved by Denver
      </motion.div>

      {/* Watermark Background Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        className="hidden sm:block absolute bottom-0 left-0 right-0 text-[6rem] sm:text-[10rem] md:text-[14rem] font-black text-white text-center pointer-events-none select-none"
      >
        DENVER
      </motion.div>
    </footer>
  );
};

export default Footer;
