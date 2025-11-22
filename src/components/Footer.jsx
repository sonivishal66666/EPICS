import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '60px 20px',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px'
            }}>
                {/* Brand */}
                <div>
                    <h3 style={{
                        color: '#fff',
                        fontFamily: 'var(--font-display)',
                        marginBottom: '20px',
                        fontSize: '1.5rem'
                    }}>
                        DE<span style={{ color: 'var(--primary-color)' }}>Vault</span>
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.6' }}>
                        The world's most secure decentralized storage network.
                        Powered by blockchain technology.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Network Status</Link></li>
                        <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Node Explorer</Link></li>
                        <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Documentation</Link></li>
                        <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Whitepaper</Link></li>
                    </ul>
                </div>

                {/* Community */}
                <div>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Community</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Discord</a></li>
                        <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Twitter</a></li>
                        <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Telegram</a></li>
                        <li><a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>GitHub</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Stay Updated</h4>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input
                            type="email"
                            placeholder="Enter email"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '10px',
                                borderRadius: '4px',
                                color: '#fff',
                                outline: 'none',
                                width: '100%'
                            }}
                        />
                        <button className="btn-primary" style={{ padding: '10px 20px' }}>
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '60px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                color: 'rgba(255, 255, 255, 0.3)',
                fontSize: '0.8rem'
            }}>
                © 2025 NexusGrid Network. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
