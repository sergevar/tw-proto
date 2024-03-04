// import File from './file';
// const Identity = require('./identity');
const Chunk = require('./Chunk');
const Assignment = require('./Assignment');
const AssignmentChunkMap = require('./AssignmentChunkMap');
const Placement = require('./Placement');
const PlacementChunkMap = require('./PlacementChunkMap');
// import FileMap from './file_map';
// import DirMap from './dir_map';
// import {Database} from '../index';
const {Database} = require('../index');
const sequelize = Database.client;

// Dependencies
// File.belongsToMany(Chunk, {through: FileMap});
// Chunk.belongsToMany(File, {through: FileMap});
// FileMap.belongsTo(Chunk);
// FileMap.belongsTo(File);
// File.hasMany(FileMap);
// Chunk.hasMany(FileMap);

AssignmentChunkMap.belongsTo(Assignment);
Assignment.hasMany(AssignmentChunkMap);

PlacementChunkMap.belongsTo(Placement);
Placement.hasMany(PlacementChunkMap);

Assignment.hasMany(Placement);
Placement.belongsTo(Assignment);

// export {File, Identity, Chunk, Database, FileMap, DirMap, sequelize};
module.exports = {
    Chunk,
    Assignment,
    AssignmentChunkMap,
    Placement,
    PlacementChunkMap,

    Database,
    sequelize
};