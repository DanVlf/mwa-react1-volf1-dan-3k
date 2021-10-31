import './Header.css';

function Header(){
    return(
        <div className="hd">
            <div className="header">
                <div className="header-left">
                    <p>Logo</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Portfolio</p>   
                </div>
                <div className="header-right">
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Header;