import { NavLink } from "react-router";

interface NavLinkProps {
  isActive: boolean;
}

const NavLinkDefaultStyle: string =
  "p-2 font-semibold hover:text-blue-600 hover:bg-blue-200 transition-colors rounded-xl";

export const NavBar: React.FC = () => {
  const handleActiveNavLinkStyle = ({ isActive }: NavLinkProps): string => {
    return `${isActive ? "text-blue-500" : "text-gray-500"} ${NavLinkDefaultStyle}`;
  };

  return (
    <nav>
      <ul className="flex justify-start items-center gap-5 p-4 border-b border-b-blue-200">
        <li>
          <NavLink to={"/"}>
            <img
              src="/src/assets/images/check.png"
              alt="Logo of the website. The letter V with a blue background. Most known as the checkmark logo."
              className="size-10"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} className={handleActiveNavLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={handleActiveNavLinkStyle}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
