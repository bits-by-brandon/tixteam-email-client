// ================================
// ===== Utilities ================
// ================================
module.exports = {
    generateId: function () {
        return Math.round((Math.pow(36, 8 + 1) - Math.random() * Math.pow(36, 8))).toString(36).slice(1);
    }
}