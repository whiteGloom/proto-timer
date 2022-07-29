import {action, makeObservable, observable} from 'mobx';

export type TaskProps = {
  id: number;
  duration: number;
};

class Task {
  public id: number;
  public duration: number;

  constructor(config: TaskProps) {
    this.duration = config.duration;
    this.id = config.id;

    makeObservable(this, {
      duration: observable,
      setDuration: action,
    });
  }

  public setDuration(newDuration: number): void {
    this.duration = newDuration;
  }
}

export default Task;
