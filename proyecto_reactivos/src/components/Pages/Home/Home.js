import { useState } from "react";
import banner from './../../../assets/img/banner.jpg'

export const Home = () =>{

    const [loading, setLoading] = useState(true)

    const bannerCss = "mx-0 w-[100vw] h-[110vh] object-top"
    const container = 'flex flex-col items-center';

    setTimeout(() => {
        stateChange()
    }, 2500)

    function stateChange() {
        setLoading(false)
        //console.log(loading);
    }

    return (
        <div className={ container }>
            <img
                src={ banner }
                alt={ banner }
                className={ bannerCss }
            />
            <div>
                { loading
                    ? "Esta Cargando..."
                    : "Ya se cargó" }
            </div>

        </div>
    )
}