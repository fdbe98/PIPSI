module.exports = function(RED) {
    var  ws = require("ws");
    function myWebsocket(config) {
        RED.nodes.createNode(this,config);

        var wsURI = config.url;
        var subprotocol = config.subprotocol;
	
        var connection = this;
        function sendmsg(texto){
            connection.send(texto);
        }
        
        function init(){
            var socket = new ws(wsURI,subprotocol);

            var msg = {payload:"INICIADO"};
            sendmsg(msg);
            handleConnection(socket);
        }
        function handleConnection(socket){
            socket.onopen = onOpen;
            socket.onmessage = onMessage;
            socket.onclose = onClose;
	    socket.onerror = onError;
        }
        function onClose(event){
            connection.status({
                fill : "red",
                shape : "ring",
                text : "disconnected"
            });
        }
	function onError(event){
	    var msg = "Connection Error :(";
	    sendmsg(msg);
            connection.status({
                fill : "red",
                shape : "ring",
                text : "error"
            });
	}
        function onOpen(event){
	    connection.status({
                fill : "green",
                shape : "dot",
                text : "connected"
            });
            var msg = "ABIERTO";
            sendmsg(msg);
        }
        function onMessage(event){
            var msg = {payload : event.data};
            sendmsg(msg);
        }
	init();
	
        
    }
    RED.nodes.registerType("myWebsocket",myWebsocket);
}
