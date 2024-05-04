'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('posts', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      notNull: true,
    },
    desciption: {
      type: 'string',
    },
    content: {
      type: 'string',
      notNull: true
    },
    category: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'postCategory_FK',
        table: 'categories',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        mapping: {
          category: 'id',
        }
      }
    },
    createdAt: {
      type: 'datetime',
    },
    updatedAt: {
      type: 'datetime',
    }
  });
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
