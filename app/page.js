'use client';
import {useState} from 'react';

const phone='07968225363';
const displayPhone='07968 22 53 63';
const heroImage='https://www.expertcirc.co.uk/wp-content/uploads/2016/10/1.png';
const familyImage='https://www.expertcirc.co.uk/wp-content/uploads/2016/10/3-1.jpg';
const careImage='https://www.expertcirc.co.uk/wp-content/uploads/2016/10/4-1.png';

export default function Home(){
 const [open,setOpen]=useState(false);
 return <main>
  <header className="header"><a className="brand" href="#top"><span className="mark">LC</span><span><b>Luton Circumcision</b><small>Experienced • Professional • Local</small></span></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button><nav className={open?'open':''}><a href="#about">About</a><a href="#procedure">Procedure</a><a href="#care">Aftercare</a><a href="#contact">Contact</a></nav><a className="callTop" href={'tel:'+phone}>Call {displayPhone}</a></header>

  <section className="hero" id="top"><div className="heroContent"><p className="heroKicker">Circumcision services in Luton</p><h1>Experienced, professional<br/><em>circumcision in Luton.</em></h1><p className="lead">Professional circumcision services from an experienced practitioner with over 20 years' experience.</p><div className="actions"><a className="primary" href={'tel:'+phone}>Call to arrange an appointment</a><a className="secondary" href={'https://wa.me/44'+phone.slice(1)}>WhatsApp us</a></div><div className="trust"><span>✓ 20+ years' experience</span><span>✓ Ongoing aftercare</span><span>✓ Luton location</span></div></div><div className="heroVisual"><img src={heroImage} alt="Family and baby"/><div className="heroImageFrame"></div></div><div className="heroCard"><span>Appointments in</span><strong>Luton</strong><p>Hitchin Rd<br/>Luton LU2 7UL</p><a href="#contact">Arrange an appointment →</a></div></section>

  <section className="intro" id="about"><div className="introTitle"><h2>Professional, experienced and focused on your family's care.</h2></div><div className="introCopy"><p>With more than 20 years' experience, Luton Circumcision provides a professional circumcision service in Luton.</p><p>Every appointment is approached with care and discretion, with clear guidance and ongoing aftercare following the procedure.</p><div className="stats"><div><strong>20+</strong><span>Years' experience</span></div><div><strong>24/7</strong><span>Aftercare support</span></div><div><strong>1</strong><span>Luton location</span></div></div></div></section>

  <section className="imageBand"><figure><img src={familyImage} alt="Happy family with baby"/></figure><div className="imageBandCopy"><p className="statement">Experience, reassurance and clear support.</p><p>The service is designed to make the appointment as straightforward and reassuring as possible for parents and families.</p></div></section>

  <section className="procedure" id="procedure"><div className="sectionHead"><h2>Quick, careful and professional.</h2><p>A quick procedure carried out with an approach designed to minimise pain and discomfort.</p></div><div className="procedureVisual"><img src={careImage} alt="Baby care"/></div></section>

  <section className="care" id="care"><div className="carePanel"><h2>Support after the procedure.</h2><p>Clear aftercare instructions are provided following the procedure, together with ongoing support should you have any concerns.</p><ul><li>Clear aftercare instructions</li><li>Support available after the procedure</li><li>Experienced guidance for parents and families</li></ul><a className="lightButton" href={'tel:'+phone}>Speak to us</a></div><div className="quote"><span>“</span><p>Care, experience and reassurance at every stage.</p></div></section>

  <section className="contact" id="contact"><div><h2>Get in touch.</h2><p>For appointments or further information, call or WhatsApp us.</p></div><div className="contactBox"><a href={'tel:'+phone}><small>CALL</small><strong>{displayPhone}</strong></a><a href={'https://wa.me/44'+phone.slice(1)}><small>WHATSAPP</small><strong>Message us</strong></a><a href="mailto:info@expertcirc.co.uk"><small>EMAIL</small><strong>info@expertcirc.co.uk</strong></a><div><small>LOCATION</small><strong>Hitchin Rd, Luton LU2 7UL</strong></div></div></section>

  <footer><div className="footerBrand"><span className="mark">LC</span><div><b>Luton Circumcision</b><small>Hitchin Rd, Luton LU2 7UL</small></div></div><p className="copyright">© {new Date().getFullYear()} Luton Circumcision. All rights reserved.</p><a href="https://diamantsolutions.co.uk" target="_blank" rel="noopener noreferrer" className="builtBy"><span className="builtByLine"><span>Built by</span><img src="https://www.samcerts.co.uk/diamant-solutions-logo.svg" alt="Diamant Solutions"/></span><span className="builtByTag">Websites • Systems • Automation</span></a></footer>
 </main>
}