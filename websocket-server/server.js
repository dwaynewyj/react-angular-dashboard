const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });
console.log('Socket started on port:', 8080);

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    // Simulate sending data to the client every 3 seconds
    const interval = setInterval(() => {
        let dataArray = [
            { id: 1, name: 'John', age: 30 },
            { id: 2, name: 'Jane', age: 25 },
            { id: 3, name: 'Doe', age: 40 }
        ];

        dataArray.forEach((item) => {
            item.age += Math.floor(Math.random() * 5) - 10; // Random age change within +/- 2
        });

        let data = JSON.stringify(dataArray);
        ws.send(data);
        console.log("Sent to client:", data)
    }, 3000);

    ws.on('close', function close() {
        console.log('Client disconnected');
        clearInterval(interval);
    });
});

