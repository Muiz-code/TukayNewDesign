/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Page = ({
  pageClick,
  icon,
  iconStyle,
  navigationPage,
  eachStyle,
  pageLink,
  style,
}) => {
  return (
    <NavLink to={pageLink} className="text-decoration-none text-light">
      <li
        className={`${eachStyle}  flex place-items-center justify-start  font-spaceGrotesk cursor-pointer px-3 w-[80%]`}
        onClick={pageClick}
      >
        <div className={`flex place-items-center justify-start gap-5 w-[100%]`}>
          <img
            src={icon}
            alt=""
            className={` flex justify-center place-items-center ${iconStyle}`}
          />

          <p
            className={`${style}  text-lg
          ${style ? "" : "text-light"}`}
          >
            {navigationPage}
          </p>
        </div>
      </li>
    </NavLink>
  );
};

export default Page;
