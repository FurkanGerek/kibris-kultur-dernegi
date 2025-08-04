const { EntitySchema } = require("typeorm");

const Kullanici = new EntitySchema({
    name: "Kullanici",
    tableName: "kullanicilar",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment",
        },
        email: {
            type: "varchar",
            unique: true,
        },
        sifre: {
            type: "varchar",
        },
        rol: {
            type: "varchar",
        },
    },
});

module.exports = { Kullanici };
