import {action, makeObservable, observable} from 'mobx';
import RootStore from '../root';
import TaskModel from '../../models/task';

class TasksStore {
  protected rootStore: RootStore;
  protected counter = 0;
  public tasks: TaskModel[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      tasks: observable,
      addTask: action,
      removeTask: action,
    });
  }

  public addTask(config: {duration: number}) {
    const {duration} = config;

    this.counter += 1;
    this.tasks.push(new TaskModel({duration, id: this.counter}));
  }

  public removeTask(position: number) {
    this.tasks.splice(position, 1);
  }
}

export default TasksStore;
