import app from './app'

// variable port de 'app'
app.listen(app.get('port'))

console.log('Servidor en puerto',app.get('port'))