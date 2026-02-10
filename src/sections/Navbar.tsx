import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#training">Training</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">Projects</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#education">Education</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#certificates">Certificates</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#achievements">Achievements</a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg" style={{ background: "hsl(234 56% 3% / 0.4)" }}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-2">
          <a href="/" className="text-xl font-bold transition-colors text-muted-foreground hover:text-foreground">
            Khushi
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-muted-foreground hover:text-foreground focus:outline-none sm:hidden"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
