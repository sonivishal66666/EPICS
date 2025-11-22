import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, Database, Globe, Layers, Cpu } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div style={{ minHeight: '100vh', paddingTop: '80px', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '0 20px'
            }}>
                {/* Background Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, transparent 70%)',
                        borderRadius: '50%',
                        zIndex: -1,
                        filter: 'blur(60px)'
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '20px',
                        lineHeight: '1.1',
                        letterSpacing: '-2px'
                    }}>
                        DECENTRALIZED<br />
                        <span className="text-gradient" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>STORAGE</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        maxWidth: '600px',
                        marginBottom: '50px',
                        lineHeight: '1.6'
                    }}
                >
                    Secure. Immutable. Distributed. Join the next generation of data persistence on the blockchain.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <button className="btn-primary">
                        Initialize Node <ArrowRight size={20} style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
                    </button>
                    <button className="btn-outline">Read Whitepaper</button>
                </motion.div>

                {/* Floating 3D Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        bottom: '15%',
                        right: '10%',
                        opacity: 0.5,
                        zIndex: -1
                    }}
                >
                    <Database size={120} color="var(--primary-color)" strokeWidth={0.5} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                        opacity: 0.3,
                        zIndex: -1
                    }}
                >
                    <Shield size={100} color="var(--secondary-color)" strokeWidth={0.5} />
                </motion.div>
            </section>

            {/* Network Stats Section */}
            <section style={{ padding: '60px 20px', position: 'relative' }}>
                <div className="glass-panel" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '40px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.02)'
                }}>
                    {[
                        { label: 'Active Nodes', value: '12,405', icon: <Globe size={24} /> },
                        { label: 'Data Stored', value: '45.2 PB', icon: <Database size={24} /> },
                        { label: 'Block Height', value: '#8,992,104', icon: <Layers size={24} /> },
                        { label: 'Avg Latency', value: '24ms', icon: <Zap size={24} /> }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div style={{ color: 'var(--primary-color)', marginBottom: '10px', opacity: 0.8 }}>{stat.icon}</div>
                            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '5px' }}>{stat.value}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '80px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>CORE <span className="text-gradient">TECHNOLOGY</span></h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
                        Built on advanced cryptographic primitives for unmatched security and speed.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {[
                        { title: 'Encrypted Sharding', desc: 'Data is split and encrypted across thousands of nodes using AES-256.', icon: <Shield size={40} color="var(--primary-color)" /> },
                        { title: 'Zero Downtime', desc: 'Redundant storage ensures your data is always available, even if nodes go offline.', icon: <Zap size={40} color="var(--secondary-color)" /> },
                        { title: 'Token Incentives', desc: 'Earn crypto by sharing your unused storage space with the network.', icon: <Cpu size={40} color="var(--accent-color)" /> }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ padding: '40px' }}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div style={{ marginBottom: '20px' }}>{feature.icon}</div>
                            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>{feature.title}</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
                    {[
                        { step: '01', title: 'Upload', desc: 'Drag & drop your files. Data is instantly sharded into encrypted fragments.' },
                        { step: '02', title: 'Distribute', desc: 'Fragments are dispersed across thousands of global nodes for redundancy.' },
                        { step: '03', title: 'Retrieve', desc: 'Access your data instantly from any gateway with your private key.' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ flex: 1, minWidth: '300px', padding: '40px', position: 'relative' }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '20px',
                                fontSize: '5rem',
                                fontWeight: 'bold',
                                color: 'rgba(255,255,255,0.03)',
                                fontFamily: 'var(--font-display)',
                                zIndex: 0
                            }}>{item.step}</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#fff', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tokenomics Section */}
            <section style={{ padding: '120px 20px', background: 'linear-gradient(180deg, transparent, rgba(0, 243, 255, 0.02), transparent)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '80px' }}
                    >
                        TOKEN <span style={{ color: 'var(--secondary-color)' }}>ECONOMY</span>
                    </motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {/* Storage Provider */}
                        <motion.div
                            className="glass-panel"
                            style={{ padding: '50px', borderTop: '4px solid var(--primary-color)' }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '10px' }}>Storage Provider</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>Earn tokens by hosting data.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {['Earn $NXS per GB/month', '99.9% Uptime Required', 'Automated Payouts'].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                                        <span style={{ color: 'var(--primary-color)', marginRight: '10px' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-primary" style={{ width: '100%' }}>Start Mining</button>
                        </motion.div>

                        {/* Data Consumer */}
                        <motion.div
                            className="glass-panel"
                            style={{ padding: '50px', borderTop: '4px solid var(--secondary-color)' }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 style={{ color: 'var(--secondary-color)', fontSize: '2rem', marginBottom: '10px' }}>Data Consumer</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px' }}>Store data permanently.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {['Pay in $NXS or Stablecoins', '10x Cheaper than AWS', 'Censorship Resistant'].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', color: '#fff' }}>
                                        <span style={{ color: 'var(--secondary-color)', marginRight: '10px' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-outline" style={{ width: '100%', borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}>Store Data</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section style={{ padding: '120px 20px', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '80px' }}>ROAD<span style={{ color: '#fff' }}>MAP</span></h2>
                <div style={{ position: 'relative', paddingLeft: '40px', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                    {[
                        { phase: 'Phase 1', title: 'Genesis', status: 'Completed', desc: 'Whitepaper release, Seed funding, Core protocol design.' },
                        { phase: 'Phase 2', title: 'Testnet', status: 'Active', desc: 'Public testnet launch, Bug bounty program, Wallet integration.' },
                        { phase: 'Phase 3', title: 'Mainnet', status: 'Upcoming', desc: 'Genesis block, Token generation event, Exchange listings.' },
                        { phase: 'Phase 4', title: 'Expansion', status: 'Future', desc: 'Layer 2 scaling, Cross-chain bridges, DAO governance.' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            style={{ marginBottom: '60px', position: 'relative' }}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-49px',
                                top: '0',
                                width: '16px',
                                height: '16px',
                                background: item.status === 'Completed' ? 'var(--primary-color)' : item.status === 'Active' ? 'var(--secondary-color)' : '#333',
                                borderRadius: '50%',
                                boxShadow: item.status === 'Active' ? '0 0 20px var(--secondary-color)' : 'none',
                                border: '2px solid var(--bg-color)'
                            }}></div>
                            <span style={{
                                color: item.status === 'Completed' ? 'var(--primary-color)' : item.status === 'Active' ? 'var(--secondary-color)' : 'rgba(255,255,255,0.4)',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: 'bold'
                            }}>{item.phase} - {item.status}</span>
                            <h3 style={{ fontSize: '1.8rem', margin: '10px 0', color: '#fff' }}>{item.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
