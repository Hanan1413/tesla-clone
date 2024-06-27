import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../Context";

function SideBar() {
  const { isSideBarOpen, closeSideBar, openSidebar } = useGlobalContext();
 
  return (
    <aside className={ isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'} >
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSideBar }>
          <FaTimes />
        </button>
        {/* sidebar links */}
        {sublinks.map((item) => {
          const { pageId, page, links } = item;
          console.log(item);
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              {/* sidebar sublinks */}
              {/* loops inside loops */}
              <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { url, icon, label, id } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}

export default SideBar;
