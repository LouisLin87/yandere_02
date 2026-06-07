/**
 * 病嬌學長陳昇：15日深淵監禁遊戲 (極致戀愛封面 + 20秒歸零驚喜版)
 */

let currentStage = 0;
let hearts = 3; 
let san = 100; 
let yandereTypeTimer = null; 
let isTyping = false; 
let userPlatform = "未知系統";
let surpriseTimeout = null;

// 音效資源定義
const soundCrack     = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav'); 
const soundBleep     = new Audio('https://assets.mixkit.co/active_storage/sfx/1625/1625-84.wav'); 
const soundHeart     = new Audio('https://assets.mixkit.co/active_storage/sfx/1395/1395-84.wav'); 
const soundScary     = new Audio('https://assets.mixkit.co/active_storage/sfx/2504/2504-84.wav'); 
const soundIOSNotify = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg'); 
const soundUnlock    = new Audio('https://assets.mixkit.co/active_storage/sfx/2566/2566-84.wav'); 
const soundFaceTime  = new Audio('https://assets.mixkit.co/active_storage/sfx/1360/1360-84.wav'); 
const soundAndroidTap= new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-84.wav'); 

soundScary.loop = true;
soundHeart.loop = true;

// 跨平台行動端辨識 (iOS / Android 完美兼容)
function detectPlatform() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        userPlatform = "iOS Secure OS";
    } else if (/android/i.test(ua)) {
        userPlatform = "Android Engine";
    } else {
        userPlatform = "Core System";
    }
}

// 每秒同步第四頁頂部標題：目前位置、定位狀態、即時時間
function updateDynamicTrackerTitle() {
    const trackerEl = document.getElementById('dynamic-tracker-title');
    if (!trackerEl) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
    
    // 完美替換標題，呈現黑客全方位動態追蹤感
    trackerEl.innerHTML = `📍 監控位置：山區別墅| 裝置定位：<span style="color:#00ff66;">${userPlatform}</span> | 核心時間：<span style="color:#ff3355;">${timeStr}</span>`;
}

// 時鐘驅動
function startClock() {
    setInterval(() => {
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        const elements = document.querySelectorAll('.liveTimeDisplay');
        elements.forEach(el => el.innerText = timeStr);
        
        updateDynamicTrackerTitle();
    }, 5000);
}

const targetTextLines = [
    "..........................................................\n",
    "ALERT: 檢測到非授權行動裝置強行進入...\n",
    "..........................................................\n",
    "[核心指令：CHEN_SHENG_SYSTEM 啟動]\n",
    "同步前置鏡頭~讀取相簿隱私~追蹤全日 GPS 定位...\n\n",
    "// 寶~換了新手機就不接我的電話，這是不對的...\n\n"
];

const yandereScriptData = {
    'A': "陳昇微微瞇起眼，有些無奈地嘆了口氣，語氣依舊溫柔：又在反抗我了呢，寶~沒關係，天才的演算法最不缺的就是耐心，我會修正妳所有的錯誤代碼.🌹\n\n",
    'B': "陳昇滿意地笑了，鏡片後的雙眼閃爍著溺愛的光芒，伸手揉了揉妳的秀髮：『這才乖。妳看，順從我的邏輯，妳就不會受傷，這不是最完美的最佳解嗎？\n\n",
    'C': "陳昇眼露愛心，精緻的臉龐泛起一絲狂熱而病態的潮紅：啊...妳在依賴我...妳終於發現這個世界上只有我是真心對妳好了。真想把妳的意識永遠格式化，只留下我的名字.🌹\n\n",
    'D': "他死死盯著妳冷淡而充滿戒備的眼睛，著迷般地低喃：就是這個抗拒我的眼神...沒關係，就算妳恨我，妳的餘生也只能活在我編織的網裡.🌹\n\n"
};

// 阻斷右鍵與瀏覽器彈出攔截
document.addEventListener('contextmenu', e => e.preventDefault());

function lockNavigation() {
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function () {
        window.history.pushState(null, null, window.location.href);
        try { 
            soundScary.pause();
            soundHeart.play().catch(()=>{}); 
            soundIOSNotify.play().catch(()=>{}); 
        } catch(e){}
        alert("陳昇：「關掉網頁？封鎖我？寶，妳的手機系統早就屬於我了，妳逃去哪裡，我都在看著妳喔.🌹」");
    });
}

