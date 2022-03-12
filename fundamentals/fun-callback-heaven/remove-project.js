const removeProject = require('./__tests__/utils');
const projectName = process.argv.slice(-1)[0];

removeProject(projectName, function() {
  console.log(`all done...`);
});
