import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 text-white" style={{ backgroundColor: "var(--color-primary)" }}>
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-bold" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