// 階段一：點擊粉紅封面解鎖
function unlockCover() {
    try { soundUnlock.play().catch(()=>{}); } catch(e){}
    const cover = document.getElementById('coverScreen');
    const ageGate = document.getElementById('ageGateScreen');
    if (cover) cover.style.display = 'none';
    if (ageGate) ageGate.style.display = 'flex';
    lockNavigation(); 
}

// 階段二：年齡驗證過關
function enterHackerTerminal() {
    try {
        soundCrack.play().catch(()=>{}); 
        soundScary.play().catch(()=>{});
        soundIOSNotify.play().catch(()=>{}); 
    } catch(e){}

    const ageGate = document.getElementById('ageGateScreen');
    const pageTwo = document.getElementById('pageTwoContainer');
    if (ageGate) ageGate.classList.add('shake-effect');

    setTimeout(() => {
        if (ageGate) ageGate.style.display = 'none';
        if (pageTwo) {
            pageTwo.style.display = 'flex';
            startPageTwoAnimation();  
        } else {
            skipToGame();
        }
    }, 320);
}

function startPageTwoAnimation() {
    const textContainer = document.getElementById('terminalText');
    if (!textContainer) { skipToGame(); return; }
    let glitchCount = 0;
    const glitchChars = "☠☣⚡0123456789X💓";
    
    let glitchInterval = setInterval(() => {
        let randomGlitchStr = "";
        for (let i = 0; i < 30; i++) {
            randomGlitchStr += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
        }
        textContainer.innerHTML = `<span class="glitch-code">${randomGlitchStr}</span>`;
        glitchCount++;

        if (glitchCount > 8) {
            clearInterval(glitchInterval);
            textContainer.innerHTML = ""; 
            executeTypewriter(0, 0);
        }
    }, 60);
}

function executeTypewriter(lineIdx, charIdx) {
    const textContainer = document.getElementById('terminalText');
    if (!textContainer) return;
    
    if (lineIdx < targetTextLines.length) {
        const currentLineText = targetTextLines[lineIdx];
        if (charIdx < currentLineText.length) {
            const currentChar = currentLineText.charAt(charIdx);
            textContainer.innerHTML += currentChar;
            if(currentChar !== '\n' && currentChar !== '.') {
                try { soundBleep.play().catch(()=>{}); } catch(e){}
            }
            setTimeout(() => { executeTypewriter(lineIdx, charIdx + 1); }, 30);
        } else {
            setTimeout(() => { executeTypewriter(lineIdx + 1, 0); }, 100);
        }
    } else {
        try { soundFaceTime.play().catch(()=>{}); } catch(e){} 
        textContainer.innerHTML += `\n[SYSTEM] 權限完全奪取。正在繞過 OS 核心防禦...\n[INFO] 定位追蹤完成——「看見妳了喔，真可愛.🌹」\n[WARNING] 天才大腦「陳昇」已全面支配妳的通訊系統。\n\n「學妹，我說過...我們永遠不要分開的，對吧？ 呵呵.🌹」\n\n<span style="color:#ff3355; font-weight:bold; animation: blink 1s infinite;">[定位綁定成功，空間重組中...]</span>`;
        
        setTimeout(() => { skipToGame(); }, 8000);
    }
}

function skipToGame() {
    const pageTwo = document.getElementById('pageTwoContainer');
    if (pageTwo) pageTwo.style.display = 'none';
    
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.style.display = 'flex';
        initGame();
    }
}

