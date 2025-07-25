import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function EssenceSection() {
  return (
    <>
      <section className="min-h-screen w-full px-6 md:px-10 py-10 bg-white text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-10">
            Our Essence.
          </h1>
          <p className="text-gray-500 text-lg mt-2">
            Passion for fragrance.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Explore More
          </Link>
        </motion.div>

        {/* Description Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mb-20"
        >
          <p className="w-full md:w-1/2 text-sm md:text-base text-gray-700 leading-relaxed text-left">
            Focused on delivering individuality through exquisitely crafted perfumes, our curated portfolio reflects elegance inspired by global traditions. Each brand evokes emotion, culture, and authenticity.
            <br /><br />
            Our hand-selected aromas convey subtle desire, delicate charisma, and a memorable essence. Discover scents designed to capture memories and inspire stories.
          </p>

          <div className="w-full md:w-1/2 h-60 rounded-lg overflow-hidden">
            <img
              src="./09d7cab0d7f765decb7214ca3aeabe5b.jpg"
              alt="Essence"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24"
        >
          {[
            {
              title: "Crafted carefully.",
              desc: "Every perfume is made using premium ingredients sourced responsibly to ensure quality and longevity.",
              image: "./09d7cab0d7f765decb7214ca3aeabe5b.jpg",
            },
            {
              title: "Global inspiration.",
              desc: "We draw from cultures worldwide, weaving tales of tradition and memory into each fragrance.",
              image: "./95138e0951241d6b9573fbfea0fb5bfd.jpg",
            },
            {
              title: "For every mood.",
              desc: "Whether bold or subtle, our range offers a scent for every occasion and personality.",
              image: "./Screenshot 2025-07-25 234338.png",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="w-28 h-28 mb-6 rounded-xl overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-lg font-medium text-gray-800 mb-2">
            Join our fragrance family.
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Stay close to our story and receive exclusive updates.
          </p>
          <Link to="/register" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Sign Up
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
