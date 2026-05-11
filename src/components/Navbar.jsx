const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-pink-400">
          Junelia
        </h1>

        <ul className="hidden md:flex gap-6 text-lg">
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;