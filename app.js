const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.json({
        message:"Welcome to tengku express js"
    })
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}` )
})