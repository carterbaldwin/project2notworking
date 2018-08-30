module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    // text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  //WIP
  Example.associate = function(models) {
      Example.belongsTo(models.Bar, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Example;
};


