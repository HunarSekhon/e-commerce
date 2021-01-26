const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

const errorHandler = require('./middleware/errorMiddelware')

dotenv.config()

const app = express()

app.use(express.json())

connectDB()



app.get('/', (req, res) => {
    res.send('API is running ... ')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


app.use(errorHandler.notFound)

app.use(errorHandler.errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

