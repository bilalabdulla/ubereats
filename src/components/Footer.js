import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-main'>
            <div className='footer-left'>
                <h2>Uber Eats</h2>
                <div className='apps'>
                    <button className='app-btn'>
                    <i class="fa-brands fa-apple apple-icon"></i>
                        <div className='app-btn-text'>
                            <p className='app-text'>Download on the</p>
                            <h4 className='app-title'>App Store</h4>
                        </div>
                    </button>
                    <button className='app-btn'>
                    <i class="fa-brands fa-google-play google-icon"></i>
                        <div className='app-btn-text'>
                            <p className='app-text'>GET IT ON</p>
                            <h4 className='app-title'>Google Play</h4>
                        </div>
                    </button>
                </div>
            </div>
            <div className='footer-right'>
                <div className='footer-content'>
                    <a>Get Help</a>
                    <a>Buy gift cards</a>
                    <a>Add your restaurent</a>
                    <a>Sign up to deliver</a>
                    <a>Create a business account</a>
                    <a>Promotions</a>
                </div>
                <div className='footer-content'>
                    <a>Restaurents near me</a>
                    <a>View all cities</a>
                    <a>View all countries</a>
                    <a>Pickup near me</a>
                    <a>About Uber Eats</a>
                    <a>Shop groceries</a>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='socials'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
            <div className='footer-end-right'>
                <a >Privacy Policy</a>
                <a>Terms</a>
                <a>Pricing</a>
                <a className='dont'>Do not sell or share my personal information</a>
            </div>
        </div>
        <div className='copyright'>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            <p>© 2024 Uber Technologies Inc.</p>
        </div>
    </div>
  )
}

export default Footer
