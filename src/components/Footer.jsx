import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer className='footer pad-y'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="logo-area ">
                <img src={logo} className="img-fluid mb-3" alt="Logo" />
                <p className='para mb-3 text-white footer-list'>
                    1234 Innovation Blvd, Suit 567 <br/> Tech City TC 92838 United States
                </p>
                <p className='para mb-3 text-white'>
                    (555) 123 4567
                </p>
                <p className='para text-white'>
                    contact@animify.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
                <h4 className="footer-hd">Home</h4>
              <ul className="footer-list">
                <li className="list-item">
                  <a href="#">About</a>
                </li>
                <li className="list-item">
                  <a href="#">Blogs</a>
                </li>
                <li className="list-item">
                  <a href="#">Contact</a>
                </li>
                <li className="list-item">
                  <a href="#">404</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <h4 className="footer-hd">Other Pages</h4>
              <ul className="footer-list">
                <li className="list-item">
                  <a href="#">Login</a>
                </li>
                <li className="list-item">
                  <a href="#">Forget Password</a>
                </li>
                <li className="list-item">
                  <a href="#">Tearm & Services</a>
                </li>
                <li className="list-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <h4 className="footer-hd">My Work</h4>
              <ul className="footer-list">
                <li className="list-item">
                  <a href="#">Dribble</a>
                </li>
                <li className="list-item">
                  <a href="#">Upwork</a>
                </li>
                <li className="list-item">
                  <a href="#">Awwards</a>
                </li>
                <li className="list-item">
                  <a href="#">X</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
