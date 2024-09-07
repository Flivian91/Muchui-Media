import { BiPhoneCall } from "react-icons/bi";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function ClientAdminDetails() {
  return (
    <div className="bg-surface shadow rounded px-2 pb-2">
      <h1 className="text-sm md:text-lg font-bold text-text/70 py-2 tracking-wide">
        Admin Details
      </h1>
      <div className="flex flex-col gap-3">
        <Link
          to={"tel:+254718017191"}
          className="flex border items-center shadow-md px-2 py-1 rounded gap-4"
        >
          <BiPhoneCall fontSize={22} />
          <span className="text-text font-bold tracking-wide font-mono text-xl ">
            0718017191
          </span>
        </Link>
        <Link
          to={"tel:+254718017191"}
          className="flex border items-center shadow-md px-2 py-1 rounded gap-4"
        >
          <MdEmail fontSize={22} />
          <span className="text-text font-bold tracking-wide font-mono text-xl ">
            muchuimedia@gmail.com
          </span>
        </Link>
        <Link
          to={"wa-me:/+254718017191"}
          className="flex border items-center shadow-md px-2 py-1 rounded gap-4"
        >
          <BsWhatsapp fontSize={22} />
          <span className="text-text font-bold tracking-wide font-mono text-xl ">
            +254718017191
          </span>
        </Link>
        <Link
          to={"tel:+254718017191"}
          className="flex border items-center shadow-md px-2 py-1 rounded gap-4"
        >
          <FaFacebook fontSize={22} />
          <span className="text-text font-bold tracking-wide font-mono text-xl ">
            @MuchuiMedia
          </span>
        </Link>
        <Link
          to={"tel:+254718017191"}
          className="flex border items-center shadow-md px-2 py-1 rounded gap-4"
        >
          <BsTwitter fontSize={22} />
          <span className="text-text font-bold tracking-wide font-mono text-xl ">
            @muchuiMedia
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ClientAdminDetails;
