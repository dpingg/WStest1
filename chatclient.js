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
    console.log("ONOPEN onerror ");

  };


  connection.onmessage = function(evt) {
      console.log("server -> client, length: " + evt.data.byteLength);


     var bytes = new Uint8Array(evt.data) ;
    // console.log("bytes[0]=" + bytes[0]);
   //  console.log("bytes[1]=" + bytes[1]);
     //     console.log("bytes[size - 1]=" + bytes[evt.data.byteLength-1]);

     connection.send(evt.data);


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
