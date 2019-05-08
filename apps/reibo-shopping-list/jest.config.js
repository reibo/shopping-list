module.exports = {
  name: "reibo-shopping-list",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/reibo-shopping-list/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
