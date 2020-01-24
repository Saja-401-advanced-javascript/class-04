'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');
const util = require('util')

let file = `${__dirname}/data/categories.db`;

let readFile = util.promisify(fs.readFile)
readFile(file)
  .then(data => console.log( data.toString().trim()))
  .catch(err => { throw err; });


// fs.writeFile('categories.db', "Hello World!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("File saved successfully!");
// });


class Model {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    this.database.push(record);
    return Promise.resolve(record);
  }

  update(id, record) {
    this.database = this.database.map((item) => (item.id === id) ? record : item);
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}

module.exports = Model;