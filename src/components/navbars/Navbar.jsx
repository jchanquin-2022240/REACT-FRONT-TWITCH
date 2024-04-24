import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/EscudoPeque.svg";
import { useUserDetails } from "../../shared/hooks";

const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                src={logo}
                alt="Logo.svg"
                width='100%'
                height='100%'
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const NavBar = () => {
    const { isLogged, logout } = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthPage = () => {
        navigate('/auth')

    }

    const handleNavidateToSettingPage = () => {
        navigate('/settings')
    }

    const handleNavidateToChannelPage = () => {
        navigate('/channels')
    }

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="nav-container">
            <NavLogo />
            <div className="nav-buttons-container">
                <NavButton text='Home' onClickHandler={handleNavidateToChannelPage} />
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handleNavigateToAuthPage} />
                ) : (
                    <div>
                        <NavButton text='Settings' onClickHandler={handleNavidateToSettingPage} />
                        <NavButton text='Logout' onClickHandler={handleLogout} />
                    </div>
                )}
            </div>
        </div>
    )

}