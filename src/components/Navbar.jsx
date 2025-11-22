import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        background: 'rgba(5, 5, 5, 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '35px',
            height: '35px',
            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{ width: '10px', height: '10px', background: '#000', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </motion.div>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'var(--font-display)',
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          DE<span className="text-gradient">Vault</span>
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {['NETWORK', 'NODES', 'PROTOCOL'].map((item) => (
          <Link
            key={item}
            to="/"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem',
              fontWeight: '500',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >
            {item}
          </Link>
        ))}
        <Link to="/signin" className="btn-outline" style={{ padding: '10px 24px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={16} /> ACCESS TERMINAL
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
