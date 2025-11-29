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
    <title>دریافت کانفیگ</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
        }
        
        /* خطوط و نقطه‌های معلق */
        .floating-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }
        
        .floating-dot {
            position: absolute;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.15);
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            animation: float 20s infinite ease-in-out;
        }
        
        .floating-line {
            position: absolute;
            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
            box-shadow: 0 0 15px rgba(102, 126, 234, 0.2);
            animation: floatLine 25s infinite ease-in-out;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.1;
            }
            25% {
                transform: translate(100px, -100px) scale(1.2);
                opacity: 0.3;
            }
            50% {
                transform: translate(-50px, 150px) scale(0.8);
                opacity: 0.2;
            }
            75% {
                transform: translate(-150px, -50px) scale(1.1);
                opacity: 0.25;
            }
        }
        
        @keyframes floatLine {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.1;
            }
            25% {
                transform: translate(200px, 100px) rotate(45deg);
                opacity: 0.2;
            }
            50% {
                transform: translate(-100px, 200px) rotate(90deg);
                opacity: 0.15;
            }
            75% {
                transform: translate(150px, -100px) rotate(135deg);
                opacity: 0.2;
            }
        }
        
        .container {
            background: rgba(20, 20, 30, 0.85);
            backdrop-filter: blur(20px);
            border-radius: 25px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5),
                        0 0 0 1px rgba(102, 126, 234, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
            padding: 40px;
            max-width: 500px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 10;
            border: 1px solid rgba(102, 126, 234, 0.3);
            animation: containerFadeIn 0.8s ease-out,
                       containerGlow 3s ease-in-out infinite;
            transform: translateY(0);
            margin-top: 80px;
            margin-bottom: 100px;
        }
        
        @keyframes containerFadeIn {
            0% {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        @keyframes containerGlow {
            0%, 100% {
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5),
                            0 0 0 1px rgba(102, 126, 234, 0.2),
                            0 0 20px rgba(102, 126, 234, 0.1),
                            inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
            50% {
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5),
                            0 0 0 1px rgba(102, 126, 234, 0.4),
                            0 0 40px rgba(102, 126, 234, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
        }
        
        h1 {
            color: #ffffff;
            margin-bottom: 30px;
            font-size: 28px;
            text-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
            animation: titlePulse 2s ease-in-out infinite;
        }
        
        @keyframes titlePulse {
            0%, 100% {
                text-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
            }
            50% {
                text-shadow: 0 0 30px rgba(102, 126, 234, 0.8);
            }
        }
        
        .input-group {
            margin-bottom: 20px;
            animation: slideInUp 0.6s ease-out 0.2s both;
        }
        
        @keyframes slideInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
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
            transition: all 0.3s;
            text-align: center;
        }
        
        input[type="text"]:focus {
            outline: none;
            border-color: #667eea;
            background: rgba(30, 30, 40, 0.95);
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2),
                        0 0 20px rgba(102, 126, 234, 0.3);
            transform: scale(1.02);
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
            transition: all 0.3s;
            margin-top: 10px;
            position: relative;
            overflow: hidden;
            animation: buttonSlideIn 0.6s ease-out 0.4s both;
        }
        
        @keyframes buttonSlideIn {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        button::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        button:hover::before {
            width: 300px;
            height: 300px;
        }
        
        button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5),
                        0 0 20px rgba(102, 126, 234, 0.3);
        }
        
        button:active {
            transform: translateY(-1px);
        }
        
        button span {
            position: relative;
            z-index: 1;
        }
        
        .result {
            margin-top: 30px;
            padding: 20px;
            background: rgba(30, 30, 40, 0.6);
            border-radius: 10px;
            display: none;
            border: 1px solid rgba(102, 126, 234, 0.3);
            animation: resultFadeIn 0.5s ease-out;
        }
        
        @keyframes resultFadeIn {
            0% {
                opacity: 0;
                transform: scale(0.95);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .result.show {
            display: block;
        }
        
        .result h3 {
            color: #ffffff;
            margin-bottom: 15px;
            text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        }
        
        .config-display {
            background: rgba(20, 20, 30, 0.8);
            padding: 15px;
            border-radius: 8px;
            border: 2px solid rgba(102, 126, 234, 0.4);
            word-break: break-all;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: #e0e0e0;
            margin-top: 10px;
            box-shadow: 0 0 15px rgba(102, 126, 234, 0.2);
            transition: all 0.3s;
        }
        
        .config-display:hover {
            border-color: rgba(102, 126, 234, 0.6);
            box-shadow: 0 0 25px rgba(102, 126, 234, 0.4);
        }
        
        .error {
            color: #ff6b6b;
            margin-top: 15px;
            padding: 10px;
            background: rgba(255, 107, 107, 0.15);
            border: 1px solid rgba(255, 107, 107, 0.3);
            border-radius: 8px;
            display: none;
            animation: errorShake 0.5s ease-out;
        }
        
        @keyframes errorShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
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
            transition: all 0.3s;
            margin-top: 15px;
            display: none;
            position: relative;
            overflow: hidden;
        }
        
        .copy-btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        .copy-btn:hover::before {
            width: 300px;
            height: 300px;
        }
        
        .copy-btn.show {
            display: block;
            animation: copyBtnSlideIn 0.5s ease-out;
        }
        
        @keyframes copyBtnSlideIn {
            0% {
                opacity: 0;
                transform: translateY(10px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .copy-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(40, 167, 69, 0.4);
        }
        
        .copy-btn:active {
            transform: translateY(0);
        }
        
        .copy-btn.copied {
            background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
        }
        
        .copy-btn span {
            position: relative;
            z-index: 1;
        }
        
        /* بخش آموزش */
        .tutorial-section {
            margin-top: 40px;
            padding-top: 30px;
            animation: tutorialFadeIn 0.8s ease-out 0.6s both;
        }
        
        @keyframes tutorialFadeIn {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
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
            text-shadow: 0 0 15px rgba(102, 126, 234, 0.5);
        }
        
        .tutorial-text {
            color: #ffffff;
            font-size: 15px;
            line-height: 1.8;
            margin-bottom: 25px;
            text-align: justify;
            background: rgba(20, 20, 30, 0.4);
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
            transition: all 0.3s;
            display: inline-block;
            border-bottom: 1px solid transparent;
        }
        
        .tutorial-links a:hover {
            color: #8b9aff;
            border-bottom-color: #8b9aff;
            transform: translateX(-5px);
            text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
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
            transition: all 0.3s ease;
            border: 1px solid rgba(102, 126, 234, 0.3);
            box-shadow: 0 0 15px rgba(102, 126, 234, 0.2);
        }
        
        .github-link:hover {
            background: rgba(30, 30, 40, 0.8);
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 5px 25px rgba(102, 126, 234, 0.4);
            border-color: rgba(102, 126, 234, 0.5);
        }
        
        .github-icon {
            width: 24px;
            height: 24px;
            fill: white;
        }
        
    </style>
</head>
<body>
    <!-- خطوط و نقطه‌های معلق -->
    <div class="floating-shapes" id="floatingShapes"></div>
    
    <!-- هدر با آیکون گیتهاب -->
    <div class="header">
        <a href="https://github.com/Farzad-Ghavidel" target="_blank" rel="noopener noreferrer" class="github-link" title="GitHub">
            <svg class="github-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
    </div>
    
    <div class="container">
        <h1>🎯 دریافت کانفیگ</h1>
        
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
                برای استفاده از کانفیگ پس از وارد کردن نام خود و کپی کردن آن وارد کلاینت خود شوید و با افزودن و یا پیست کردن کانفیگ در آن محیط به آن متصل شوید و از اینترنت آزاد بهره‌مند شوید.
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
        
        // ایجاد خطوط و نقطه‌های معلق
        function createFloatingShapes() {
            const shapesContainer = document.getElementById('floatingShapes');
            const numDots = 15;
            const numLines = 8;
            
            // ایجاد نقطه‌ها
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('div');
                dot.className = 'floating-dot';
                const size = Math.random() * 8 + 4;
                dot.style.width = size + 'px';
                dot.style.height = size + 'px';
                dot.style.left = Math.random() * 100 + '%';
                dot.style.top = Math.random() * 100 + '%';
                dot.style.animationDelay = Math.random() * 20 + 's';
                dot.style.animationDuration = (Math.random() * 10 + 15) + 's';
                shapesContainer.appendChild(dot);
            }
            
            // ایجاد خطوط
            for (let i = 0; i < numLines; i++) {
                const line = document.createElement('div');
                line.className = 'floating-line';
                const length = Math.random() * 200 + 100;
                const width = Math.random() * 2 + 1;
                line.style.width = length + 'px';
                line.style.height = width + 'px';
                line.style.left = Math.random() * 100 + '%';
                line.style.top = Math.random() * 100 + '%';
                line.style.animationDelay = Math.random() * 25 + 's';
                line.style.animationDuration = (Math.random() * 10 + 20) + 's';
                shapesContainer.appendChild(line);
            }
        }
        
        // ایجاد شکل‌های معلق
        createFloatingShapes();
        
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
