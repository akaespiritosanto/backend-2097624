module.exports = function (sequelize, Model, DataTypes){
    class Car extends Model{ }
    Car.init(
        {
            brand: DataTypes.STRING,
            model: DataTypes.STRING,
            licensePlate: DataTypes.STRING,
            color: DataTypes.STRING,
            year: DataTypes.INTEGER,
            power: DataTypes.INTEGER,
            displacement: DataTypes.INTEGER
        },
        {sequelize, Modelname: "Car"}
    );
    return Car;
}