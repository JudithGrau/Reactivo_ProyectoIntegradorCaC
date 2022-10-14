import { Css, Logo, Pages } from "./index"

export const NavBar = () => {

    const { container,img, li }= Css

    return(
    <div className= { container }>
        <Logo clases={ img } />
        <Pages clases={ li } />
    </div>
    )
}