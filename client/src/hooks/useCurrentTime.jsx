import { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('en-US'));
  }, []);

  return currentTime;
};

export default useCurrentTime;
