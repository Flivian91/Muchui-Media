import { BiChat, BiMessage } from "react-icons/bi";
import { Link } from "react-router-dom";

function CommentPart() {
  return (
    <div className="flex items-center gap-2 text-text font-semibold leading-6">
      <Link to="/" className="transition-all duration-2 text-red-500 mt-1">
        <BiMessage fontSize={25} />
      </Link>
      <span className="text-xt">5</span>
    </div>
  );
}

export default CommentPart;
