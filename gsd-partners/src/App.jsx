import './App.css';

function App() {
const scrollTo = (id) => {
document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

return (
<>
{/* Navigation - LinkedIn added on the right */}
<nav className="navbar">
<div className="logo">
<img src="/images/gsd.jpeg" alt="GSD Partners" />
<span className="logo-text">Built for Growth</span>
</div>

<div className="nav-links">
<button onClick={() => scrollTo('home')}>Home</button>
<button onClick={() => scrollTo('expansion')}>Expansion</button>
<button onClick={() => scrollTo('about')}>About</button>
<button onClick={() => scrollTo('contact')}>Contact</button>

{/* LinkedIn Link */}
<a
href="https://www.linkedin.com/in/adam-lamraoui-758174245?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
target="_blank"
rel="noopener noreferrer"
className="linkedin-link"
>
<img src="/images/linkedinlogo.png" alt="LinkedIn" />
</a>
</div>
</nav>

{/* HOME - kept exactly the same */}
<section id="home" className="section home">
<div className="hero">
<h1>GROW & THRIVE WITH<br />FACE TO FACE SALES</h1>

<div className="main-content">
<div className="left-text">
<p>At GSD Solutions, we're not just selling—we're scaling. Our culture is built for people who are hungry to grow, passionate about progress, and driven by vision.</p>
<p>We believe great partners don't just close deals—they open doors.</p>
<p>We champion a high-performance mindset built on continuous learning, strategic execution, and long-term client value.</p>
</div>

<div className="right-image">
<img src="/images/meeting.png" alt="Team Meeting" />
</div>
</div>

<div className="gold-bar">
<div className="team-photos">
<img src="/images/team1.png" alt="Team" />
<img src="/images/team2.png" alt="Team" />
<img src="/images/team3.png" alt="Team" />
</div>
<p>Through face-to-face sales strategies and partnerships with leading brands such as EE and BT, our team delivers high-performance campaigns while developing the next generation of business leaders.</p>
</div>
</div>


</section>

{/* EXPANSION - kept exactly the same */}
<section id="expansion" className="section expansion">

<div className="ee-bt-graphic">
<img src="/images/expansion.png" alt="EE and BT" />
</div>
<div className="expansion-grid">
<div className="left-box">
<h3>Expanding Face-to-Face Acquisitions with BT and EE</h3>
<p>Here at GSD we have plans to expand our business and services into new regional locations, specifically Watford and Stoke-on-Trent. This expansion represents a strong opportunity to grow revenue, diversify our market reach, and strengthen our partnerships with both brands.</p>
</div>
<div className="center-box">
<h3>Strategic outcome</h3>
<p>Expanding into Watford and Stoke-on-Trent strengthens our acquisition footprint, drives sustainable growth, and reinforces our value proposition to BT and EE. It’s a logical next step that balances commercial upside with operational scalability, positioning the business for long-term success.</p>
</div>
<div className="right-box">
<h3>Benefits to the business</h3>
<ul>
<li>Increased revenue streams</li>
<li>Reduced dependency on current markets</li>
<li>Stronger brand presence</li>
<li>Scalable growth for our teams</li>
<li>Improved data and performance insights</li>
</ul>
</div>
</div>

</section>

{/* ABOUT US - kept exactly the same */}
<section id="about" className="section about">

<div className="about-grid">
<div className="about-text">
<h3>GSD Partners – Company Culture & Core Values</h3>
<p>We learn to "Get Stuff Done"</p>
<p>Our Culture: Built for Growth and we are dedicated to building strong partnerships and developing the next generation of business leaders. Through high-performance face-to-face sales campaigns, our team helps leading brands connect directly with customers and grow their market presence.</p>
<p>Working alongside major telecommunications companies such as EE and BT, we focus on delivering measurable results while providing ambitious individuals with the training, leadership, and opportunities needed to build successful careers in business.</p>
</div>
<div className="about-images">
<img src="/images/About 1.png" alt="About 1" />
<img src="/images/About 2.png" alt="About 2" />
<img src="/images/About 3.png" alt="About 3" />
<img src="/images/About 4.png" alt="About 4" />
</div>
</div>

</section>

{/* CONTACT US - kept exactly the same */}
<section id="contact" className="section contact">

<div className="contact-box">
<div className="contact-image">
<img src="/images/contact us picture.png" alt="Contact Us Picture" />
</div>

<h3>Mission Statement</h3>
<p>Our mission is to embrace growth and to upscale with purpose and expand strategically into international markets.</p>

<h3>Vision Statement</h3>
<p>We believe in building a true connection with everyone we work with and empowering brands to connect with people across cultures.</p>

<div className="contact-info">
<p><strong>Email:</strong> muhammadlamraoui@gmail.com</p>
<p><strong>Phone:</strong> +44 7597469040</p>
</div>
</div>

</section>
</>
);
}

export default App;