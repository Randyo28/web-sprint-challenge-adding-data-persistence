exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      task_description: 'How to use different html tags',
      task_notes: 'Use w3schools',
      task_completed: true,
      project_id: 1,
    },
    {
      task_description: 'How to structure your code',
      task_notes: 'Search up code examples on codepen',
      project_id: 1,
    },
    {
      task_description: 'How to insert css',
      task_notes: '',
      task_completed: true,
      project_id: 2,
    },
    {
      task_description: 'How to select tags based on importance',
      task_notes: '',
      task_completed: true,
      project_id: 2,
    },
    {
      task_description: 'Learn how to use variables',
      task_notes: 'Youtube is your bestfriend',
      task_completed: true,
      project_id: 3,
    },
    {
      task_description: 'Learn how to use call functions',
      task_notes: 'Cry',
      task_completed: true,
      project_id: 3,
    },
  ])
}
