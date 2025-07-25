import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ShoppingCart, Search, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.userReducer);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "About Us", to: "/about" }
  ];

  // Load theme from localStorage
  const wrapperRef = useRef(null);

  // Close dropdown when clicked outside

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-shadow text-zinc-50 duration-300 backdrop-blur-md bg-black/30 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-xl font-bold animate-pulse">Denver</div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `navlink-underline text-sm font-semibold tracking-tight ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons + Icons */}
          <div className="hidden md:flex items-center space-x-4">

            {/* User icon */}
            {user ? (
              <NavLink
                to="/profile"
                className="p-2 hover:scale-110 transition-transform"
              >
                <User size={22} />
              </NavLink>
            ) : "" }

            {!user ? (
              <>
                <Link
                  to="/login"
                  className={`text-sm px-5 py-2 rounded-full border transition
              `}
                >
                  Sign In
                </Link>
              </>
            ) : (
              ""
            )}

            {/* Cart icon */}
          { user &&  <NavLink
              to="/cart"
              className="p-2 hover:scale-110 transition-transform"
            >
              <ShoppingCart size={22} />
            </NavLink> }
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`md:hidden px-6 pb-4 pt-2 flex flex-col space-y-4 mobile-menu-animation`}
          >

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={`text-sm transition`}
              >
                {link.name}
              </NavLink>
            ))}

            {!user && (
              <>
              <Link
                to="/login"
                className={`text-sm px-5 py-2 rounded-full border transition`}
              >
                Sign In
              </Link>
              
              </>
            )}

            {/* Cart icon */}
           { user && <NavLink to="/cart" className="self-start p-2">
              Cart
            </NavLink> }
             {user ? <><Link to="/profile" className="text-sm mx-1 ">
              Profile</Link>
              </> : ""}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
