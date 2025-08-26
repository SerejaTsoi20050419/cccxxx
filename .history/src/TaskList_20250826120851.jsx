import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>Нет задач</p>
      ) : (
        tasks.map((task) => <Task key={task.id} text={task.text} createdAt={task.createdAt} />)
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      createdAt: PropTypes.instanceOf(Date),
    })
  ),
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;