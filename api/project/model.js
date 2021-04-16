const db = require('../../data/dbConfig')

function getProjects() {
  return db('projects')
}

function findById(project_id) {
  return db('projects').where('project_id', project_id)
}

async function create(project) {
  const [id] = await db('projects').insert(project)
  return findById(id)
}

module.exports = {
  getProjects,
  findById,
  create,
}
