const prizeData = {
    "2025":{
        name:"拉斯洛·卡撒兹纳霍凯（László Krasznahorkai）",
        searchName:"克拉斯诺霍尔卡伊·拉斯洛",
        nation:"匈牙利",
        works:"《撒旦探戈》《反抗的忧郁》",
        bio:"匈牙利作家，被称为'当代最伟大的小说家之一'。他的作品以复杂的长句和对人性的深刻洞察著称，探讨极权主义、艺术与救赎等主题。"
    },
    "2024":{
        name:"韩江（Han Kang）",
        searchName:"韩江",
        nation:"韩国",
        works:"《素食主义者》《少年来了》",
        bio:"韩国著名小说家，作品以细腻的笔触和深刻的情感著称，探讨暴力、创伤、记忆与救赎等主题。她是韩国第二位获得诺贝尔文学奖的作家。"
    },
    "2023":{
        name:"约翰·福瑟（Jon Fosse）",
        searchName:"约恩·福瑟",
        nation:"挪威",
        works:"《名字》《一个夏日》",
        bio:"挪威作家、诗人和剧作家，被认为是当代最重要的剧作家之一。他的作品以极简主义风格著称，探讨孤独、存在和人际关系等主题。"
    },
    "2022":{
        name:"安妮·埃尔诺（Annie Ernaux）",
        searchName:"安妮·埃尔诺",
        nation:"法国",
        works:"《悠悠岁月》《位置》",
        bio:"法国作家，以自传体作品和社会观察著称。她的作品探讨记忆、身份、阶级和性别等主题，以其独特的'无人称自传'风格闻名。"
    },
    "2021":{
        name:"阿卜杜勒-拉扎克·古尔纳（Abdulrazak Gurnah）",
        searchName:"阿卜杜勒-拉扎克·古尔纳",
        nation:"坦桑尼亚",
        works:"《天堂》《荒漠》",
        bio:"坦桑尼亚裔英国作家，作品主要探讨殖民主义、移民、记忆和身份等主题。他的小说以细腻的描写和深刻的人文关怀著称。"
    },
    "2020":{
        name:"露易丝·格丽克（Louise Glück）",
        searchName:"路易丝·格丽克",
        nation:"美国",
        works:"《野鸢尾》《阿喀琉斯的胜利》",
        bio:"美国诗人，以其简洁、深刻的诗歌著称。她的作品探讨死亡、爱情、自然和神话等主题，获得过多项重要文学奖项。"
    },
    "2019":{
        name:"彼得·汉德克（Peter Handke）",
        searchName:"彼得·汉德克",
        nation:"奥地利",
        works:"《骂观众》《卡斯帕》",
        bio:"奥地利作家、剧作家，以其先锋派戏剧和小说著称。他的作品探讨语言、身份和社会等主题，在文学界引起广泛争议。"
    },
    "2018":{
        name:"奥尔加·托卡丘克（Olga Tokarczuk）",
        searchName:"奥尔加·托卡尔丘克",
        nation:"波兰",
        works:"《太古和其他的时间》《白天的房子，夜晚的房子》",
        bio:"波兰作家，以其魔幻现实主义风格和宏大的叙事著称。她的作品融合神话、历史和现实，探讨时间、记忆和人类命运等主题。"
    },
    "2017":{
        name:"石黑一雄（Kazuo Ishiguro）",
        searchName:"石黑一雄",
        nation:"英国",
        works:"《长日将尽》《别让我走》",
        bio:"日裔英国作家，以其细腻的描写和对记忆、时间和人性的深刻探讨著称。他的作品被翻译成多种语言，广受国际赞誉。"
    },
    "2016":{
        name:"鲍勃·迪伦（Bob Dylan）",
        searchName:"鲍勃·迪伦",
        nation:"美国",
        works:"《答案在风中飘》（以歌曲创作获奖）",
        bio:"美国歌手、词曲作者，被认为是20世纪最重要的音乐人之一。他的歌词以诗意和社会批判著称，此次获奖是诺贝尔文学奖首次授予音乐人。"
    },
    "2015":{
        name:"斯维特拉娜·阿列克谢耶维奇（Svetlana Alexievich）",
        searchName:"斯维特兰娜·阿列克谢耶维奇",
        nation:"白俄罗斯",
        works:"《战争的非女性面孔》《切尔诺贝利的回忆：核灾难口述史》",
        bio:"白俄罗斯作家、记者，以其纪实文学作品著称。她通过采访和口述历史，记录了苏联时期的重大事件和普通人的生活。"
    }
};

