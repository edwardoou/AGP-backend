import app from './app'

// escuche en el puerto 
app.listen(app.get('port'))

console.log('servidor en puerto',app.get('port'))