// 15日故事文本劇本
const scriptData = [
    {
        story: "【第 1 關】妳在潔淨的陌生房間醒來，門被牢牢鎖死。窗戶卻異常地留了一條縫隙..妳心中一喜，費盡力氣翻窗逃了出去~然而，當妳氣喘吁吁地衝到別墅外唯一的聯外道路時，卻徹底僵住了——門外竟然大喇喇地停著陳昇學長的『第二台車』。車窗緩緩降下，他戴著黑框眼鏡，單手搭在方向盤上，對著震驚的妳溫柔微笑：『數據顯示，妳在密閉空間的翻窗機率是 67%。山區山路很陡，我特地開這台底盤高一點的車在窗外等妳。上車吧，寶貝，我們回家.🌹』",
        A: "學長？為什麼...你連我會翻窗都知道？！放我下去！", 
        B: "對不起學長...我知道錯了，別生我的氣，我跟你回去...", 
        C: "學長算得真準，原來你一直在車裡等我，有你在我就安心了", 
        D: "默默走回車內坐好，暗中記下這條路的環境與他的車鑰形狀",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-15}, C: {h:1, s:-30}, D: {h:-1, s:5} }
    },
    {
        story: "【第 2 關】床上的薄荷香依舊好聞。他提著妳最愛吃的那家排隊名店的草莓鬆餅，伸手撥開妳額前的碎髮：累壞了吧？昨晚妳睡得不太安穩，翻身了 14 次，中途醒來發呆了 3 分 22秒。是不是床墊不習慣？我今天讓人換成妳租屋處慣用的那款規格.🌹",
        A: "你竟然連我睡覺都在監控？把妳的那些針孔全部拆掉！", 
        B: "謝謝學長的貼心...連我睡不好都注意到了...", 
        C: "慢著，只要學長在身邊，就算睡在地板上，我的數據也是最幸福的", 
        D: "不發一語，開始在房間各個角落推算監控鏡頭的死角。",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-15}, C: {h:1, s:-30}, D: {h:0, s:5} }
    },
    {
        story: "【第 3 關】午後，陳昇坐在落地窗前一邊看著複雜的代碼，一邊細心地幫妳削著蘋果~他切下一塊遞到妳嘴邊，眼神清澈卻專注：寶寶，外面的世界太吵了。妳看!妳昨晚 23:17 在陽台站了 4 分鐘，心跳速度是每分鐘 94 下，數據顯示妳當時很焦慮。我只是想幫妳把那些讓妳焦慮的雜訊全部過濾掉。在這裡，妳只需要看著我.🌹",
        A: "拍掉他遞過來的蘋果：「把這種令人窒息的控制慾包裝成關心，你真讓我作嘔！", 
        B: "有些頭皮發麻，但看著他那張精緻的臉，只能勉強張口吃下蘋果", 
        C: "數據是不會騙人的。學長，以後我的心跳，全都交給你來記錄", 
        D: "接過蘋果自己咬著一口：學長，大數據能算出我現在在想什麼嗎？",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-15}, C: {h:1, s:-30}, D: {h:0, s:5} }
    },
    {
        story: "【第 4 關】深夜，陳昇在廚房忙碌。妳在客廳的玄關桌上，意外看見了他大衣口袋裡滑落的別墅大門鑰匙。妳按耐住狂跳的心臟，偷偷將鑰匙藏進袖口。等到深夜四下無人，妳輕手輕腳摸到大門前，將鑰匙插進鎖孔——可鑰匙卻毫無阻力地瘋狂空轉。此時，身後的走廊燈光亮起，陳昇穿著寬鬆的睡衣，手裡拿著兩杯熱牛奶，推了推眼鏡無奈地嘆氣：寶貝，那把鑰匙是我用 3D 列印做的假貨，故意放在桌上測試妳的。如果妳沒偷，我今晚本來打算帶妳去花園看星星的。為什麼...妳總是不聽話呢.🌹",
        A: "把假鑰匙狠狠砸向他的臉：玩弄人心讓你很有成就感嗎？天才學長?！", 
        B: "無力地靠在門板上哭泣：你根本就是個惡魔!你把我的希望當成玩具?", 
        C: "是我不對，學長.🌹我以後再也不會背著你藏東西了，把牛奶給我吧", 
        D: "將假鑰匙收進口袋，冷靜地意識到：他的習慣防備心比我想像的還要完美",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-15}, C: {h:1, s:-30}, D: {h:-1, s:10} }
    },
    {
        story: "【第 5 關】第五天，陳昇似乎走得極其匆忙，竟把備用手機和主控電腦落在了桌上。這一次妳不再相信周圍的機關，迅速拿起他的備用手機，直接按下緊急呼叫並撥通了報警電話。伴隨著聽筒裡——嘟——嘟——的等待音，妳的掌心全是冷汗。終於，電話接通了！妳正要激動大喊『救命』，聽筒另一端卻傳來一陣熟悉、優雅且毫無雜音的溫柔低笑：『您好，這裡是陳昇。寶貝，這附近的基地台演算法，都是我寫的常態過濾機制喔。妳想向誰求救呢.🌹』",
        A: "驚恐地摔掉手機，對著空無一人的房間歇斯底里地大喊：「怪物...你是個怪物...！」", 
        B: "雙腿一軟跌坐在地，內心全面防線崩潰：「為什麼...為什麼我怎麼都逃不掉...」", 
        C: "對著電話甜甜一笑：「學長果然算無遺策，連我會報警都預判到了，我認輸。」", 
        D: "對著話筒冷笑：「真不愧是天才，連警政系統的通訊攔截都能做到這步。」",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-20}, C: {h:1, s:-30}, D: {h:0, s:10} }
    },
    {
        story: "【第 6 關】天亮了。陳昇端著精緻的早餐走進來，臉上帶著得意的微笑：數據顯示，妳昨晚在電腦前猶豫了 6 分 7 秒。寶貝，妳的理智在告訴妳，外面的世界已經沒有妳的容身之處了，對吧？來，吃點草莓軟鬆餅，這是對妳留下來的獎勵.🌹",
        A: "推開盤子：「別用這種馴化動物的方式對我！我不是妳的寵物！」", 
        B: "接過叉子，機械式地吃著：「學長算得真準...」", 
        C: "「學長比我想像的更包容我.🌹在你的世界裡被馴化，好像也沒什麼不好。」", 
        D: "「我只是昨晚太累了懶得走，你少自我陶醉了。」",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-15}, C: {h:1, s:-25}, D: {h:-1, s:5} }
    },
    {
        story: "【第 7 關】下午，陳昇帶妳走進他的工作室...牆上的螢幕突然播放起一段古舊的側錄影片。影片中一個大概10歲、眼神空洞的小男孩，因為『極端孤獨症傾向』，被親生父母冷酷地簽下放棄監護權協議書。陳昇從背後環抱住妳，身體劇烈地顫抖，眼鏡後的雙眼蓄滿淚水：看啊...他們叫我天才，但他們也叫我「瑕疵品」。從小到大，除了我寫的代碼，沒有任何東西是確定的。直到大一那年，全班都把我當怪人隔離，只有妳塞給了我一片薄荷糖...那一刻我才明白，我的演算法算盡了世界但卻算不到妳。妳...會像他們一樣把我當垃圾丟掉嗎.🌹",
        A: "「這不是你綁架我的藉口！你受過傷，不代表可以轉過來傷害我！」", 
        B: "感受到了他靈魂深處的卑微與恐懼：「學長...原來你以前過得這麼痛苦...」", 
        C: "緊緊反抱住他：「原來我對你這麼重要.🌹我有你，你有我，就夠了。」", 
        D: "暗中震撼，終於找到了他行為的核心驅動力：他極度害怕再度被『拋棄』。",
        effect: { A: {h:-1, s:5}, B: {h:1, s:-15}, C: {h:1, s:-25}, D: {h:0, s:10} }
    },
    {
        story: "【第 8 關】遠方突然傳來警笛聲！似乎是警方大規模搜山的動靜。妳心中一燃，但陳昇卻氣定神閒地把一把防身電擊槍塞進妳手裡，解開了別墅所有的鎖，甚至幫妳打開了大門。他跪在妳面前，金絲眼鏡後的眼睛充滿了死寂：『外面那些警察，是我主動用虛擬 IP 引過來的。寶貝，妳只要把我擊暈，或者朝門外大喊，就能回到陽光下。一旦我倒下，關於妳的所有資料都會被格式化.🌹妳...要親手抹殺愛妳的陳昇嗎.🌹』",
        A: "毫不猶豫，拿起電擊槍直接對著他的胸口按下去！", 
        B: "扔掉電擊槍，哭著抱住他：「不要走！不要忘記我！我不會叫警察過來的！」", 
        C: "「學長在威脅我嗎？不過...恭喜你，這招對我很有效.🌹我留下。」", 
        D: "默默走到窗邊看著外面的警車離去，估算著下一次警方大搜索的時間。",
        effect: { A: {h:-1, s:5}, B: {h:0, s:-15}, C: {h:1, s:-25}, D: {h:0, s:5} }
    },
    {
        story: "【第 9 關】當晚妳發起了嚴重的急性高燒。陳昇慌得手足無措，這個天才卻只因量不出妳的耳溫而急得掉眼淚，他整晚沒睡用溫水幫妳擦拭額頭，瘋狂低喃：『不要離開我...如果妳的生命信號消失，我的系統也會跟著崩潰...🌹』",
        A: "虛弱地吐口水：「那就一起死啊...你這個瘋子...」", 
        B: "虛弱地回握他的手：「傻瓜...我沒事，只是發燒而已...」", 
        C: "「如果我死了，學長會把我的靈魂，永遠寫進你的核心代碼裡嗎？」", 
        D: "閉上眼睛假裝昏迷，暗中觀察並記下他此時防線最脆弱的心理錨點。",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-10}, C: {h:1, s:-20}, D: {h:0, s:10} }
    },
    {
        story: "【第 10 關】第十天，妳康復了。陳昇今天顯得格外安靜，他將別墅的核心伺服器主控硬碟放在妳面前，手裡拿著一把強磁破壞儀。他笑得無比淒美：『寶貝，妳覺得我是用科技在操控妳，對吧？來，按下去.🌹毀掉我的大腦、毀掉我的一切.🌹讓我相信我是真的愛妳.🌹』",
        A: "毫不猶豫按下按鈕，看著硬碟冒出黑煙，心裡無比痛快！", 
        B: "一把奪過破壞儀扔掉：你別發瘋了！我不需要你用這種方式證明！", 
        C: "反手將破壞儀對準自己的手機：如果你毀了你的心血，我也會毀掉我自己", 
        D: "溫柔地撫摸硬碟：這麼好用的工具毀掉多可惜？以後權限歸我🌹",
        effect: { A: {h:-1, s:10}, B: {h:0, s:-15}, C: {h:1, s:-25}, D: {h:1, s:0} } 
    },
    {
        story: "【第 11 關】妳的反應讓他陷入了一種虔誠的狂喜!今天，他帶妳來到別墅後方的花園，裡面竟然全部培育著大一那年妳隨手送給他的薄荷糖原料草。陳昇小心翼翼地摘下一片葉子貼在妳唇邊：『當全世界都把我當怪胎的日子裡，只有這股味道是甜的.🌹現在，我把它們種滿了整個山谷.🌹』",
        A: "隨手接過葉子扔在地上踩碎：這也是一座漂亮的監獄！放我走！", 
        B: "含住那片葉子，淚水滑落：學長...你真的好傻...", 
        C: "「既然種滿了山谷，那就在這裡建一座屬於我們兩個人的墓誌銘吧", 
        D: "默默接過葉子：大一的事情我記不清了.🌹但學長，薄荷能提神",
        effect: { A: {h:-1, s:0}, B: {h:0, s:-15}, C: {h:1, s:-25}, D: {h:0, s:5} }
    },
    {
        story: "【第 12 關】叮咚——別墅的警報器突然大作！外面的熱感應顯示有一整隊警察包圍了山頭。陳昇將妳帶進防核地道。他遞給妳一個耳機，隨後拔出一把裝滿子彈的手槍抵在自己的心臟上，歪著頭對妳微笑：『寶貝，妳只要喊一聲救命警察就會破門.🌹但我會先朝這裡開槍.🌹妳要救我，還是要自由.🌹』",
        A: "抓起耳機，用盡全身力氣對著麥克風大喊：救命！我在這！", 
        B: "死死捂住自己的嘴巴，眼淚狂流，瘋狂搖頭示意他把槍放下", 
        C: "學長，妳賭我捨不得妳死嗎？開槍吧，黃泉路上我的數據陪妳一起重組", 
        D: "接過他手裡的手槍，直接對準地道入口：誰也別想進來打擾我們",
        effect: { A: {h:-1, s:5}, B: {h:0, s:-15}, C: {h:1, s:-25}, D: {h:1, s:0} }
    },
    {
        story: "【第 13 關】因為妳在關鍵時刻的隱瞞，警方撤銷了搜山。陳昇將妳帶到全息投影的中央，那裡閃爍著一行核心代碼：`IF USER_LEAVES_ME == TRUE THEN LIFE_SIGNALS = 0;`（若妳離我而去，我的生命信號歸零）。他眼眶泛紅：這是我給自己下的靈魂死鎖.🌹我不會傷害妳...但如果世界再度退回孤獨...我會執行自我格式化.🌹",
        A: "用你自己的命來情緒勒索我，不覺得太卑鄙了嗎？！", 
        B: "看著那行代碼，內心深處的防線徹底碎裂，產生了扭曲的依賴與罪惡感", 
        C: "好美...學長，這段代碼不夠完美!!加上我的名字，成為核心鎖.🌹", 
        D: "仔細閱讀那行代碼的邏輯漏洞，尋找可以反向植入木馬的邏輯",
        effect: { A: {h:-1, s:10}, B: {h:0, s:-20}, C: {h:1, s:-30}, D: {h:0, s:5} } 
    },
    {
        story: "【第 14 關】整個別墅的電子螢幕全被調成了血紅色的玫瑰背景。陳昇換上了筆挺的黑西裝，單膝跪在妳面前。手裡捧著一枚用廢棄晶片精雕細琢而成的『晶片鑽戒』：『今晚，戴上它，成為我這台冰冷機器唯一的最高管理員.🌹或者一同化為數位的塵埃.🌹選一個吧.🌹』",
        A: "一巴掌甩在臉上，把晶片戒指拍飛！「我寧可死，也不要當你的神！」", 
        B: "乖乖伸出無名指，任由他將冰冷的晶片戴上，流下絕望的淚水。", 
        C: "主動奪過戒指自己戴上，歪著頭甜甜一笑：幫我戴上吧，老公.🌹", 
        D: "接過戒指戴上，按下了系統確認鍵：好啊.🌹這場遊戲由我當莊了.🌹",
        effect: { A: {h:-1, s:10}, B: {h:0, s:-20}, C: {h:1, s:-35}, D: {h:1, s:0} }
    },
    {
        story: "【第 15 關】第 15 天清晨。妳驚訝地發現別墅的大門竟然敞開著。陳昇不見了，字條上寫著：『門沒有鎖。這次，我絕對不會追妳。妳自由了，學妹.🌹』\n\n妳沿著大屯山路走了很久，自由就在眼前！就在妳準備求救時，口袋裡的手機突然劇烈震動：\n\n『寶貝.🌹在剛剛下山的 3 小時 14 分鐘內，妳因為不習慣失去我的監視，回頭確認別墅方向的次數...是 17次.🌹』\n\n妳僵在原地，看著眼前喧鬧的自由世界，內心那道看不見的數位鐵籠，在這一刻轟然鎖死.🌹妳赫然明白——妳，早就逃不掉了。",
        A: "（緊緊握住手機，轉過身，發瘋似地朝別墅的方向跑回去...）", 
        B: "（看著熙熙攘攘的人群，露出空洞而扭曲的微笑，低喃著他的名字...）", 
        C: "（對著手機深吸一口氣，撥通那個號碼：「學長，我自首.🌹來接我.🌹」）", 
        D: "（冷靜地看著簡訊，反手回傳一條代碼：『17次裡，有12次是在確認你的死角.🌹等著我，學長.🌹』）",
        effect: { A: {h:0, s:0}, B: {h:0, s:0}, C: {h:0, s:0}, D: {h:0, s:0} }
    }
];

