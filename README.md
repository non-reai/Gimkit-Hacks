# Gimkit Hacks

(Maverick Does Tech I saw your video)

## READ BEFORE USING

To use this exploit, you have to make it a bookmarklet since gimkit patched it.
To make it into a bookmarklet:

1: Create a bookmark of a random page.<br>
2: Right click on the bookmark, select `Edit`.<br>
3: Type `javascript:` and paste the exploit.<br>
4: Click on the bookmarklet BEFORE the page loads (IMPORTANT).<br>
5: If the dialog box says `Started.` you can continue using as normal, if it says `Refresh and try again.` Continue to step 6.<br>
6: Refresh the page and click the bookmarklet as fast as possible. Continue to step 5.

#### For exploit.js

1: Run the script.<br>
2: Answer a question, then press `;` (Make sure its right or you lose money).<br>
3: Press `u` to simulate answering a question.<br>

#### For exploit-auto.js

1: Run the script<br>
2: Answer a question, then press `;` (Make sure its right or you lose money)<br>
3: Press `u` to toggle on or off<br>

## You might get kicked if you answer too fast.
I am not responsible for you getting kicked or getting in trouble for using these.

## How it works
~~nerd~~ 
Gimkit uses websockets to transfer data between the client and the server. Think of websockets as a tunnel, data can go from the client to the server or the server to the client.<br>
What this hack does is intercept the data being transferred, records it, and lets it continue to the server.<br>
When you press `u`, the client sends the saved data directly to the server via the websocket. If the saved data is a correct answer, it will trick the server into giving you money.<br>

###### discord server at https://discord.gg/ns96amHPrD
