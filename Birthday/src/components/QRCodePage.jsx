import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';
import './QRCodePage.css';

function QRCodePage() {
    // Get the current URL for the countdown page
    const countdownUrl = window.location.origin + '/countdown';

    return (
        <div className="qr-page">
            <div className="qr-container">
                <div className="qr-content">
                    <h1 className="qr-title">
                        <span className="title-gradient">Scan to Celebrate!</span>
                        <span className="title-emoji">🎂</span>
                    </h1>

                    <p className="qr-subtitle">
                        Scan this QR code to reveal a special birthday surprise
                    </p>

                    <div className="qr-code-wrapper">
                        <div className="qr-code-container">
                            <QRCodeSVG
                                value={countdownUrl}
                                size={280}
                                level="H"
                                includeMargin={true}
                                bgColor="#ffffff"
                                fgColor="#e91e63"
                                imageSettings={{
                                    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='75' font-size='80'%3E🎂%3C/text%3E%3C/svg%3E",
                                    height: 40,
                                    width: 40,
                                    excavate: true,
                                }}
                            />
                        </div>
                        <div className="qr-glow"></div>
                    </div>

                    <div className="qr-instructions">
                        <div className="instruction-item">
                            <span className="instruction-number">1</span>
                            <span className="instruction-text">Open your camera app</span>
                        </div>
                        <div className="instruction-item">
                            <span className="instruction-number">2</span>
                            <span className="instruction-text">Point at the QR code</span>
                        </div>
                        <div className="instruction-item">
                            <span className="instruction-number">3</span>
                            <span className="instruction-text">Tap the notification</span>
                        </div>
                    </div>

                    <div className="qr-divider">
                        <span>OR</span>
                    </div>

                    <Link to="/countdown" className="direct-link">
                        Click here to start the celebration 🎉
                    </Link>

                    <p className="qr-url">
                        {countdownUrl}
                    </p>
                </div>
            </div>

            {/* Floating decorations */}
            <div className="qr-floating">
                <span className="qr-float">🎈</span>
                <span className="qr-float">💕</span>
                <span className="qr-float">🎉</span>
                <span className="qr-float">✨</span>
                <span className="qr-float">🌟</span>
                <span className="qr-float">🎀</span>
                <span className="qr-float">💖</span>
                <span className="qr-float">🎂</span>
            </div>
        </div>
    );
}

export default QRCodePage;
