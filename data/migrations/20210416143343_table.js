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
      tbl.text('task_description', 250).notNullable()
      tbl.text('task_notes', 250)
      tbl.boolean('task_completed')
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('Restrict')
    })
    .createTable('project_resources', (tbl) => {
      tbl.increments('project_resource_id')
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('Restrict')
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('Restrict')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}
