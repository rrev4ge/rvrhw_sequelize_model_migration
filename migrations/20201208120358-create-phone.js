'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(32)
      },
      vendorDate: {
        field: "vendor_date",
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ram: {
        type: Sequelize.STRING(10)
      },
      cpu: {
        type: Sequelize.STRING(32)
      },
      screenSize: {
        field: "screen_size",
        type: Sequelize.INTEGER
      },
      nfc: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('phones');
  }
};