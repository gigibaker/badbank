import { Link } from 'react-router-dom';
import { React, useState } from 'react';




function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">BAD <b>BANK</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="#navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link" to="/createaccount/">Create Account</Link>
                    </li>
            
                    <li className="nav-item">
                        <Link className="nav-link" to="/deposit/">Deposit</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/withdraw/">Withdraw</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/alldata/">All Data</Link>
                    </li>
                    
                    
                </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;