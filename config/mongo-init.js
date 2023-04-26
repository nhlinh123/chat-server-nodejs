db.createUser(
    {
        user: "admin",
        pwd: "linh123",
        roles: [
            {
                role: "readWrite",
                db: "chatdb"
            }
        ]
    }
);
db.createCollection("chat"); //MongoDB creates the database when you fir
