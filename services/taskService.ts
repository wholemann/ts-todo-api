class TaskService {
  tasks = [];

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks = [
      ...this.tasks,
      {title}
    ]
  }

  clear() {
    this.tasks = [];
  }
}

export const taskService = new TaskService();
