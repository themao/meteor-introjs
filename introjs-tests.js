// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by introjs.js.
import { name as packageName } from "meteor/themao:introjs";

// Write your tests here!
// Here is an example.
Tinytest.add('introjs - example', function (test) {
  test.equal(packageName, "introjs");
});
