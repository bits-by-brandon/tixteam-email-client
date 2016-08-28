// ================================
// ===== Uitilies ================
// ================================
module.exports = {
    generateId: function (){
        return Math.random().toString(36).substr(4, 7);
    }
}
