export function loadAudio(url, loader, audioArr, length, volume, offset=-1) {
    loader.load(url, function (buffer) {
        for (var i = 0; i < length; i++) {
            audioArr[i].setBuffer(buffer);
            audioArr[i].setVolume(volume);
            if (offset != -1) {
                audioArr[i].offset = offset;
            }
        }
    });
} 