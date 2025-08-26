import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, createdAt }) => {
  const [timeAgo, setTimeAgo] = useState('');

  const updateTime = () => {
    const diff = Math.floor((Date.now() - createdAt) / 1000); // в секундах
    if (diff < 60) {
      setTimeAgo(`создано ${diff} секунд назад`);
    } else {
      const minutes = Math.floor(diff / 60);
      setTimeAgo(`создано ${minutes} минут назад`);
    }
  };

  useEffect(() => {
    updateTime(); // сразу при рендере
    const interval = setInterval(updateTime, 1000); // обновление каждую секунду
    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <div>
      <span>{title}</span>
      <small> ({timeAgo})</small>
    </div>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.number,
};

Task.defaultProps = {
  title: 'Новая задача',
  createdAt: Date.now(),
};

export default Task;