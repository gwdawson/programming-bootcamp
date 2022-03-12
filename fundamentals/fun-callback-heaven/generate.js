const projectGenerator = require('./challenges/2-project-generator');

const projectName = process.argv.slice(-1)[0];

projectGenerator(projectName, function() {});
