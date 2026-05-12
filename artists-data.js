/* ============================================================
   artists-data.js — база данных всех артистов
   Чтобы добавить нового: скопируй любой объект, смени id.
   Никаких новых HTML-файлов не нужно.
   ============================================================ */
const ARTISTS = {

  drake: {
    id:"drake", name:"Drake",
    photo:"img/artists/drake.jpg",
    bg:"linear-gradient(135deg,#14001a,#c026d3)",
    country:"Канада", genre:"Hip-hop / R&B", years:"2006 — наши дни", awards:5,
    bio:`Обрён Дрейк Грэм — канадский рэпер и певец из Торонто. Широкую известность сначала приобрёл как актёр сериала «Деградация», но затем стал одним из самых продаваемых музыкантов в истории.\n\nДебютный альбом «Thank Me Later» (2010) занял первое место в Billboard 200. Его треки суммарно провели больше недель на первом месте Hot 100, чем у любого другого артиста. Он изменил облик современного R&B, введя в мейнстрим меланхоличный «soft rap» и жанр trap-soul.`,
    achievements:["5 премий Grammy","Самый стримингуемый артист десятилетия (Spotify)","Рекорд Billboard: 50+ хитов в топ-10 Hot 100","Основатель лейбла OVO Sound","4 альбома №1 в Billboard 200 подряд"],
    songs:[
      {title:"God's Plan",    year:"2018", ytId:"xpVfcZ0ZcFM"},
      {title:"Marvins Room",     year:"2011", ytId:"JDb3ZZD4bA0"},
      {title:"Girls Need Love (Remix)", year:"2015", ytId:"TP3moIiyZFI"},
      {title:"Crew Love (feat.The Weeknd)",  year:"2017", ytId:"WL-3zvnUomk"},
    ],
  },

  partynextdoor: {
    id:"partynextdoor", name:"PARTYNEXTDOOR",
    photo:"img/artists/partynextdoor.jpg",
    bg:"linear-gradient(135deg,#001818,#14b8a6)",
    country:"Канада", genre:"Alt R&B", years:"2013 — наши дни", awards:3,
    bio:`PARTYNEXTDOOR (Джалан Харт) — канадский певец и продюсер ямайского происхождения, один из первых артистов лейбла OVO Sound.\n\nЕго музыка — туманный ночной R&B с мягкими синтезаторами и откровенной лирикой. Написал хиты для Rihanna, Drake и других звёзд, оставаясь культовой фигурой для ценителей жанра.`,
    achievements:["Первый артист OVO Sound Records","Автор хита Rihanna «Work»","3 платиновых альбома","Дуэтный альбом с Drake «PARTY PACK»"],
    songs:[
      {title:"Family", year:"2024", ytId:"JSNgjT7egGA"},
      {title:"No Chill",           year:"2024", ytId:"aZg8WFUzmfA"},
      {title:"SOMEBODY LOVES ME(feat.Drake)",        year:"2025", ytId:"htToA3wcFl4"},
    ],
  },

  theweeknd: {
    id:"theweeknd", name:"The Weeknd",
    photo:"img/artists/theweeknd.jpg",
    bg:"linear-gradient(135deg,#0f0f0f,#a855f7)",
    country:"Канада", genre:"Alt R&B", years:"2010 — наши дни", awards:4,
    bio:`Эйбел Тесфайе (The Weeknd) — канадский певец эфиопского происхождения. Прославился анонимными миксами на SoundCloud в 2010 году ещё до того, как кто-либо знал его имя.\n\nЕго музыка — тёмный коктейль из R&B, синти-попа и психоделики. «Blinding Lights» — самый успешный сингл в истории Billboard Hot 100. Выступал на Super Bowl LV Halftime Show.`,
    achievements:["4 премии Grammy","«Blinding Lights» — лучший сингл в истории Billboard Hot 100","Выступление на Super Bowl LV","100+ млн слушателей в Spotify","Альбом «After Hours» — 4× платиновый"],
    songs:[
      {title:"Blinding Lights",    year:"2019", ytId:"4NRXx6U8ABQ"},
      {title:"Starboy",            year:"2016", ytId:"34Na4j8AVgA"},
      {title:"Save Your Tears",    year:"2020", ytId:"XXYlFuWEuKI"},
      {title:"Can't Feel My Face", year:"2015", ytId:"KEI4qSrkPAs"},
    ],
  },

  sza: {
    id:"sza", name:"SZA",
    photo:"img/artists/sza.jpg",
    bg:"linear-gradient(135deg,#1a1a2e,#e91e8c)",
    country:"США", genre:"Alt R&B", years:"2012 — наши дни", awards:4,
    bio:`Сольана Роу (SZA) — американская певица из Миссури, голос целого поколения. Её дебютный альбом «Ctrl» (2017) стал культовым благодаря редкой честности текстов о любви и женской идентичности.\n\nАльбом «SOS» (2022) провёл 10 недель на первом месте Billboard 200 — рекорд для женщин в R&B. Её звучание — смесь нео-соула, инди-попа и трэпа.`,
    achievements:["4 премии Grammy","«SOS» — рекордные 10 недель №1 Billboard 200","Первая женщина с R&B-альбомом №1 за 10 лет","Дуэт с Kendrick Lamar «All The Stars»","60+ млн слушателей в Spotify"],
    songs:[
      {title:"Kill Bill",  year:"2022", ytId:"SQnc1QibapQ"},
      {title:"Good Days",  year:"2022", ytId:"0BdlKkvjEgA"},
      {title:"Supermodel", year:"2017", ytId:"Tiixq9rT_J0"},
      {title:"Snooze",     year:"2022", ytId:"Sv5yCzPCkv8"},
    ],
  },

  frankocean: {
    id:"frankocean", name:"Frank Ocean",
    photo:"img/artists/frankocean.jpg",
    bg:"linear-gradient(135deg,#2d1b4e,#7c3aed)",
    country:"США", genre:"Neo Soul / Alt R&B", years:"2011 — наши дни", awards:6,
    bio:`Кристофер Брэйсон (Frank Ocean) — американский певец из Нового Орлеана, член коллектива Odd Future. Его альбом «channel ORANGE» (2012) получил статус «альбома поколения» ещё при выходе.\n\nВторой альбом «Blonde» (2016) вышел в обход лейбла напрямую в Apple Music и стал культурным феноменом. Известен перфекционизмом и бескомпромиссным художественным видением.`,
    achievements:["6 премий Grammy","«channel ORANGE» — альбом года по Pitchfork","«Blonde» — №1 в 10 странах без лейбла","Автор текстов для Jay-Z и Beyoncé","Time: «100 самых влиятельных людей мира»"],
    songs:[
      {title:"Pink + White", year:"2016", ytId:"uzS3WG6__G4"},
      {title:"White Ferrari",         year:"2016", ytId:"Dlz_XHeUUis"},
      {title:"Nights",           year:"2016", ytId:"r4l9bFqgMaQ"},
      {title:"Ivy",              year:"2016", ytId:"AE005nZeF-A"},
    ],
  },

  brentfaiyaz: {
    id:"brentfaiyaz", name:"Brent Faiyaz",
    photo:"img/artists/brentfaiyaz.jpg",
    bg:"linear-gradient(135deg,#0d2137,#0ea5e9)",
    country:"США", genre:"Neo Soul", years:"2016 — наши дни", awards:2,
    bio:`Кристофер Вуд (Brent Faiyaz) — американский певец из Мэриленда с характерным фальцетом и меланхоличными текстами о страсти и потере. Основал независимый лейбл ISO Supremacy ради полного творческого контроля.\n\nАльбом «Wasteland» (2022) дебютировал в топ-5 Billboard 200 без крупного лейбла.`,
    achievements:["2 платиновых альбома","«Wasteland» — Топ-5 Billboard 200","Основатель ISO Supremacy Records","Коллаборации с Tyler the Creator и Drake","20+ млн слушателей в Spotify"],
    songs:[
      {title:"Trust",          year:"2018", ytId:"pa5E4uA3ALY"},
      {title:"Dead Man Walking", year:"2022", ytId:"EqxB2slstLU"},
      {title:"Mercedes",         year:"2021", ytId:"38TEd55NcXs"},
    ],
  },

  chrisbrown: {
    id:"chrisbrown", name:"Chris Brown",
    photo:"img/artists/chrisbrown.jpg",
    bg:"linear-gradient(135deg,#1a0800,#ef4444)",
    country:"США", genre:"Contemporary R&B", years:"2004 — наши дни", awards:8,
    bio:`Кристофер Браун — американский певец и танцор из Виргинии. Дебютировал в 15 лет и мгновенно попал в топ-чарты. Критики сравнивают его способность совмещать пение, рэп и танец с Майклом Джексоном.\n\nЗа более чем 20-летнюю карьеру выпустил свыше 10 альбомов, большинство из которых дебютировали в топ-5 Billboard.`,
    achievements:["Grammy за лучшее R&B-выступление","10+ альбомов в топ-5 Billboard","50+ платиновых синглов","Победитель BET Awards в 8 номинациях"],
    songs:[
      {title:"Run It",            year:"2006", ytId:"A3Tbll-vIuU"},
      {title:"Not You Too(feat.Drake)",         year:"2020", ytId:"ZX_mvoY_Hg0"},
      {title:"No Guidance(feat.Drake)",            year:"2020", ytId:"oOni4BMeMp0"},
      {title:"Under The Influence", year:"2022", ytId:"pfxyk1glEq4"},
    ],
  },

  brysontiller: {
    id:"brysontiller", name:"Bryson Tiller",
    photo:"img/artists/brysontiller.jpg",
    bg:"linear-gradient(135deg,#0e001a,#a78bfa)",
    country:"США", genre:"Trap Soul / Neo Soul", years:"2015 — наши дни", awards:3,
    bio:`Брайсон Тиллер — певец из Луисвилля, создатель и популяризатор жанра «trap soul». Его дебютный альбом «T R A P S O U L» (2015) был записан самостоятельно через SoundCloud и стал знаковым альбомом десятилетия.\n\nПодписал контракт с RCA после того как трек «Exchange» стал вирусным.`,
    achievements:["3 платиновых альбома","«Exchange» — 3× платиновый","BET Hip Hop Award: лучший новый артист","Создатель жанра Trap Soul","Коллаборации с Drake и Beyoncé"],
    songs:[
      {title:"I'm Ready For You",   year:"2015", ytId:"DHkQQPldpXw"},
      {title:"Don't",      year:"2015", ytId:"d7cVLE4SaN0"},
      {title:"Rambo(feat.The Weeknd", year:"2020", ytId:"HfdO16uLF7g"},
    ],
  },

  "6lack": {
    id:"6lack", name:"6LACK",
    photo:"img/artists/6lack.jpg",
    bg:"linear-gradient(135deg,#080818,#818cf8)",
    country:"США", genre:"Alt R&B", years:"2016 — наши дни", awards:1,
    bio:`Рикардо Вальдес Валентайн (6LACK, произносится «блэк») — певец из Атланты с тёмным атмосферным R&B на стыке трэпа и инди. Дебютный альбом «Free 6LACK» принёс Grammy-номинацию.\n\nИзвестен пронзительно честными текстами. Работал с SZA, Billie Eilish и Khalid.`,
    achievements:["Grammy-номинация: лучший новый артист","«Free 6LACK» — Топ-40 Billboard 200","Дуэт с SZA «East Atlanta Love Letter»","15+ млн слушателей в Spotify"],
    songs:[
      {title:"Unfair",                  year:"2018", ytId:"RK8Lf3YyMbY"},
      {title:"East Atlanta Love Letter(feat.Future)",year:"2018", ytId:"VsLpPqyksec"},
      {title:"Sorry",     year:"2018", ytId:"twX0mL0mmkk"},
    ],
  },

  justinbieber: {
    id:"justinbieber", name:"Justin Bieber",
    photo:"img/artists/justinbieber.jpg",
    bg:"linear-gradient(135deg,#0a1628,#3b82f6)",
    country:"Канада", genre:"Pop R&B", years:"2008 — наши дни", awards:2,
    bio:`Джастин Бибер из Стратфорда — один из самых молодых артистов, дебютировавших на первом месте Billboard. Был замечен менеджером на YouTube в 13 лет.\n\nПосле публичного кризиса вернулся с альбомом «Purpose» (2015), открыто говорит о ментальном здоровье.`,
    achievements:["2 премии Grammy","Самый молодой сольный артист №1 Hot 100","70+ млн слушателей в Spotify","Мировой тур Purpose: 150+ концертов"],
    songs:[
      {title:"That Should Be Me",       year:"2010", ytId:"2Xulk9Ahqmc"},
      {title:"Boyfriend", year:"2012", ytId:"4GuqB1BQVr4"},
      {title:"Sorry",         year:"2015", ytId:"8ELbX5CMomE"},
    ],
  },

  mj: {
    id:"mj", name:"Michael Jackson †",
    photo:"img/artists/mj.jpg",
    bg:"linear-gradient(135deg,#0a1628,#fbbf24)",
    country:"США", genre:"Classical R&B / Pop", years:"1964 — 2009", awards:26,
    bio:`Майкл Джексон (1958–2009) — «Король поп-музыки», самый продаваемый музыкальный артист всех времён. Суммарные продажи превышают 400 миллионов пластинок.\n\nАльбом «Thriller» (1982) — самый продаваемый альбом в истории. Революционизировал музыкальное видео как жанр. Moonwalk (1983) вошёл в историю культуры навсегда.`,
    achievements:["26 премий Grammy (рекорд)","«Thriller» — самый продаваемый альбом всех времён","Орден Почёта от Президента США","Зал славы рок-н-ролла — дважды","400+ млн проданных пластинок","Изобрёл технику Moonwalk"],
    songs:[
      {title:"Thriller",        year:"1982", ytId:"sOnqjkJTMaA"},
      {title:"Billie Jean",     year:"1982", ytId:"Zi_XLOBDo_Y"},
      {title:"Beat It",         year:"1982", ytId:"oRdxUFDoQe0"},
    ],
  },

  mayot: {
    id:"mayot", name:"MAYOT",
    photo:"img/artists/mayot.jpg",
    bg:"linear-gradient(135deg,#001018,#06b6d4)",
    country:"Россия", genre:"Trap / R&B", years:"2018 — наши дни", awards:3,
    bio:`Mayot(Артём Никитин) — российский трэп-исполнитель из Тюмени. Хип-хоп-звучание сочетает с мелодичными элементами R&B и автотюном.\n\nПолучил известность как участник объединения Melon Music и благодаря релизам, набравшим популярность на стримингах. Входил в число самых прослушиваемых артистов в России по версии Spotify.`,
    achievements:["3 платиновых сингла в России","«High» - Клип Года по версии Риса за Творчество","Топ-30 Яндекс.Музыки 2022–2024","Сольные концерты в Москве и СПб"],
    songs:[
      {title:"Звезда Упала", year:"2020", ytId:"Sj2m4ZWEBEU"},
      {title:"Море(feat.Feduk)",          year:"2021", ytId:"csQPijDJqoQ"},
      {title:"Мотылёк",        year:"2023", ytId:"Y9DievTdS7g"},
    ],
  },

  ogbuda: {
    id:"ogbuda", name:"OG BUDA",
    photo:"img/artists/ogbuda.jpg",
    bg:"linear-gradient(135deg,#100008,#fb7185)",
    country:"Россия", genre:"Rap / R&B", years:"2017 — наши дни", awards:2,
    bio:`OG Buda (Григорий Ляхов) — российский рэпер из Тюмени, участник объединений Melon Music и RNDM Crew. Его звучание сочетает трэп, дрилл и детройт с мелодичными R&B-интонациями и автотюном.\n\nПолучил широкую известность после релизов 2018–2021 годов и коллабораций с Платиной и Mayot. Отмечен в списке Forbes «30 до 30» и стабильно набирает миллионы прослушиваний на стримингах.`,
    achievements:["Победа в рейтинге Forbes «30 до 30» (2022)","Альбомы и синглы в чартах стриминговых сервисов","Коллаборации с Платиной, Mayot, Feduk","Миллионы прослушиваний и активная концертная деятельность"],
    songs:[
      {title:"Строчки о бывших", year:"2023", ytId:"tKMPEWVJA1w"},
      {title:"По Другому(feat.Mayot)",             year:"2023", ytId:"ynsAU1bhO8Q"},
      {title:"Для тебя(Пусто)",        year:"2023", ytId:"-nvZNhS8tZc"},
    ],
  },

  danrey: {
    id:"danrey", name:"Дэнрэй",
    photo:"img/artists/danrey.jpg",
    bg:"linear-gradient(135deg,#0a001a,#7c3aed)",
    country:"Казахстан", genre:"Pop / R&B", years:"2024 — наши дни", awards:0,
    bio:`Дэнрэй (Даниал Уахитжанов) — молодой казахстанский артист, работающий на стыке поп-музыки и альтернативного R&B. Атмосферное звучание, глубокие тексты и самобытный подход к продакшену.\n\nНачал активную деятельность в 2024 году и быстро привлёк внимание своей искренностью. Представляет новое поколение казахстанского R&B.`,
    achievements:["Дебютный трек «С тобой» — тысячи прослушиваний","Представитель нового поколения казахстанского R&B","Активная работа над дебютным EP"],
    songs:[
      {title:"С тобой", year:"2025", ytId:"i4lpQ3NAEHc"},
      {title:"Наиля", year:"2025", ytId:"BUZDzqZtKBk"},
    ],
  },

  jony: {
    id:"jony", name:"Jony",
    photo:"img/artists/jony.jpg",
    bg:"linear-gradient(135deg,#180010,#e879f9)",
    country:"Азербайджан", genre:"Pop / R&B", years:"2019 — наши дни", awards:2,
    bio:`Jony (Джахид Гусейнли) — азербайджанский певец из Москвы, исполняющий музыку на стыке попа и русскоязычного R&B с восточными мотивами. Отличается мелодичным вокалом и эмоциональной подачей.\n\nПолучил широкую известность после хитов «Аллея» и «Комета», закрепившись в топ-чартах стриминговых платформ и став одним из самых популярных артистов СНГ.`,
    achievements:["«Аллея» — 200+ млн прослушиваний","Топ-5 Яндекс.Музыки 2019–2020","Концерты в 15+ городах СНГ"],
    songs:[
      {title:"Аллея",        year:"2019", ytId:"5R6BYT176Bk"},
      {title:"Комета",        year:"2019", ytId:"yM1QjdoLmxQ"},
      {title:"Без тебя я не я", year:"2019", ytId:"xtDQF0J6NjY"},
    ],
  },

  thelimba: {
    id:"thelimba", name:"The Limba",
    photo:"img/artists/thelimba.jpg",
    bg:"linear-gradient(135deg,#001a10,#10b981)",
    country:"Казахстан", genre:"Pop / R&B", years:"2017 — наши дни", awards:4,
    bio:`The Limba (Мухаметали Ахметжанов) — казахстанский певец и автор песен, один из ключевых представителей русскоязычного pop-R&B. Его стиль сочетает современный поп, R&B и соул с мягким вокалом и атмосферными аранжировками.\n\nПолучил широкую известность благодаря хитам и коллаборациям с популярными артистами, стабильно занимая высокие позиции в чартах России и Казахстана и набирая миллионы прослушиваний.`,
    achievements:["Хиты с десятками миллионов прослушиваний","Топ-чарты России и Казахстана","Коллаборации с Andro, Jony,  Navai","Активная концертная деятельность в СНГ"],
    songs:[
      {title:"Стерва",     year:"2024", ytId:"CXnuAAuzv5Q"},
      {title:"Блеск",   year:"2021", ytId:"ShLLLiWdGAg"},
      {title:"Я опоздал", year:"2023", ytId:"AoDjHxEn8HE"},
    ],
  },

  mot: {
    id:"mot", name:"МОТ",
    photo:"img/artists/mot.jpg",
    bg:"linear-gradient(135deg,#180a00,#f97316)",
    country:"Россия", genre:"Pop / R&B", years:"2007 — наши дни", awards:5,
    bio:`МОТ (Матвей Мельников) — российский рэпер и певец из Крымска, бывший артист лейбла Black Star. Его музыка сочетает поп, хип-хоп и русскоязычный R&B с акцентом на мелодичный вокал и лирические темы.\n\nПолучил широкую известность в 2010-х годах благодаря хитам и коллаборациям, став одним из ключевых артистов мелодичного рэпа в России и стабильно набирая миллионы прослушиваний.`,
    achievements:["Победитель премии «Новое Радио AWARDS»","Многократные попадания в чарты стриминговых сервисов","Коллаборации с Тимати, Баста, Jah Khalib","Активная концертная деятельность в СНГ"],
    songs:[
      {title:"Не Бруклин",       year:"2021", ytId:"nYVZHiVOK1U"},
      {title:"Капкан",        year:"2016", ytId:"U9vbmWx4zt0"},
      {title:"Абсолютно Всё(feat.Бьянка)", year:"2015", ytId:"XaBFjB0Kmrw"},
    ],
  },

  bianca: {
    id:"bianca", name:"Бьянка",
    photo:"img/artists/bianca.jpg",
    bg:"linear-gradient(135deg,#1a0018,#f472b6)",
    country:"Россия", genre:"Pop / R&B", years:"2005 — наши дни", awards:6,
    bio:`Бьянка (Татьяна Липницкая) — белорусская и российская певица, одна из основательниц русскоязычного R&B и соул-направления в поп-музыке. Её стиль сочетает R&B, хип-хоп и поп с характерной манерой вокала и уличной эстетикой.\n\nПолучила широкую известность в середине 2000-х благодаря хитам «Были танцы» и «Про лето», закрепившись как одна из ключевых фигур жанра и продолжая выпускать музыку.`,
    achievements:["20+ лет карьеры","6 золотых и платиновых синглов","Премия Муз-ТВ в нескольких номинациях","Коллаборации с Тимати и L'One"],
    songs:[
      {title:"А чё чё", year:"2012", ytId:"2aVII63INyI"},
      {title:"Были Танцы",   year:"2011", ytId:"a6mMHh4mYQo"},
      {title:"Про Лето",   year:"2011", ytId:"6hhG8jAI7qE"},
    ],
  },

  yungway: {
    id:"yungway", name:"YUNGWAY",
    photo:"img/artists/yungway.jpg",
    bg:"linear-gradient(135deg,#100800,#fde68a)",
    country:"Россия", genre:"Trap / R&B", years:"2020 — наши дни", awards:1,
    bio:`Yungway (Артур Шабуров) — российский рэпер из Тюмени, участник объединения Melon Music. Его звучание строится на трэпе и хип-хопе с элементами мелодичного R&B, атмосферных автотюн-вокалов и эмоциональных мотивов.\n\nПолучил известность благодаря релизам внутри Melon Music и коллаборациям с артистами новой волны, набирая миллионы прослушиваний на стриминговых платформах.`,
    achievements:["Участник объединения Melon Music","Фиты с Mayot, 163onmyneck, Bushido Zho","Миллионы прослушиваний на стримингах","Дебютный альбом «Excalibur»"],
    songs:[
      {title:"Влюбись",  year:"2025", ytId:"XUr6oBM7u0k"},
      {title:"Потратил(feat.Mayot)", year:"2020", ytId:"u2rqnUQxfis"},
      {title:"Сигнал(feat.Mayot , Thomas Mraz)",    year:"2025", ytId:"rNle9d4JQiU"},
    ],
  },

  gonefludd: {
    id:"gonefludd", name:"GONE.Fludd",
    photo:"img/artists/gonefludd.jpg",
    bg:"linear-gradient(135deg,#080018,#a5b4fc)",
    country:"Россия", genre:"Rap / Alt R&B", years:"2012 — наши дни", awards:3,
    bio:`GONE.Fludd (Александр Бузе) — российский рэпер из Мурманска, один из ярких представителей новой школы хип-хопа. Его стиль сочетает трэп, клауд-рэп и мелодичные элементы с влиянием R&B и экспериментальной подачей.\n\nПолучил широкую известность после релизов и вирусных треков конца 2010-х, закрепившись как один из самых узнаваемых артистов своей волны.`,
    achievements:["Альбом «Boys Don't Cry» получил широкую популярность","Хиты с десятками миллионов прослушиваний","Активная концертная деятельность и фестивали"],
    songs:[
      {title:"Сквиртана (feat.IROH)",    year:"2023", ytId:"1FGfYBXvP-4"},
      {title:"Феерия", year:"2019", ytId:"gLBs5ZUQ9ns"},
      {title:"Рапсодия Конца Света",    year:"2023", ytId:"0BQBjESAWgM"},
    ],
  },

  mdee: {
    id:"mdee", name:"M'dee",
    photo:"img/artists/mdee.jpg",
    bg:"linear-gradient(135deg,#00101a,#0284c7)",
    country:"Казахстан", genre:"Pop / R&B", years:"2014 — наши дни", awards:3,
    bio:`M'Dee (Мади Токтаров) — казахстанский певец, автор песен и продюсер из Алматы, один из ярких представителей русскоязычного R&B и соул-направления. Его музыка сочетает поп, фанк и диско с меланхоличным R&B-вокалом и атмосферным звучанием.\n\nПолучил известность после релизов «Алматинский джаз» и «Феромон», закрепившись как один из ключевых артистов новой волны с миллионами прослушиваний и широкой аудиторией в СНГ.`,
    achievements:["Альбом «Феромон» — важный релиз в жанре R&B","Трилогия «Алматинский джаз» получила широкое признание","Коллаборации с Zivert, Скриптонит","Миллионы прослушиваний на стриминговых платформах"],
    songs:[
      {title:"Нужна",    year:"2025", ytId:"X6yOnaeOXns"},
      {title:"Грех (feat.Скриптонит)", year:"2019", ytId:"A1hLPuzObZ8"},
      {title:"Двусмысленно(feat.Zivert)", year:"2019", ytId:"EMgJfg6uA5A"},
    ],
  },

};

