import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [on, toggle] = useState(false);

  return (
    <>
      <header className="fixed w-screen top-0">
        <nav className=" bg-green-600  flex items-center justify-between">
          <div className="">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="mx-3 my-1 h-10 w-10 rounded-full"
            />
          </div>
          <h1 className="font-bold	text-2xl	">No Pain No Gain!!</h1>
          <div className="md:block md:static md:mx-3 relative mr-3">
            <button
              onClick={() => toggle(!on)}
              className="btn md:hidden bg-green-300 hover:bg-green-200"
            >
              <FontAwesomeIcon icon={on ? faChevronUp : faEllipsisH} />
            </button>
            <ul
              className={`sm:border sm:bg md:static absolute right-1 md:block ${
                on ? "block" : "hidden"
              } z-10`}
            >
              <li className=" btn btn-header-nav">Logout</li>
              <li className=" btn btn-header-nav">Your workout</li>
              <li className=" btn btn-header-nav">Account</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