function initGame() {
    currentStage = 0;
    hearts = 3; 
    san = 100;
    isTyping = false;
    if (surpriseTimeout) clearTimeout(surpriseTimeout);
    showStage();
}

function updateHeartsDisplay() {
    const stageDisplay = document.getElementById('stage-display');
    if (stageDisplay) {
        let heartStr = "";
        for (let i = 0; i < hearts; i++) heartStr += "❤️";
        for (let i = hearts; i < 3; i++) heartStr += "🖤"; 
        
        let statusText = "狀態：陳昇陷入狂喜 (眼神充滿病態的溺愛)";
        let statusColor = "#ff6584";
        
        if (san <= 0) { statusText = "警告：妳的精神全面淪陷 (理智崩潰)"; statusColor = "#ff0055"; }
        else if (hearts === 2) { statusText = "狀態：學長正在起疑 (密碼正在動態變更)"; statusColor = "#ffaa00"; }
        else if (hearts === 1) { statusText = "警告：陳昇完全瀕臨壞掉 (防線瓦解中)"; statusColor = "#ff3333"; }

        stageDisplay.innerHTML = `
            監禁進度：第 ${currentStage + 1} / 15 日 | 執念愛心：<span>${heartStr}</span> | 理智值 (SAN)：<span style="color:#55f3ff;">${san}%</span>
            <br><span style="color: ${statusColor}; font-size: 0.9rem; display: inline-block; margin-top: 4px; font-weight:bold;">${statusText}</span>
        `;
    }
}

