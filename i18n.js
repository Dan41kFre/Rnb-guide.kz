/* ============================================================
   i18n.js — единая система переводов R&B Archive
   Подключается на ВСЕХ страницах.
   Язык сохраняется в localStorage → работает между страницами.
   ============================================================ */

const i18n = {

  /* ══════════════ РУССКИЙ ══════════════ */
  ru: {
    /* Навигация */
    "nav.home":      "Главная",
    "nav.artists":   "Артисты",
    "nav.new":       "Новинки",
    "nav.learn":     "Обучение",
    "nav.playlists": "Плейлисты",
    "nav.news":      "Новости",

    /* Шапка / кнопки */
    "auth.login":    "Вход",
    "auth.register": "Регистрация",
    "search.placeholder": "Поиск артистов, треков…",
    "search.input":  "Введите имя, трек или альбом…",
    "search.title":  "Найди своего артиста",
    "search.btn":    "Поиск",

    /* Фильтры */
    "filter.genre":        "Жанр",
    "filter.country":      "Страна",
    "filter.year":         "Год",
    "filter.allGenres":    "Все жанры",
    "filter.allCountries": "Все страны",
    "filter.allYears":     "Все годы",
    "filter.before1990":   "До 1990",
    "filter.reset":        "Сбросить",

    /* Герой */
    "hero.label": "— электронный учебный ресурс",
    "hero.title": "Погрузись в\u00A0мир",
    "hero.music": "музыки",
    "hero.sub":   "Изучай историю, артистов и культуру Rhythm &amp; Blues —<br/>от истоков Motown до современного альтернативного R&amp;B",
    "hero.cta":   "Начать изучение",
    "hero.cta2":  "Смотреть артистов",

    /* Статистика */
    "stats.artists":  "Артистов",
    "stats.tracks":   "Треков",
    "stats.articles": "Статей",

    /* Артисты */
    "artists.title": "Популярные артисты",
    "artists.all":   "Все артисты →",
    "artists.world": "🌍 Мировые артисты",
    "artists.cis":   "⭐ Артисты СНГ",

    /* Карточки */
    "card.more":   "Подробнее",
    "card.listen": "▶ Слушать",
    "date.present":"наши дни",

    /* Страны */
    "country.usa":        "США",
    "country.uk":         "Великобритания",
    "country.canada":     "Канада",
    "country.russia":     "Россия",
    "country.kazakhstan": "Казахстан",
    "country.azerbaijan": "Азербайджан",

    /* Новинки */
    "new.title": "Новинки",
    "new.all":   "Все релизы →",

    /* Обучение (index) */
    "learn.title": "Обучающий блок",
    "learn.all":   "Все статьи →",
    "learn.read":  "Читать →",
    "learn.tag.history":  "История",
    "learn.tag.theory":   "Теория",
    "learn.tag.culture":  "Культура",
    "learn.tag.modern":   "Современность",
    "learn.tag.glossary": "Глоссарий",
    "learn.art1.title": "Истоки R&amp;B: от блюза к Motown",
    "learn.art1.desc":  "Как ритм-энд-блюз вырос из афроамериканских музыкальных традиций и стал одним из самых влиятельных жанров XX века.",
    "learn.art1.time":  "12 мин чтения",
    "learn.art2.title": "Что делает трек R&amp;B-звучащим?",
    "learn.art2.desc":  "Разбираем характерные элементы: грув, вокальные мелизмы, синкопы и сэмплирование.",
    "learn.art2.time":  "8 мин чтения",
    "learn.art3.title": "Neo Soul — бунт против поп-формата",
    "learn.art3.desc":  "D'Angelo, Erykah Badu, Lauryn Hill — как в 90-х появилось движение, вернувшее живую душу в коммерческую музыку.",
    "learn.art3.time":  "10 мин чтения",
    "learn.art4.title": "Alt R&amp;B: жанр без границ",
    "learn.art4.desc":  "Frank Ocean, SZA, Blood Orange — как альтернативный R&amp;B ломает жанровые рамки.",
    "learn.art4.time":  "9 мин чтения",
    "learn.art5.title": "Ключевые термины и понятия R&amp;B",
    "learn.art5.desc":  "Справочник: мелизм, брейкдаун, bridge, ad-lib и другие термины с примерами треков.",
    "learn.art5.time":  "6 мин чтения",

    /* Плейлист */
    "playlist.title": "♡ Мне нравится",
    "playlist.tracks":"треков",
    "playlist.empty": "Нажми ♡ на любом треке, чтобы добавить его сюда",

    /* Страница learn.html */
    "lp.back":         "← К обучению",
    "lp.notfound":     "Статья не найдена",
    "lp.notfound.sub": "Проверь URL или вернись к списку статей",
    "lp.list.title":   "Все материалы",
    "lp.list.sub":     "Изучай историю, теорию и культуру Rhythm & Blues",
    "lp.readmore":     "Читать →",
    "lp.minread":      "мин чтения",

    /* Страница auth.html */
    "auth.back":              "← На главную",
    "auth.tab.login":         "Вход",
    "auth.tab.register":      "Регистрация",
    "auth.login.title":       "С возвращением!",
    "auth.login.sub":         "Войди, чтобы сохранять треки и плейлисты",
    "auth.login.btn":         "Войти",
    "auth.login.noacc":       "Нет аккаунта?",
    "auth.login.toreg":       "Зарегистрироваться",
    "auth.login.or":          "или",
    "auth.reg.title":         "Создать аккаунт",
    "auth.reg.sub":           "Регистрация займёт меньше минуты",
    "auth.reg.name":          "Имя",
    "auth.reg.name.ph":       "Как тебя зовут?",
    "auth.reg.pw":            "Пароль",
    "auth.reg.pw.ph":         "Минимум 6 символов",
    "auth.reg.pw2":           "Повтори пароль",
    "auth.reg.btn":           "Создать аккаунт",
    "auth.reg.haveacc":       "Уже есть аккаунт?",
    "auth.reg.tologin":       "Войти",
    "auth.reg.or":            "или",
    "auth.profile.tracks":    "треков в плейлисте",
    "auth.profile.since":     "дата регистрации",
    "auth.profile.liked":     "♡ Мне нравится",
    "auth.profile.logout":    "Выйти из аккаунта",
    "auth.label.pw":          "Пароль",
    "auth.or":                "или",

    /* Страница artist.html */
    "artist.back":      "← Назад к артистам",
    "artist.bio":       "Биография",
    "artist.achieve":   "Достижения",
    "artist.tracks":    "Треки",
    "artist.liked":     "♡ Мне нравится",
    "artist.notfound":  "Артист не найден",
    "artist.notfound.sub": "Проверь URL или вернись на главную",
    "artist.tohome":    "← На главную",
    "artist.listen":    "▶ Слушать",
    "artist.liked.empty": "Нажми ♡ на любом треке, чтобы добавить его сюда",

    /* Футер */
    "footer.desc":      "Электронный учебный ресурс о Rhythm &amp; Blues — история, артисты, культура.",
    "footer.nav":       "Навигация",
    "footer.resources": "Ресурсы",
    "footer.contacts":  "Контакты",
    "footer.lang":      "Язык:",
    "footer.city":      "Казахстан, Караганда",
    "footer.copy":      "© 2025 R&amp;B Archive. Дипломная работа. Все права защищены.",
    "footer.made":      "Сделано с ♥ для R&amp;B культуры",
    "res.video":        "Видеоуроки",
    "res.tests":        "Тесты",
  },

  /* ══════════════ ENGLISH ══════════════ */
  en: {
    "nav.home":      "Home",
    "nav.artists":   "Artists",
    "nav.new":       "New Releases",
    "nav.learn":     "Education",
    "nav.playlists": "Playlists",
    "nav.news":      "News",

    "auth.login":    "Sign In",
    "auth.register": "Register",
    "search.placeholder": "Search artists, tracks…",
    "search.input":  "Enter name, track or album…",
    "search.title":  "Find Your Artist",
    "search.btn":    "Search",

    "filter.genre":        "Genre",
    "filter.country":      "Country",
    "filter.year":         "Year",
    "filter.allGenres":    "All Genres",
    "filter.allCountries": "All Countries",
    "filter.allYears":     "All Years",
    "filter.before1990":   "Before 1990",
    "filter.reset":        "Reset",

    "hero.label": "— electronic learning resource",
    "hero.title": "Dive into the World of",
    "hero.music": "Music",
    "hero.sub":   "Explore the history, artists and culture of Rhythm &amp; Blues —<br/>from Motown roots to modern alternative R&amp;B",
    "hero.cta":   "Start Learning",
    "hero.cta2":  "Browse Artists",

    "stats.artists":  "Artists",
    "stats.tracks":   "Tracks",
    "stats.articles": "Articles",

    "artists.title": "Popular Artists",
    "artists.all":   "All Artists →",
    "artists.world": "🌍 World Artists",
    "artists.cis":   "⭐ CIS Artists",

    "card.more":    "Details",
    "card.listen":  "▶ Play",
    "date.present": "present",

    "country.usa":        "USA",
    "country.uk":         "United Kingdom",
    "country.canada":     "Canada",
    "country.russia":     "Russia",
    "country.kazakhstan": "Kazakhstan",
    "country.azerbaijan": "Azerbaijan",

    "new.title": "New Releases",
    "new.all":   "All Releases →",

    "learn.title": "Education",
    "learn.all":   "All Articles →",
    "learn.read":  "Read →",
    "learn.tag.history":  "History",
    "learn.tag.theory":   "Theory",
    "learn.tag.culture":  "Culture",
    "learn.tag.modern":   "Modern",
    "learn.tag.glossary": "Glossary",
    "learn.art1.title": "R&amp;B Origins: From Blues to Motown",
    "learn.art1.desc":  "How rhythm and blues grew from African-American musical traditions to become one of the most influential genres of the 20th century.",
    "learn.art1.time":  "12 min read",
    "learn.art2.title": "What Makes a Track Sound Like R&amp;B?",
    "learn.art2.desc":  "Breaking down the key elements: groove, vocal melisma, syncopation, and sampling.",
    "learn.art2.time":  "8 min read",
    "learn.art3.title": "Neo Soul — A Rebellion Against Pop",
    "learn.art3.desc":  "D'Angelo, Erykah Badu, Lauryn Hill — how the 90s movement brought soul back to commercial music.",
    "learn.art3.time":  "10 min read",
    "learn.art4.title": "Alt R&amp;B: A Genre Without Borders",
    "learn.art4.desc":  "Frank Ocean, SZA, Blood Orange — how alternative R&amp;B breaks genre barriers.",
    "learn.art4.time":  "9 min read",
    "learn.art5.title": "Key R&amp;B Terms and Concepts",
    "learn.art5.desc":  "A guide to melisma, breakdown, bridge, ad-lib and other terms with track examples.",
    "learn.art5.time":  "6 min read",

    "playlist.title":  "♡ Liked",
    "playlist.tracks": "tracks",
    "playlist.empty":  "Press ♡ on any track to add it here",

    "lp.back":         "← Back to Education",
    "lp.notfound":     "Article not found",
    "lp.notfound.sub": "Check the URL or return to the article list",
    "lp.list.title":   "All Materials",
    "lp.list.sub":     "Explore the history, theory and culture of Rhythm & Blues",
    "lp.readmore":     "Read →",
    "lp.minread":      "min read",

    "auth.back":           "← Back to Home",
    "auth.tab.login":      "Sign In",
    "auth.tab.register":   "Register",
    "auth.login.title":    "Welcome back!",
    "auth.login.sub":      "Sign in to save tracks and playlists",
    "auth.login.btn":      "Sign In",
    "auth.login.noacc":    "No account?",
    "auth.login.toreg":    "Register",
    "auth.login.or":       "or",
    "auth.reg.title":      "Create an Account",
    "auth.reg.sub":        "Registration takes less than a minute",
    "auth.reg.name":       "Name",
    "auth.reg.name.ph":    "What's your name?",
    "auth.reg.pw":         "Password",
    "auth.reg.pw.ph":      "At least 6 characters",
    "auth.reg.pw2":        "Confirm password",
    "auth.reg.btn":        "Create Account",
    "auth.reg.haveacc":    "Already have an account?",
    "auth.reg.tologin":    "Sign In",
    "auth.reg.or":         "or",
    "auth.profile.tracks": "tracks in playlist",
    "auth.profile.since":  "registered since",
    "auth.profile.liked":  "♡ Liked",
    "auth.profile.logout": "Sign Out",
    "auth.label.pw":        "Password",
    "auth.or":              "or",

    "artist.back":     "← Back to Artists",
    "artist.bio":      "Biography",
    "artist.achieve":  "Achievements",
    "artist.tracks":   "Tracks",
    "artist.liked":    "♡ Liked",
    "artist.notfound": "Artist not found",
    "artist.notfound.sub": "Check the URL or return to the home page",
    "artist.tohome":   "← Home",
    "artist.listen":   "▶ Play",
    "artist.liked.empty": "Press ♡ on any track to add it here",

    "footer.desc":      "An electronic learning resource about Rhythm &amp; Blues — history, artists, culture.",
    "footer.nav":       "Navigation",
    "footer.resources": "Resources",
    "footer.contacts":  "Contacts",
    "footer.lang":      "Language:",
    "footer.city":      "Kazakhstan, Karaganda",
    "footer.copy":      "© 2025 R&amp;B Archive. Thesis Project. All rights reserved.",
    "footer.made":      "Made with ♥ for R&amp;B culture",
    "res.video":        "Video Lessons",
    "res.tests":        "Quizzes",
  },

  /* ══════════════ TÜRKÇE ══════════════ */
  tr: {
    "nav.home":      "Ana Sayfa",
    "nav.artists":   "Sanatçılar",
    "nav.new":       "Yeni Çıkanlar",
    "nav.learn":     "Eğitim",
    "nav.playlists": "Çalma Listeleri",
    "nav.news":      "Haberler",

    "auth.login":    "Giriş Yap",
    "auth.register": "Kaydol",
    "search.placeholder": "Sanatçı, parça ara…",
    "search.input":  "İsim, parça veya albüm girin…",
    "search.title":  "Sanatçını Bul",
    "search.btn":    "Ara",

    "filter.genre":        "Tür",
    "filter.country":      "Ülke",
    "filter.year":         "Yıl",
    "filter.allGenres":    "Tüm Türler",
    "filter.allCountries": "Tüm Ülkeler",
    "filter.allYears":     "Tüm Yıllar",
    "filter.before1990":   "1990 Öncesi",
    "filter.reset":        "Sıfırla",

    "hero.label": "— elektronik öğrenme kaynağı",
    "hero.title": "R&amp;B Müziğinin Dünyasına",
    "hero.music": "Dal",
    "hero.sub":   "Rhythm &amp; Blues'un tarihi, sanatçıları ve kültürünü keşfet —<br/>Motown'dan modern alternatif R&amp;B'ye",
    "hero.cta":   "Öğrenmeye Başla",
    "hero.cta2":  "Sanatçılara Gözat",

    "stats.artists":  "Sanatçı",
    "stats.tracks":   "Parça",
    "stats.articles": "Makale",

    "artists.title": "Popüler Sanatçılar",
    "artists.all":   "Tüm Sanatçılar →",
    "artists.world": "🌍 Dünya Sanatçıları",
    "artists.cis":   "⭐ BDT Sanatçıları",

    "card.more":    "Detaylar",
    "card.listen":  "▶ Dinle",
    "date.present": "günümüz",

    "country.usa":        "ABD",
    "country.uk":         "Birleşik Krallık",
    "country.canada":     "Kanada",
    "country.russia":     "Rusya",
    "country.kazakhstan": "Kazakistan",
    "country.azerbaijan": "Azerbaycan",

    "new.title": "Yeni Çıkanlar",
    "new.all":   "Tüm Çıkışlar →",

    "learn.title": "Eğitim Bölümü",
    "learn.all":   "Tüm Makaleler →",
    "learn.read":  "Oku →",
    "learn.tag.history":  "Tarih",
    "learn.tag.theory":   "Teori",
    "learn.tag.culture":  "Kültür",
    "learn.tag.modern":   "Modern",
    "learn.tag.glossary": "Sözlük",
    "learn.art1.title": "R&amp;B'nin Kökenleri: Bluz'dan Motown'a",
    "learn.art1.desc":  "Ritim ve bluzun Afro-Amerikan müzik geleneğinden nasıl doğduğu ve 20. yüzyılın en etkili türlerinden biri haline geldiği.",
    "learn.art1.time":  "12 dk okuma",
    "learn.art2.title": "Bir Parçayı R&amp;B Yapan Nedir?",
    "learn.art2.desc":  "Temel unsurları inceliyoruz: groove, vokal melizma, senkop ve örnekleme.",
    "learn.art2.time":  "8 dk okuma",
    "learn.art3.title": "Neo Soul — Pop'a Karşı Başkaldırı",
    "learn.art3.desc":  "D'Angelo, Erykah Badu, Lauryn Hill — 90'larda ticari müziğe ruhu geri getiren hareket.",
    "learn.art3.time":  "10 dk okuma",
    "learn.art4.title": "Alt R&amp;B: Sınır Tanımayan Tür",
    "learn.art4.desc":  "Frank Ocean, SZA, Blood Orange — alternatif R&amp;B'nin tür sınırlarını nasıl kırdığı.",
    "learn.art4.time":  "9 dk okuma",
    "learn.art5.title": "R&amp;B'de Temel Terimler ve Kavramlar",
    "learn.art5.desc":  "Melizma, breakdown, bridge, ad-lib ve diğer terimler için rehber.",
    "learn.art5.time":  "6 dk okuma",

    "playlist.title":  "♡ Beğendiklerim",
    "playlist.tracks": "parça",
    "playlist.empty":  "Eklemek için herhangi bir parçada ♡'e bas",

    "lp.back":         "← Eğitime Dön",
    "lp.notfound":     "Makale bulunamadı",
    "lp.notfound.sub": "URL'yi kontrol et veya makale listesine dön",
    "lp.list.title":   "Tüm Materyaller",
    "lp.list.sub":     "Rhythm & Blues'un tarihi, teorisi ve kültürünü keşfet",
    "lp.readmore":     "Oku →",
    "lp.minread":      "dk okuma",

    "auth.back":           "← Ana Sayfaya",
    "auth.tab.login":      "Giriş Yap",
    "auth.tab.register":   "Kaydol",
    "auth.login.title":    "Tekrar Hoş Geldin!",
    "auth.login.sub":      "Parçaları ve çalma listelerini kaydetmek için giriş yap",
    "auth.login.btn":      "Giriş Yap",
    "auth.login.noacc":    "Hesabın yok mu?",
    "auth.login.toreg":    "Kaydol",
    "auth.login.or":       "veya",
    "auth.reg.title":      "Hesap Oluştur",
    "auth.reg.sub":        "Kayıt bir dakikadan az sürer",
    "auth.reg.name":       "Ad",
    "auth.reg.name.ph":    "Adın ne?",
    "auth.reg.pw":         "Şifre",
    "auth.reg.pw.ph":      "En az 6 karakter",
    "auth.reg.pw2":        "Şifreyi tekrarla",
    "auth.reg.btn":        "Hesap Oluştur",
    "auth.reg.haveacc":    "Zaten hesabın var mı?",
    "auth.reg.tologin":    "Giriş Yap",
    "auth.reg.or":         "veya",
    "auth.profile.tracks": "çalma listesindeki parça",
    "auth.profile.since":  "kayıt tarihi",
    "auth.profile.liked":  "♡ Beğendiklerim",
    "auth.profile.logout": "Çıkış Yap",
    "auth.label.pw":        "Şifre",
    "auth.or":              "veya",

    "artist.back":     "← Sanatçılara Dön",
    "artist.bio":      "Biyografi",
    "artist.achieve":  "Başarılar",
    "artist.tracks":   "Parçalar",
    "artist.liked":    "♡ Beğendiklerim",
    "artist.notfound": "Sanatçı bulunamadı",
    "artist.notfound.sub": "URL'yi kontrol et veya ana sayfaya dön",
    "artist.tohome":   "← Ana Sayfa",
    "artist.listen":   "▶ Dinle",
    "artist.liked.empty": "Eklemek için herhangi bir parçada ♡'e bas",

    "footer.desc":      "Rhythm &amp; Blues hakkında elektronik öğrenme kaynağı — tarih, sanatçılar, kültür.",
    "footer.nav":       "Gezinti",
    "footer.resources": "Kaynaklar",
    "footer.contacts":  "İletişim",
    "footer.lang":      "Dil:",
    "footer.city":      "Kazakistan, Karağandı",
    "footer.copy":      "© 2025 R&amp;B Archive. Tez Projesi. Tüm hakları saklıdır.",
    "footer.made":      "R&amp;B kültürü için ♥ ile yapıldı",
    "res.video":        "Video Dersler",
    "res.tests":        "Testler",
  },

  /* ══════════════ ҚАЗАҚША ══════════════ */
  kz: {
    "nav.home":      "Басты бет",
    "nav.artists":   "Орындаушылар",
    "nav.new":       "Жаңалықтар",
    "nav.learn":     "Оқу",
    "nav.playlists": "Ойнату тізімдері",
    "nav.news":      "Жаңалықтар",

    "auth.login":    "Кіру",
    "auth.register": "Тіркелу",
    "search.placeholder": "Орындаушы, трек іздеу…",
    "search.input":  "Атауды, тректі немесе альбомды енгізіңіз…",
    "search.title":  "Орындаушыңызды табыңыз",
    "search.btn":    "Іздеу",

    "filter.genre":        "Жанр",
    "filter.country":      "Ел",
    "filter.year":         "Жыл",
    "filter.allGenres":    "Барлық жанрлар",
    "filter.allCountries": "Барлық елдер",
    "filter.allYears":     "Барлық жылдар",
    "filter.before1990":   "1990 жылға дейін",
    "filter.reset":        "Тазалау",

    "hero.label": "— электрондық оқу ресурсы",
    "hero.title": "R&amp;B музыкасының әлеміне",
    "hero.music": "бату",
    "hero.sub":   "Rhythm &amp; Blues тарихын, орындаушылары мен мәдениетін үйрен —<br/>Motown бастауынан қазіргі заман R&amp;B-ге дейін",
    "hero.cta":   "Оқуды бастау",
    "hero.cta2":  "Орындаушыларды қарау",

    "stats.artists":  "Орындаушы",
    "stats.tracks":   "Трек",
    "stats.articles": "Мақала",

    "artists.title": "Танымал орындаушылар",
    "artists.all":   "Барлық орындаушылар →",
    "artists.world": "🌍 Әлем орындаушылары",
    "artists.cis":   "⭐ ТМД орындаушылары",

    "card.more":    "Толығырақ",
    "card.listen":  "▶ Тыңдау",
    "date.present": "қазіргі уақыт",

    "country.usa":        "АҚШ",
    "country.uk":         "Ұлыбритания",
    "country.canada":     "Канада",
    "country.russia":     "Ресей",
    "country.kazakhstan": "Қазақстан",
    "country.azerbaijan": "Әзербайжан",

    "new.title": "Жаңалықтар",
    "new.all":   "Барлық шығарылымдар →",

    "learn.title": "Оқу бөлімі",
    "learn.all":   "Барлық мақалалар →",
    "learn.read":  "Оқу →",
    "learn.tag.history":  "Тарих",
    "learn.tag.theory":   "Теория",
    "learn.tag.culture":  "Мәдениет",
    "learn.tag.modern":   "Қазіргі заман",
    "learn.tag.glossary": "Сөздік",
    "learn.art1.title": "R&amp;B бастауы: блюзден Motown-ға дейін",
    "learn.art1.desc":  "Ритм-энд-блюз афроамерикандық музыкалық дәстүрден қалай өсіп, XX ғасырдың ең ықпалды жанрларының біріне айналды.",
    "learn.art1.time":  "12 мин оқу",
    "learn.art2.title": "Тректі R&amp;B-ге не жатқызады?",
    "learn.art2.desc":  "Негізгі элементтерді талдаймыз: грув, вокалдық мелизма, синкоп және сэмплинг.",
    "learn.art2.time":  "8 мин оқу",
    "learn.art3.title": "Neo Soul — поп-форматқа қарсы бүлік",
    "learn.art3.desc":  "D'Angelo, Erykah Badu, Lauryn Hill — 90-жылдары коммерциялық музыкаға жанды қайтарған қозғалыс.",
    "learn.art3.time":  "10 мин оқу",
    "learn.art4.title": "Alt R&amp;B: шексіз жанр",
    "learn.art4.desc":  "Frank Ocean, SZA, Blood Orange — балама R&amp;B жанрлық шектерді қалай бұзады.",
    "learn.art4.time":  "9 мин оқу",
    "learn.art5.title": "R&amp;B негізгі терминдері мен ұғымдары",
    "learn.art5.desc":  "Анықтамалық: мелизма, брейкдаун, bridge, ad-lib және басқа терминдер.",
    "learn.art5.time":  "6 мин оқу",

    "playlist.title":  "♡ Ұнатқандарым",
    "playlist.tracks": "трек",
    "playlist.empty":  "Кез-келген тректе ♡ басыңыз",

    "lp.back":         "← Оқуға оралу",
    "lp.notfound":     "Мақала табылмады",
    "lp.notfound.sub": "URL-ді тексер немесе мақалалар тізіміне оралу",
    "lp.list.title":   "Барлық материалдар",
    "lp.list.sub":     "Rhythm & Blues тарихын, теориясы мен мәдениетін зерттеңіз",
    "lp.readmore":     "Оқу →",
    "lp.minread":      "мин оқу",

    "auth.back":           "← Басты бетке",
    "auth.tab.login":      "Кіру",
    "auth.tab.register":   "Тіркелу",
    "auth.login.title":    "Қайта қош келдің!",
    "auth.login.sub":      "Тректер мен ойнату тізімдерін сақтау үшін кіріңіз",
    "auth.login.btn":      "Кіру",
    "auth.login.noacc":    "Тіркелмеген бе?",
    "auth.login.toreg":    "Тіркелу",
    "auth.login.or":       "немесе",
    "auth.reg.title":      "Аккаунт жасау",
    "auth.reg.sub":        "Тіркелу бір минуттан аз уақытты алады",
    "auth.reg.name":       "Аты",
    "auth.reg.name.ph":    "Атың қалай?",
    "auth.reg.pw":         "Құпия сөз",
    "auth.reg.pw.ph":      "Кемінде 6 таңба",
    "auth.reg.pw2":        "Құпия сөзді қайталаңыз",
    "auth.reg.btn":        "Аккаунт жасау",
    "auth.reg.haveacc":    "Аккаунтың бар ма?",
    "auth.reg.tologin":    "Кіру",
    "auth.reg.or":         "немесе",
    "auth.profile.tracks": "ойнату тізімінде трек",
    "auth.profile.since":  "тіркелу күні",
    "auth.profile.liked":  "♡ Ұнатқандарым",
    "auth.profile.logout": "Аккаунттан шығу",
    "auth.label.pw":        "Құпия сөз",
    "auth.or":              "немесе",

    "artist.back":     "← Орындаушыларға оралу",
    "artist.bio":      "Өмірбаян",
    "artist.achieve":  "Жетістіктер",
    "artist.tracks":   "Тректер",
    "artist.liked":    "♡ Ұнатқандарым",
    "artist.notfound": "Орындаушы табылмады",
    "artist.notfound.sub": "URL-ді тексер немесе басты бетке оралу",
    "artist.tohome":   "← Басты бетке",
    "artist.listen":   "▶ Тыңдау",
    "artist.liked.empty": "Кез-келген тректе ♡ басыңыз",

    "footer.desc":      "Rhythm &amp; Blues туралы электрондық оқу ресурсы — тарих, орындаушылар, мәдениет.",
    "footer.nav":       "Навигация",
    "footer.resources": "Ресурстар",
    "footer.contacts":  "Байланыс",
    "footer.lang":      "Тіл:",
    "footer.city":      "Қазақстан, Қарағанды",
    "footer.copy":      "© 2025 R&amp;B Archive. Дипломдық жұмыс. Барлық құқықтар қорғалған.",
    "footer.made":      "R&amp;B мәдениеті үшін ♥ жасалды",
    "res.video":        "Бейне сабақтар",
    "res.tests":        "Тесттер",
  }
};

/* ══════════════════════════════════════════════════════════
   Основная функция применения языка
══════════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem("rbarchive_lang") || "ru";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("rbarchive_lang", lang);
  window.currentLang = lang;
  document.documentElement.lang = lang === "kz" ? "kk" : lang;

  const dict = i18n[lang] || i18n.ru;

  /* Текстовые элементы */
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  /* Плейсхолдеры */
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* Активная кнопка языка */
  document.querySelectorAll(".lang-btn[data-lang]").forEach(btn => {
    btn.classList.toggle("lang-btn--active", btn.dataset.lang === lang);
  });

  /* Хук для страниц с доп. логикой */
  if (typeof onLangChanged === "function") onLangChanged(lang, dict);
}

/* Навесить обработчики на кнопки языка */
function initLangBtns() {
  document.querySelectorAll(".lang-btn[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

/* Авто-запуск при загрузке DOM */
(function () {
  function init() {
    initLangBtns();
    applyLang(currentLang);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
