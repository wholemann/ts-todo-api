import {taskService} from './taskService';

describe('TaskService', () => {
  describe('getTasks', () => {

    beforeAll(() => {
      taskService.clear();
    });

    describe('with no tasks', () => {
      it('returns all tasks', () => {
        const tasks = taskService.getTasks();
        expect(tasks).toEqual([]);
      });
    });

    describe('with some tasks', () => {
      beforeAll(() => {
        taskService.addTask('Hello');
      })

      it('returns all tasks', () => {
        const tasks = taskService.getTasks();
        expect(tasks[0].title).toBe('Hello');
      });
    });
  });
});
