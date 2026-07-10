let bleDevice = null;
let txCharacteristic = null;

// Pybricks standard BLE Nordic UART Service (NUS) UUIDs
const NUS_SERVICE_UUID = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const NUS_TX_UUID      = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';

async function connectHub() {
    const statusText = document.getElementById('statusText');
    const connectBtn = document.getElementById('connectBtn');

    try {
        statusText.innerText = "Requesting Bluetooth device...";

        bleDevice = await navigator.bluetooth.requestDevice({
            acceptAllDevices: True
            optionalServices: [NUS_SERVICE_UUID]
        });

        statusText.innerText = "Connecting to GATT Server...";
        const server = await bleDevice.gatt.connect();

        statusText.innerText = "Getting Service...";
        const service = await server.getPrimaryService(NUS_SERVICE_UUID);

        statusText.innerText = "Getting Characteristic...";
        txCharacteristic = await service.getCharacteristic(NUS_TX_UUID);

        statusText.innerText = "Connected and Ready!";
        statusText.style.color = "#28a745";
        connectBtn.innerText = "❌ Disconnect";
        connectBtn.className = "disconnect";
        connectBtn.onclick = disconnectHub;

    } catch (error) {
        console.error(error);
        statusText.innerText = "Connection Failed: " + error.message;
        statusText.style.color = "#dc3545";
    }
}

function disconnectHub() {
    if (bleDevice && bleDevice.gatt.connected) {
        bleDevice.gatt.disconnect();
    }

    const statusText = document.getElementById('statusText');
    const connectBtn = document.getElementById('connectBtn');

    statusText.innerText = "Disconnected";
    statusText.style.color = "#aaa";
    connectBtn.innerText = "🔌 Connect to Hub";
    connectBtn.className = "connect";
    connectBtn.onclick = connectHub;
}

async function sendCommand(commandString) {
    if (!txCharacteristic) {
        alert("Please connect your LEGO Hub first!");
        return;
    }

    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(commandString + '\n');
        await txCharacteristic.writeValue(data);
        console.log(`Sent: ${commandString}`);
    } catch (error) {
        console.error("Transmission error:", error);
    }
}
