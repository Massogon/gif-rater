class GifCountManager {
    constructor() {
        this.gifCounts = new Map();
        gifIds.forEach(gifId => this.gifCounts.set(gifId, 0));
    }

    incrementGifCount(gif) {
        let currentCount = this.gifCounts.get(gif) || 0;
        currentCount += 1;
        this.gifCounts.set(gif, currentCount);
        return currentCount;
    }

    getGifCount(gif) {
        return this.gifCounts.get(gif) || 0;
    }
}

// Enter API HERE
