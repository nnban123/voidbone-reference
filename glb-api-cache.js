/* * GLB API Resilience Protocol v1.0
 * Logic: Persistent localStorage Cache with TTL
 * Target: Zero-waste API usage
 */

const SYNC_LOGIC = {
    key: 'glb_sync_data',
    ttl: 3600000, // 1 Hour

    async getRate(base = 'USD') {
        const now = Date.now();
        const cached = JSON.parse(localStorage.getItem(this.key));

        if (cached && (now - cached.timestamp < this.ttl)) {
            return cached.rates; // Logic: Use Cache
        }

        // Logic: Fetch new if expired
        const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
        const data = await res.json();
        
        localStorage.setItem(this.key, JSON.stringify({
            timestamp: now,
            rates: data.rates
        }));
        return data.rates;
    }
};
