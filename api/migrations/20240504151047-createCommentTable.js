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
  return db.createTable('comments', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'userComment',
        table: 'users',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        mapping: {
          user: 'id',
        },

      }
    },
    post: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'postComment',
        table: 'posts',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          post: 'id',
        }
      },
    },
    comment: {
      type: 'string',
      notNull: true,
    },
    createAt: {
      type: 'datetime',
    },
    updateAt: {
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