/* ============================================================
   ARTIST_I18N — переводы биографий и достижений
   Структура: ARTIST_I18N[artistId][lang] = { bio, achievements, country, awards_label }
   Если перевода нет — используется русский из ARTISTS[id]
   ============================================================ */
const ARTIST_I18N = {

  drake: {
    en: {
      bio: `Aubrey Drake Graham is a Canadian rapper and singer from Toronto. He first gained wide recognition as an actor in the TV series Degrassi, before becoming one of the best-selling musicians in history.\n\nHis debut album "Thank Me Later" (2010) hit number one on the Billboard 200. His tracks have spent more weeks at number one on the Hot 100 than any other artist. He transformed modern R&B by bringing melancholic "soft rap" and trap soul into the mainstream.`,
      achievements: ["5 Grammy Awards", "Most streamed artist of the decade (Spotify)", "Billboard record: 50+ top-10 Hot 100 hits", "Founder of OVO Sound label", "4 consecutive #1 albums on Billboard 200"],
      country: "Canada",
    },
    tr: {
      bio: `Aubrey Drake Graham, Toronto'dan Kanadalı bir rapper ve şarkıcıdır. İlk önce Degrassi dizisindeki aktörlüğüyle tanınan Drake, daha sonra tarihin en çok satan müzisyenlerinden biri haline geldi.\n\nİlk albümü "Thank Me Later" (2010) Billboard 200'de birinci sıraya girdi. Parçaları, Hot 100'de birinci sırada geçirdiği hafta sayısı bakımından diğer tüm sanatçıları geride bıraktı. Melankolik "soft rap" ve trap soul'u ana akıma taşıyarak modern R&B'yi dönüştürdü.`,
      achievements: ["5 Grammy Ödülü", "On yılın en çok dinlenen sanatçısı (Spotify)", "Billboard rekoru: 50+ Hot 100 top-10 hit", "OVO Sound etiketinin kurucusu", "Billboard 200'de arka arkaya 4 birinci albüm"],
      country: "Kanada",
    },
    kz: {
      bio: `Обри Дрейк Грэм — Торонтодан шыққан канадалық рэпер және әнші. Алғашында Degrassi телехикаясындағы актерлігімен танылып, кейін тарихтағы ең көп сатылатын музыканттардың біріне айналды.\n\n«Thank Me Later» (2010) дебюттік альбомы Billboard 200-де бірінші орынды иеленді. Оның треклері Hot 100-де бірінші орында кез келген басқа орындаушыға қарағанда көп апта болды. Ол меланхоликалық «soft rap» пен trap soul-ды негізгі ағымға енгізіп, заманауи R&B бейнесін өзгертті.`,
      achievements: ["5 Grammy сыйлығы", "Онжылдықтың ең көп тыңдалатын орындаушысы (Spotify)", "Billboard рекорды: Hot 100 топ-10-да 50+ хит", "OVO Sound лейблінің негізін қалаушы", "Billboard 200-де қатарынан 4 №1 альбом"],
      country: "Канада",
    },
  },

  partynextdoor: {
    en: {
      bio: `PARTYNEXTDOOR (Jahron Brathwaite) is a Canadian singer and producer of Jamaican descent, one of the first artists signed to OVO Sound.\n\nHis music is foggy, nocturnal R&B with soft synthesizers and candid lyrics. He has written hits for Rihanna, Drake and other stars while remaining a cult figure for genre enthusiasts.`,
      achievements: ["First artist on OVO Sound Records", "Wrote Rihanna's hit 'Work'", "3 platinum albums", "Joint album with Drake 'PARTY PACK'"],
      country: "Canada",
    },
    tr: {
      bio: `PARTYNEXTDOOR (Jahron Brathwaite), Jamaika kökenli Kanadalı bir şarkıcı ve yapımcı; OVO Sound'ın ilk sanatçılarından biri.\n\nMüziği, yumuşak sentezleyiciler ve samimi sözlerle sisli, geceye özgü bir R&B. Rihanna, Drake ve diğer yıldızlar için hitler yazan PARTYNEXTDOOR, tür meraklıları için kültleşmiş bir isim olmayı sürdürüyor.`,
      achievements: ["OVO Sound Records'ın ilk sanatçısı", "Rihanna'nın 'Work' hitini yazdı", "3 platin albüm", "Drake ile ortak albüm 'PARTY PACK'"],
      country: "Kanada",
    },
    kz: {
      bio: `PARTYNEXTDOOR (Жаһрон Братуэйт) — ямайкалық шыққан канадалық әнші және продюсер, OVO Sound лейблінің алғашқы орындаушыларының бірі.\n\nОның музыкасы — жұмсақ синтезаторлар мен ашық лирикасы бар түнгі R&B. Rihanna, Drake және басқа жұлдыздарға хиттер жазып, жанр сүйермандары арасында культтік тұлғаға айналды.`,
      achievements: ["OVO Sound Records-тың бірінші орындаушысы", "Rihanna-ның 'Work' хитін жазды", "3 платиналық альбом", "Drake-пен бірлескен 'PARTY PACK' альбомы"],
      country: "Канада",
    },
  },

  theweeknd: {
    en: {
      bio: `Abel Tesfaye (The Weeknd) is a Canadian singer of Ethiopian descent. He rose to fame with anonymous mixes on SoundCloud in 2010 before anyone knew his name.\n\nHis music is a dark cocktail of R&B, synth-pop and psychedelia. "Blinding Lights" is the most successful single in the history of the Billboard Hot 100. He headlined the Super Bowl LV Halftime Show.`,
      achievements: ["4 Grammy Awards", '"Blinding Lights" — best-charting single in Billboard Hot 100 history', "Super Bowl LV Halftime Show performance", "100M+ listeners on Spotify", '"After Hours" album — 4× platinum'],
      country: "Canada",
    },
    tr: {
      bio: `Abel Tesfaye (The Weeknd), Etiyopya kökenli Kanadalı bir şarkıcıdır. 2010 yılında kimsenin adını bilmediği dönemde SoundCloud'da anonim miksler yayınlayarak ün kazandı.\n\nMüziği; R&B, synth-pop ve psikedelinin karanlık bir karışımıdır. "Blinding Lights", Billboard Hot 100 tarihinin en başarılı singleıdır. Super Bowl LV Devre Arası Gösterisine ev sahipliği yaptı.`,
      achievements: ["4 Grammy Ödülü", '"Blinding Lights" — Billboard Hot 100 tarihinin en iyi single\'ı', "Super Bowl LV Devre Arası Gösterisi performansı", "Spotify'da 100M+ dinleyici", '"After Hours" albümü — 4× platin'],
      country: "Kanada",
    },
    kz: {
      bio: `Эйбел Тесфайе (The Weeknd) — эфиопиялық шыққан канадалық әнші. 2010 жылы ешкім оның атын білмей тұрып, SoundCloud-та анонимді миксдер жариялап атақ қазанды.\n\nОның музыкасы — R&B, синти-поп пен психоделияның қараңғы коктейлі. «Blinding Lights» — Billboard Hot 100 тарихындағы ең табысты сингл. Ол Super Bowl LV үзіліс шоуында орындады.`,
      achievements: ["4 Grammy сыйлығы", '«Blinding Lights» — Billboard Hot 100 тарихындағы ең үздік сингл', "Super Bowl LV үзіліс шоуындағы орындалым", "Spotify-да 100М+ тыңдаушы", '«After Hours» альбомы — 4× платина'],
      country: "Канада",
    },
  },

  sza: {
    en: {
      bio: `Solána Rowe (SZA) is an American singer from Missouri, the voice of a generation. Her debut album "Ctrl" (2017) became iconic for its rare honesty about love and female identity.\n\nThe album "SOS" (2022) spent 10 weeks at number one on the Billboard 200 — a record for women in R&B. Her sound is a mix of neo-soul, indie-pop and trap.`,
      achievements: ["4 Grammy Awards", '"SOS" — record 10 weeks at #1 Billboard 200', "First woman with an R&B album at #1 in 10 years", 'Duet with Kendrick Lamar "All The Stars"', "60M+ listeners on Spotify"],
      country: "USA",
    },
    tr: {
      bio: `Solána Rowe (SZA), Missouri'den Amerikalı bir şarkıcı; bir neslin sesidir. İlk albümü "Ctrl" (2017), aşk ve kadın kimliğine dair nadir dürüstlüğüyle ikonik bir hal aldı.\n\n"SOS" (2022) albümü Billboard 200'de 10 hafta boyunca birinci sırada kaldı — R&B'de kadınlar için bir rekor. Sesi; neo-soul, indie-pop ve trap karışımıdır.`,
      achievements: ["4 Grammy Ödülü", '"SOS" — Billboard 200\'de rekor 10 hafta №1', "10 yılda R&B albümüyle №1 olan ilk kadın", 'Kendrick Lamar ile düet "All The Stars"', "Spotify'da 60M+ dinleyici"],
      country: "ABD",
    },
    kz: {
      bio: `Солана Роу (SZA) — Миссуридің американдық әншісі, бір буынның дауысы. Оның «Ctrl» (2017) дебюттік альбомы махаббат пен әйел жеке басы туралы сирек кездесетін шынайылығымен культтік мәртебеге ие болды.\n\n«SOS» (2022) альбомы Billboard 200-де 10 апта бойы №1 орынды ұстады — R&B-де әйелдер арасындағы рекорд. Оның үні — нео-соул, инди-поп пен трэптің қоспасы.`,
      achievements: ["4 Grammy сыйлығы", '«SOS» — Billboard 200-де рекордтық 10 апта №1', "10 жылда R&B альбомымен №1-ге жеткен алғашқы әйел", 'Kendrick Lamar-мен дуэт «All The Stars»', "Spotify-да 60М+ тыңдаушы"],
      country: "АҚШ",
    },
  },

  frankocean: {
    en: {
      bio: `Christopher Breaux (Frank Ocean) is an American singer from New Orleans and a member of the Odd Future collective. His album "channel ORANGE" (2012) was hailed as an album of a generation upon release.\n\nHis second album "Blonde" (2016) was released independently directly through Apple Music, bypassing his label, and became a cultural phenomenon. He is known for his perfectionism and uncompromising artistic vision.`,
      achievements: ["6 Grammy Awards", '"channel ORANGE" — Pitchfork Album of the Year', '"Blonde" — #1 in 10 countries without a label', "Songwriter for Jay-Z and Beyoncé", 'Time: "100 Most Influential People in the World"'],
      country: "USA",
    },
    tr: {
      bio: `Christopher Breaux (Frank Ocean), New Orleans'tan Amerikalı bir şarkıcı ve Odd Future kolektifinin bir üyesidir. "channel ORANGE" (2012) albümü, çıktığı anda bir neslin albümü olarak selamlandı.\n\nİkinci albümü "Blonde" (2016), şirketini atlayarak doğrudan Apple Music üzerinden yayınlandı ve kültürel bir fenomen haline geldi. Mükemmeliyetçiliği ve uzlaşmaz sanatsal vizyonuyla tanınır.`,
      achievements: ["6 Grammy Ödülü", '"channel ORANGE" — Pitchfork Yılın Albümü', '"Blonde" — etiket olmadan 10 ülkede №1', "Jay-Z ve Beyoncé için söz yazarlığı", 'Time: "Dünyanın En Etkili 100 Kişisi"'],
      country: "ABD",
    },
    kz: {
      bio: `Кристофер Бро (Frank Ocean) — Жаңа Орлеандан шыққан американдық әнші, Odd Future ұжымының мүшесі. Оның «channel ORANGE» (2012) альбомы шыққан сәтте ұрпақ альбомы деп танылды.\n\nЕкінші «Blonde» (2016) альбомы лейблді айналып, тікелей Apple Music арқылы шығарылды және мәдени феноменге айналды. Ол перфекционизмі мен бітіспес шығармашылық көзқарасымен танылады.`,
      achievements: ["6 Grammy сыйлығы", '«channel ORANGE» — Pitchfork бойынша жылдың альбомы', '«Blonde» — лейблсіз 10 елде №1', "Jay-Z және Beyoncé үшін мәтін авторлығы", 'Time: «Дүниежүзіндегі ең ықпалды 100 адам»'],
      country: "АҚШ",
    },
  },

  brentfaiyaz: {
    en: {
      bio: `Christopher Wood (Brent Faiyaz) is an American singer from Maryland with a distinctive falsetto and melancholic lyrics about passion and loss. He founded the independent label ISO Supremacy to maintain full creative control.\n\nHis album "Wasteland" (2022) debuted in the top 5 of the Billboard 200 without a major label.`,
      achievements: ["2 platinum albums", '"Wasteland" — Top 5 Billboard 200', "Founder of ISO Supremacy Records", "Collaborations with Tyler the Creator and Drake", "20M+ listeners on Spotify"],
      country: "USA",
    },
    tr: {
      bio: `Christopher Wood (Brent Faiyaz), Maryland'den özgün falset sesi ve tutku ile kayıp üzerine melankolik sözleriyle tanınan Amerikalı bir şarkıcıdır. Tam yaratıcı kontrol için bağımsız ISO Supremacy etiketini kurdu.\n\n"Wasteland" (2022) albümü büyük bir etiket olmadan Billboard 200'ün ilk 5'inde çıkış yaptı.`,
      achievements: ["2 platin albüm", '"Wasteland" — Billboard 200 Top 5', "ISO Supremacy Records kurucusu", "Tyler the Creator ve Drake ile işbirliği", "Spotify'da 20M+ dinleyici"],
      country: "ABD",
    },
    kz: {
      bio: `Кристофер Вуд (Brent Faiyaz) — Мэрилендтен шыққан американдық әнші, өзіне тән фальцеті және құштарлық пен жоғалту туралы меланхоликалық лирикасымен танымал. Толық шығармашылық бақылауды сақтау үшін тәуелсіз ISO Supremacy лейблін ашты.\n\n«Wasteland» (2022) альбомы ірі лейблсіз Billboard 200-дің топ-5-ке кірді.`,
      achievements: ["2 платиналық альбом", '«Wasteland» — Billboard 200 Топ-5', "ISO Supremacy Records негізін қалаушы", "Tyler the Creator және Drake-пен коллаборациялар", "Spotify-да 20М+ тыңдаушы"],
      country: "АҚШ",
    },
  },

  chrisbrown: {
    en: {
      bio: `Christopher Brown is an American singer and dancer from Virginia. He debuted at age 15 and instantly reached the top of the charts. Critics compare his ability to combine singing, rapping and dancing to Michael Jackson.\n\nOver a 20+ year career he has released more than 10 albums, most of which debuted in the top 5 of the Billboard charts.`,
      achievements: ["Grammy for Best R&B Performance", "10+ albums in Billboard top 5", "50+ platinum singles", "BET Awards winner in 8 categories"],
      country: "USA",
    },
    tr: {
      bio: `Christopher Brown, Virginia'dan Amerikalı bir şarkıcı ve dansçıdır. 15 yaşında müzik kariyerine başlayarak anında listelerin zirvesine ulaştı. Eleştirmenler onun şarkı söyleme, rap ve dansı bir arada kullanma becerisini Michael Jackson ile karşılaştırıyor.\n\n20 yılı aşkın kariyerinde 10'dan fazla albüm çıkardı; bunların büyük çoğunluğu Billboard listelerinin ilk 5'inde yer aldı.`,
      achievements: ["En İyi R&B Performansı Grammy Ödülü", "Billboard top 5'te 10+ albüm", "50+ platin single", "8 kategoride BET Awards ödülü"],
      country: "ABD",
    },
    kz: {
      bio: `Кристофер Браун — Вирджиниядан американдық әнші және биші. Ол 15 жасында дебют жасап, бірден чарттардың жоғарғы жағына шықты. Сыншылар оның ән салу, рэп және биді үйлестіру қабілетін Майкл Джексонмен салыстырады.\n\n20 жылдан астам мансабында 10-нан астам альбом шығарды, олардың көпшілігі Billboard чарттарының топ-5-не кірді.`,
      achievements: ["Үздік R&B орындалымы үшін Grammy", "Billboard топ-5-те 10+ альбом", "50+ платиналық сингл", "8 номинацияда BET Awards жеңімпазы"],
      country: "АҚШ",
    },
  },

  brysontiller: {
    en: {
      bio: `Bryson Tiller is a singer from Louisville and the creator and popularizer of the "trap soul" genre. His debut album "T R A P S O U L" (2015) was self-recorded via SoundCloud and became a landmark album of the decade.\n\nHe signed with RCA after the track "Exchange" went viral.`,
      achievements: ["3 platinum albums", '"Exchange" — 3× platinum', "BET Hip Hop Award: Best New Artist", "Creator of the Trap Soul genre", "Collaborations with Drake and Beyoncé"],
      country: "USA",
    },
    tr: {
      bio: `Bryson Tiller, Louisville'den bir şarkıcı ve "trap soul" türünün yaratıcısı ile popülerleştiricisidir. İlk albümü "T R A P S O U L" (2015), SoundCloud aracılığıyla bağımsız olarak kaydedildi ve on yılın kilometre taşı albümü haline geldi.\n\n"Exchange" parçasının viral olmasının ardından RCA ile sözleşme imzaladı.`,
      achievements: ["3 platin albüm", '"Exchange" — 3× platin', "BET Hip Hop Ödülü: En İyi Yeni Sanatçı", "Trap Soul türünün yaratıcısı", "Drake ve Beyoncé ile işbirliği"],
      country: "ABD",
    },
    kz: {
      bio: `Bryson Tiller — Луисвиллден шыққан әнші және «trap soul» жанрының авторы мен танымалдастырушысы. Оның «T R A P S O U L» (2015) дебюттік альбомы SoundCloud арқылы өз бетінше жазылып, онжылдықтың белгілі бір альбомына айналды.\n\n«Exchange» треки вирусқа айналғаннан кейін RCA-мен келісімшарт жасасты.`,
      achievements: ["3 платиналық альбом", '«Exchange» — 3× платина', "BET Hip Hop сыйлығы: үздік жаңа орындаушы", "Trap Soul жанрының авторы", "Drake және Beyoncé-мен коллаборациялар"],
      country: "АҚШ",
    },
  },

  "6lack": {
    en: {
      bio: `Ricardo Valdez Valentine (6LACK, pronounced "black") is a singer from Atlanta with dark, atmospheric R&B at the intersection of trap and indie. His debut album "Free 6LACK" earned him a Grammy nomination.\n\nKnown for piercingly honest lyrics. Has worked with SZA, Billie Eilish and Khalid.`,
      achievements: ["Grammy nomination: Best New Artist", '"Free 6LACK" — Billboard 200 Top 40', 'Duet with SZA "East Atlanta Love Letter"', "15M+ listeners on Spotify"],
      country: "USA",
    },
    tr: {
      bio: `Ricardo Valdez Valentine (6LACK, "black" olarak telaffuz edilir), Atlanta'dan trap ile indie'nin kesişiminde karanlık, atmosferik R&B yapan bir şarkıcıdır. İlk albümü "Free 6LACK" kendisine Grammy adaylığı kazandırdı.\n\nDelici dürüst sözleriyle tanınır. SZA, Billie Eilish ve Khalid ile çalıştı.`,
      achievements: ["Grammy adaylığı: En İyi Yeni Sanatçı", '"Free 6LACK" — Billboard 200 Top 40', 'SZA ile düet "East Atlanta Love Letter"', "Spotify'da 15M+ dinleyici"],
      country: "ABD",
    },
    kz: {
      bio: `Рикардо Валдес Валентайн (6LACK, «блэк» деп айтылады) — Атлантадан шыққан, трэп пен индидің қиылысында қараңғы, атмосфералық R&B стилінде жасайтын әнші. «Free 6LACK» дебюттік альбомы Grammy номинациясын алды.\n\nКесіп өтетін шынайы лирикасымен танымал. SZA, Billie Eilish және Khalid-пен бірге жұмыс жасады.`,
      achievements: ["Grammy номинациясы: үздік жаңа орындаушы", '«Free 6LACK» — Billboard 200 Топ-40', 'SZA-мен дуэт «East Atlanta Love Letter»', "Spotify-да 15М+ тыңдаушы"],
      country: "АҚШ",
    },
  },

  justinbieber: {
    en: {
      bio: `Justin Bieber from Stratford is one of the youngest artists to debut at number one on the Billboard. He was discovered by a manager on YouTube at age 13.\n\nAfter a public crisis he returned with the album "Purpose" (2015) and speaks openly about mental health.`,
      achievements: ["2 Grammy Awards", "Youngest solo artist at #1 on the Hot 100", "70M+ listeners on Spotify", "Purpose World Tour: 150+ concerts"],
      country: "Canada",
    },
    tr: {
      bio: `Stratford'dan Justin Bieber, Billboard'da birinci sıradan çıkış yapan en genç sanatçılardan biridir. 13 yaşında YouTube'da bir menajer tarafından keşfedildi.\n\nKamuoyunu etkileyen bir krizin ardından "Purpose" (2015) albümüyle geri döndü ve ruh sağlığı hakkında açıkça konuşuyor.`,
      achievements: ["2 Grammy Ödülü", "Hot 100'de №1 olan en genç solo sanatçı", "Spotify'da 70M+ dinleyici", "Purpose Dünya Turu: 150+ konser"],
      country: "Kanada",
    },
    kz: {
      bio: `Стратфордтан Джастин Бибер Billboard-да №1 позициядан дебют жасаған ең жас орындаушылардың бірі. Ол 13 жасында YouTube-та менеджер тапқан.\n\nАшық дағдарыстан кейін «Purpose» (2015) альбомымен оралды және психикалық денсаулық туралы ашық сөйлейді.`,
      achievements: ["2 Grammy сыйлығы", "Hot 100-де №1-ге жеткен ең жас жеке орындаушы", "Spotify-да 70М+ тыңдаушы", "Purpose дүниежүзілік турне: 150+ концерт"],
      country: "Канада",
    },
  },

  mj: {
    en: {
      bio: `Michael Jackson (1958–2009) — the "King of Pop," the best-selling music artist of all time. Total sales exceed 400 million records.\n\nThe album "Thriller" (1982) is the best-selling album in history. He revolutionized the music video as an art form. The Moonwalk (1983) entered cultural history forever.`,
      achievements: ["26 Grammy Awards (record)", '"Thriller" — best-selling album of all time', "Presidential Medal of Honor from the President of the USA", "Rock and Roll Hall of Fame — twice", "400M+ records sold", "Invented the Moonwalk technique"],
      country: "USA",
    },
    tr: {
      bio: `Michael Jackson (1958–2009) — "Pop'un Kralı," tüm zamanların en çok satan müzik sanatçısı. Toplam satışlar 400 milyonun üzerindedir.\n\n"Thriller" (1982) albümü tarihin en çok satan albümüdür. Müzik videosunu bir sanat formu olarak devrimleştirdi. Moonwalk (1983) kültür tarihine sonsuza dek girdi.`,
      achievements: ["26 Grammy Ödülü (rekor)", '"Thriller" — tüm zamanların en çok satan albümü', "ABD Başkanı\'ndan Şeref Nişanı", "Rock and Roll Şöhret Müzesi — iki kez", "400M+ plak satışı", "Moonwalk tekniğini icat etti"],
      country: "ABD",
    },
    kz: {
      bio: `Майкл Джексон (1958–2009) — «Поп музыкасының королі», барлық уақыттың ең көп сатылатын музыкалық орындаушысы. Жалпы сатылым 400 миллион пластинкадан асады.\n\n«Thriller» (1982) альбомы тарихтағы ең көп сатылатын альбом. Ол музыкалық бейнені өнер формасы ретінде революциялады. Moonwalk (1983) мәдениет тарихына мәңгілікке кірді.`,
      achievements: ["26 Grammy сыйлығы (рекорд)", '«Thriller» — барлық уақыттың ең көп сатылатын альбомы', "АҚШ Президентінен Ардақ медалі", "Рок-н-ролл Даңқ залы — екі рет", "400М+ пластинка сатылымы", "Moonwalk техникасын ойлап тапты"],
      country: "АҚШ",
    },
  },

  mayot: {
    en: {
      bio: `Mayot (Artyom Nikitin) is a Russian trap artist from Tyumen. He blends hip-hop sounds with melodic R&B elements and auto-tune.\n\nHe gained recognition as a member of the Melon Music collective and through streaming releases. He was among the most-listened-to artists in Russia according to Spotify.`,
      achievements: ["3 platinum singles in Russia", '"High" — Music Video of the Year (Ris za Tvorchestvo)', "Top-30 Yandex Music 2022–2024", "Solo concerts in Moscow and St. Petersburg"],
      country: "Russia",
    },
    tr: {
      bio: `Mayot (Artyom Nikitin), Tyumen'den Rus bir trap sanatçısıdır. Hip-hop sesini melodik R&B unsurları ve auto-tune ile harmanlıyor.\n\nMelon Music kolektifinin bir üyesi olarak ve yayın platformlarındaki yayınlarla tanınırlık kazandı. Spotify'a göre Rusya'nın en çok dinlenen sanatçıları arasında yer aldı.`,
      achievements: ["Rusya'da 3 platin single", '"High" — Yılın Müzik Videosu (Ris za Tvorchestvo)', "Yandex Müzik Top-30 2022–2024", "Moskova ve St. Petersburg'da solo konserler"],
      country: "Rusya",
    },
    kz: {
      bio: `Mayot (Артём Никитин) — Тюменьнен шыққан орыс трэп орындаушысы. Хип-хоп үнін мелодиялық R&B элементтері мен авто-тюнмен ұштастырады.\n\nMelon Music ұжымының мүшесі ретінде және стриминг платформаларындағы шығарылымдары арқылы танымалдылық алды. Spotify деректері бойынша Ресейдің ең көп тыңдалатын орындаушылары арасында болды.`,
      achievements: ["Ресейде 3 платиналық сингл", '«High» — Жылдың музыкалық бейнесі (Рис за Творчество)', "Яндекс.Музыка Топ-30 2022–2024", "Мәскеу мен Санкт-Петербургте жеке концерттер"],
      country: "Ресей",
    },
  },

  ogbuda: {
    en: {
      bio: `OG Buda (Grigory Lyakhov) is a Russian rapper from Tyumen, a member of the Melon Music and RNDM Crew collectives. His sound blends trap, drill and Detroit-influenced music with melodic R&B inflections and auto-tune.\n\nHe gained wide recognition after releases from 2018–2021 and collaborations with Platina and Mayot. He was included in Forbes' "30 Under 30" list and consistently accumulates millions of streams.`,
      achievements: ['Forbes "30 Under 30" list (2022)', "Albums and singles in streaming charts", "Collaborations with Platina, Mayot, Feduk", "Millions of streams and active touring"],
      country: "Russia",
    },
    tr: {
      bio: `OG Buda (Grigory Lyakhov), Tyumen'den Rus bir rapçi; Melon Music ve RNDM Crew kolektiflerinin üyesidir. Sesi; melodik R&B tonlamaları ve auto-tune ile trap, drill ve Detroit etkili müziği harmanlıyor.\n\n2018–2021 yılları arasındaki yayınları ve Platina ile Mayot işbirlikleriyle geniş bir tanınırlık kazandı. Forbes'un "30 Altı 30" listesine girdi ve tutarlı biçimde milyonlarca dinlenme biriktiriyor.`,
      achievements: ['Forbes "30 Altı 30" listesi (2022)', "Yayın grafiklerindeki albümler ve single'lar", "Platina, Mayot, Feduk ile işbirliği", "Milyonlarca dinlenme ve aktif konser faaliyeti"],
      country: "Rusya",
    },
    kz: {
      bio: `OG Buda (Григорий Ляхов) — Тюменьнен шыққан орыс рэпері, Melon Music және RNDM Crew ұжымдарының мүшесі. Оның үні трэп, дрилл және Детройт музыкасын мелодиялық R&B интонациялары мен авто-тюнмен ұштастырады.\n\n2018–2021 жылдардағы шығарылымдар мен Платина және Mayot-пен коллаборациялардан кейін кең танымалдылық алды. Forbes «30 до 30» тізіміне енгізілді.`,
      achievements: ['Forbes «30 до 30» тізімі (2022)', "Стриминг чарттарындағы альбомдар мен синглдар", "Платина, Mayot, Feduk-пен коллаборациялар", "Миллиондаған тыңдалым және белсенді концерттік іс-шаралар"],
      country: "Ресей",
    },
  },

  danrey: {
    en: {
      bio: `Danrey (Danial Uakhitzhanov) is a young Kazakhstani artist working at the intersection of pop music and alternative R&B. Atmospheric sound, deep lyrics and a distinctive approach to production.\n\nHe began active work in 2024 and quickly drew attention with his sincerity. He represents the new generation of Kazakhstani R&B.`,
      achievements: ['Debut track "С тобой" — thousands of streams', "Representative of the new generation of Kazakhstani R&B", "Actively working on a debut EP"],
      country: "Kazakhstan",
    },
    tr: {
      bio: `Danrey (Danial Uakhitzhanov), pop müzik ile alternatif R&B'nin kesişiminde çalışan genç Kazakistanlı bir sanatçıdır. Atmosferik ses, derin sözler ve prodüksiyona özgün bir yaklaşım.\n\n2024 yılında aktif çalışmalarına başladı ve samimiyetiyle kısa sürede ilgi çekti. Kazakistan R&B'sinin yeni neslini temsil ediyor.`,
      achievements: ['Debut single "С тобой" — binlerce dinlenme', "Kazakistan R&B'sinin yeni neslinin temsilcisi", "Debut EP üzerinde aktif çalışma"],
      country: "Kazakistan",
    },
    kz: {
      bio: `Дэнрэй (Даниал Уахитжанов) — поп-музыка мен альтернативті R&B-дің қиылысында жұмыс жасайтын жас қазақстандық орындаушы. Атмосфералық үн, терең лирика және продакшенге өзіндік тәсіл.\n\n2024 жылы белсенді іс-шараларды бастап, шынайылығымен тез назар аударды. Қазақстандық R&B-дің жаңа ұрпағын білдіреді.`,
      achievements: ['«С тобой» дебюттік треки — мыңдаған тыңдалым', "Қазақстандық R&B-дің жаңа ұрпағының өкілі", "Дебюттік EP-ді белсенді жасауда"],
      country: "Қазақстан",
    },
  },

  jony: {
    en: {
      bio: `Jony (Jahid Guseinli) is an Azerbaijani singer from Moscow, performing music at the crossroads of pop and Russian-language R&B with Eastern motifs. He stands out for his melodic vocals and emotional delivery.\n\nHe gained widespread recognition after the hits "Alleya" and "Kometa," cementing himself in the top charts of streaming platforms and becoming one of the most popular artists in the CIS.`,
      achievements: ['"Alleya" — 200M+ streams', "Top-5 Yandex Music 2019–2020", "Concerts in 15+ CIS cities"],
      country: "Azerbaijan",
    },
    tr: {
      bio: `Jony (Jahid Guseinli), Moskova'dan Azerbaycanlı bir şarkıcıdır; pop ve Rusça R&B'yi Doğu motifleriyle buluşturan müzik yapıyor. Melodik vokali ve duygusal yorumuyla öne çıkıyor.\n\n"Alleya" ve "Kometa" hitleriyle geniş bir tanınırlık kazandı; yayın platformlarının üst listelerinde yer alarak BDT'nin en popüler sanatçılarından biri haline geldi.`,
      achievements: ['"Alleya" — 200M+ dinlenme', "Yandex Müzik Top-5 2019–2020", "15+ BDT şehrinde konser"],
      country: "Azerbaycan",
    },
    kz: {
      bio: `Jony (Жаһид Гусейнли) — Мәскеуден шыққан әзербайжандық әнші, поп пен орыс тілді R&B-ді шығыс мотивтерімен ұштастыратын музыка орындайды. Мелодиялық вокалы мен эмоционалды орындалымымен ерекшеленеді.\n\n«Аллея» және «Комета» хиттерінен кейін кең танымалдылыққа ие болды, стриминг платформаларының жоғарғы чарттарын алып, ТМД-ның ең танымал орындаушыларының біріне айналды.`,
      achievements: ['«Аллея» — 200М+ тыңдалым', "Яндекс.Музыка Топ-5 2019–2020", "ТМД-ның 15+ қаласында концерттер"],
      country: "Әзербайжан",
    },
  },

  thelimba: {
    en: {
      bio: `The Limba (Mukhametali Akhmetzhanov) is a Kazakhstani singer and songwriter, one of the key figures of Russian-language pop-R&B. His style combines contemporary pop, R&B and soul with a soft vocal and atmospheric arrangements.\n\nHe gained wide recognition through hits and collaborations with popular artists, consistently charting highly in Russia and Kazakhstan.`,
      achievements: ["Hits with tens of millions of streams", "Top charts in Russia and Kazakhstan", "Collaborations with Andro, Jony, Navai", "Active touring in the CIS"],
      country: "Kazakhstan",
    },
    tr: {
      bio: `The Limba (Mukhametali Akhmetzhanov), Kazakistanlı bir şarkıcı ve söz yazarıdır; Rusça pop-R&B'nin önemli isimlerinden biri. Tarzı, yumuşak vokali ve atmosferik aranjmanlarıyla çağdaş pop, R&B ve soul'u bir araya getiriyor.\n\nPopüler sanatçılarla hitler ve işbirlikleri sayesinde geniş bir tanınırlık kazandı; Rusya ve Kazakistan listelerinde istikrarlı biçimde yüksek sıralarda yer alıyor.`,
      achievements: ["Onlarca milyon dinlenmeye sahip hitler", "Rusya ve Kazakistan'ın üst listeleri", "Andro, Jony, Navai ile işbirliği", "BDT'de aktif konser faaliyeti"],
      country: "Kazakistan",
    },
    kz: {
      bio: `The Limba (Мухаметали Ахметжанов) — қазақстандық әнші және ән авторы, орыс тілді поп-R&B-дің негізгі өкілдерінің бірі. Оның стилі жұмсақ вокал мен атмосфералық аранжировкалармен заманауи поп, R&B және соулды ұштастырады.\n\nПопулярлы орындаушылармен хиттер мен коллаборациялар арқылы кең танымалдылыққа ие болды, Ресей мен Қазақстан чарттарында тұрақты жоғары орын алады.`,
      achievements: ["Ондаған миллион тыңдалымы бар хиттер", "Ресей мен Қазақстанның жоғарғы чарттары", "Andro, Jony, Navai-мен коллаборациялар", "ТМД-да белсенді концерттік іс-шаралар"],
      country: "Қазақстан",
    },
  },

  mot: {
    en: {
      bio: `MOT (Matvey Melnikov) is a Russian rapper and singer from Krymsk, a former artist on the Black Star label. His music combines pop, hip-hop and Russian-language R&B with an emphasis on melodic vocals and lyrical themes.\n\nHe gained wide recognition in the 2010s through hits and collaborations, becoming one of the key artists of melodic rap in Russia.`,
      achievements: ['Winner of the "Novoye Radio AWARDS"', "Multiple entries in streaming charts", "Collaborations with Timati, Basta, Jah Khalib", "Active touring in the CIS"],
      country: "Russia",
    },
    tr: {
      bio: `MOT (Matvey Melnikov), Krymsk'tan Rus bir rapçi ve şarkıcı; eski bir Black Star etiketi sanatçısı. Müziği; melodik vokale ve lirik temalara vurgu yaparak pop, hip-hop ve Rusça R&B'yi bir araya getiriyor.\n\n2010'larda hitler ve işbirliği sayesinde geniş tanınırlık kazandı ve Rusya'nın melodic rap'inin kilit sanatçılarından biri oldu.`,
      achievements: ['"Novoye Radio AWARDS" ödülü kazananı', "Yayın grafiklerinde birden fazla giriş", "Timati, Basta, Jah Khalib ile işbirliği", "BDT'de aktif konser faaliyeti"],
      country: "Rusya",
    },
    kz: {
      bio: `МОТ (Матвей Мельников) — Крымскіден шыққан орыс рэпері және әншісі, бұрынғы Black Star лейблі орындаушысы. Оның музыкасы мелодиялық вокал мен лирикалық тақырыптарға баса назар аудара отырып поп, хип-хоп пен орыс тілді R&B-ді ұштастырады.\n\n2010-шы жылдары хиттер мен коллаборациялар арқылы кең танымалдылыққа ие болды, Ресейдің мелодиялық рэптің негізгі орындаушыларының біріне айналды.`,
      achievements: ['«Новое Радио AWARDS» жеңімпазы', "Стриминг чарттарына бірнеше рет кіру", "Тимати, Баста, Jah Khalib-пен коллаборациялар", "ТМД-да белсенді концерттік іс-шаралар"],
      country: "Ресей",
    },
  },

  bianca: {
    en: {
      bio: `Bianca (Tatyana Lipnitskaya) is a Belarusian-Russian singer, one of the founders of the Russian-language R&B and soul direction in pop music. Her style combines R&B, hip-hop and pop with a distinctive vocal manner and street aesthetics.\n\nShe gained wide recognition in the mid-2000s through the hits "Byli tantsy" and "Pro leto," cementing herself as one of the key figures of the genre.`,
      achievements: ["20+ year career", "6 gold and platinum singles", "Muz-TV Award in multiple categories", "Collaborations with Timati and L'One"],
      country: "Russia",
    },
    tr: {
      bio: `Bianca (Tatyana Lipnitskaya), Belaruslu-Rus bir şarkıcı; pop müzikte Rusça R&B ve soul yöneliminin kurucularından biri. Tarzı, kendine özgü vokal tarzı ve sokak estetiğiyle R&B, hip-hop ve pop'u birleştiriyor.\n\n2000'lerin ortasında "Byli tantsy" ve "Pro leto" hitleriyle geniş bir tanınırlık kazandı ve türün kilit isimlerinden biri olarak yerini pekiştirdi.`,
      achievements: ["20+ yıllık kariyer", "6 altın ve platin single", "Çok sayıda kategoride Muz-TV Ödülü", "Timati ve L'One ile işbirliği"],
      country: "Rusya",
    },
    kz: {
      bio: `Бьянка (Татьяна Липницкая) — беларусь-орыс әншісі, поп-музыкадағы орыс тілді R&B және соул бағытының негізін салушылардың бірі. Оның стилі өзіндік вокал мәнері мен көше эстетикасымен R&B, хип-хоп пен попты ұштастырады.\n\n2000-жылдардың ортасында «Были танцы» және «Про лето» хиттері арқылы кең танымалдылыққа ие болды.`,
      achievements: ["20+ жылдық мансап", "6 алтын және платиналық сингл", "Бірнеше номинацияда Муз-ТВ сыйлығы", "Тимати және L'One-мен коллаборациялар"],
      country: "Ресей",
    },
  },

  yungway: {
    en: {
      bio: `Yungway (Arthur Shaburov) is a Russian rapper from Tyumen and a member of the Melon Music collective. His sound is built on trap and hip-hop with elements of melodic R&B, atmospheric auto-tune vocals and emotional motifs.\n\nHe gained recognition through Melon Music releases and collaborations with new-wave artists, accumulating millions of streams.`,
      achievements: ["Member of Melon Music collective", "Features with Mayot, 163onmyneck, Bushido Zho", "Millions of streams on streaming platforms", 'Debut album "Excalibur"'],
      country: "Russia",
    },
    tr: {
      bio: `Yungway (Arthur Shaburov), Tyumen'den Rus bir rapçi ve Melon Music kolektifinin bir üyesidir. Sesi; trap ve hip-hop üzerine inşa edilmiş olup melodik R&B unsurları, atmosferik auto-tune vokalleri ve duygusal motifler içeriyor.\n\nMelon Music yayınları ve yeni dalga sanatçılarla yapılan işbirlikleri sayesinde tanınırlık kazandı; milyonlarca dinlenme biriktiriyor.`,
      achievements: ["Melon Music kolektifinin üyesi", "Mayot, 163onmyneck, Bushido Zho ile ortak parçalar", "Yayın platformlarında milyonlarca dinlenme", '"Excalibur" debut albümü'],
      country: "Rusya",
    },
    kz: {
      bio: `Yungway (Артур Шабуров) — Тюменьнен шыққан орыс рэпері, Melon Music ұжымының мүшесі. Оның үні трэп пен хип-хопқа негізделген, мелодиялық R&B элементтері, атмосфералық авто-тюн вокалдары мен эмоционалды мотивтер бар.\n\nMelon Music шығарылымдары мен жаңа толқын орындаушыларымен коллаборациялар арқылы танымалдылық алды, миллиондаған тыңдалым жинады.`,
      achievements: ["Melon Music ұжымының мүшесі", "Mayot, 163onmyneck, Bushido Zho-мен фиттер", "Стриминг платформаларында миллиондаған тыңдалым", '«Excalibur» дебюттік альбомы'],
      country: "Ресей",
    },
  },

  gonefludd: {
    en: {
      bio: `GONE.Fludd (Alexander Buze) is a Russian rapper from Murmansk and a vivid representative of the new school of hip-hop. His style combines trap, cloud rap and melodic elements with R&B influence and an experimental approach.\n\nHe gained wide recognition after releases and viral tracks in the late 2010s, becoming one of the most recognizable artists of his wave.`,
      achievements: ['"Boys Don\'t Cry" album gained wide popularity', "Hits with tens of millions of streams", "Active touring and festival appearances"],
      country: "Russia",
    },
    tr: {
      bio: `GONE.Fludd (Alexander Buze), Murmansk'tan Rus bir rapçi ve yeni okul hip-hop'un canlı bir temsilcisidir. Tarzı; trap, cloud rap ve melodik unsurları R&B etkisi ve deneysel bir yaklaşımla harmanlıyor.\n\n2010'ların sonundaki yayınlar ve viral parçalardan sonra geniş bir tanınırlık kazandı; kendi dalgasının en tanınan sanatçılarından biri oldu.`,
      achievements: ['"Boys Don\'t Cry" albümü geniş popülerlik kazandı', "Onlarca milyon dinlenmeye sahip hitler", "Aktif konser faaliyeti ve festivaller"],
      country: "Rusya",
    },
    kz: {
      bio: `GONE.Fludd (Александр Бузе) — Мурманскіден шыққан орыс рэпері, жаңа мектеп хип-хоптың жарқын өкілі. Оның стилі R&B ықпалы мен эксперименттік тәсілмен трэп, клауд-рэп пен мелодиялық элементтерді ұштастырады.\n\n2010-жылдардың аяғындағы шығарылымдар мен вирустық треклерден кейін кең танымалдылыққа ие болды.`,
      achievements: ['«Boys Don\'t Cry» альбомы кең танымалдылыққа ие болды', "Ондаған миллион тыңдалымы бар хиттер", "Белсенді концерттік іс-шаралар мен фестивальдер"],
      country: "Ресей",
    },
  },

  mdee: {
    en: {
      bio: `M'dee (Madi Toktarov) is a Kazakhstani singer, songwriter and producer from Almaty, one of the vivid representatives of Russian-language R&B and soul music. His music combines pop, funk and disco with melancholic R&B vocals and atmospheric sound.\n\nHe gained recognition after releases "Almatinskiy jazz" and "Feromon," cementing himself as one of the key artists of the new wave.`,
      achievements: ['"Feromon" album — an important R&B release', 'The "Almatinskiy jazz" trilogy received wide acclaim', "Collaborations with Zivert, Scriptonite", "Millions of streams on streaming platforms"],
      country: "Kazakhstan",
    },
    tr: {
      bio: `M'dee (Madi Toktarov), Almatı'dan Kazakistanlı bir şarkıcı, söz yazarı ve yapımcı; Rusça R&B ve soul müziğinin canlı temsilcilerinden biri. Müziği; melankolik R&B vokalleri ve atmosferik sesle pop, funk ve diskoyu harmanlıyor.\n\n"Almatinskiy jazz" ve "Feromon" yayınlarından sonra tanınırlık kazandı ve yeni dalganın kilit sanatçılarından biri olarak yerini pekiştirdi.`,
      achievements: ['"Feromon" albümü — önemli bir R&B yayını', '"Almatinskiy jazz" üçlemesi geniş takdir gördü', "Zivert, Scriptonite ile işbirliği", "Yayın platformlarında milyonlarca dinlenme"],
      country: "Kazakistan",
    },
    kz: {
      bio: `M'dee (Мади Тоқтаров) — Алматыдан шыққан қазақстандық әнші, ән авторы және продюсер, орыс тілді R&B және соул-музыканың жарқын өкілдерінің бірі. Оның музыкасы меланхоликалық R&B вокалдары мен атмосфералық үнмен поп, фанк пен дисконы ұштастырады.\n\n«Алматинский джаз» және «Феромон» шығарылымдарынан кейін танымалдылық алды, жаңа толқынның негізгі орындаушыларының бірі ретінде орнықты.`,
      achievements: ['«Феромон» альбомы — R&B-дегі маңызды шығарылым', '«Алматинский джаз» трилогиясы кең мойындауға ие болды', "Zivert, Скриптонит-пен коллаборациялар", "Стриминг платформаларында миллиондаған тыңдалым"],
      country: "Қазақстан",
    },
  },

};
