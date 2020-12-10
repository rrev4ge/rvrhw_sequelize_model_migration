'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// 1. Проинициализировать проект (sequelize init), предварительно установив все нужные для sequelize пакеты.
// 2. Создать базу данных по сгенерированной конфигурации (sequelize db:create).
// 3. Написать sequelize-cli инструкцию для создания модели сущности Phone (модель, марка, год издания, размер оперативной памяти, процессор, диагональ экрана, имеет ли NFC).
      // npx sequelize model:create --name Phone --attributes model:STRING,model:STRING,vendorDate:DATE,ram:STRING,cpu:STRING,screenSize:STRING,nfc:BOOLEAN
// Отредактировать миграцию с учетом дополнительных ограничений.
// Выполнить миграцию.
// Отредактировать описание модели в Phone.init(). Не забывайте про валидацию и стиль именования.
