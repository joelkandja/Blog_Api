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

exports.down = function (db) {
  return null;
};

exports.up = function (db) {
  return db.createTable('users', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: 'string',
      notNull: true
    },
    passwd: {
      type: 'string',
      notNull: true
    },
    createAt: {
      type: 'datetime',
    },
    updateAt: {
      type: 'datetime',
    }
  });
};

exports._meta = {
  "version": 1
};
