# Gimkit Hacks

## READ BEFORE USING

To use this exploit, you have to make it a bookmarklet since gimkit patched it.
To make it into a bookmarklet:

1: Create a bookmark of a random page.<br>
2: Right click on the bookmark, select `Edit`.<br>
3: Type `javascript:` and paste the exploit.<br>

[bookmarklet.webm](https://user-images.githubusercontent.com/63729314/233235721-386463e0-0261-4c83-b52f-225f814ae74a.webm)

#### For exploit.js

1: Click on the bookmarklet BEFORE the page loads (IMPORTANT).<br>
2: If the dialog box says `Started.` you can continue to step 4, if it says `Refresh and try again.` Continue to step 3.<br>
3: Refresh (`CTRL`+`SHIFT`+`R`) the page and click the bookmarklet as fast as possible. Continue to step 2.<br>
4: Answer a question, then press `;` (Make sure its right or you lose money).<br>
5: Press `u` to simulate answering a question.<br>

#### For exploit-auto.js

1: Click on the bookmarklet BEFORE the page loads (IMPORTANT).<br>
2: If the dialog box says `Started.` you can continue to step 4, if it says `Refresh and try again.` Continue to step 3.<br>
3: Refresh (`CTRL`+`SHIFT`+`R`) the page and click the bookmarklet as fast as possible. Continue to step 2.<br>
4: Answer a question, then press `;` (Make sure its right or you lose money)<br>
5: Press `u` to toggle on or off<br>

[exploiting.webm](https://user-images.githubusercontent.com/63729314/233236594-09ef5a52-5af4-4fff-bfdb-9d7f58449666.webm)


## You might get kicked if you answer too fast.
I am not responsible for you getting kicked or getting in trouble for using these.

## How it works
~~nerd~~ 
Gimkit uses websockets to transfer data between the client and the server. Think of websockets as a tunnel, data can go from the client to the server or the server to the client.<br>
What this hack does is intercept the data being transferred, records it, and lets it continue to the server.<br>
When you press `u`, the client sends the saved data directly to the server via the websocket. If the saved data is a correct answer, it will trick the server into giving you money.<br>

###### discord server at https://discord.gg/ns96amHPrD