const quoteList = [
    {
        text:"我们只能在一个正在毁灭的世界中，试图用艺术去触摸那转瞬即逝的真实。",
        authorName:"克拉斯诺霍尔卡伊·拉斯洛",
        book:"《撒旦探戈》"
    },
    {
        text:"我终于明白，人活在世上，不仅仅是为了生存，而是为了某种光亮。",
        authorName:"韩江",
        book:"《少年来了》"
    },
    {
        text:"当一个人意识到自己并不孤单时，那种深沉的宁静便会降临。",
        authorName:"约恩·福瑟",
        book:"《七部曲》"
    },
    {
        text:"写下这些，是为了从一种集体性的遗忘中，把属于我个人的那部分真实找回来。",
        authorName:"安妮·埃尔诺",
        book:"《悠悠岁月》"
    },
    {
        text:"记忆是一种负担，也是一种逃离，只要我们还记得，过去就从未真正离去。",
        authorName:"阿卜杜勒-拉扎克·古尔纳",
        book:"《天堂》"
    },
    {
        text:"看看我，我既是那棵树，也是那个折断树枝的人。",
        authorName:"路易丝·格丽克",
        book:"《野鸢尾》"
    },
    {
        text:"我走在路上，世界在我面前打开，像一张没有折痕的白纸。",
        authorName:"彼得·汉德克",
        book:"《去往第九王国》"
    },
    {
        text:"温柔是爱最谦卑的形式，它不要求任何回报，只是看着事物本来的样子。",
        authorName:"奥尔加·托卡尔丘克",
        book:"《太古和其他的时间》"
    },
    {
        text:"你以为自己拥有时间，其实是时间在一点点地剥离你生命中最重要的东西。",
        authorName:"石黑一雄",
        book:"《长日将尽》"
    },
    {
        text:"答案就在风中飘荡，不需要去追问，只需要去倾听。",
        authorName:"鲍勃·迪伦",
        book:"《答案在风中飘》"
    },
    {
        text:"只有一种出路：去爱人，借着爱的力量去理解他们。",
        authorName:"斯维特兰娜·阿列克谢耶维奇",
        book:"《切尔诺贝利的回忆》"
    },
    {
        text:"文学是人类灵魂的镜子，它让我们看到自己，也看到他人。",
        authorName:"克拉斯诺霍尔卡伊·拉斯洛",
        book:"《反抗的忧郁》"
    },
    {
        text:"在黑暗中寻找光明，在痛苦中寻找希望，这就是文学的力量。",
        authorName:"韩江",
        book:"《素食主义者》"
    },
    {
        text:"沉默是一种语言，它比任何话语都更加深刻。",
        authorName:"约恩·福瑟",
        book:"《名字》"
    },
    {
        text:"记忆是我们与过去唯一的联系，也是我们走向未来的桥梁。",
        authorName:"安妮·埃尔诺",
        book:"《位置》"
    },
    {
        text:"每个人的生命都是一个故事，等待被讲述。",
        authorName:"阿卜杜勒-拉扎克·古尔纳",
        book:"《荒漠》"
    },
    {
        text:"诗歌是灵魂的呼吸，是语言最纯粹的形式。",
        authorName:"路易丝·格丽克",
        book:"《阿喀琉斯的胜利》"
    },
    {
        text:"语言是我们存在的方式，也是我们理解世界的工具。",
        authorName:"彼得·汉德克",
        book:"《卡斯帕》"
    },
    {
        text:"时间是一条长河，我们都是河中的旅人。",
        authorName:"奥尔加·托卡尔丘克",
        book:"《白天的房子，夜晚的房子》"
    },
    {
        text:"人生最大的遗憾，不是做错了什么，而是错过了什么。",
        authorName:"石黑一雄",
        book:"《别让我走》"
    },
    {
        text:"真正的自由，是在规则之内找到属于自己的空间。",
        authorName:"鲍勃·迪伦",
        book:"《像一块滚石》"
    },
    {
        text:"战争留下的不仅是伤痕，更是对和平的渴望。",
        authorName:"斯维特兰娜·阿列克谢耶维奇",
        book:"《战争的非女性面孔》"
    }
];