function showStage() {
    const stage = scriptData[currentStage];
    if (!stage) return;
    
    updateHeartsDisplay(); 
    
    document.getElementById('text-A').innerText = stage.A;
    document.getElementById('text-B').innerText = stage.B;
    document.getElementById('text-C').innerText = stage.C;
    document.getElementById('text-D').innerText = stage.D;

    const optContainer = document.getElementById('options-container');
    if (optContainer) optContainer.style.display = 'none';

    runYandereTypewriter(stage.story, 15, () => {
        if (optContainer) optContainer.style.display = 'flex';
    });
}

function runYandereTypewriter(text, speed = 15, callback = null) {
    const storyTextTarget = document.getElementById('story-text');
    if (!storyTextTarget) return;

    isTyping = true; 
    if (yandereTypeTimer) clearInterval(yandereTypeTimer);
    storyTextTarget.innerHTML = ""; 

    let index = 0;
    const textNode = document.createTextNode("");
    storyTextTarget.appendChild(textNode);

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'blinking-cursor';
    cursorSpan.innerText = '_';
    storyTextTarget.appendChild(cursorSpan);

    yandereTypeTimer = setInterval(() => {
        if (index < text.length) {
            textNode.appendData(text.charAt(index));
            index++;
        } else {
            clearInterval(yandereTypeTimer);
            isTyping = false; 
            if (callback) callback(); 
        }
    }, speed); 
}

