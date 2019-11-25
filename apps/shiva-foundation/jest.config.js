module.exports = {
  name: 'shiva-foundation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/shiva-foundation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
