"use client"

import Image from "next/image";

export default function ReadMore() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Full blog coming soon");
  };
  const openWhatsApp = () => {
    const phoneNumber = "919810058676";
    const message = "Hi, I visited your website and would like book an Appointment.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="whole">
      <main>
        <div className="hero-section" id="hero">
          <div className="container">
            <div className="hero-left">
              <h2>Ear Connect Speech Clinic</h2>
              <h1>Better Hearing Starts Here</h1>
              <h3>Professional hearing tests, digital hearing aids,
                and personalized care under one roof.</h3>
              <div className="hero-buttons">
                <button onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>📞 Call Now</button>
                <button onClick={openWhatsApp}>💬 WhatsApp Appointment</button>
              </div>
              <h4>📍 Serving patients in Dehradun</h4>
            </div>
            <div className="hero-right">
              <div className="hero-img">
                <img src="/images/Hero-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="second-section" id="services">
          <div className="second-heading">
            <h1>Our Hearing Care Services</h1>
            <h3>Complete hearing solutions for children, adults & seniors</h3>
          </div>
          <div className="second-container">
            <div className="second-cards">
              <h1><span>🔶</span>Hearing Test & Diagnosis</h1>
              <p>Accurate hearing evaluation using modern equipment.</p>
              <p>Pure tone, speech & impedance tests available</p>
            </div>
            <div className="second-cards">
              <h1><span>🔶</span>Digital Hearing Aids</h1>
              <p>Latest rechargeable & Bluetooth-enabled hearing aids.</p>
              <p>Custom fitting for comfort, clarity & lifestyle needs</p>
            </div>
            <div className="second-cards">
              <h1><span>🔶</span>Speech Therapy</h1>
              <p>Speech and language therapy for children & adults.</p>
              <p>Personalized sessions to improve speech & communication</p>
            </div>
            <div className="second-cards">
              <h1><span>🔶</span>Tinnitus Management</h1>
              <p>Effective treatment for ringing or buzzing in ears.</p>
              <p>Sound therapy and counseling for long-term relief</p>
            </div>
            <div className="second-cards">
              <h1><span>🔶</span>Pediatric Hearing Care</h1>
              <p>Special hearing care for infants and children.</p>
              <p>Early screening and child-friendly assessment methods</p>
            </div>
            <div className="second-cards">
              <h1><span>🔶</span>Hearing Aid Repair & Support</h1>
              <p>Repair, adjustment & after-sales hearing aid care.</p>
              <p>Quick service, fine-tuning & ongoing support</p>
            </div>
          </div>
        </div>
        <div className="third-section" id="doctor">
          <div className="third-heading">
            <h1>About the Specialist</h1>
          </div>
          <div className="third-container">
            <div className="third-left">
              <img src="/images/Doctor-image.png" alt="Specialist Image" />
            </div>
            <div className="third-right">
              <h1>Trusted Hearing Care with a Personal Touch</h1>
              <p>We are a dedicated hearing and speech care clinic providing accurate diagnosis, advanced hearing solutions, and personalized care for patients of all ages.</p>
              <p>Our clinic is equipped with modern testing equipment and managed by qualified audiologists focused on improving quality of life through better hearing.</p>
              <div className="third-cards">
                <div className="third-card">
                  <p>✔ 10+ Years Experience</p>
                </div>
                <div className="third-card">
                  <p>✔ Certified Audiologist</p>
                </div>
                <div className="third-card">
                  <p>✔ Modern Diagnostic Equipment</p>
                </div>
                <div className="third-card">
                  <p>✔ Patient-First Approach</p>
                </div>
              </div>
              <div className="third-buttons">
                <button onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>📞 Book a Consultation</button>
                <button onClick={openWhatsApp}>💬 Talk to Our Specialist</button>
              </div>
            </div>
          </div>
        </div>
        <div className="fourth-section" id="trust">
          <div className="fourth-heading">
            <h1>Why Patients Trust Us</h1>
            <h3>Focused on accurate diagnosis, advanced solutions, and patient-first care.</h3>
          </div>
          <div className="fourth-container">
            <div className="fourth-left">
              <h1>Helping You Hear Life Clearly Again</h1>
              <p>We combine advanced hearing technology with compassionate care
                to provide accurate diagnosis, effective solutions, and long-term
                support for patients of all ages.</p>
              <button onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>Book Your Hearing Test</button>
            </div>
            <div className="fourth-right">
              <div className="fourth-card">
                <h1>🟢Experienced Professionals</h1>
                <p>Over a decade of expertise in diagnosing and treating hearing and speech disorders with care and precision.</p>
              </div>
              <div className="fourth-card">
                <h1>🟢Advanced Technology</h1>
                <p>We use advanced hearing assessment equipment to ensure accurate results and effective treatment plans.</p>
              </div>
              <div className="fourth-card">
                <h1>🟢Personalized Care</h1>
                <p>Every patient receives customized solutions based on their unique hearing needs and lifestyle.</p>
              </div>
              <div className="fourth-card">
                <h1>🟢Trusted by Families</h1>
                <p>We are proud to be a trusted hearing care partner for individuals and families in the community.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-section" id="gallery">
          <div className="gallery-heading">
            <h1>Inside Our Clinic</h1>
          </div>
          <div className="gallery-container">
            <div className="images">
              <div className="image"><img src="/images/image1.png" alt="" /></div>
              <div className="image"><img src="/images/image2.png" alt="" /></div>
              <div className="image"><img src="/images/image3.png" alt="" /></div>
              <div className="image"><img src="/images/image4.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="fifth-section" id="testimonials">
          <div className="fifth-heading">
            <h1>What Our Patients Say</h1>
            <h3>Real experiences from people who trusted us with their hearing care</h3>
          </div>
          <div className="fifth-container">
            <div className="fifth-cards">
              <div className="fifth-card">
                <div className="fifth-stars">
                  <h3>⭐⭐⭐⭐⭐</h3>
                </div>
                <h1>Rajesh K.</h1>
                <h2>52 years</h2>
                <p>I had hearing issues for years but the doctor explained everything
                  clearly and suggested the right solution. The hearing aid has
                  improved my daily life a lot.</p>
              </div>
              <div className="fifth-card">
                <div className="fifth-stars">
                  <h3>⭐⭐⭐⭐⭐</h3>
                </div>
                <h1>Neha S.</h1>
                <h2>Parent of child</h2>
                <p>The team was very patient and friendly with my child.
                  The diagnosis and therapy sessions were well explained
                  and we saw great improvement.</p>
              </div>
              <div className="fifth-card">
                <div className="fifth-stars">
                  <h3>⭐⭐⭐⭐⭐</h3>
                </div>
                <h1>Amit P.</h1>
                <h2>35 years</h2>
                <p>Professional staff, modern equipment, and honest advice.
                  I highly recommend this clinic to anyone facing hearing problems.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-section" id="blog">
          <div className="blog-heading">
            <h1>Hearing Health Tips</h1>
          </div>
          <div className="blog-container">
            <div className="blog-left">
              <img src="https://nyulangone.org/news/sites/default/files/styles/hero/public/2025-10/1500x1000_GettyImages-1495330322.jpg?h=06ac0d8c&itok=aiDbM0zB" alt="" />
              <div className="blog-text">
                <h1>Five Early Signs of Hearing Loss You Shouldn’t Ignore</h1>
                <p>Hearing loss doesn't always happen suddenly. Most people start noticing small things — asking others to repeat themselves, missing parts of conversations, or keeping the TV volume higher than usual. These small signs are easy to ignore, but acting early can make a big difference.</p>
                <p>Common early signs include difficulty hearing in noisy places, frequently mishearing words, ringing in the ears, and feeling like others are mumbling. If you or a family member experiences these regularly, it may be time to get a hearing evaluation.</p>
                <p>A simple hearing test can identify the problem early. Early diagnosis means better treatment options and a better quality of life. Don't wait until it gets worse — book a consultation today.</p>

              </div>
              <a
                href="/"
                onClick={handleClick}
                className="text-blue-600 underline"
              >Read More... </a>
            </div>
            <div className="blog-right">
              <img src="https://pcl.promedica.org/-/media/pmdt-jss-site/data/media/img/ProMedicaBlog/childhood-speech-and-language-disorders.jpg?h=555&iar=0&w=1440&rev=a98551ab7fa647f1b3a2db634d3347ff&hash=C9584E669EDD89674C731EE74C1EEBAD" alt="" />
              <div className="blog-text">
                <h1>When is it time to see a speech therapist?</h1>
                <p>Speech and language delays are more common than most parents realize. If your child is not speaking as clearly as other children their age, or struggles to express their thoughts, a speech therapist can help identify the root cause.</p>
                <p>Some signs to watch for: limited vocabulary for their age, difficulty forming complete sentences, unclear speech that even family members struggle to understand, or trouble following simple instructions.</p>
                <p>Early intervention gives the best results. Speech therapy is not just for children — adults recovering from stroke or injury also benefit greatly. If you notice any of these signs, consult a specialist without delay.</p>

              </div>
              <a
                href="/"
                onClick={handleClick}
                className="text-blue-600 underline"
              >Read More... </a>
            </div>
          </div>
        </div>
        <div className="sixth-section" id="contact">
          <div className="contact">
            <h1>Book Your Hearing Consultation Today</h1>
            <div className="contact-info">
              <p><span className="contact-span">📞 Call:</span> 91+ 98100 58676</p>
              <p><span className="contact-span">🕘 Timing:</span> 9:00 AM – 8:00 PM (Mon–Sat)</p>
              <p><span className="contact-span">🔴 Close On:</span> Sunday</p>


              <button onClick={openWhatsApp}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition">
                WhatsApp for Appointment
              </button>
            </div>
          </div>

          <div className="location">
            <h1>Find Our Clinic Location</h1>


            <div className="map-container">
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1447.9857965099181!2d78.05000236413005!3d30.325077047887394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c721a5892b%3A0xa1e853458c647855!2sEAR%20CONNECT%20Speech%20%26%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1772294470592!5m2!1sen!2sin" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <p className="address">
                <strong>📍 Ear Connect Speech Clinic</strong><br />
                New Survey Rd, opp. Vikas Bhawan, Karanpur<br />
                Dehradun – 248001
              </p>
            </div>
          </div>
        </div>
        <footer className="clinic-footer">
          <div className="footer-container">


            <div className="footer-col">
              <h1>Ear Connect Speech Clinic</h1>
              <p>Helping you hear better, live better.</p>

              <p>📍 New Survey Rd, opp. Vikas Bhawan, Karanpur <br />Dehradun – 248001</p>
              <p>📞 +91 98100 58676</p>
              <p>🕒 9:00 AM – 8:00 PM (Mon–Sat)</p>

              <button className="footer-btn" onClick={openWhatsApp}>
                WhatsApp for Appointment
              </button>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#doctor">About Clinic</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#trust">Why Choose Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>Hearing Test & Evaluation</li>
                <li>Digital Hearing Aids</li>
                <li>Speech Therapy</li>
                <li>Child Hearing Assessment</li>
                <li>Hearing Aid Repair</li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p>© 2026 Ear Connect Speech Clinic. All Rights Reserved.</p>
            <p className="designer">Designed by <a href="https://ojhasites.vercel.app/">OjhaSites</a></p>
          </div>
        </footer>

      </main>
    </div>
  );
}
