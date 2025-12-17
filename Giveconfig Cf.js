// کانفیگ‌ها
const configs = [
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@173.245.59.34:2086?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点07',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@172.67.71.93:8880?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点11',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@172.64.229.25:2052?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点03',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@104.26.9.159:2095?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点10',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@104.18.45.169:8080?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点04',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@8.35.211.83:2082?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点08',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@172.64.146.197:8080?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点02',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@8.39.125.179:8880?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点09',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@104.19.45.136:2082?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点13',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@198.41.223.181:8880?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点06',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@108.162.198.89:2095?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点01',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@104.19.48.97:2086?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点14',
    'vless://12fce1cd-a8db-4023-9143-a58f1c34987c@162.159.153.134:80?encryption=none&security=none&type=ws&host=farzad.ghavidel.workers.dev&path=%2F%3Fed%3D2560#CF随机节点12'
];

// صفحه اصلی HTML
const htmlPage = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#7b2cbf">
    <link rel="icon" href="https://i.pinimg.com/1200x/bc/a2/c4/bca2c4b6409feeaea163b62dff8db92c.jpg" type="image/jpg">
    <title>دریافت کانفیگ</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #1a1a2e 100%);
            background-image: url('https://gngroup.org//admin_assets/images/blog/Advantages%20and%20Disadvantages%20of%20the%20Internet.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
        }
        
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.75);
            z-index: 0;
            pointer-events: none;
        }
        
        .container {
            background: rgba(20, 20, 30, 0.25);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-radius: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2),
                        0 0 0 1px rgba(102, 126, 234, 0.2);
            padding: 40px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 10;
            border: 1px solid rgba(102, 126, 234, 0.3);
            animation: containerFadeIn 0.4s ease-out;
            transform: translateY(0);
            margin-top: 80px;
            margin-bottom: 100px;
        }
        
        @keyframes containerFadeIn {
            0% {
                opacity: 0;
                transform: translateY(10px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        h1 {
            color: #ffffff;
            margin-bottom: 30px;
            font-size: 28px;
            text-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
        }
        
        .input-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
            color: #e0e0e0;
            font-size: 16px;
            font-weight: 600;
        }
        
        input[type="text"] {
            width: 100%;
            padding: 15px;
            background: rgba(30, 30, 40, 0.8);
            border: 2px solid rgba(102, 126, 234, 0.3);
            border-radius: 10px;
            font-size: 16px;
            color: #ffffff;
            transition: border-color 0.2s, background 0.2s;
            text-align: center;
        }
        
        input[type="text"]:focus {
            outline: none;
            border-color: #667eea;
            background: rgba(30, 30, 40, 0.95);
            box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.15);
        }
        
        button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s, transform 0.2s;
            margin-top: 10px;
        }
        
        button:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        .result {
            margin-top: 30px;
            padding: 20px;
            background: rgba(30, 30, 40, 0.3);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 10px;
            display: none;
            border: 1px solid rgba(102, 126, 234, 0.3);
            animation: resultFadeIn 0.3s ease-out;
        }
        
        @keyframes resultFadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        
        .result.show {
            display: block;
        }
        
        .result h3 {
            color: #ffffff;
            margin-bottom: 15px;
        }
        
        .config-display {
            background: rgba(20, 20, 30, 0.4);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 15px;
            border-radius: 8px;
            border: 2px solid rgba(102, 126, 234, 0.4);
            word-break: break-all;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: #e0e0e0;
            margin-top: 10px;
            transition: border-color 0.2s;
        }
        
        .config-display:hover {
            border-color: rgba(102, 126, 234, 0.6);
        }
        
        .error {
            color: #ff6b6b;
            margin-top: 15px;
            padding: 10px;
            background: rgba(255, 107, 107, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 107, 107, 0.3);
            border-radius: 8px;
            display: none;
            animation: resultFadeIn 0.3s ease-out;
        }
        
        .error.show {
            display: block;
        }
        
        .info {
            color: #b0b0b0;
            font-size: 14px;
            margin-top: 20px;
        }
        
        .copy-btn {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s, transform 0.2s;
            margin-top: 15px;
            display: none;
        }
        
        .copy-btn.show {
            display: block;
            animation: resultFadeIn 0.3s ease-out;
        }
        
        .copy-btn:hover {
            opacity: 0.9;
            transform: translateY(-1px);
        }
        
        .copy-btn:active {
            transform: translateY(0);
        }
        
        .copy-btn.copied {
            background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
        }
        
        /* بخش آموزش */
        .tutorial-section {
            margin-top: 40px;
            padding-top: 30px;
        }
        
        .tutorial-section hr {
            border: none;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
            margin-bottom: 25px;
        }
        
        .tutorial-title {
            color: #ffffff;
            font-size: 22px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .tutorial-text {
            color: #ffffff;
            font-size: 15px;
            line-height: 1.8;
            margin-bottom: 25px;
            text-align: justify;
            background: rgba(20, 20, 30, 0.25);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .tutorial-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .tutorial-links li {
            margin-bottom: 15px;
            color: #ffffff;
        }
        
        .tutorial-links a {
            color: #667eea;
            text-decoration: none;
            font-size: 16px;
            transition: color 0.2s;
            display: inline-block;
            border-bottom: 1px solid transparent;
        }
        
        .tutorial-links a:hover {
            color: #8b9aff;
            border-bottom-color: #8b9aff;
        }
        
        /* فوتر */
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            text-align: center;
            color: #808080;
            font-size: 14px;
            border-top: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        /* هدر با آیکون گیتهاب */
        .header {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 100;
        }
        
        .github-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: rgba(20, 20, 30, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 50%;
            color: white;
            text-decoration: none;
            transition: opacity 0.2s, transform 0.2s;
            border: 1px solid rgba(102, 126, 234, 0.3);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        
        .github-link:hover {
            background: rgba(30, 30, 40, 0.8);
            opacity: 0.9;
            transform: scale(1.05);
        }
        
        .github-icon {
            width: 24px;
            height: 24px;
            fill: white;
        }
        
    </style>
</head>
<body>
    <!-- هدر با آیکون گیتهاب -->
    <div class="header">
        <a href="https://github.com/Farzad-Ghavidel" target="_blank" rel="noopener noreferrer" class="github-link" title="GitHub">
            <svg class="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
    </div>
    
    <div class="container">
        <h1>دریافت کانفیگ</h1>
        
        <div class="input-group">
            <label for="userName">لطفاً نام خود را وارد کنید:</label>
            <input type="text" id="userName" placeholder="نام شما..." autocomplete="off">
        </div>
        
        <button id="getConfigBtn" onclick="getConfig()"><span>دریافت کانفیگ</span></button>
        
        <div class="result" id="result">
            <h3>✅ کانفیگ شما:</h3>
            <div class="config-display" id="configDisplay"></div>
            <div class="info" id="configInfo"></div>
            <button class="copy-btn" id="copyBtn" onclick="copyConfig()"><span>📋 کپی کانفیگ</span></button>
        </div>
        
        <div class="error" id="error"></div>
        
        <!-- بخش آموزش استفاده -->
        <div class="tutorial-section">
            <hr>
            <h2 class="tutorial-title">📚 آموزش استفاده</h2>
            <p class="tutorial-text">
                برای استفاده از کانفیگ پس از وارد کردن نام خود و کپی کردن آن وارد کلاینت‌های V2Ray خود شوید و با افزودن و یا پیست کردن کانفیگ در آن محیط به آن متصل شوید و از اینترنت آزاد بهره‌مند شوید.
            </p>
            <ul class="tutorial-links">
                <li>اگر اندروید هستید <a href="https://github.com/v2ray/v2ray-core/releases" target="_blank" rel="noopener noreferrer">V2ray</a></li>
                <li>اگر iOS هستید <a href="https://apps.apple.com/app/streisand/id6450534064" target="_blank" rel="noopener noreferrer">Streisand</a></li>
                <li>اگر ویندوز هستید <a href="https://github.com/2dust/v2rayN/releases" target="_blank" rel="noopener noreferrer">v2ray Windows</a></li>
            </ul>
        </div>
        
        <!-- فوتر -->
        <div class="footer">
            طراحی شده توسط فرزاد قوی دل
        </div>
    </div>
    
    <script>
        const userNameInput = document.getElementById('userName');
        const getConfigBtn = document.getElementById('getConfigBtn');
        const resultDiv = document.getElementById('result');
        const configDisplay = document.getElementById('configDisplay');
        const configInfo = document.getElementById('configInfo');
        const errorDiv = document.getElementById('error');
        const copyBtn = document.getElementById('copyBtn');
        let currentConfig = '';
        
        // اجازه دادن به Enter برای دریافت کانفیگ
        userNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                getConfig();
            }
        });
        
        async function getConfig() {
            const userName = userNameInput.value.trim();
            
            if (!userName) {
                showError('لطفاً نام خود را وارد کنید!');
                return;
            }
            
            // غیرفعال کردن دکمه و ورودی
            getConfigBtn.disabled = true;
            userNameInput.disabled = true;
            getConfigBtn.textContent = 'در حال دریافت...';
            hideError();
            
            try {
                const response = await fetch('/get-config', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: userName })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    currentConfig = data.config;
                    configDisplay.textContent = currentConfig;
                    configInfo.textContent = 'نام کانفیگ: ' + data.configName;
                    resultDiv.classList.add('show');
                    copyBtn.classList.add('show');
                    userNameInput.value = '';
                } else {
                    showError(data.message || 'خطا در دریافت کانفیگ');
                }
            } catch (error) {
                showError('خطا در ارتباط با سرور');
                console.error('Error:', error);
            } finally {
                // فعال کردن مجدد دکمه و ورودی
                getConfigBtn.disabled = false;
                userNameInput.disabled = false;
                getConfigBtn.textContent = 'دریافت کانفیگ';
                userNameInput.focus();
            }
        }
        
        function showError(message) {
            errorDiv.textContent = message;
            errorDiv.classList.add('show');
            resultDiv.classList.remove('show');
        }
        
        function hideError() {
            errorDiv.classList.remove('show');
        }
        
        async function copyConfig() {
            if (!currentConfig) {
                showError('کانفیگی برای کپی وجود ندارد!');
                return;
            }
            
            try {
                await navigator.clipboard.writeText(currentConfig);
                copyBtn.textContent = '✅ کپی شد!';
                copyBtn.classList.add('copied');
                
                setTimeout(() => {
                    copyBtn.textContent = '📋 کپی کانفیگ';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                // روش جایگزین برای مرورگرهای قدیمی
                const textArea = document.createElement('textarea');
                textArea.value = currentConfig;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    copyBtn.textContent = '✅ کپی شد!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.textContent = '📋 کپی کانفیگ';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                } catch (err2) {
                    showError('خطا در کپی کردن کانفیگ');
                }
                document.body.removeChild(textArea);
            }
        }
        
        // فوکوس خودکار روی ورودی
        userNameInput.focus();
    </script>
</body>
</html>
`;

// تابع برای hash کردن رشته
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// تابع برای دریافت IP کاربر
function getClientIP(request) {
    const cfConnectingIP = request.headers.get('CF-Connecting-IP');
    if (cfConnectingIP) return cfConnectingIP;
    
    const xForwardedFor = request.headers.get('X-Forwarded-For');
    if (xForwardedFor) return xForwardedFor.split(',')[0].trim();
    
    return 'unknown';
}

// تابع برای ارسال به Discord webhook
async function sendToDiscord(userName) {
    const webhookUrl = 'https://discord.com/api/webhooks/1444393626120753253/YLNLa_30FhI04ow4vQp3hqf8owLPlo6sx7c-IVQHkkujPTOIdm1C1u-muGb_kfzmOxVk';
    
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: userName
            })
        });
        
        if (!response.ok) {
            console.error('Discord webhook failed:', response.status, response.statusText);
        }
    } catch (error) {
        // در صورت خطا، ساکت بمان (ارسال webhook نباید روی عملکرد اصلی تأثیر بگذارد)
        console.error('Discord webhook error:', error);
    }
}

// تابع اصلی برای توزیع کانفیگ
async function assignConfig(request, event) {
    const env = event.env || {};
    const clientIP = getClientIP(request);
    const body = await request.json();
    const userName = body?.name?.trim();
    
    if (!userName) {
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'لطفاً نام خود را وارد کنید!' 
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400
        });
    }
    
    // ارسال نام به Discord webhook (بدون انتظار برای پاسخ)
    event.waitUntil(sendToDiscord(userName));
    
    // استفاده از KV Store برای ذخیره اطلاعات
    // اگر KV تنظیم نشده باشد، از روش hash-based استفاده می‌کنیم
    let userData = null;
    let currentIndex = 0;
    
    if (env.CONFIG_STORE) {
        // استفاده از KV Store
        const ipKey = 'ip:' + clientIP;
        const counterKey = 'global:counter';
        
        // بررسی اینکه آیا این IP قبلاً کانفیگ گرفته یا نه
        userData = await env.CONFIG_STORE.get(ipKey, 'json');
        
        if (userData) {
            return new Response(JSON.stringify({
                success: true,
                config: userData.config,
                configName: userData.configName
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }
        
        // دریافت counter فعلی
        const counterData = await env.CONFIG_STORE.get(counterKey, 'json') || { index: 0 };
        currentIndex = counterData.index;
        
        // اگر همه کانفیگ‌ها توزیع شدند، از اول شروع کن
        if (currentIndex >= configs.length) {
            currentIndex = 0;
        }
        
        // دریافت کانفیگ فعلی
        const configString = configs[currentIndex];
        const [config] = configString.split('#');
        
        // ساخت کانفیگ با نام کاربر (بعد از آخرین #)
        const finalConfig = config + '#' + userName;
        
        // ذخیره اطلاعات کاربر
        await env.CONFIG_STORE.put(ipKey, JSON.stringify({
            configIndex: currentIndex,
            name: userName,
            config: finalConfig,
            configName: userName
        }));
        
        // افزایش counter
        currentIndex++;
        if (currentIndex >= configs.length) {
            currentIndex = 0;
        }
        await env.CONFIG_STORE.put(counterKey, JSON.stringify({ index: currentIndex }));
        
        return new Response(JSON.stringify({
            success: true,
            config: finalConfig,
            configName: userName
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        // روش hash-based (بدون نیاز به KV)
        // استفاده از hash IP برای انتخاب کانفیگ
        const ipHash = hashString(clientIP);
        const configIndex = ipHash % configs.length;
        
        const configString = configs[configIndex];
        const [config] = configString.split('#');
        
        // ساخت کانفیگ با نام کاربر (بعد از آخرین #)
        const finalConfig = config + '#' + userName;
        
        return new Response(JSON.stringify({
            success: true,
            config: finalConfig,
            configName: userName
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Event Listener برای Cloudflare Workers
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request, event));
});

async function handleRequest(request, event) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Route برای صفحه اصلی
    if (path === '/' && request.method === 'GET') {
        return new Response(htmlPage, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
    }
    
    // Route برای دریافت کانفیگ
    if (path === '/get-config' && request.method === 'POST') {
        return await assignConfig(request, event);
    }
    
    // Route برای مشاهده وضعیت (اختیاری)
    if (path === '/status' && request.method === 'GET') {
        const env = event.env || {};
        if (env.CONFIG_STORE) {
            // اگر KV Store موجود باشد، اطلاعات را برگردان
            const counterData = await env.CONFIG_STORE.get('global:counter', 'json') || { index: 0 };
            return new Response(JSON.stringify({
                totalConfigs: configs.length,
                currentIndex: counterData.index,
                message: 'برای مشاهده لیست کامل، از KV Store استفاده کنید'
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            return new Response(JSON.stringify({
                totalConfigs: configs.length,
                message: 'KV Store تنظیم نشده است. از روش hash-based استفاده می‌شود.'
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
    
    // 404 برای مسیرهای دیگر
    return new Response('Not Found', { status: 404 });
}
