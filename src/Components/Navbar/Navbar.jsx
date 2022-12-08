import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../Services/authService";
import { clearItem, getItem, setItem } from "../../Utils/LocalStorage";
import { ACCESS_TOKEN, THEME } from "../../Constants";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const handleNav = () => setOpenNav(!openNav);
    const [auth, setAuth] = useState("");
    const [dark, setDark] = useState(getItem(THEME));

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    function removeTheme() {
        clearItem(THEME);
        document.body.classList.remove("dark-theme");
        setDark(false)
    };

    function addTheme() {
        document.body.classList.add("dark-theme");
        setItem(THEME, true);
        setDark(true)
    };

    const toggleTheme = () => {
        !dark ? addTheme() : removeTheme()
    }

    const location = useLocation();
    useEffect(() => {
        setAuth(getItem(ACCESS_TOKEN));
    }, [location]);

    return (
        <>
            <nav id="nav">
                <div className={styles.logo}>
                    <Link to="/" className={styles.logo_container}>
                        <h1>hearIt</h1>
                    </Link>
                    <div className={styles.buttons} onClick={handleNav}>
                        {!openNav ? (
                            <GiHamburgerMenu size={28} />
                        ) : (
                            <MdClose size={28} />
                        )}
                    </div>
                </div>
                {openNav && (
                    <div id="navDiv" className={styles.links_res}>
                        {!auth ? (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                                <Link onClick={toggleTheme}>
                                    {!dark ? (
                                        <div>
                                            <BsFillMoonFill />
                                        </div>
                                    ) : (
                                        <BsFillSunFill  />
                                    )}
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/home">Home</Link>
                                <Link to="/settings">About Us</Link>
                                <Link onClick={toggleTheme}>
                                    {!dark ? (
                                        <BsFillMoonFill/>
                                    ) : (
                                        <BsFillSunFill />
                                    )}
                                </Link>
                                <Link onClick={handleLogout}>Logout</Link>
                            </>
                        )}
                    </div>
                )}
                <div id="navDiv" className={styles.links}>
                    {!auth ? (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                            <Link onClick={toggleTheme}>
                                {!dark ? (
                                    <BsFillMoonFill />
                                ) : (
                                    <BsFillSunFill />
                                )}
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/home">Home</Link>
                            <Link to="/settings">About Us</Link>
                            <Link onClick={toggleTheme}>
                                {!dark ? (
                                    <BsFillMoonFill/>
                                ) : (
                                    <BsFillSunFill />
                                )}
                            </Link>
                            <Link onClick={handleLogout}>Logout</Link>
                        </>
                    )}
                </div>
            </nav>
            {!openNav ? (
                <div
                    className={styles.links_res_buffer_a}
                    style={{ height: 100 }}
                ></div>
            ) : (
                <div
                    className={styles.links_res_buffer_b}
                    style={{ height: 240 }}
                ></div>
            )}
        </>
    );
};

export default Navbar;
