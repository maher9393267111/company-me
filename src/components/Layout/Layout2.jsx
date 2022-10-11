import React, { useState,useEffect} from "react";
import { FaLeaf } from "react-icons/fa";
import Header2 from "./Header2";

function Layout2({ children }) {
  const [toggleHeader, setToggleHeader] = useState(false);
  const [width,setWidth] = useState(0)
  const handleToggle = () => {
    setToggleHeader(!toggleHeader);
  };

  useEffect(() => {
    

    window.addEventListener("resize", onResize);




  }, [toggleHeader]);
  

  function onResize(evt) {
		setWidth(evt.target.innerWidth);

		console.log("Resized window");
    console.log('width--->' , width)

    if ( window.innerWidth > 800) {
      console.log('BIGGGER THAN 800px-->')
      setToggleHeader(false)
    }

	}






  return (
    <div className="site-wrapper">
      <Header2 toggleHeader={toggleHeader} toggleHandler={handleToggle} />
      <main
        className={
          toggleHeader ? "content float-right push" : "content float-right"
        }
      >

   
   
       
        {children}
      </main>
    </div>
  );
}

export default Layout2;
