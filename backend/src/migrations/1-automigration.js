'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "chunks", deps: []
 * createTable "assignments", deps: []
 * createTable "assignment_chunk_maps", deps: [assignments]
 * createTable "placements", deps: [assignments]
 * createTable "placement_chunk_maps", deps: [placements]
 *
 **/

var info = {
    "revision": 1,
    "name": "automigration",
    "created": "2024-03-04T17:20:01.084Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "chunks",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "unique": true,
                        "allowNull": false
                    },
                    "size": {
                        "type": Sequelize.INTEGER,
                        "field": "size",
                        "allowNull": true
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "assignments",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "unique": true,
                        "allowNull": false
                    },
                    "size": {
                        "type": Sequelize.INTEGER,
                        "field": "size",
                        "allowNull": true
                    },
                    "chunk_count": {
                        "type": Sequelize.INTEGER,
                        "field": "chunk_count",
                        "allowNull": true
                    },
                    "root_hash": {
                        "type": Sequelize.STRING,
                        "field": "root_hash",
                        "allowNull": true
                    },
                    "desired_redundancy": {
                        "type": Sequelize.INTEGER,
                        "field": "desired_redundancy",
                        "allowNull": true
                    },
                    "achieved_redundancy": {
                        "type": Sequelize.INTEGER,
                        "field": "achieved_redundancy",
                        "defaultValue": 0,
                        "allowNull": false
                    },
                    "is_active": {
                        "type": Sequelize.BOOLEAN,
                        "field": "is_active",
                        "defaultValue": false,
                        "allowNull": false
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "assignment_chunk_maps",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "unique": true,
                        "allowNull": false
                    },
                    "assignment_id": {
                        "type": Sequelize.STRING,
                        "field": "assignment_id",
                        "allowNull": false
                    },
                    "pos": {
                        "type": Sequelize.INTEGER,
                        "field": "pos",
                        "allowNull": true
                    },
                    "chunk_id": {
                        "type": Sequelize.STRING,
                        "field": "chunk_id",
                        "allowNull": true
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "AssignmentId": {
                        "type": Sequelize.STRING,
                        "field": "assignment_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "assignments",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "placements",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "unique": true,
                        "allowNull": false
                    },
                    "provider_id": {
                        "type": Sequelize.STRING,
                        "field": "provider_id",
                        "allowNull": false
                    },
                    "provider_connection_strings": {
                        "type": Sequelize.JSON,
                        "field": "provider_connection_strings",
                        "allowNull": true
                    },
                    "desired_redundancy": {
                        "type": Sequelize.INTEGER,
                        "field": "desired_redundancy",
                        "allowNull": true
                    },
                    "achieved_redundancy": {
                        "type": Sequelize.INTEGER,
                        "field": "achieved_redundancy",
                        "defaultValue": 0,
                        "allowNull": false
                    },
                    "merkle_root": {
                        "type": Sequelize.STRING,
                        "field": "merkle_root",
                        "allowNull": true
                    },
                    "merkle_tree": {
                        "type": Sequelize.JSON,
                        "field": "merkle_tree",
                        "allowNull": true
                    },
                    "process_id": {
                        "type": Sequelize.STRING,
                        "field": "process_id",
                        "allowNull": true
                    },
                    "redundancy_key": {
                        "type": Sequelize.STRING,
                        "field": "redundancy_key",
                        "allowNull": true
                    },
                    "expires": {
                        "type": Sequelize.BIGINT,
                        "field": "expires",
                        "allowNull": true
                    },
                    "status": {
                        "type": Sequelize.STRING,
                        "field": "status",
                        "defaultValue": "created",
                        "allowNull": false
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "AssignmentId": {
                        "type": Sequelize.STRING,
                        "field": "assignment_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "assignments",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "placement_chunk_maps",
                {
                    "id": {
                        "type": Sequelize.STRING,
                        "field": "id",
                        "primaryKey": true,
                        "unique": true,
                        "allowNull": false
                    },
                    "placement_id": {
                        "type": Sequelize.STRING,
                        "field": "placement_id",
                        "allowNull": false
                    },
                    "is_sent": {
                        "type": Sequelize.BOOLEAN,
                        "field": "is_sent",
                        "defaultValue": false,
                        "allowNull": false
                    },
                    "original_chunk_id": {
                        "type": Sequelize.STRING,
                        "field": "original_chunk_id",
                        "allowNull": true
                    },
                    "encrypted_chunk_id": {
                        "type": Sequelize.STRING,
                        "field": "encrypted_chunk_id",
                        "allowNull": true
                    },
                    "pos": {
                        "type": Sequelize.INTEGER,
                        "field": "pos",
                        "allowNull": true
                    },
                    "created_at": {
                        "type": Sequelize.DATE,
                        "field": "created_at",
                        "allowNull": false
                    },
                    "updated_at": {
                        "type": Sequelize.DATE,
                        "field": "updated_at",
                        "allowNull": false
                    },
                    "PlacementId": {
                        "type": Sequelize.STRING,
                        "field": "placement_id",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "placements",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["chunks", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["assignments", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["assignment_chunk_maps", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["placements", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["placement_chunk_maps", {
                transaction: transaction
            }]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};