import HeaderStyles from "../../styles/Header.module.css";
import useDetectDevice from "../../hooks/useDetectDevice";
import MenuIcon from "../../assets/Icons/Menu";
import { useState } from "react";
import CloseIcon from "../../assets/Icons/Close";
import { Link } from "react-router-dom";


function Header (): JSX.Element {

    const navLinks: object[] = [
        {
            linkName: "Get started",
            route: "/"
        },
        {
            linkName: "Contact",
            route: "/"
        },
        {
            linkName: "About",
            route: "about"
        },
        {
            linkName: "Privacy Policy",
            route: "privacy-policy"
        },
    ];

    const { isMobile } = useDetectDevice();
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <header className={`${HeaderStyles.header}`}>
            <nav className={"container-desktop w-100 p-sm d-row align-center justify-between"}>
                <Link to="/" className={"logo d-row align-center gap-xs"}>
                    <img src="/icons/logo.png" alt="Logo" className={HeaderStyles.logo} />
                </Link>
                {
                    !isMobile ?
                    <div className="nav-links d-row gap-md align-center">
                        {
                            navLinks.map((navLink: object, index: number) => (
                                <Link
                                    key={index}
                                    to={Object(navLink).route}
                                    className={`${HeaderStyles.navLink} font-sm font-light`}
                                >
                                    {Object(navLink).linkName}
                                </Link>
                            ))
                        }
                    </div>
                    :
                    <button
                        className={HeaderStyles.mobileMenuButton + " d-col"}
                        onClick={() => setIsVisible(isVisible ? false : true)}
                    >
                    {
                        !isVisible ?
                        <MenuIcon
                            height={30}
                            width={30}
                            fill={"var(--secondary-color)"}
                        />
                        :
                         <CloseIcon
                            height={30}
                            width={30}
                            fill={"var(--secondary-color)"}
                        />
                    }
                    </button>
                }
                <div className={`${HeaderStyles.mobileMenu} ${isVisible ? HeaderStyles.active : ""} d-col gap-md justify-start`}>
                {
                    navLinks.map((navLink: object, index: number) => (
                        <Link
                            key={index}
                            to={Object(navLink).route}
                            className={`${HeaderStyles.mobileNavLink} font-light font-lg`}
                            onClick={() => setIsVisible(isVisible ? false : true)}
                        >
                            {Object(navLink).linkName}
                        </Link>
                    ))
                }
                </div>
            </nav>
        </header>
    )
}

export default Header;