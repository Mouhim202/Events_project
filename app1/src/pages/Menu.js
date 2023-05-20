import { NavLink } from "react-router-dom";
import { Context } from "../Context";
import { useContext } from "react";

const Menu = () => {
    const [context, setContext] = useContext(Context);
    return ( 
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">LOGO</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className="nav-link">A propos</NavLink>
                    </li>

                    <li className="nav-item dropdown">
                    <NavLink to='/services' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                        </NavLink>
                        <ul className="dropdown-menu">
                        <li>
                            <NavLink to="/allservices" className="nav-link" >Tout les services</NavLink>
                            </li>
                            <li>
                            <NavLink to="/services/traiteurs"className="nav-link" >Traiteurs</NavLink>
                            </li>
                            <li>
                            <NavLink to="/services/decoration"className="nav-link" >Decoration</NavLink>
                            </li>
                            <li>
                            <NavLink to="/services/photographe"className="nav-link" >Photographe</NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Espaces
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <NavLink to="/espaces/hotels"className="nav-link" >Hôtels</NavLink>
                            </li>
                            <li>
                            <NavLink to="espaces/villa"className="nav-link" >Villa</NavLink>
                            </li>
                            <li>
                            <NavLink to="/espaces/ouvert"className="nav-link" >Espace Ouvert</NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Evenements
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <NavLink to="/events/mariage"className="nav-link" >Mariage</NavLink>
                            </li>
                            <li>
                            <NavLink to="/events/naissance"className="nav-link" >Naissance</NavLink>
                            </li>
                            <li>
                            <NavLink to="/events/anneversaire"className="nav-link" >Anneversaire</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Identification
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <NavLink to="/connexion"className="nav-link" >Connexion</NavLink>
                            </li>
                            <li>
                            <NavLink to="/inscription"className="nav-link" >Inscription</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
     );
}
 
export default Menu;