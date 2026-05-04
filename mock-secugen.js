const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors()); // Crucial para que Angular pueda comunicarse
app.use(express.json());

app.post('/capturar-huella', (req, res) => {
    console.log('--- Iniciando captura de huella ---');
    
    // Simulamos el delay del hardware (lectura de luz, procesamiento)
    setTimeout(() => {
        const mockResponse = {
            estado: "EXITO",
            calidad: 98,
            template: "MOCK_TEMPLATE_ABC123_PARA_POC_" + Date.now()
        };
        console.log('Huella capturada con éxito.');
        res.status(200).json(mockResponse);
    }, 2000);
});

app.listen(PORT, () => {
    console.log(`Middleware de Hardware corriendo en http://localhost:${PORT}`);
});