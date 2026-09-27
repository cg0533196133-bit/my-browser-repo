document.getElementById('connect-btn').addEventListener('click', () => {
    const rawUrl = document.getElementById('ngrok-url').value.trim();
    if (!rawUrl) {
        alert('נא להזין כתובת תקינה');
        return;
    }

    // ניקוי כתובת במידה והוזן עם פרוטוקול
    const cleanHost = rawUrl.replace(/^https?:\/\//, '');
    
    // בניית הקישור ל-noVNC שרץ דרך ה-Tunnel
    // noVNC תומך בפרמטרים אוטומטיים להתחברות לשרת VNC דרך WebSocket
    const vncUrl = `https://${cleanHost}/vnc.html?host=${cleanHost}&port=443&autoconnect=true&resize=scale`;

    const iframe = document.getElementById('vnc-frame');
    iframe.src = vncUrl;
    iframe.style.display = 'block';
});
