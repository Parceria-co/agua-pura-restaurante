import { useEffect } from "react"; 
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom"; 
import { aguaPura } from "../../data/AguaPura.js";

export default function Layout() { 
    const { pathname } = useLocation(); 
    const { empresa } = useParams();

    useEffect(() => {
        const data = aguaPura;

        if (!data) return;

        const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
        favicon.rel = "icon";
        favicon.href = data.logo;
        document.head.appendChild(favicon);

        document.title = data.name || "Meu Restaurante";
    
    }, [empresa]);

    useEffect(() => { 
        window.scrollTo(0, 0); 
    }, [pathname, empresa]); // toda vez que muda a rota 
    
    return <div><Outlet /></div>; 
}

// https://www.youtube.com/watch?v=-APO0P9puEo&list=RDkFfLhteT2P4&index=4