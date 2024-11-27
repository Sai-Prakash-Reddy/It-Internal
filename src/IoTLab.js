import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const IoTLab = () => {
  const navigate = useNavigate();
  const hasAlerted = useRef(false); 

  useEffect(() => {
    if (!hasAlerted.current) {
      alert('This page is closed by admin. It Will be enabled shortly.');
      hasAlerted.current = true; 
      navigate('/'); 
    }
  }, [navigate]);

  return null; 
};

export default IoTLab;
