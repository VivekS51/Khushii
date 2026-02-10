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
    <header className="fixed top-8 inset-x-0 z-50 flex justify-center w-full px-5 pointer-events-none">
      <div
        className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl bg-black/40 pointer-events-auto"
      >
        {/* Logo */}
        <a href="/" className="text-xl font-bold transition-colors text-white hover:text-accent shrink-0">
          Khushi
        </a>

        {/* Center Navigation - Hidden on mobile */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li><a className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" href="#home">Home</a></li>
            <li><a className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" href="#about">About</a></li>
            <li><a className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" href="#training">Training</a></li>
            <li><a className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" href="#work">Projects</a></li>
            <li><a className="text-sm font-medium text-muted-foreground hover:text-white transition-colors" href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="/Khushi_Saraswat_Resume.pdf"
            download="Khushi_Saraswat_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-accent hover:text-white transition-all duration-300"
          >
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex p-1.5 rounded-full text-muted-foreground hover:text-white hover:bg-white/10 focus:outline-none md:hidden"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] md:hidden rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden pointer-events-auto"
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.3 }}
        >
          <nav>
            <ul className="flex flex-col gap-4 text-center">
              <li><a onClick={() => setIsOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-white py-2" href="#home">Home</a></li>
              <li><a onClick={() => setIsOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-white py-2" href="#about">About</a></li>
              <li><a onClick={() => setIsOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-white py-2" href="#training">Training</a></li>
              <li><a onClick={() => setIsOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-white py-2" href="#work">Projects</a></li>
              <li><a onClick={() => setIsOpen(false)} className="block text-lg font-medium text-muted-foreground hover:text-white py-2" href="#contact">Contact</a></li>
              <li className="pt-2">
                <a
                  href="/Khushi_Saraswat_Resume.pdf"
                  download="Khushi_Saraswat_Resume.pdf"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-white text-black font-bold"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
