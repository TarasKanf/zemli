db.createUser(
	{
		user: "admin",
		pwd:"!pa$$word",
		roles: [
			{
				role:"readWrite",
				db:"zemli-db"
			}
		]
	}
)