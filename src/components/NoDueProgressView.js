import ProgressView from './ProgressView';

const NoDueProgressView = () => {
  const classN = 'progress-view-noDues';
  return (
    <div>
      <ProgressView classN={classN} />
    </div>
  );
};

export default NoDueProgressView;
