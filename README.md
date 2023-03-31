# Gimkit Hacks

#### For exploit.js

1: Run the script<br>
2: Answer a question, then press `;` (Make sure its right or you lose money)<br>
3: Press `u` to simulate answering a question<br>

#### For exploit-auto.js

1: Run the script<br>
2: Answer a question, then press `;` (Make sure its right or you lose money)<br>
3: Press `u` to toggle on or off<br>

## You might get kicked if you answer too fast.
i am not responsible for you getting kicked or getting in trouble for using these.

## How it work
~~nerd~~ 
Gimkit uses websockets to transfer data between the client and the server. Think of websockets as a tunnel, data can go from the client to the server or the server to the client.<br>
What this hack does is intercept the data being transferred, record it, and let it continue to the server.<br>
When you press `u`, the client sends the saved data directly to the server via the websocket. If the saved data is a correct answer, it will trick the server into giving you money.
