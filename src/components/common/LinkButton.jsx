/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LinkButton({ children, link }) {
  return (
    <Link to={`${link}`} className="px-4 py-2 w-full bg-accent rounded font-bold hover:bg-accent/80 transition-all duration-300">
      {children}
    </Link>
  );
}

export default LinkButton;
