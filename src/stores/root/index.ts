import TasksStore from '../tasks';

class RootStore {
  tasksStore = new TasksStore(this);
}

export default RootStore;