// 處理選擇
function handleChoiceSelection(choiceLetter) {
    if (isTyping) return; 

    const stage = scriptData[currentStage];
    if (!stage) return;

    try { soundAndroidTap.play().catch(()=>{}); } catch(e){} 

    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.classList.add('shake-effect');
        setTimeout(() => gameContainer.classList.remove('shake-effect'), 300);
    }

    if (stage.effect && stage.effect[choiceLetter] !== undefined) {
        let chg = stage.effect[choiceLetter];
        if (chg.h < 0) {
            hearts += chg.h;
            try { soundCrack.play().catch(()=>{}); } catch(e){}
            if (hearts <= 0) { triggerHeartBreakEnding(); return; }
        } else if (chg.h > 0 && hearts < 3) {
            hearts += chg.h;
        }
        san = Math.max(0, Math.min(100, san + chg.s));
    }

    if (currentStage === 14) { determineMultiEnding(); return; }

    const prefix = yandereScriptData[choiceLetter] || "\n\n";
    currentStage++;
    
    runYandereTypewriter(prefix + "【正在重新計算權限...載入第 " + (currentStage + 1) + " 日監禁環境】", 15, () => {
        setTimeout(() => { showStage(); }, 1500); 
    });
}

// 【核心亮點】當愛心歸零，啟動 20 秒地獄倒數，倒數完觸發全螢幕劫持驚喜並跳轉
function triggerHeartBreakEnding() {
    if (yandereTypeTimer) clearInterval(yandereTypeTimer);
    document.getElementById('options-container').style.display = 'none';
    
    let countdownSeconds = 20;
    
    function updateCountdownText() {
        const storyTarget = document.getElementById('story-text');
        if (!storyTarget) return;
        storyTarget.innerHTML = `
            <h3 style="color: #ff0000; margin-bottom: 12px; font-size:1.2rem; text-shadow:0 0 10px rgba(255,0,0,0.5);">
                【危險警告：愛心執念歸零】
            </h3>
            <p style="color: #ffcccc; line-height: 1.6; font-size:0.95rem;">
                【結局：執念的永恆標本】<br><br>
                妳極端的反抗徹底撕碎了陳昇最後的理智。他鏡片後的神色完全陷入一片死寂，狂亂地笑著：『既然妳也覺得我是個垃圾瑕疵品，想再次把我丟回黑暗裡...那我就把妳的靈魂剥離出來.🌹把妳做成最完美的標本，放在我床頭...』
            </p>
            <div style="margin-top:20px; background:rgba(255,0,50,0.15); padding:12px; border:1px dashed #ff3355; border-radius:6px; color:#fff; text-align:center; font-weight:bold; font-family:monospace;">
                🚨 偵測到本機硬體遭受強制覆寫，系統將在 <span style="color:#ff0033; font-size:1.3rem;">${countdownSeconds}</span> 秒後永久關閉。
            </div>
        `;
    }

    updateCountdownText();

    // 20秒定時器
    const countdownInterval = setInterval(() => {
        countdownSeconds--;
        if (countdownSeconds <= 0) {
            clearInterval(countdownInterval);
            // 執行驚喜劫持特效
            triggerSurpriseJumpscare();
        } else {
            updateCountdownText();
        }
    }, 1000);
}

