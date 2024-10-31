import { useState, useEffect } from "react";
import arrowUp from '../assets/arrow-up.svg';

export default function FloatingButton() {
    const [showing, setShowing] = useState(false);

    function onWindowScroll(e){
        setShowing(() => window.scrollY > 170 ? true : false);
    }

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll);

        //cleanup this component
        return () => window.removeEventListener('scroll', onWindowScroll);
    }, []);

    return (
        <button 
        onClick={() => {
            window.scrollTo({top:0, left:0, behavior: 'smooth'});
        }}
        className={`fixed p-2 bottom-8 right-0 md:right-8 z-50 rounded-full border border-slate-900 hover:bg-slate-900 ${showing ? '' : 'hidden'}`}
        >
          <img src={arrowUp} className="text-slate-100 transition-all ease-in-out hover:scale-125 duration-300" alt="heroicon arrow-up-circle" />
        </button>
    );
}