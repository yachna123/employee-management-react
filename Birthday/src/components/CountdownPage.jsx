import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CountdownPage.css';

function CountdownPage() {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (count === 0) {
            navigate('/birthday');
            return;
        }

        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [count, navigate]);

    return (
        <div className="countdown-page">
            <div className="countdown-container">
                <div className="countdown-content">
                    <h1 className="countdown-title">
                        <span className="title-line">Get Ready!</span>
                        <span className="title-emoji">🎉</span>
                    </h1>

                    <div className="countdown-circle">
                        <svg className="countdown-svg" viewBox="0 0 200 200">
                            <circle
                                className="countdown-bg"
                                cx="100"
                                cy="100"
                                r="90"
                            />
                            <circle
                                className="countdown-progress"
                                cx="100"
                                cy="100"
                                r="90"
                                style={{
                                    strokeDashoffset: `${565.48 * (count / 5)}`
                                }}
                            />
                        </svg>
                        <div className="countdown-number">{count}</div>
                    </div>

                    <p className="countdown-message">
                        Something special is coming...
                    </p>

                    <div className="countdown-hearts">
                        <span className="heart">💕</span>
                        <span className="heart">💖</span>
                        <span className="heart">💗</span>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="floating-elements">
                <span className="float-item">🎈</span>
                <span className="float-item">🎂</span>
                <span className="float-item">🎉</span>
                <span className="float-item">✨</span>
                <span className="float-item">🌟</span>
                <span className="float-item">🎀</span>
            </div>
        </div>
    );
}

export default CountdownPage;