const quizData = [
    { q: "您更倾向于通过什么方式认知世界？", options: ["历史档案记录", "对记忆的拆解", "诗意的存在困境", "社会批判与抗争"] },
    { q: "您认为文学的核心使命是？", options: ["见证真实痛苦", "探索自我的边界", "重构个人历史", "审视政治与人性"] },
    { q: "面对生活遗憾，您更倾向于？", options: ["忠实记录过往", "与过去和解释怀", "沉默感受孤独", "反思时代创伤"] },
    { q: "最喜欢的文字风格？", options: ["质朴纪实、还原真实", "温柔细腻、治愈沉静", "诗意凝练、充满隐喻", "宏大叙事、贯通古今"] },
    { q: "您更关注哪类创作主题？", options: ["战争与灾难纪实", "青春与创伤救赎", "记忆与时间流逝", "个体与时代命运"] },
    { q: "看待人生的态度更接近？", options: ["真实直面苦难", "温柔接纳残缺", "孤独自洽自省", "清醒批判现实"] },
    { q: "故事最打动你的是？", options: ["真实的人间百态", "细腻的情绪共鸣", "深刻的哲理隐喻", "宏大的时代格局"] },
    { q: "你更偏爱哪种叙事节奏？", options: ["平实缓慢、娓娓道来", "克制隐忍、暗流涌动", "简约空灵、余味悠长", "跌宕深刻、直击人心"] },
    { q: "面对困境，你的心态是？", options: ["记录即是救赎", "温柔对抗苦难", "独处消解迷茫", "思辨突破局限"] },
    { q: "你希望文字带给你什么？", options: ["留存时代真相", "治愈内心创伤", "安放孤独灵魂", "唤醒人文思考"] }
];

const authors = [
    { name: "阿列克谢耶维奇 (2015)", reason: "您关注集体记忆，擅长通过文字记录时代真实与人间苦难，共情鲜活的人间百态。" },
    { name: "鲍勃·迪伦 (2016)", reason: "您具有极强的自由与叛逆精神，审美浪漫洒脱，文字自带韵律与时代变革力量。" },
    { name: "石黑一雄 (2017)", reason: "您对记忆、时间与遗憾有深刻的哲学思考，温柔内敛，擅长审视过往与人性。" },
    { name: "奥尔加·托卡尔丘克 (2018)", reason: "您拥有宏大的世界观，擅长融合神话、现实与历史，格局开阔，思想深邃。" },
    { name: "彼得·汉德克 (2019)", reason: "您习惯冷静精准观察世界，偏爱纯粹的思辨文学，用清醒视角审视人性与社会。" },
    { name: "露易丝·格丽克 (2020)", reason: "您偏爱凝练诗意的文字，擅长在孤独与隐喻中洞察自我灵魂，内心细腻且通透。" },
    { name: "阿卜杜勒-拉扎克·古尔纳 (2021)", reason: "您包容且温柔，关注漂泊、记忆与归属，能够共情不同境遇下的人生。" },
    { name: "安妮·埃尔诺 (2022)", reason: "您擅长解构生活、复盘自我，能将个人经历升华为深刻的时代与社会记录。" },
    { name: "约恩·福瑟 (2023)", reason: "您性格沉静内敛，偏爱简约克制的文字，擅长诠释孤独、温柔与人性本真。" },
    { name: "韩江 (2024)", reason: "您内心柔软且有力量，对苦难极具共情力，偏爱治愈、救赎与生命成长的主题。" },
    { name: "拉斯洛·卡撒兹纳霍凯 (2025)", reason: "您审美先锋独特，不拘泥于常规叙事，喜欢探索文学边界，拥有超前的艺术感知力。" }
];

function setActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes('index') && link.getAttribute('href') === '/') ||
            (currentPath.includes('.html') && link.getAttribute('href').includes('.html'))) {
            link.classList.add('active');
        }
    });
}

function randomQuote() {
    const idx = Math.floor(Math.random() * quoteList.length);
    return quoteList[idx];
}

function formatSearchUrl(name) {
    return `https://www.baidu.com/s?wd=${encodeURIComponent(name)}`;
}

function getYears() {
    return Object.keys(prizeData).sort((a, b) => parseInt(a) - parseInt(b));
}

function getYearData(year) {
    return prizeData[year];
}

let musicAudio = null;
let musicToggleBtn = null;
let isMusicPlaying = false;

function initMusic() {
    musicAudio = document.getElementById('bgMusic');
    
    if (!musicAudio) {
        musicAudio = document.createElement('audio');
        musicAudio.id = 'bgMusic';
        musicAudio.src = '小瀬村晶 - Hidden Waltz.mp3';
        musicAudio.loop = true;
        musicAudio.volume = 0.3;
        document.body.appendChild(musicAudio);
    }
    
    const existingBtn = document.getElementById('musicToggle');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    createMusicToggle();
    
    const savedState = localStorage.getItem('musicPlaying');
    const savedTime = localStorage.getItem('musicTime');
    
    if (savedTime) {
        musicAudio.currentTime = parseFloat(savedTime);
    }
    
    if (savedState === 'true') {
        isMusicPlaying = true;
        updateMusicBtn(true);
        musicAudio.play().catch(e => {
            console.log('Auto play blocked:', e);
        });
    } else {
        isMusicPlaying = false;
        updateMusicBtn(false);
    }
    
    musicAudio.addEventListener('timeupdate', () => {
        if (isMusicPlaying) {
            localStorage.setItem('musicTime', musicAudio.currentTime.toString());
        }
    });
    
    musicAudio.addEventListener('play', () => {
        isMusicPlaying = true;
        localStorage.setItem('musicPlaying', 'true');
        updateMusicBtn(true);
    });
    
    musicAudio.addEventListener('pause', () => {
        isMusicPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
        updateMusicBtn(false);
    });
    
    musicAudio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        isMusicPlaying = false;
        updateMusicBtn(false);
    });
}

function createMusicToggle() {
    const btn = document.createElement('button');
    btn.className = 'music-toggle fixed';
    btn.id = 'musicToggle';
    btn.innerHTML = '<span class="music-icon">♪</span><span class="music-text">开启音乐</span>';
    btn.addEventListener('click', toggleMusic);
    document.body.appendChild(btn);
    musicToggleBtn = btn;
}

function toggleMusic() {
    if (!musicAudio) {
        initMusic();
        return;
    }
    
    if (isMusicPlaying) {
        musicAudio.pause();
    } else {
        musicAudio.play().catch(e => {
            console.log('Audio play blocked:', e);
            alert('浏览器阻止了自动播放，请点击页面后再尝试开启音乐');
        });
    }
}

function updateMusicBtn(playing) {
    if (!musicToggleBtn) return;
    const icon = musicToggleBtn.querySelector('.music-icon');
    const text = musicToggleBtn.querySelector('.music-text');
    
    if (playing) {
        icon.textContent = '♫';
        text.textContent = '关闭音乐';
        musicToggleBtn.classList.add('playing');
    } else {
        icon.textContent = '♪';
        text.textContent = '开启音乐';
        musicToggleBtn.classList.remove('playing');
    }
}

function stopMusic() {
    if (musicAudio) {
        musicAudio.pause();
    }
}