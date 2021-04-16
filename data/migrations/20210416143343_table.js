exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments('project_id')
      tbl.text('project_name', 128).notNullable()
      tbl.text('project_description', 250)
      tbl.boolean('project_completed')
    })
    .createTable('resources', (tbl) => {
      tbl.increments('resource_id')
      tbl.text('resource_name', 128).notNullable().unique()
      tbl.text('resource_description', 250)
    })
    .createTable('tasks', (tbl) => {
      tbl.increments('task_id')
    })
    .createTable()
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}
