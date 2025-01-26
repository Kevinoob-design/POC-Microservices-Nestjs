module.exports = (config, context) => {
	config.watchOptions = {
		aggregateTimeout: 500,
		poll: 1000
	}

	return config
}
