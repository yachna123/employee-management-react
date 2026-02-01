import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MemoriesPage.css';

function MemoriesPage() {
    const [selectedMemory, setSelectedMemory] = useState(null);

    // Array of actual image files in the public folder with detailed descriptions
    const memories = [
        {
            src: '/images/1.JPG',
            alt: 'Memory 1',
            caption: 'Beautiful Moment',
            description: 'This precious moment captures the joy and happiness we share together. Every smile, every laugh, every second with you is a treasure I hold close to my heart. 💕'
        },
        {
            src: '/images/2.png',
            alt: 'Memory 2',
            caption: 'Sweet Times',
            description: 'Sweet memories like these remind me how lucky I am to have you in my life. Your presence makes every moment special and unforgettable. 🌸'
        },
        {
            src: '/images/3.png',
            alt: 'Memory 3',
            caption: 'Happy Days',
            description: 'Days filled with laughter and joy are the best days. This memory represents all the happiness you bring into my life every single day. ✨'
        },
        {
            src: '/images/4.jpeg',
            alt: 'Memory 4',
            caption: 'Precious Memory',
            description: 'A precious memory that I will cherish forever. These moments with you are the highlights of my life, and I am grateful for each one. 💖'
        },
        {
            src: '/images/5.jpeg',
            alt: 'Memory 5',
            caption: 'Special Day',
            description: 'Special days become even more special when spent with you. This memory holds a special place in my heart and always will. 🎀'
        },
        {
            src: '/images/6.jpeg',
            alt: 'Memory 6',
            caption: 'Lovely Time',
            description: 'Time spent with you is never wasted. Every moment is lovely, every second is precious, and every memory is beautiful. 💗'
        },
        {
            src: '/images/7.jpeg',
            alt: 'Memory 7',
            caption: 'Cherished Moment',
            description: 'Cherished moments like these are what make life worth living. You fill my days with love, laughter, and endless happiness. 🌟'
        },
        {
            src: '/images/8.JPG',
            alt: 'Memory 8',
            caption: 'Forever Memory',
            description: 'A memory that will last forever in my heart. You are my today and all of my tomorrows, my forever and always. 💕'
        }
    ];

    const openModal = (memory) => {
        setSelectedMemory(memory);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedMemory(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="memories-page">
            {/* Floating decorations */}
            <div className="floating-decorations">
                <span className="float-heart">💕</span>
                <span className="float-heart">💖</span>
                <span className="float-heart">✨</span>
                <span className="float-heart">🌸</span>
                <span className="float-heart">💗</span>
                <span className="float-heart">🎀</span>
            </div>

            <header className="page-header">
                <Link to="/birthday" className="back-link">
                    <span className="back-arrow">←</span> Back to Birthday
                </Link>
                <h1 className="page-title">
                    <span className="title-text">Our Beautiful Memories</span>
                    <span className="title-emoji">💖</span>
                </h1>
                <p className="page-subtitle">Every moment with you is a treasure</p>
            </header>

            <div className="memories-container">
                <div className="memories-grid">
                    {memories.map((memory, index) => (
                        <div
                            className="memory-card"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openModal(memory)}
                        >
                            <div className="memory-card-inner">
                                <div className="image-wrapper">
                                    <img src={memory.src} alt={memory.alt} />
                                    <div className="image-overlay">
                                        <span className="overlay-icon">💕</span>
                                        <span className="overlay-text">Click to view</span>
                                    </div>
                                </div>
                                <div className="memory-caption">
                                    <p>{memory.caption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Section */}
                <div className="video-section">
                    <h2 className="video-title">
                        <span>Special Moment</span>
                        <span className="sparkle">✨</span>
                    </h2>
                    <div className="video-card">
                        <div className="video-wrapper">
                            <video
                                controls
                                playsInline
                                preload="metadata"
                                className="memory-video"
                            >
                                <source src="/videos/11.mp4" type="video/mp4" />
                                Your browser does not support video.
                            </video>
                        </div>
                        <div className="video-info">
                            <span className="video-label">A moment to remember forever 💖</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedMemory && (
                <div className="memory-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            ✕
                        </button>
                        <div className="modal-image-wrapper">
                            <img src={selectedMemory.src} alt={selectedMemory.alt} />
                        </div>
                        <div className="modal-details">
                            <h3 className="modal-title">{selectedMemory.caption}</h3>
                            <p className="modal-description">{selectedMemory.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MemoriesPage;
