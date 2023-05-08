import { useEffect, useState } from "react";

const useScrollPosition = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(()=>{
       const listener = window.addEventListener("scroll", handleScroll);
       return () => {
        window.removeEventListener(listener);
       }
    },[]);

     // Hauteur visible de l'écran
    //  window.innerHeight
     // distance du scroll par rapport au haut de page
    //  document.documentElement.scrollTop
     // Taille de l'écran
    //  document.documentElement.offsetHeight
    const handleScroll = () =>{
        setIsBottom(
          window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight   
        );
    }
  return {isBottom};
}

export default useScrollPosition