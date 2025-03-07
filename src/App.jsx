import React from 'react';
import ClientLogosSlider from './components/LogoSlider';
import WhyChooseUs from './components/WhyChooseUs';
import Plans from './components/Plans';
import FAQs from './components/Faqs';
import Testimonials from './components/Testimonials';
import blur2 from './assets/images/blur2.png';
import Editor from './components/Editor';
function App() {
  return (
    <>
      <section className='hero-banner'>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-12'>
              <div className='text-center'>
                <h1 className='primary-hd'>Transform Concepts into, <br /> <span className='primary-color'>Dynamic</span>  Animations</h1>
                <p className='para'>Unleash your creativity with our intuitive animation tool. Create stunning <br /> videos and bring your vision to life in just a few clicks!</p>
                <div className='d-flex gap-3 mt-4 justify-content-center'>
                  <a href="#" className="primary-btn pad">Try It now</a>
                  <a href="#" className="secondary-btn pad">Book Your Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Editor/>
      <section className='client-section pad-y'>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-12'>
              <div className='text-center'>
                <h1 className='secondary-hd-sm'>Our Clients</h1>
              </div>
              <ClientLogosSlider/>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs/>
      <Plans/>
      <FAQs/>
      <Testimonials/>
      <section className='hero-banner position-relative'>
      <img src={blur2} className='img-fluid footer-img' alt="" />
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-12'>
              <div className='text-center'>
                <h1 className='primary-hd'>Get Started</h1>
                <p className='para'>Holds no opinions on what’s and how’s. Build whatever <br/> makes sense to you.</p>
                <div className='d-flex gap-3 mt-4 justify-content-center'>
                  <a href="#" className="primary-btn pad">Try It now</a>
                  <a href="#" className="secondary-btn pad">Book Your Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
