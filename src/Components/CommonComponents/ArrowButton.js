import React from 'react';

const ArrowButton = ({ onClick, colorBg = '#161616' }) => {
  // Detect iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const buttonStyle = {
    display: 'flex',
    width: '70px',
    height: '70px',
    padding: '25.664px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8.645px',
    flexShrink: 0,
    aspectRatio: '1 / 1',
    borderRadius: '27.664px',
    background: colorBg,
    border:  'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    // iOS-specific fixes
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitTransform: 'translateZ(0)',
    position: 'relative',
    
    touchAction: 'manipulation',
    isolation: 'isolate',
    // Enhanced visibility for iOS
    // boxShadow: isIOS ? '0 4px 12px rgba(0,0,0,0.3)' : 'none',
    // backdropFilter: isIOS ? 'blur(4px)' : 'none',
  };

  // Use state to handle hover
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      className='arrowbutton'
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <svg
        style={{
          transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
          zIndex: 1000,
          width:  !isIOS ?'18px' : '16px',
          height: !isIOS ? '18px' : '16px',
          display: 'block',
        }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
        <path d="M16.6854 1.4142C16.6854 0.936743 16.2984 0.549688 15.8209 0.549689L8.0403 0.549689C7.56285 0.549689 7.17579 0.936744 7.17579 1.4142C7.17579 1.89166 7.56285 2.27871 8.0403 2.27871L14.9564 2.27871L14.9564 9.19481C14.9564 9.67226 15.3435 10.0593 15.8209 10.0593C16.2984 10.0593 16.6854 9.67226 16.6854 9.1948L16.6854 1.4142ZM1.76096 16.6968L16.4322 2.0255L15.2096 0.802898L0.538356 15.4741L1.76096 16.6968Z" fill="#AAE74B" />
      </svg>

    </button>
  );
};

export default ArrowButton;