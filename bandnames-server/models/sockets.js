const BandList = require('./band-list');

class Sockets {
    constructor(io) {
        this.io = io;
        this.bandList = new BandList
        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado: ');
            socket.emit('current-bands', this.bandList.getBands());

            socket.on('vote-band', (id) => {
                this.bandList.increaseVotes(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('delete-band', (id) => {
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('change-band-name', ({ id, name }) => {
                this.bandList.changeBandName(id, name);
                this.io.emit('current-bands', this.bandList.getBands());
            });

            socket.on('new-band', (name) => {
                this.bandList.addBand(name);
                this.io.emit('current-bands', this.bandList.getBands());
            });
        });
        
    }
}

module.exports = Sockets;