module.exports = function (sequelize, Model, DataTypes){
    class Stand extends Model{ }
    Stand.init(
        {
            name: DataTypes.STRING,
            adress: DataTypes.STRING,
            postalcode: DataTypes.STRING
        },
        {sequelize, Modelname: "Stand"}
    );
    return Stand;
}