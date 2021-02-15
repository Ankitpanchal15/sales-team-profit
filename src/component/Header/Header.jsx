import React from 'react';
import HeaderTitle from "./HeaderTitle";

const Header = () => {
    return(
        <>
            <header className="header-section bg-white">
                <div className="row align-items-center">
                    <div className="col-sm-6 d-flex order-2 order-sm-0 mt-2 mt-sm-0 ">
                        <HeaderTitle />
                    </div>

                    <div className="col-sm-6 d-flex justify-content-end order-1 order-sm-0 ">
                        <div className="user-header d-flex align-items-center">
                            <div className="img-wrap position-relative">
                            <img className="rounded-circle img-fluid " src="https://firebasestorage.googleapis.com/v0/b/profitsales-f6634.appspot.com/o/Jordar-jacson.png?alt=media&token=4ca49c6a-56df-4d66-b72c-1cea72d7ec31" alt="u" />
                            <div className="icon-status bg-white">
                            <i className="fas fa-dot-circle"></i>
                            </div>
                            </div>
                            <div className="user-header-text">
                                <h4>Jordan j.</h4>
                                <p>Administartor</p>
                            </div>
                            <i className="icon fas fa-chevron-down"></i>
                           

                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header;