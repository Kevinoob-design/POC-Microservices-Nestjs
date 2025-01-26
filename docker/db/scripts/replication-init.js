rs.initiate({
	_id: "rs1",
	version: 1,
	members: [
		{ _id: 0, host: "mc-v2-mongodb-lynx:27017" },
		{ _id: 1, host: "mc-v2-mongodb-puma:27018" },
		{ _id: 2, host: "mc-v2-mongodb-wolf:27019" }
	]
})
