module.exports = {
    toEntity: (body) => {
        if (!body.senha || typeof body.senha !== 'string') {
            throw new Error('Senha é obrigatória!')
        }
        return {
            email: body.email,
            senha: body.senha,
            role: body.role || 'aluno',
            emailVerificado: body.emailVerificado || false
        }
    }
}