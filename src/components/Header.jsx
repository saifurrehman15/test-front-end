import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className='header'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-10 col-12">
          <div className="row align-items-center header-bg">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="logo-area">
                <img src={logo} className="img-fluid" alt="Logo" />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <ul className='lists d-lg-flex d-none'>
                <li className='list-item'>
                  <a href="#">Home</a>
                </li>
                <li className='list-item'>
                  <a href="#">Template</a>
                </li>
                <li className='list-item'>
                  <a href="#">Pricing</a>
                </li>
                <li className='list-item'>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-3 col-6'>
              <div className='btn-area text-end'>
                <a href="#" className='primary-btn'>Try it now</a>
                <button className='menu-btn'><i className="fa-solid fa-menu"></i>menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;
