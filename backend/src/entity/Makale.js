const { EntitySchema } = require("typeorm");
const { Yazar } = require("./Yazar");

const Makale = new EntitySchema({
    name: "Makale",
    tableName: "makaleler",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment",
        },
        title: {
            type: "varchar",
        },
        content: {
            type: "text",
        },
        author_id: {
            type: "int",
        },
        created_at: {
            type: "timestamp",
            createDate: true,
        },
    },
    relations: {
        author: {
            target: "Yazar",
            type: "many-to-one",
            joinColumn: {
                name: "author_id",
            },
            inverseSide: "makaleler"
        }
    }
});

module.exports = { Makale };
