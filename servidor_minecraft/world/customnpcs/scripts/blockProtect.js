function blockBreak(e) {
    // Mensaje de depuración para confirmar que el script se ejecuta
    e.player.message("Script ejecutado al intentar romper un bloque!");
    
    var x = e.x;
    var y = e.y;
    var z = e.z;
    var x1 = -205, y1 = 63, z1 = -34; // Esquina 1
    var x2 = -390, y2 = 75, z2 = 146; // Esquina 2
    
    // Mensaje para mostrar las coordenadas del bloque
    e.player.message("Bloque en: " + x + ", " + y + ", " + z);
    
    // Verifica si el bloque está dentro del área protegida
    if (x >= Math.min(x1, x2) && x <= Math.max(x1, x2) &&
        y >= Math.min(y1, y2) && y <= Math.max(y1, y2) &&
        z >= Math.min(z1, z2) && z <= Math.max(z1, z2)) {
        // Verifica si el jugador NO es operador
        if (!e.player.isOp()) {
            e.setCanceled(true);
            e.player.message("¡No puedes romper bloques aquí!");
        } else {
            e.player.message("Eres operador, puedes romper bloques.");
        }
}