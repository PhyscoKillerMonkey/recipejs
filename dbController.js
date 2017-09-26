// dbController.js

const ObjectID = require("mongodb").ObjectID;

module.exports = (db) => {

  // Will have to change this when more collections are used (users etc)
  const collection = db.collection("recipes");
  let module = {};

  module.getAllRecipes = (callback) => {
    // TODO: Implement ranged get, use marker and range, return marker for next call
    collection.find().toArray((err, docs) => {
      if (err) console.error(err);
      callback(err, docs);
    });
  };

  module.getRecipe = (id, callback) => {
    try {
      const filter = { "_id": new ObjectID(id) };

      collection.findOne(filter, (err, docs) => {
        if (err) console.error(err);
        callback(err, docs);
      });
    } catch (error) {
      console.error(error);
      callback(error, null);
    }
  };

  module.createRecipe = (recipe, callback) => {
    if (!validateRecipe(recipe)) {
      // Error with some userful information
    }

    collection.insertOne(recipe, (err, result) => {
      if (err) console.error(err);
      callback(err, result);
    });
  };

  module.updateRecipe = (id, recipe, callback) => {
    try {
      const filter = { "_id": new ObjectID(id) };

      if (!validateRecipe(recipe)) {
        // Error with some userful information
      }

      collection.updateOne(filter, recipe, (err, result) => {
        if (err) console.error(err);
        // TODO: Check that result.ok == 1 and error if not
        callback(err, result);
      });
    } catch (error) {
      console.error(error);
      callback(error, null);
    }
  };

  module.deleteRecipe = (id, callback) => {
    try {
      const filter = { "_id": new ObjectID(id) };

      collection.findOneAndDelete(filter, (err, result) => {
        if (err) {
          console.error(err);
        }
        if (!result.value) {
          err = "Error: Recipe not found";
          console.error(err)
        }
        callback(err, result);
      });
    } catch (error) {
      console.error(error);
      callback(error, null);
    }
  };

  function validateRecipe(recipe) {
    // TODO: Validate recipes before sending to server
    return true;
  }

  return module;

};