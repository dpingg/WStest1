"use strict";
var connection = null;


function connect() {
  var serverUrl = "ws://localhost:7681";

  connection = new WebSocket(serverUrl);
  connection.binaryType = "arraybuffer";

  connection.onopen = function(evt) {
    console.log("ONOPEN connection");
  };


  connection.onerror = function(evt) {
    console.log("ONOPEN onerror ", evt.error);
      console.error("WebSocket error observed:", JSON.stringify(evt));

  };

  connection.onclose = function(evt) {
    console.log("onclose ", JSON.stringify(evt));
   //   console.error("WebSocket error observed:", JSON.stringify(evt));

  };

  connection.onmessage = function(evt) {
      console.log("server -> client, length: " + evt.data.byteLength);


     var bytes = new Int8Array(evt.data) ;
     console.log("js bytes[0]=" + bytes[0]);
    // var maxLen = evt.data.byteLength / 4 * 3;


     var start = evt.data.byteLength /2
     var end = evt.data.byteLength;
       for (let i = start; i < end; i++) {
         bytes[i] = 128;
       }
     console.log("js bytes[1]=" + bytes[1]);


    connection.send(bytes.buffer);
   //  console.log("bytes[1]=" + bytes[1]);
     //     console.log("bytes[size - 1]=" + bytes[evt.data.byteLength-1]);
   // setTimeout(function() { connection.send(evt.data); }, 100);
     //  console.log("bufferedAmount " + connection.bufferedAmount)


  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function send(size) {
  var bytes = new Uint8Array( size );
  for (var i=0; i<size; i++) {
      bytes[i] = getRandomInt(128);
    }

     console.log("bytes[0]=" + bytes[0]);
     console.log("bytes[1]=" + bytes[1]);
     console.log("bytes[size-1]=" + bytes[size-1]);

   console.log("***SEND");
  connection.send(bytes.buffer);
}
