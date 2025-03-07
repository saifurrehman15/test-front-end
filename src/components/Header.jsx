import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className='header'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-10 col-12">
          <div className="row align-items-center header-bg">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="logo-area">
                <img src={logo} className="img-fluid" alt="Logo" />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <ul className='lists'>
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
