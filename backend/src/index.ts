import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello, World!'})

})

app.get('/users', (req, res) => {
    res.status(200).json({
        data: {
            infos:{
                users:[
                   { name: "Guilherme Krepke", age: 24 }
                ]
            }
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server rodando em http://localhost:${PORT}`)
})