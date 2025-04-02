function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed mb-4 top-0 rounded-xl w-screen bg-gray-700 text-white p-4 flex justify-around">
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("projects")}>Projects</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;
