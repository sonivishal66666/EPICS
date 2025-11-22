import React, { useState } from 'react';

const SignIn = () => {
    const [focused, setFocused] = useState(null);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '60px'
        }}>
            <div className="glass-panel" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '40px',
                position: 'relative'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: 'var(--primary-color)',
                    textTransform: 'uppercase'
                }}>
                    Access Node
                </h2>

                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {['Wallet Address', 'Private Key'].map((label, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase'
                            }}>
                                {label}
                            </label>
                            <input
                                type={label === 'Private Key' ? 'password' : 'text'}
                                onFocus={() => setFocused(index)}
                                onBlur={() => setFocused(null)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: 'none',
                                    borderBottom: `2px solid ${focused === index ? 'var(--primary-color)' : 'rgba(255,255,255,0.1)'}`,
                                    color: '#fff',
                                    fontFamily: 'var(--font-main)',
                                    outline: 'none',
                                    transition: 'all 0.3s'
                                }}
                            />
                        </div>
                    ))}

                    <button className="btn-primary" style={{ marginTop: '20px', width: '100%' }}>
                        Connect Wallet
                    </button>
                </form>

                <div style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.4)'
                }}>
                    By connecting, you agree to the <span style={{ color: 'var(--primary-color)', cursor: 'pointer' }}>Protocol Standards</span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
