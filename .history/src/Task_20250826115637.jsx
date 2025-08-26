import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function Task({ task }) {
  return (
    <div>
      <span>{task.title}</span>
      <small>
        создано {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
      </small>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  })
};

Task.defaultProps = {
  task: {
    completed: false
  }
};

export default Task;