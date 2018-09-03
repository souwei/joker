# SUMMARY
This is a sample project which consists of a web server to tell jokes to users. The goal of the project is to demonstrate continous integration and deployment with teamcity and terraform with tests.

### PREREQUISITES
1. Node (OPTIONAL - for this demo project we use Node so it is required , otherwise it is not needed for your project) - You can find the installation guide for node [here](https://nodejs.org/en/) .

2. Team City (For CI / CD ) - You can download the free version of team city [here](https://www.jetbrains.com/teamcity/download/) .

3. Azure CLI (For CD) - Azure CLI is used in this project as we will deploy our application to azure, you will need to install the cli applicable to your deloyment environment(e.g. AWS etc.).You can get Azure CLI installer [here](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) .

4. Terraform (For CD) - You can follow instructions to download and install terraform [here](https://www.terraform.io/downloads.html).

### STARTING THE SERVER
1. Run `npm i` at project root folder. 
2. Run `npm run start`. to start server
3. Open a web browser and go to `localhost:3000`.

# RUNNING THE TESTS

`npm run test` or `./node_modules/mocha/bin/mocha "__tests__/**/*.test.js"` 