import { Link } from 'react-router-dom';
import './BirthdayPage.css';

function BirthdayPage() {
  return (
    <>
      <div className="floating">
        <span className="float-item">🎈</span>
        <span className="float-item">💕</span>
        <span className="float-item">🌸</span>
        <span className="float-item">🎀</span>
        <span className="float-item">✨</span>
        <span className="float-item">💖</span>
        <span className="float-item">🎂</span>
        <span className="float-item">🌟</span>
        <span className="float-item">💗</span>
        <span className="float-item">🎉</span>
      </div>

      <div className="content">
        <section className="hero">
          <h1>Happy Birthday</h1>
          <div className="name">sweet heart</div>
          <div className="cake-emoji">🎂</div>
          <p className="tagline">May your day be as wonderful as you are!</p>

          <div className="photo-frame">
            <div className="photo-frame-inner">👸</div>
          </div>
        </section>

        <div className="wish-card">
          <h2>Dear Krupali,</h2>
          <p>
            "Happy Birthday, my love.❤️I don't know how to express how much you mean to me.
          </p>
          <p>
            You came into my life and made everything brighter, happier, and more meaningful💞.
          </p>
          <p>
            Even when we are far away, you are always in my heart, in my thoughts, in my prayers. 
            You are my comfort, my best friend, and my forever. I'm so proud of you and so grateful 
            to have you in my life. May your day be as special as your smile, and may all your dreams 
            come true. I love you more than words can ever say. Happy Birthday, my heart🧿😚."
          </p>
        </div>

        <div className="closing">
          With love &amp; best wishes
          <div className="hearts">♥ ♥ ♥</div>
        </div>

        <div className="memories-wrap">
          <Link to="/memories" className="btn-memories">
            View Memories 💖
          </Link>
        </div>
      </div>
    </>
  );
}

export default BirthdayPage;
