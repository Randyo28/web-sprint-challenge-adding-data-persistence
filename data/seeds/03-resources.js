exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: 'Traversy Media',
      resource_description: 'Learn programming free online',
    },
    {
      resource_name: 'CodingPhase',
      resource_description: 'Learn how to be your own Boss',
    },
    { resource_name: 'Web Dev Simplified' },
  ])
}
