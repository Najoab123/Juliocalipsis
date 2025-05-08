function blockBreak(e) {
    var x = e.x;
    var y = e.y;
    var z = e.z;
    var x1 = -205, y1 = 63, z1 = -34;
    var x2 = -390, y2 = 75, z2 = 146;
    if (x >= Math.min(x1, x2) && x <= Math.max(x1, x2) &&
        y >= Math.min(y1, y2) && y <= Math.max(y1, y2) &&
        z >= Math.min(z1, z2) && z <= Math.max(z1, z2))
        if (!e.player.isOp()) {
        e.setCanceled(true);
        e.player.message("¡No puedes romper bloques aquí!");
    }
}