// 爆發嚇人/驚喜畫面，並在 3.5 秒後跳回 Google
function triggerSurpriseJumpscare() {
    try {
        soundScary.currentTime = 0;
        soundScary.play().catch(()=>{});
        soundCrack.play().catch(()=>{});
    } catch(e){}

    const surpriseEl = document.getElementById('surpriseScreen');
    if (surpriseEl) {
        surpriseEl.style.display = 'flex';
    }

    // 驚喜特效持續 3.5 秒後，自動退出回 Google 
    setTimeout(() => {
        window.location.href = "https://www.google.com";
    }, 3500);
}

function determineMultiEnding() {
    if (yandereTypeTimer) clearInterval(yandereTypeTimer);
    document.getElementById('options-container').style.display = 'none';
    let title = "【結局：殘留的呼吸聲】";
    let desc = "妳回到了普通人的生活。但每當妳打開手機，總會莫名收到不知名號碼傳來的語音，裡面只有他沉重的呼吸聲...";

    if (hearts >= 2 && san >= 60) {
        title = "【結局 A：救贖的演算法】(True Ending)";
        desc = "妳站在馬路旁，看著那條簡訊，並沒有崩潰，而是冷靜地給陳昇撥回了電話。妳利用他對妳力求完美的愛，一字一句撫平了他童年的傷口...最終，他帶著所有原始硬碟自首。隔著監獄的防彈玻璃，他摘下了眼鏡，對妳露出了最釋懷的微笑。";
    } else if (hearts >= 2 && san < 60) {
        title = "【結局 B：深淵的自願囚徒】(Normal Ending)";
        desc = "看著手機上精準的『17次』，妳的理智線徹底崩斷。在長達14天的制約下，妳流著淚瘋狂地轉身，跑回了山頂的別墅。推開大門，陳昇正張開雙臂等在玄關，一把將妳緊緊揉進胸膛：『歡迎回家，寶貝.🌹』";
    } else if (hearts <= 1 && san >= 50) {
        title = "【結局 C：越獄成功的大腦】(Escape Ending)";
        desc = "看著『回頭 17 次』的簡訊，妳冷笑一聲。妳頭也不回地走向警局，將暗中記下的別墅座標與黑客後門全部移交。天才陳昇的網域被妳親手攻破，妳贏回了絕對的自由！";
    } else if (san <= 0) {
        title = "【結局 D：第二個深淵怪物】(Hidden Yandere Ending)";
        desc = "妳看著簡訊發出一陣無比甜美、瘋狂的低笑。妳的理智已經徹底歸零，被陳昇的孤獨與偏執親手同化成了第二個病嬌。妳反手將別墅的大門反鎖，切斷了他所有的遠端主機...妳成了這場代碼遊戲裡全新的主人。";
    }

    document.getElementById('story-text').innerHTML = `<h3 style="color: #ff3355; margin-bottom: 10px;">${title}</h3><p style="color: #ffcccc; line-height: 1.6;">${desc}</p>`;
}

// 跨平台高性能事件初始化（全相容 iOS Touch 與 Android Click 延遲優化）
document.addEventListener("DOMContentLoaded", () => {
    detectPlatform();
    startClock(); 

    const startBtn = document.getElementById('startBtn');
    const ageYesBtn = document.getElementById('ageYesBtn');
    const ageNoBtn = document.getElementById('ageNoBtn');

    // 智能事件綁定，杜絕 iOS 行動端 300ms 點擊延遲不流暢問題
    if (startBtn) startBtn.addEventListener('click', unlockCover);
    if (ageYesBtn) ageYesBtn.addEventListener('click', enterHackerTerminal);
    if (ageNoBtn) {
        ageNoBtn.addEventListener('click', () => {
            alert("陳昇：「想退出？沒用的。只要我想見妳，妳在哪個網頁我都能找到妳.🌹」");
            window.location.href = "https://www.google.com";
        });
    }

    // 主遊戲按鈕的事件委派適配
    const optContainer = document.getElementById('options-container');
    if (optContainer) {
        optContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.option-btn');
            if (!btn) return;
            const choice = btn.getAttribute('data-choice');
            if (choice) handleChoiceSelection(choice);
        });
    }
});