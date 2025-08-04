const { EntitySchema } = require("typeorm");

const Yazar = new EntitySchema({
    name: "Yazar",
    tableName: "yazarlar",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment",
        },
        name: {
            type: "varchar",
        },
        avatar_url: {
            type: "varchar",
            nullable: true,
        },
    },
    relations: {
        makaleler: {
            target: "Makale",
            type: "one-to-many",
            inverseSide: "author"
        }
    }
});

module.exports = { Yazar };
