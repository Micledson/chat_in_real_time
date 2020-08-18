import express from 'express';
import socket from 'socket.io';
import cors from 'cors';



const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' // URL of the react (Frontend) app
}));

app.get('/', (req, res) => {
    return res.send;
})
const PORT = process.env.port || 3030;
const server = app.listen(PORT, () => console.log(`> Ouvindo http://localhost:${PORT}`));

const io = socket(server);
io.on('connection', client => {
    console.log("nova coconexao");
    io.on('disconnect', () => {
        console.log('adsad')
    })

})
io.on('disconnect', () => {
    console.log("desconectado");
})