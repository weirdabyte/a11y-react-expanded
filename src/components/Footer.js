import React from 'react'

const Footer = () => {
  return (
        <section className="footer">
            <div className="info">
                <h5>Kontakt Info:</h5>
                <p>Adress: Lorem Ipsum 99, 4567 Oslo</p>
                <p>Telefon nummer: 0708 - 42 ** *9.</p>
                <p>E-mail: loremipsum@testing.com</p>

            </div>
            <h6>All images are from: LogoMakr.com</h6>
            <div className="socialMedia">
                <h6>Follow us on:</h6>
                <img src="./images/facebook.png" className="mediaImage"></img>
                <img src="./images/twitter.png" className="mediaImage"></img>
                <img src="./images/instagram.png" className="mediaImage"></img>
            </div>
        </section>
  )
}

export default Footer
