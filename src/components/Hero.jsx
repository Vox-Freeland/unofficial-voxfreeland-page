function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-bg">
        <source src="/images/azada/portal-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>THE AZADA CHRONICLES</h1>
        <p>A portal breathes between worlds. Something human slipped through
        that never should have found the door.</p>
        <button className="cta-button">Enter Azada →</button>
      </div>
    </section>
  );
  
}
export default Hero;
