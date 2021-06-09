import PropTypes from 'prop-types';
import ProgressView from './ProgressView';
import filterProgressViewWithNoDueDate from '../helper/filterProgressViewWithNoDueDate';

const NoDueProgressView = ({ allTasks }) => {
  const classN = 'progress-view-noDues';
  console.log('inside No Due Progress View', allTasks);
  const currentToDos = filterProgressViewWithNoDueDate(allTasks);
  console.log('filtered todos in Nodue progress view', currentToDos);
  return (
    <div>
      <ProgressView classN={classN} currentToDos={currentToDos} />
    </div>
  );
};

NoDueProgressView.propTypes = {
  allTasks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default NoDueProgressView;
