
function getUUID() {
    // 1 ... Generate milliseconds since the Epoch
    let dt = new Date().getTime();                

    // 2 ... Determine the base pattern for a UUID
    // FIXME ... what's the RFC and what's the pattern
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16) % 16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    }); 
    
    document.getElementById('uuid').innerHTML = uuid;
}