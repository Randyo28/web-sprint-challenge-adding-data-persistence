exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: 'Learn HTML',
      project_description: 'Understand how to use semantic tags ',
      project_completed: true,
    },
    {
      project_name: 'Learn CSS',
      project_description: 'Understand parent to child inheritance with CSS',
    },
    {
      project_name: 'Learn Javascript',
      project_description: 'Learn functions and variables',
      project_completed: true,
    },
  ])
}
