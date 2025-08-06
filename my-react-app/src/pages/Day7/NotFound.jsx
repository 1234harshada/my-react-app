import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // same folder, so this is correct

const NotFound = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/');
    }
  }, [count, navigate]);

  const messages = {
    5: "Don't worry...",
    4: "We are finding your way...",
    3: "Almost there...",
    2: "Get ready...",
    1: "Redirecting now!",
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Page Not Found</h1>
      <div className="countdown">
        <p className="number">{count}</p>
        <p className="message">{messages[count]}</p>
      </div>
    </div>
  );
};

export default NotFound;