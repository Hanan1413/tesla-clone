import React, { useContext, useState } from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Context";

const NavLinks = () => {
  const{pageId, setPageId } = useGlobalContext();
  const [backgroundcolor, setBackGroundColor] = useState(false)
  
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { page, pageId } = link;
        // return a button to open submenu on button hover
        // on Click set page id == p ageid
        return <button key={pageId}  className='nav-link'
 
        onMouseEnter={() => setPageId(pageId)}

        >
            {page}
        </button>
      })}
    </div>
  );
};

export default NavLinks;
