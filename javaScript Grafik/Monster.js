function monster(x, y, a, spikes = 6, color = "green") {
    setFillColor(color);
    fillCircle(x, y, a);
    for(let w = 0; w < 180; w += 180 / spikes) {
        fillRectRoundedCenterRotate(x, y, 3*a, 0.15*a, 0.075*a, w);
    }
    //Augen
    setFillColor("red");
    fillOval(x + 0.3*a, y-0.4*a, 0.2*a, 0.3*a);
    fillOval(x - 0.3*a, y-0.4*a, 0.2*a, 0.3*a);
    setFillColor("white");
    fillOval(x + 0.3*a, y-0.3*a, 0.12*a, 0.2*a);
    fillOval(x - 0.3*a, y-0.3*a, 0.12*a, 0.2*a);
    //Mund
    setFillColor("black");
    fillPoly([
        x - a * 0.53, y + 0.2 * a, 
        x + a * 0.53, y + 0.2 * a, 
        x + a * 0.455, y + 0.7 * a,
        x - a * 0.455, y + 0.7 * a
    ])
    setFillColor("white");
    for (let b = -a * 0.45; b <= a * 0.45; b += a * 0.15) {
        y1 = y + 0.2 * a;
        x1 = x - b;
        fillTriangle(x1 - 0.08 * a, y1, x1 + 0.08 * a, y1, x1, y + 0.5 * a - 0.001 * a * Math.abs(b))
    }

    for (let b = -a * 0.375; b <= a * 0.375; b += a * 0.15) {
        y1 = y + 0.7 * a;
        x1 = x - b;
        fillTriangle(x1 - 0.08 * a, y1, x1 + 0.08 * a, y1, x1, y + 0.4 * a + 0.001 * a * Math.abs(b))
    }
}