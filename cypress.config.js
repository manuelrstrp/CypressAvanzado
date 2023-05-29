const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");
const webpack = require('@cypress/webpack-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

const values = {};

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  addMatchImageSnapshotPlugin(on, config)

  config.env.variable= process.env.NODE_ENV ?? 'NO HAY VARIABLE';
  on('task',{
    guardar(valor){
      const key = Object.keys(valor)[0]
      values[key]=valor[key]
      return null
    },
    obtener(key){
      console.log('values',values)
      return values[key] ?? 'No hay valor'
    }
  })

  await preprocessor.addCucumberPreprocessorPlugin(on,config);//Funcion para utilizar el preprocesador
  on(//Evento preprocesador cucumber
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  allureWriter(on, config)

  return config;
}

module.exports = defineConfig({
  projectId: 'fjuc56',//npx cypress run --record --key 6c215f9c-1fea-4c92-95c1-c696bb1adaed
  /* //REPORTES
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  }, */
  
  e2e: {
    baseUrl: "https://pokedexpokemon.netlify.app",
    
    retries: 2,
    /* retries:{
      //configure retry attemps for 'cyress run'
      //default is 0
      runMode: 2,
      //configure retry attemps for 'cyress open'
      //default is 0
      openMode: 2,
    } */
    setupNodeEvents,
    env:{
      credentials:{
        user: 'username',
        password: 'password',
      }
    },
    testIsolation: false,
    specPattern: "**/*.feature",//incluir los .fetaure como pruebas, no solo los .cy
  },
});
