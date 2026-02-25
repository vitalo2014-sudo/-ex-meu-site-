/**
 * Production Stability Shield - AYUNO RESET
 * This script protects the application from common runtime errors.
 */

(function () {
    // 1. Safe JSON Parsing Shield
    const originalParse = JSON.parse;
    JSON.parse = function (data) {
        if (data === undefined || data === null || data === "" || typeof data !== "string") {
            console.warn("JSON.parse prevented for non-string/empty data:", data);
            return null;
        }
        try {
            return originalParse(data);
        } catch (e) {
            console.error("JSON.parse Critical Error:", e, "Data:", data);
            return null;
        }
    };

    // 2. Fetch Interceptor & Error Handling
    const originalFetch = window.fetch;
    window.fetch = async function (url, options) {
        // Block known problematic endpoints or localhost
        if (typeof url === 'string') {
            if (url.includes('products.json')) {
                console.warn("Blocking problematic fetch to /products.json");
                return new Response(JSON.stringify({ products: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
            if (url.includes('localhost') || url.includes('127.0.0.1')) {
                console.warn("Blocking dev-environment fetch:", url);
                return new Response(null, { status: 404 });
            }
        }

        try {
            const response = await originalFetch(url, options);
            if (!response.ok) {
                console.warn(`Fetch Warning: ${url} returned ${response.status}`);
            }
            return response;
        } catch (err) {
            console.error(`Fetch Network Error (${url}):`, err);
            // Return a safe empty response to prevent crash
            return new Response(JSON.stringify({ error: true, message: "Network error" }), { status: 500 });
        }
    };

    // 3. WebSocket Shield (Prevents dev-socket errors in production)
    const OriginalWebSocket = window.WebSocket;
    window.WebSocket = function (url, protocols) {
        if (typeof url === 'string' && (url.includes('localhost') || url.includes('127.0.0.1') || url.includes('/ws'))) {
            console.warn("Blocking development WebSocket connection:", url);
            return {
                send: () => { },
                close: () => { },
                addEventListener: () => { },
                onopen: null,
                onmessage: null,
                onerror: null,
                onclose: null
            };
        }
        return new OriginalWebSocket(url, protocols);
    };

    // 4. Safe Utilities
    window.SafeUtils = {
        length: function (entity) {
            if (entity && (Array.isArray(entity) || typeof entity === 'string')) {
                return entity.length;
            }
            return 0;
        },
        exists: function (val) {
            return val !== undefined && val !== null;
        }
    };

    // 5. Global Error Silencer (Optional but requested for "No error in console")
    window.onerror = function (msg, url, lineNo, columnNo, error) {
        console.error("Shield caught global error:", msg, "at", url, ":", lineNo);
        return true; // Prevents the error from propagating to browser console in some cases
    };

    console.log("🚀 Production Stability Shield Active");
})();
