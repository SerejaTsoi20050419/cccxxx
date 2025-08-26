import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Task = ({ text, createdAt }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = Math.floor((now - createdAt) / 1000); // разница в секундах
      if (diff < 60) {
        setTimeAgo(`${diff} секунд назад`);
      } else {
        setTimeAgo(`${Math.floor(diff / 60)} минут назад`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '4px 0' }}>
      <p>{text}</p>
      <small>Создано {timeAgo}</small>
    </div>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
};

Task.defaultProps = {
  text: 'Новая задача',
  createdAt: new Date(),
};

export default Task;