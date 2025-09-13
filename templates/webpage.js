function startTracking() {
    // Start the eye tracker
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        var x = data.x; // x coordinates
        var y = data.y; // y coordinates
        console.log(x, y); // You can use these coordinates to do something
    }).begin();

    // Set up webcam feed
    webgazer.showVideo(true);
}