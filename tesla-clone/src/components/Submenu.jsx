import React, { useRef } from "react";
import { useGlobalContext } from "../Context";
import sublinks from "../data";

const Submenu = () => {
  // Accessing pageId and setPageId from global context
  const { pageId, setPageId } = useGlobalContext();

  // Finding the sublink item that matches the given pageId
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  // Creating a ref to reference the submenu container element
  const submenuContainer = useRef(null);

  // Function to handle mouse leave events on the submenu
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;

    if (submenu) {
      // Get the bounding rectangle of the submenu
      const { left, right, bottom } = submenu.getBoundingClientRect();
      const { clientX, clientY } = event;

      // Debugging logs to check values (optional)
      console.log("Bounding rectangle:", left, right, bottom);
      console.log("Mouse coordinates:", clientX, clientY);

      // Check if mouse is outside the submenu boundaries
      if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
        setPageId(null); // Hide submenu by setting pageId to null
      }
    }
  };

  return (
    <div
      // Conditional class based on whether currentPage is defined
      className={currentPage ? "submenu show-submenu" : "submenu"}
      // Event handler for mouse leave on the submenu
      onMouseLeave={handleMouseLeave}
      // Attach ref to reference the submenu container element
      ref={submenuContainer}
    >
      {currentPage && (
        <>
        
          <div
            // Class for styling submenu links grid layout
            className="submenu-links"
            style={{
              // Dynamic grid template columns based on number of links
              gridTemplateColumns:
                currentPage.links.length > 3 ? "1fr 1fr 1fr" : "1fr",
            }}
          >
            {/* Mapping through links of currentPage to render submenu links */}
            {currentPage.links.map((link) => (
              <a key={link.id} href={link.url}>
                {/* Displaying link icon and label */}
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Submenu;
