import React from 'react';

const CookieSettingsButton = () => {
    const handleCookieSettings = () => {
        // Ensure _hsp exists before calling
        const _hsp = window._hsp = window._hsp || [];
        _hsp.push(['showBanner']);
    };

    return (
        <button
            type="button"
            id="hs_show_banner_button"
            style={{
                backgroundColor: '#7FEE64',
                border: '1px solid #7FEE64',
                borderRadius: '3px',
                padding: '10px 16px',
                textDecoration: 'none',
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'normal',
                lineHeight: 'inherit',
                textAlign: 'left',
                textShadow: 'none',
                position: 'absolute',
                right: 10,
                bottom: 10,
                zIndex: 99999,
            }}
            onClick={handleCookieSettings}
        >
            Cookie Settings
        </button>
    );
};

export default CookieSettingsButton;
