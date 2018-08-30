module.exports = function(sequelize, DataTypes) {
    var Bar = sequelize.define("Bar", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    Bar.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Bar.hasMany(models.Example, {
        onDelete: "cascade"
      });
    };
  
    return Bar;
  };
  