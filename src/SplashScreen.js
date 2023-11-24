// SplashScreen.js
import React, { useState, useEffect } from 'react';
import './SplashScreen.css'; // Buat file CSS untuk styling jika diperlukan

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 3000); // Waktu tampilan splash screen (dalam milidetik)
    
    // Membersihkan timer saat komponen dibongkar
    return () => clearTimeout(timer);
  }, [onFinish]);

  return visible ? (
    <div className="splash-screen">
      <img src="/splashscreen.jpg" alt="Splash Screen" />
    </div>
  ) : null;
};

export default SplashScreen;
