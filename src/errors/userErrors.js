module.exports = {
	userError(error) {
		if (error.meta.target === 'USUARIOS_cpf_key') {
			return 'Cpf já em uso!'
		}
		if (error.meta.target === 'USUARIOS_email_key') {
			return 'Email já em uso!'
		}
		if (error.meta.target === 'USUARIOS_rg_key') {
			return 'rg já em uso!'
		}

		return error
	},
}
