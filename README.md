# LEGO-james-remote
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEGO Hub Full Remote</title>
    <style>
        body { font-family: Arial, sans-serif; background: #121212; color: #fff; text-align: center; padding: 20px; }
        .panel { max-width: 400px; margin: auto; background: #1e1e1e; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
       
        /* Grid Layout for Directional Buttons */
        .controls-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px auto; width: 90%; }
        .drive-btn { background: #007bff; color: white; border: none; padding: 20px 10px; font-size: 20px; font-weight: bold; border-radius: 12px; cursor: pointer; -webkit-user-select: none; user-select: none; }
        .drive-btn:active { background: #0056b3; transform: scale(0.95); }
        .spacer { visibility: hidden; } /* Empty space for grid alignment */
       
        button.connect { background: #28a745; color: white; border: none; padding: 12px; border-radius: 8px; width: 90%; font-size: 16px; cursor: pointer; }
        button.disconnect { background: #dc3545; }
        .status { color: #aaa; font-size: 14px; margin: 10px 0 25px 0; }
    </style>
</head>
<body>

<div class="panel">
    <h2>LEGO Remote Control</h2>
   
    <!-- Connection Status Toggle -->
    <button id="connectBtn" class="connect" onclick="connectHub()">🔌 Connect to Hub</button>
    <div id="statusText" class="status">Disconnected</div>

    <!-- Directional Pad Controls -->
    <div class="controls-grid">
        <div class="spacer"></div>
        <button class="drive-btn"
                onmousedown="sendCommand('FORWARD')" onmouseup="sendCommand('RELEASE')"
                ontouchstart="sendCommand('FORWARD')" ontouchend="sendCommand('RELEASE')">⬆️</button>
        <div class="spacer"></div>

        <button class="drive-btn"
                onmousedown="sendCommand('LEFT')" onmouseup="sendCommand('RELEASE')"
                ontouchstart="sendCommand('LEFT')" ontouchend="sendCommand('RELEASE')">⬅️</button>
        <div class="spacer"></div>
        <button class="drive-btn"
                onmousedown="sendCommand('RIGHT')" onmouseup="sendCommand('RELEASE')"
                ontouchstart="sendCommand('RIGHT')" ontouchend="sendCommand('RELEASE')">➡️</button>

        <div class="spacer"></div>
        <button class="drive-btn"
                onmousedown="sendCommand('BACKWARD')" onmouseup="sendCommand('RELEASE')"
                ontouchstart="sendCommand('BACKWARD')" ontouchend="sendCommand('RELEASE')">⬇️</button>
        <div class="spacer"></div>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
