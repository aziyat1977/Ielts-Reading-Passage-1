

import { LessonStage, Question, VocabItem, ParaphraseItem, VocabTestSet, DiscussionQuestion, LearningActivity } from './types';

export const READING_PASSAGE_TITLE = "Life at Number 10: A Profile of Akshata Murty";

export const READING_PASSAGE_TEXT = `When Akshata Murty’s family first visited London when she was about 12 years old, she remembers seeing Downing Street from the outside. However, she had no idea she might one day live in the house. Even later, when she met Rishi Sunak at 24 and they visited Westminster as tourists, she did not imagine living in London. “Even when Rishi was a new MP, I never thought five years later we’d be here,” she says.

They first moved into Downing Street when he became chancellor. According to reports, she changed the curtains, cushions, and carpets in the flat above her husband’s office, added gold cornicing, and paid the bill herself. While she admits her husband is a "stickler for the rules," she describes herself as "much more free-spirited." Despite their wealth, she is the one who stocks the fridge, shopping at supermarkets like Tesco or Sainsbury’s. She enjoys the fact that few people recognize her, noting that she takes their dog, Nova, for walks in St James’s Park as a "great escape."

For someone so connected and wealthy, Murty is surprisingly self-effacing. She views her time in Downing Street as an opportunity to serve. “I am not a politician. I can’t always please everyone,” she explains. “My father told me the softest pillow is a clear conscience. Do your best and then you don’t worry.”

She finds the scrutiny of her role bizarre at times. When her husband was photographed wearing Adidas Sambas, it became front-page news. “I had no clue. Rishi has always worn Sambas. You kind of have to live your life and not let it consume you,” she remarks.

Murty has launched an initiative called "Lessons at 10," which came shortly after her husband became prime minister. She wanted to open the doors to young people, believing Downing Street shouldn't be a "gilded cage." The sessions involve inviting children from various schools to discuss their futures. “It’s all about discovering their passions. I don’t sell it as careers advice,” she says. During these sessions, she often asks if anyone wants to be Prime Minister. She encourages the children, telling them, "If you can dream it, you can do it."

Murty’s own upbringing was grounded in high expectations. Her parents wanted her and her brother to love learning "not just for exams, but to engage with the world." She feels the same about her own daughters, preferring them to find a passion rather than just focus on results.

Though her parents are now among the wealthiest in India, Murty was born into a family with little money and no phone. She was born the year before her father founded his company, Infosys. As a baby, she lived with her grandparents while her parents worked 350 miles away in Mumbai. Even when the family moved to a suburb of Bangalore and her parents began to make money, they could not afford a costume for her school play. As their wealth grew, Akshata still went to school in a rickshaw and was expected to do chores around the house.

Her mother, Sudha, is her role model. Sudha is best known in India as a children’s novelist and philanthropist but was also a pioneer in engineering. She was the only female engineering student at her college out of 599 boys. When she saw a job advert for Tata Motors that excluded women, she wrote a postcard to the boss, JRD Tata, challenging the policy, and was subsequently hired. Murty describes her mother as a rebel who always told her to "take risks" and "be curious," while asking what value she could add to society.

Despite her international background—growing up in India, then living in the US and now the UK—Murty feels "one hundred per cent" British. She notes that if you wake her children up in the night and ask where they are from, they will say Yorkshire, where the family has a manor house. She says she is "in awe of Britain" and feels she has been made to feel welcome. While she admits that when they leave Downing Street they could relocate to California or elsewhere, she says she is happiest in Britain.`;

export const SENTENCE_DATA = [
  {
    en: "When Akshata Murty’s family first visited London when she was about 12 years old, she remembers seeing Downing Street from the outside.",
    ru: "Когда семья Акшаты Мурти впервые посетила Лондон, когда ей было около 12 лет, она помнит, как видела Даунинг-стрит снаружи.",
    uz: "Akshata Murtining oilasi u taxminan 12 yoshligida Londonga birinchi marta tashrif buyurganida, u Dauning-stritni tashqaridan ko'rganini eslaydi."
  },
  {
    en: "However, she had no idea she might one day live in the house.",
    ru: "Однако она понятия не имела, что однажды может жить в этом доме.",
    uz: "Biroq, u bir kun kelib bu uyda yashashi mumkinligini xayoliga ham keltirmagan edi."
  },
  {
    en: "Even later, when she met Rishi Sunak at 24 and they visited Westminster as tourists, she did not imagine living in London.",
    ru: "Даже позже, когда она встретила Риши Сунака в 24 года и они посетили Вестминстер как туристы, она не представляла себе жизни в Лондоне.",
    uz: "Hatto keyinroq, 24 yoshida Rishi Sunak bilan uchrashib, Vestminsterga sayyoh sifatida tashrif buyurganlarida ham, u Londonda yashashni tasavvur qilmagan edi."
  },
  {
    en: "“Even when Rishi was a new MP, I never thought five years later we’d be here,” she says.",
    ru: "«Даже когда Риши был новым членом парламента, я никогда не думала, что через пять лет мы будем здесь», — говорит она.",
    uz: "«Rishi yangi deputat bo'lganida ham, besh yildan keyin shu yerda bo'lishimizni hech qachon o'ylamagan edim», — deydi u."
  },
  {
    en: "They first moved into Downing Street when he became chancellor.",
    ru: "Они впервые переехали на Даунинг-стрит, когда он стал канцлером.",
    uz: "Ular Dauning-stritga birinchi marta u kansler bo'lganida ko'chib o'tishgan."
  },
  {
    en: "According to reports, she changed the curtains, cushions, and carpets in the flat above her husband’s office, added gold cornicing, and paid the bill herself.",
    ru: "Согласно сообщениям, она поменяла шторы, подушки и ковры в квартире над офисом мужа, добавила золотые карнизы и оплатила счет сама.",
    uz: "Xabarlarga ko'ra, u turmush o'rtog'ining ofisi tepasidagi kvartirada pardalar, yostiqlar va gilamlarni almashtirgan, oltin kornizlar qo'shgan va to'lovni o'zi to'lagan."
  },
  {
    en: "While she admits her husband is a 'stickler for the rules,' she describes herself as 'much more free-spirited.'",
    ru: "Хотя она признает, что ее муж — «сторонник строгих правил», она описывает себя как «гораздо более свободолюбивую».",
    uz: "U erining «qoidalarga qattiq rioya qiluvchi» ekanligini tan olsa-da, o'zini «ancha erkin ruhli» deb ta'riflaydi."
  },
  {
    en: "Despite their wealth, she is the one who stocks the fridge, shopping at supermarkets like Tesco or Sainsbury’s.",
    ru: "Несмотря на их богатство, именно она пополняет холодильник, делая покупки в супермаркетах, таких как Tesco или Sainsbury’s.",
    uz: "Boyliklariga qaramay, u Tesco yoki Sainsbury’s kabi supermarketlarda xarid qilib, muzlatgichni o'zi to'ldiradi."
  },
  {
    en: "She enjoys the fact that few people recognize her, noting that she takes their dog, Nova, for walks in St James’s Park as a 'great escape.'",
    ru: "Ей нравится тот факт, что мало кто ее узнает, отмечая, что прогулки с их собакой Новой в парке Сент-Джеймс — это «отличный побег».",
    uz: "U kam odam uni tanishidan xursand bo'lib, iti Novani Sent-Jeyms bog'ida sayr qildirishni «ajoyib qochish» deb ataydi."
  },
  {
    en: "For someone so connected and wealthy, Murty is surprisingly self-effacing.",
    ru: "Для кого-то настолько связанного и богатого, Мурти на удивление скромна.",
    uz: "Shunday obro'li va boy odam uchun Murti hayratlanarli darajada kamtarindir."
  },
  {
    en: "She views her time in Downing Street as an opportunity to serve.",
    ru: "Она рассматривает свое время на Даунинг-стрит как возможность служить обществу.",
    uz: "U Dauning-stritdagi vaqtini xizmat qilish imkoniyati deb biladi."
  },
  {
    en: "“I am not a politician. I can’t always please everyone,” she explains.",
    ru: "«Я не политик. Я не могу всегда всем угодить», — объясняет она.",
    uz: "«Men siyosatchi emasman. Men har doim ham hammaga yoqa olmayman», — deb tushuntiradi u."
  },
  {
    en: "“My father told me the softest pillow is a clear conscience. Do your best and then you don’t worry.”",
    ru: "«Мой отец говорил мне, что самая мягкая подушка — это чистая совесть. Делай все возможное, и тогда не будешь волноваться».",
    uz: "«Otam menga eng yumshoq yostiq — bu toza vijdon ekanligini aytgan. Qo'lingdan kelganini qil va keyin xavotirlanma»."
  },
  {
    en: "She finds the scrutiny of her role bizarre at times.",
    ru: "Иногда она находит пристальное внимание к своей роли странным.",
    uz: "U ba'zida o'z roliga bo'lgan sinchkov e'tiborni g'alati deb biladi."
  },
  {
    en: "When her husband was photographed wearing Adidas Sambas, it became front-page news.",
    ru: "Когда ее мужа сфотографировали в Adidas Sambas, это попало на первые полосы газет.",
    uz: "Eri Adidas Sambas kiyib suratga tushganda, bu birinchi sahifa yangiligiga aylandi."
  },
  {
    en: "“I had no clue. Rishi has always worn Sambas. You kind of have to live your life and not let it consume you,” she remarks.",
    ru: "«Я понятия не имела. Риши всегда носил Sambas. Нужно просто жить своей жизнью и не позволять этому поглотить тебя», — замечает она.",
    uz: "«Men bexabar edim. Rishi har doim Sambas kiygan. Shunchaki o'z hayotingizni yashashingiz kerak va bu sizni yutib yuborishiga yo'l qo'ymasligingiz kerak», — deb ta'kidlaydi u."
  },
  {
    en: "Murty has launched an initiative called 'Lessons at 10,' which came shortly after her husband became prime minister.",
    ru: "Мурти запустила инициативу под названием «Уроки на Даунинг-стрит, 10», которая появилась вскоре после того, как ее муж стал премьер-министром.",
    uz: "Murti eri bosh vazir bo'lganidan ko'p o'tmay paydo bo'lgan «10-dagi darslar» deb nomlangan tashabbusni boshladi."
  },
  {
    en: "She wanted to open the doors to young people, believing Downing Street shouldn't be a 'gilded cage.'",
    ru: "Она хотела открыть двери для молодежи, считая, что Даунинг-стрит не должна быть «золотой клеткой».",
    uz: "U Dauning-strit «oltin qafas» bo'lmasligi kerak deb hisoblab, yoshlarga eshiklarni ochishni xohladi."
  },
  {
    en: "The sessions involve inviting children from various schools to discuss their futures.",
    ru: "Сессии включают приглашение детей из разных школ для обсуждения их будущего.",
    uz: "Mashg'ulotlar turli maktablardan bolalarni o'z kelajaklarini muhokama qilish uchun taklif qilishni o'z ichiga oladi."
  },
  {
    en: "“It’s all about discovering their passions. I don’t sell it as careers advice,” she says.",
    ru: "«Все дело в раскрытии их увлечений. Я не подаю это как советы по карьере», — говорит она.",
    uz: "«Hammasi ularning qiziqishlarini kashf etish haqida. Men buni martaba maslahati sifatida taqdim etmayman», — deydi u."
  },
  {
    en: "During these sessions, she often asks if anyone wants to be Prime Minister.",
    ru: "Во время этих сессий она часто спрашивает, хочет ли кто-нибудь стать премьер-министром.",
    uz: "Ushbu mashg'ulotlar davomida u ko'pincha kimdir Bosh vazir bo'lishni xohlaydimi, deb so'raydi."
  },
  {
    en: "She encourages the children, telling them, 'If you can dream it, you can do it.'",
    ru: "Она подбадривает детей, говоря им: «Если вы можете об этом мечтать, вы можете это сделать».",
    uz: "U bolalarni ruhlantirib: «Agar orzu qila olsangiz, buni amalga oshira olasiz», deydi."
  },
  {
    en: "Murty’s own upbringing was grounded in high expectations.",
    ru: "Собственное воспитание Мурти основывалось на высоких ожиданиях.",
    uz: "Murtining o'z tarbiyasi yuqori talablarga asoslangan edi."
  },
  {
    en: "Her parents wanted her and her brother to love learning 'not just for exams, but to engage with the world.'",
    ru: "Ее родители хотели, чтобы она и ее брат любили учиться «не только ради экзаменов, но и для взаимодействия с миром».",
    uz: "Ota-onasi u va ukasi o'qishni «nafaqat imtihonlar uchun, balki dunyo bilan aloqa qilish uchun» sevishlarini xohlashgan."
  },
  {
    en: "She feels the same about her own daughters, preferring them to find a passion rather than just focus on results.",
    ru: "Она чувствует то же самое в отношении своих дочерей, предпочитая, чтобы они нашли увлечение, а не просто сосредотачивались на результатах.",
    uz: "U o'z qizlari haqida ham xuddi shunday fikrda bo'lib, ular faqat natijalarga e'tibor qaratishdan ko'ra, o'z qiziqishlarini topishlarini afzal ko'radi."
  },
  {
    en: "Though her parents are now among the wealthiest in India, Murty was born into a family with little money and no phone.",
    ru: "Хотя ее родители сейчас одни из самых богатых в Индии, Мурти родилась в семье, где было мало денег и не было телефона.",
    uz: "Ota-onasi hozir Hindistondagi eng boy odamlardan bo'lishsa-da, Murti puli kam va telefoni yo'q oilada tug'ilgan."
  },
  {
    en: "She was born the year before her father founded his company, Infosys.",
    ru: "Она родилась за год до того, как ее отец основал свою компанию Infosys.",
    uz: "U otasi Infosys kompaniyasiga asos solishidan bir yil oldin tug'ilgan."
  },
  {
    en: "As a baby, she lived with her grandparents while her parents worked 350 miles away in Mumbai.",
    ru: "В младенчестве она жила с бабушкой и дедушкой, пока ее родители работали за 350 миль в Мумбаи.",
    uz: "Chaqaloqligida u buvisi va bobosi bilan yashagan, ota-onasi esa 350 mil uzoqlikdagi Mumbayda ishlashgan."
  },
  {
    en: "Even when the family moved to a suburb of Bangalore and her parents began to make money, they could not afford a costume for her school play.",
    ru: "Даже когда семья переехала в пригород Бангалора и родители начали зарабатывать деньги, они не могли позволить себе костюм для ее школьного спектакля.",
    uz: "Oila Bangalor chekkasiga ko'chib o'tib, ota-onasi pul topa boshlaganida ham, ular maktab spektakli uchun unga kostyum sotib ololmasdilar."
  },
  {
    en: "As their wealth grew, Akshata still went to school in a rickshaw and was expected to do chores around the house.",
    ru: "По мере роста их богатства Акшата по-прежнему ездила в школу на рикше, и от нее ожидали выполнения домашних обязанностей.",
    uz: "Boyliklari ortib borsa ham, Akshata maktabga rikshada qatnar va uy yumushlarini bajarishi kutilar edi."
  },
  {
    en: "Her mother, Sudha, is her role model.",
    ru: "Ее мать, Судха, является для нее примером для подражания.",
    uz: "Uning onasi Sudha uning uchun o'rnakdir."
  },
  {
    en: "Sudha is best known in India as a children’s novelist and philanthropist but was also a pioneer in engineering.",
    ru: "Судха наиболее известна в Индии как детский писатель и филантроп, но она также была пионером в инженерии.",
    uz: "Sudha Hindistonda bolalar yozuvchisi va xayriyachi sifatida tanilgan, lekin u muhandislik sohasida ham kashshof bo'lgan."
  },
  {
    en: "She was the only female engineering student at her college out of 599 boys.",
    ru: "Она была единственной студенткой инженерного факультета в своем колледже среди 599 юношей.",
    uz: "U o'z kollejida 599 o'g'il bola orasida yagona talaba qiz edi."
  },
  {
    en: "When she saw a job advert for Tata Motors that excluded women, she wrote a postcard to the boss, JRD Tata, challenging the policy, and was subsequently hired.",
    ru: "Когда она увидела объявление о вакансии в Tata Motors, исключающее женщин, она написала открытку боссу, Дж.Р.Д. Тата, оспаривая эту политику, и впоследствии была принята на работу.",
    uz: "Tata Motors kompaniyasining ayollarni istisno qilgan ish e'lonini ko'rgach, u boshliq JRD Tataga siyosatga qarshi otkritka yozdi va keyinchalik ishga qabul qilindi."
  },
  {
    en: "Murty describes her mother as a rebel who always told her to 'take risks' and 'be curious,' while asking what value she could add to society.",
    ru: "Мурти описывает свою мать как бунтарку, которая всегда говорила ей «рисковать» и «быть любопытной», спрашивая, какую ценность она может принести обществу.",
    uz: "Murti onasini har doim unga «tavakkal qilishni» va «qiziquvchan bo'lishni» aytadigan isyonchi sifatida tasvirlaydi va jamiyatga qanday foyda keltirishi mumkinligini so'raydi."
  },
  {
    en: "Despite her international background—growing up in India, then living in the US and now the UK—Murty feels 'one hundred per cent' British.",
    ru: "Несмотря на свое международное происхождение — детство в Индии, затем жизнь в США и теперь в Великобритании — Мурти чувствует себя «на сто процентов» британкой.",
    uz: "Xalqaro kelib chiqishiga qaramay — Hindistonda o'sgan, keyin AQShda va hozir Buyuk Britaniyada yashayotgan — Murti o'zini «yuz foiz» britaniyalik his qiladi."
  },
  {
    en: "She notes that if you wake her children up in the night and ask where they are from, they will say Yorkshire, where the family has a manor house.",
    ru: "Она отмечает, что если разбудить ее детей ночью и спросить, откуда они, они ответят: Йоркшир, где у семьи есть поместье.",
    uz: "Uning ta'kidlashicha, agar bolalarini tunda uyg'otib, qayerdan ekanliklarini so'rasangiz, ular oilaning hovlisi bo'lgan Yorkshir deb javob berishadi."
  },
  {
    en: "She says she is 'in awe of Britain' and feels she has been made to feel welcome.",
    ru: "Она говорит, что находится «в восторге от Британии» и чувствует, что ее приняли радушно.",
    uz: "U «Britaniyadan hayratda» ekanligini va o'zini iliq kutib olinganini his qilishini aytadi."
  },
  {
    en: "While she admits that when they leave Downing Street they could relocate to California or elsewhere, she says she is happiest in Britain.",
    ru: "Хотя она признает, что, когда они покинут Даунинг-стрит, они могут переехать в Калифорнию или куда-то еще, она говорит, что счастливее всего в Британии.",
    uz: "Garchi ular Dauning-stritni tark etgach, Kaliforniyaga yoki boshqa joyga ko'chib o'tishlari mumkinligini tan olsa-da, u Britaniyada eng baxtli ekanligini aytadi."
  }
];

// Extension Sentences for Text Study
export const EXTENSION_SENTENCES = [
    {
      en: "The prime minister’s official residence acts as both a home and a headquarters, blurring the lines between private life and public duty.",
      ru: "Официальная резиденция премьер-министра служит одновременно домом и штаб-квартирой, стирая границы между личной жизнью и общественным долгом.",
      uz: "Bosh vazirning rasmiy qarorgohi ham uy, ham shtab-kvartira vazifasini o'tab, shaxsiy hayot va davlat burchi o'rtasidagi chegaralarni xiralashtiradi."
    },
    {
      en: "Living above the shop brings unique challenges for any family trying to maintain a sense of normalcy in the public eye.",
      ru: "Жизнь «над магазином» создает уникальные проблемы для любой семьи, пытающейся сохранить чувство нормальности на глазах у общественности.",
      uz: "«Do'kon ustida» yashash jamoatchilik ko'z o'ngida odatiy hayot tarzini saqlab qolishga urinayotgan har qanday oila uchun o'ziga xos qiyinchiliklarni keltirib chiqaradi."
    },
    {
      en: "Public perception often conflicts with the private reality of political figures, who grapple with the same domestic issues as everyone else.",
      ru: "Общественное восприятие часто противоречит личной реальности политических деятелей, которые сталкиваются с теми же бытовыми проблемами, что и все остальные.",
      uz: "Jamoatchilikning tasavvuri ko'pincha boshqalar kabi bir xil maishiy muammolar bilan kurashadigan siyosiy arboblarning shaxsiy haqiqatiga zid keladi."
    },
    {
      en: "Balancing state duties with parental responsibilities requires meticulous planning and a strong support network.",
      ru: "Балансирование государственных обязанностей с родительскими требует тщательного планирования и сильной поддержки.",
      uz: "Davlat vazifalarini ota-onalik mas'uliyati bilan muvozanatlash puxta rejalashtirish va kuchli qo'llab-quvvatlash tarmog'ini talab qiladi."
    },
    {
      en: "History permeates every corner of the building, reminding residents of their temporary stewardship of the nation's most famous address.",
      ru: "История пронизывает каждый уголок здания, напоминая жильцам об их временном управлении самым известным адресом страны.",
      uz: "Tarix binoning har bir burchagiga singib ketgan bo'lib, aholiga mamlakatning eng mashhur manziliga vaqtincha egalik qilishlarini eslatib turadi."
    }
];

export const VOCABULARY: VocabItem[] = [
  {
    word: "Scrutiny",
    definition: "Critical observation or examination.",
    translations: { ru: "Пристальное внимание", uz: "Sinchkov kuzatuv" }
  },
  {
    word: "Gilded cage",
    definition: "Living in luxury but without freedom.",
    translations: { ru: "Золотая клетка", uz: "Oltin qafas" }
  },
  {
    word: "Self-effacing",
    definition: "Modest, not seeking attention.",
    translations: { ru: "Скромный, держащийся в тени", uz: "Kamtarin, o'zini ko'rsatmaydigan" }
  }
];

export const LESSON_STAGES: LessonStage[] = [
  {
    id: 1,
    name: "Lead-in",
    time: "0-5 min",
    procedure: "Show photo of Akshata Murty & Rishi Sunak. Context Setting.",
    instructions: {
      en: "In pairs, list 3 pros and 3 cons of being the Prime Minister's wife.",
      ru: "В парах перечислите 3 плюса и 3 минуса быть женой премьер-министра.",
      uz: "Juftlikda Bosh vazirning rafiqasi bo'lishning 3 ta ijobiy va 3 ta salbiy tomonini sanab o'ting."
    }
  },
  {
    id: 2,
    name: "Vocabulary",
    time: "5-10 min",
    procedure: "Blocking Vocabulary (Pre-teaching concepts).",
    instructions: {
      en: "Match the definitions with the words provided.",
      ru: "Сопоставьте определения с предоставленными словами.",
      uz: "Berilgan so'zlarni ta'riflari bilan moslashtiring."
    },
    details: ["Scrutiny", "Gilded cage", "Self-effacing"]
  },
  {
    id: 3,
    name: "Task Cycle",
    time: "10-30 min",
    procedure: "The Reading Task (IELTS Simulation).",
    instructions: {
      en: "You have 20 minutes. Read the text. Answer Questions 1-13. Work alone.",
      ru: "У вас 20 минут. Прочитайте текст. Ответьте на вопросы 1–13. Работайте самостоятельно.",
      uz: "Sizda 20 daqiqa bor. Matnni o'qing. 1–13 savollarga javob bering. Mustaqil ishlang."
    }
  },
  {
    id: 4,
    name: "Planning",
    time: "30-35 min",
    procedure: "Pair Check.",
    instructions: {
      en: "Compare answers with a partner. If you disagree, find the sentence in the text that proves you right.",
      ru: "Сравните ответы с партнером. Если не согласны, найдите в тексте предложение, подтверждающее вашу правоту.",
      uz: "Javoblarni sherigingiz bilan solishtiring. Agar fikringiz farq qilsa, matndan sizning haq ekanligingizni isbotlovchi gapni toping."
    }
  },
  {
    id: 5,
    name: "Report",
    time: "35-45 min",
    procedure: "Feedback & Verification. Elicit answers and evidence.",
    instructions: {
      en: "Share your findings with the class.",
      ru: "Поделитесь своими ответами с классом.",
      uz: "Javoblaringizni sinf bilan bo'lishing."
    }
  },
  {
    id: 6,
    name: "Analysis",
    time: "45-50 min",
    procedure: "Language Focus (Collocations).",
    instructions: {
      en: "Fill the gaps: High _____, Clear _____, Entrepreneurial _____. Homework: Write 5 sentences.",
      ru: "Заполните пропуски. Домашнее задание: Напишите 5 предложений.",
      uz: "Bo'sh joylarni to'ldiring. Uyga vazifa: 5 ta gap yozing."
    }
  }
];

export const QUESTIONS_TF: Question[] = [
  { 
    id: 1, 
    type: 'boolean', 
    text: "Akshata Murty predicted that her husband would become Prime Minister five years before it happened.", 
    options: ["TRUE", "FALSE", "NOT GIVEN"], 
    correctAnswer: "FALSE",
    evidence: "“Even when Rishi was a new MP, I never thought five years later we’d be here,” she says."
  },
  { 
    id: 2, 
    type: 'boolean', 
    text: "The cost of refurbishing the flat above Number 10 was covered by public funds.", 
    options: ["TRUE", "FALSE", "NOT GIVEN"], 
    correctAnswer: "FALSE",
    evidence: "According to reports, she changed the curtains... and paid the bill herself." 
  },
  { 
    id: 3, 
    type: 'boolean', 
    text: "Murty appreciates the fact that she can walk in public without being frequently identified.", 
    options: ["TRUE", "FALSE", "NOT GIVEN"], 
    correctAnswer: "TRUE" 
  },
  { 
    id: 4, 
    type: 'boolean', 
    text: "Murty’s parents focused solely on their children’s performance in examinations.", 
    options: ["TRUE", "FALSE", "NOT GIVEN"], 
    correctAnswer: "FALSE",
    evidence: "Her parents wanted her ... to love learning “not just for exams, but to engage with the world.”"
  },
  { 
    id: 5, 
    type: 'boolean', 
    text: "Murty’s mother secured her first engineering job after directly contacting the head of the company.", 
    options: ["TRUE", "FALSE", "NOT GIVEN"], 
    correctAnswer: "TRUE" 
  },
  { 
    id: 6, 
    type: 'boolean', 
    text: "Murty plans to move her family to California permanently as soon as her husband leaves office.", 
    options: ["TRUE", "FALSE", "NOT GIVEN"], 
    correctAnswer: "NOT GIVEN" 
  },
];

export const QUESTIONS_GAP: Question[] = [
  { id: 7, type: 'text', text: "Murty describes herself as being [.....] compared to her husband, who is stricter with rules.", correctAnswer: "free-spirited" },
  { id: 8, type: 'text', text: "She personally handles food shopping and finds walking her [.....] to be a relaxing escape.", correctAnswer: "dog" },
  { id: 9, type: 'text', text: "She was surprised when the media focused heavily on her husband wearing Adidas [.....].", correctAnswer: "sambas" },
  { id: 10, type: 'text', text: "The goal of the sessions is to help children discover their [.....] rather than just giving career advice.", correctAnswer: "passions" },
  { id: 11, type: 'text', text: "Her mother is famous in India as a [.....] and philanthropist.", correctAnswer: "novelist" },
  { id: 12, type: 'text', text: "Even after the family became wealthy, Murty travelled to school in a [.....].", correctAnswer: "rickshaw" },
  { id: 13, type: 'text', text: "Murty and her brother were required to perform [.....] at home.", correctAnswer: "chores" },
];

export const PARAPHRASING_DATA: ParaphraseItem[] = [
  {
    id: 1,
    sourceText: "I never thought five years later we’d be here.",
    examText: "Akshata Murty predicted that her husband would become Prime Minister five years before it happened.",
    grammarPoint: "Past Simple Negation (Never thought) vs Affirmative Prediction",
    meaning: "The text says she 'never thought' (idea of surprise/lack of prediction), whereas the question claims she 'predicted' it. They are opposites.",
    form: "'Never thought' + clause vs 'Predicted' + that-clause."
  },
  {
    id: 2,
    sourceText: "...paid the bill herself.",
    examText: "The cost... was covered by public funds.",
    grammarPoint: "Reflexive Pronouns vs Passive Voice Agents",
    meaning: "'Herself' emphasizes personal agency. 'Public funds' implies the state. These are mutually exclusive agents.",
    form: "Subject + Verb + Object + Reflexive Pronoun vs Passive Voice + by + Agent."
  },
  {
    id: 3,
    sourceText: "Few people recognise me.",
    examText: "Without being frequently identified.",
    grammarPoint: "Quantifiers (Few) vs Frequency Adverbs (Frequently)",
    meaning: "'Few people' means a small number (negative connotation). 'Not frequently identified' means the same thing. This is a Synonym Match.",
    form: "Few + Countable Noun vs Not + Adverb + Past Participle."
  },
  {
    id: 4,
    sourceText: "...not just for exams, but to engage with the world.",
    examText: "Focused solely on their children’s performance in examinations.",
    grammarPoint: "Correlative Conjunctions (Not just... but)",
    meaning: "'Not just X but Y' includes both, but emphasizes Y. 'Solely X' excludes Y. Therefore, the statement is false.",
    form: "Not just + Noun Phrase + but + Infinitive Phrase."
  },
  {
    id: 5,
    sourceText: "I can't always please everyone.",
    examText: "It is impossible to satisfy all people at all times.",
    grammarPoint: "Modal Verbs vs Adjectives",
    meaning: "'Can't' suggests inability. 'Impossible' means not possible. 'Please' is synonymous with 'satisfy'. This is a direct paraphrase.",
    form: "Modal (Can't) + Verb vs It is + Adjective + Infinitive."
  },
  {
    id: 6,
    sourceText: "She is the one who stocks the fridge.",
    examText: "She takes personal responsibility for grocery shopping.",
    grammarPoint: "Cleft Sentences vs Abstract Nouns",
    meaning: "'She is the one who...' emphasizes the person. 'Stocks the fridge' is a concrete action for 'grocery shopping'.",
    form: "Cleft Sentence (It is X who...) vs Subject + Verb + Abstract Noun Phrase."
  },
  {
    id: 7,
    sourceText: "She describes herself as much more free-spirited.",
    examText: "She views herself as having a more independent nature.",
    grammarPoint: "Compound Adjectives vs Noun Phrases",
    meaning: "'Free-spirited' implies independence and lack of constraint. 'Independent nature' captures this essence.",
    form: "Subject + Verb + Reflexive + as + Adjective vs Subject + Verb + Reflexive + as having + Noun Phrase."
  },
  {
    id: 8,
    sourceText: "She was born the year before her father founded his company.",
    examText: "Her birth preceded the establishment of the family business.",
    grammarPoint: "Temporal Prepositions vs Verbs",
    meaning: "'Year before' means 'preceded'. 'Founded his company' equates to 'establishment of business'.",
    form: "Time Clause (Before + S + V) vs Verb (Preceded) + Noun Phrase."
  },
  {
    id: 9,
    sourceText: "They could not afford a costume.",
    examText: "The family lacked the financial means to purchase an outfit.",
    grammarPoint: "Modals vs Formal Lexis",
    meaning: "'Could not afford' is the everyday way of saying 'lacked financial means'. 'Costume' = 'Outfit'.",
    form: "Modal (Could not) + Verb vs Verb (Lacked) + Noun Phrase."
  }
];

export const VOCAB_TEST_SETS: VocabTestSet[] = [
  {
    id: 1,
    title: "Politics & Public Life",
    questions: [
      {
        id: 101,
        sentence: "The politician faced intense [.....] from the media after the scandal.",
        correctOption: "scrutiny",
        options: ["scrutiny", "conscience", "rickshaw", "cornicing"],
        translation: "После скандала политик столкнулся с пристальным вниманием СМИ."
      },
      {
        id: 102,
        sentence: "Living in the public eye often feels like a [.....] cage.",
        correctOption: "gilded",
        options: ["gilded", "golden", "silver", "iron"],
        translation: "Жизнь на виду у общественности часто кажется золотой клеткой."
      },
      {
        id: 103,
        sentence: "He is a [.....] for the rules and never bends them.",
        correctOption: "stickler",
        options: ["stickler", "sticker", "stocker", "starter"],
        translation: "Он сторонник строгих правил и никогда их не нарушает."
      },
      {
        id: 104,
        sentence: "The prime minister's [.....] is located at Downing Street.",
        correctOption: "residence",
        options: ["residence", "house", "flat", "castle"],
        translation: "Резиденция премьер-министра находится на Даунинг-стрит."
      },
      {
        id: 105,
        sentence: "She launched an [.....] to help young people find careers.",
        correctOption: "initiative",
        options: ["initiative", "incentive", "intention", "institution"],
        translation: "Она запустила инициативу, чтобы помочь молодым людям найти карьеру."
      },
      {
        id: 106,
        sentence: "The [.....] of the role was overwhelming for the new minister.",
        correctOption: "pressure",
        options: ["pressure", "pleasure", "pastime", "play"],
        translation: "Давление этой роли было ошеломляющим для нового министра."
      },
      {
        id: 107,
        sentence: "He wants to [.....] with the community to understand their needs.",
        correctOption: "engage",
        options: ["engage", "enrage", "enlarge", "enter"],
        translation: "Он хочет взаимодействовать с обществом, чтобы понять их нужды."
      },
      {
        id: 108,
        sentence: "The [.....] between public and private life is often blurred.",
        correctOption: "boundary",
        options: ["boundary", "border", "barrier", "brick"],
        translation: "Граница между общественной и частной жизнью часто размыта."
      },
      {
        id: 109,
        sentence: "She was [.....] by the warm welcome she received.",
        correctOption: "humbled",
        options: ["humbled", "humiliated", "hurried", "hurt"],
        translation: "Она была тронута (смиренна) теплым приемом, который ей оказали."
      },
      {
        id: 110,
        sentence: "A clear [.....] helps you sleep better at night.",
        correctOption: "conscience",
        options: ["conscience", "conscious", "science", "confidence"],
        translation: "Чистая совесть помогает лучше спать по ночам."
      }
    ]
  },
  {
    id: 2,
    title: "Personality & Character",
    questions: [
      {
        id: 201,
        sentence: "Despite her success, she remains [.....] and humble.",
        correctOption: "self-effacing",
        options: ["self-effacing", "selfish", "self-made", "self-confident"],
        translation: "Несмотря на успех, она остается скромной."
      },
      {
        id: 202,
        sentence: "She has a [.....] spirit and loves adventure.",
        correctOption: "free",
        options: ["free", "full", "fast", "far"],
        translation: "У нее свободный дух, и она любит приключения."
      },
      {
        id: 203,
        sentence: "My mother is a [.....] who challenged traditional norms.",
        correctOption: "rebel",
        options: ["rebel", "robot", "ruler", "reader"],
        translation: "Моя мать — бунтарка, бросившая вызов традиционным нормам."
      },
      {
        id: 204,
        sentence: "Parents should have high [.....] for their children's behavior.",
        correctOption: "expectations",
        options: ["expectations", "exceptions", "expeditions", "experiments"],
        translation: "У родителей должны быть высокие ожидания в отношении поведения детей."
      },
      {
        id: 205,
        sentence: "Always be [.....] about the world around you.",
        correctOption: "curious",
        options: ["curious", "furious", "serious", "nervous"],
        translation: "Всегда будьте любопытны к окружающему миру."
      },
      {
        id: 206,
        sentence: "He is a [.....] person who donates millions to charity.",
        correctOption: "philanthropist",
        options: ["philanthropist", "philosopher", "philatelist", "physicist"],
        translation: "Он филантроп, который жертвует миллионы на благотворительность."
      },
      {
        id: 207,
        sentence: "She is [.....] in her beliefs and principles.",
        correctOption: "grounded",
        options: ["grounded", "grounding", "ground", "grinding"],
        translation: "Она тверда (укоренена) в своих убеждениях и принципах."
      },
      {
        id: 208,
        sentence: "To succeed, you must find your [.....] in life.",
        correctOption: "passion",
        options: ["passion", "fashion", "ration", "station"],
        translation: "Чтобы добиться успеха, вы должны найти свою страсть в жизни."
      },
      {
        id: 209,
        sentence: "Don't just focus on results; enjoy the [.....].",
        correctOption: "process",
        options: ["process", "progress", "program", "problem"],
        translation: "Не фокусируйтесь только на результатах; наслаждайтесь процессом."
      },
      {
        id: 210,
        sentence: "She is in [.....] of the beautiful landscape.",
        correctOption: "awe",
        options: ["awe", "aware", "awful", "air"],
        translation: "Она в восторге от красивого пейзажа."
      }
    ]
  },
  {
    id: 3,
    title: "Wealth & Lifestyle",
    questions: [
      {
        id: 301,
        sentence: "They live in a large [.....] house in the countryside.",
        correctOption: "manor",
        options: ["manor", "manner", "major", "mayor"],
        translation: "Они живут в большом особняке в сельской местности."
      },
      {
        id: 302,
        sentence: "Even wealthy people have to do household [.....].",
        correctOption: "chores",
        options: ["chores", "choirs", "chorus", "choice"],
        translation: "Даже богатым людям приходится выполнять работу по дому."
      },
      {
        id: 303,
        sentence: "They could not [.....] to buy a new car.",
        correctOption: "afford",
        options: ["afford", "effort", "affect", "offer"],
        translation: "Они не могли позволить себе купить новую машину."
      },
      {
        id: 304,
        sentence: "He [.....] the bill for the entire dinner party.",
        correctOption: "footed",
        options: ["footed", "handed", "headed", "legged"],
        translation: "Он оплатил счет за весь званый ужин."
      },
      {
        id: 305,
        sentence: "She used to travel by [.....] before she had a car.",
        correctOption: "rickshaw",
        options: ["rickshaw", "rocket", "racket", "raft"],
        translation: "Раньше она ездила на рикше, пока у нее не появилась машина."
      },
      {
        id: 306,
        sentence: "The family [.....] a fortune in the tech industry.",
        correctOption: "made",
        options: ["made", "did", "took", "gave"],
        translation: "Осемья сколотила состояние в технологической индустрии."
      },
      {
        id: 307,
        sentence: "She wants to [.....] to society, not just take from it.",
        correctOption: "contribute",
        options: ["contribute", "distribute", "attribute", "tribute"],
        translation: "Она хочет вносить вклад в общество, а не просто брать от него."
      },
      {
        id: 308,
        sentence: "The decorations included expensive gold [.....].",
        correctOption: "cornicing",
        options: ["cornicing", "cornering", "corning", "courting"],
        translation: "Украшения включали дорогие золотые карнизы."
      },
      {
        id: 309,
        sentence: "He is a [.....] for the rules, but she is more relaxed.",
        correctOption: "stickler",
        options: ["stickler", "sticker", "stacker", "striker"],
        translation: "Он педант в правилах, а она более расслабленная."
      },
      {
        id: 310,
        sentence: "Walking the dog is a great [.....] from work stress.",
        correctOption: "escape",
        options: ["escape", "exit", "entry", "end"],
        translation: "Прогулка с собакой — отличный способ уйти от рабочего стресса."
      }
    ]
  },
  {
    id: 4,
    title: "Education & Upbringing",
    questions: [
      {
        id: 401,
        sentence: "Her parents wanted her to [.....] with the world, not just study books.",
        correctOption: "engage",
        options: ["engage", "marry", "fight", "play"],
        translation: "Родители хотели, чтобы она взаимодействовала с миром, а не просто изучала книги."
      },
      {
        id: 402,
        sentence: "She was the only female [.....] in her engineering class.",
        correctOption: "student",
        options: ["student", "studious", "study", "studio"],
        translation: "Она была единственной студенткой в своем инженерном классе."
      },
      {
        id: 403,
        sentence: "The school play required a special [.....] which was too expensive.",
        correctOption: "costume",
        options: ["costume", "custom", "customer", "perfume"],
        translation: "Для школьного спектакля требовался специальный костюм, который был слишком дорогим."
      },
      {
        id: 404,
        sentence: "He [.....] a postcard to the CEO to ask for a job.",
        correctOption: "wrote",
        options: ["wrote", "right", "rote", "writ"],
        translation: "Он написал открытку генеральному директору, чтобы попросить о работе."
      },
      {
        id: 405,
        sentence: "She [.....] the company policy that excluded women.",
        correctOption: "challenged",
        options: ["challenged", "changed", "charged", "chanted"],
        translation: "Она бросила вызов политике компании, исключающей женщин."
      },
      {
        id: 406,
        sentence: "Education is about discovering your [.....].",
        correctOption: "passions",
        options: ["passions", "patience", "patients", "patterns"],
        translation: "Образование — это открытие своих увлечений."
      },
      {
        id: 407,
        sentence: "Don't let exams [.....] your life.",
        correctOption: "consume",
        options: ["consume", "resume", "assume", "presume"],
        translation: "Не позволяйте экзаменам поглотить вашу жизнь."
      },
      {
        id: 408,
        sentence: "She is a children's [.....] who writes famous books.",
        correctOption: "novelist",
        options: ["novelist", "artist", "pianist", "typist"],
        translation: "Она детский писатель, который пишет известные книги."
      },
      {
        id: 409,
        sentence: "He founded the company the year before she was [.....].",
        correctOption: "born",
        options: ["born", "borne", "barn", "burn"],
        translation: "Он основал компанию за год до ее рождения."
      },
      {
        id: 410,
        sentence: "You must [.....] risks to achieve great things.",
        correctOption: "take",
        options: ["take", "make", "do", "get"],
        translation: "Вы должны рисковать, чтобы достичь великих целей."
      }
    ]
  },
  {
    id: 5,
    title: "Idioms & Phrasal Verbs",
    questions: [
      {
        id: 501,
        sentence: "Don't let the problem [.....] you up inside.",
        correctOption: "eat",
        options: ["eat", "drink", "sleep", "go"],
        translation: "Не позволяй проблеме съедать тебя изнутри."
      },
      {
        id: 502,
        sentence: "She wants to [.....] back to the community.",
        correctOption: "give",
        options: ["give", "take", "hold", "keep"],
        translation: "Она хочет отдавать долг обществу."
      },
      {
        id: 503,
        sentence: "He is a [.....] for the rules (very strict).",
        correctOption: "stickler",
        options: ["stickler", "sticker", "stacker", "stopper"],
        translation: "Он педант в правилах."
      },
      {
        id: 504,
        sentence: "Living in luxury but without freedom is like a [.....] cage.",
        correctOption: "gilded",
        options: ["gilded", "gold", "guilty", "guided"],
        translation: "Жизнь в роскоши, но без свободы — это как золотая клетка."
      },
      {
        id: 505,
        sentence: "She prefers to stay in the [.....] rather than be famous.",
        correctOption: "background",
        options: ["background", "backyard", "backpack", "backbone"],
        translation: "Она предпочитает оставаться на заднем плане, чем быть знаменитой."
      },
      {
        id: 506,
        sentence: "He [.....] up in a small village in India.",
        correctOption: "grew",
        options: ["grew", "grow", "grown", "green"],
        translation: "Он вырос в маленькой деревне в Индии."
      },
      {
        id: 507,
        sentence: "They [.....] out of money before the end of the month.",
        correctOption: "ran",
        options: ["ran", "run", "walked", "went"],
        translation: "У них закончились деньги до конца месяца."
      },
      {
        id: 508,
        sentence: "She [.....] after her mother (looks/acts like).",
        correctOption: "takes",
        options: ["takes", "makes", "looks", "goes"],
        translation: "Она пошла в мать (похожа на нее)."
      },
      {
        id: 509,
        sentence: "I had no [.....] that you were coming!",
        correctOption: "clue",
        options: ["clue", "glue", "blue", "true"],
        translation: "Я понятия не имел, что ты придешь!"
      },
      {
        id: 510,
        sentence: "Just do your best and don't [.....].",
        correctOption: "worry",
        options: ["worry", "hurry", "sorry", "curry"],
        translation: "Просто делай все возможное и не волнуйся."
      }
    ]
  }
];

export const DISCUSSION_QUESTIONS: DiscussionQuestion[] = [
  // WORK & STUDY
  { id: 1, topic: "Work & Study", question: "Do you work or are you a student?" },
  { id: 2, topic: "Work & Study", question: "What do you like most about your job or studies?" },
  { id: 3, topic: "Work & Study", question: "Do you prefer working alone or with others? Why?" },
  { id: 4, topic: "Work & Study", question: "Is there anything you dislike about your current work or course?" },
  { id: 5, topic: "Work & Study", question: "What would you like to do in the future?" },
  
  // HOME & ACCOMMODATION
  { id: 6, topic: "Home", question: "Do you live in a house or a flat?" },
  { id: 7, topic: "Home", question: "Who do you live with?" },
  { id: 8, topic: "Home", question: "What is your favourite room in your home? Why?" },
  { id: 9, topic: "Home", question: "Would you like to change anything about your home?" },
  { id: 10, topic: "Home", question: "Do you plan to live there for a long time?" },

  // HOMETOWN
  { id: 11, topic: "Hometown", question: "Where is your hometown?" },
  { id: 12, topic: "Hometown", question: "What is your hometown famous for?" },
  { id: 13, topic: "Hometown", question: "Is it a good place for young people to live?" },
  { id: 14, topic: "Hometown", question: "How has your hometown changed since you were a child?" },
  { id: 15, topic: "Hometown", question: "Do you think you will live there in the future?" },

  // HELPING OTHERS (2025 Trend)
  { id: 16, topic: "Helping Others", question: "Do you like helping other people?" },
  { id: 17, topic: "Helping Others", question: "How do you usually help your family or friends?" },
  { id: 18, topic: "Helping Others", question: "Do you think children should be taught to help others?" },
  { id: 19, topic: "Helping Others", question: "Have you ever done volunteer work?" },
  { id: 20, topic: "Helping Others", question: "How do people in your community help each other?" },

  // T-SHIRTS (2025 Trend)
  { id: 21, topic: "Clothing", question: "Do you like wearing t-shirts?" },
  { id: 22, topic: "Clothing", question: "How often do you wear them?" },
  { id: 23, topic: "Clothing", question: "Do you prefer t-shirts with pictures or plain ones?" },
  { id: 24, topic: "Clothing", question: "Do you think t-shirts are suitable for formal occasions?" },
  { id: 25, topic: "Clothing", question: "Have you ever bought a t-shirt as a souvenir?" },

  // DAILY ROUTINE
  { id: 26, topic: "Daily Routine", question: "What is your morning routine like?" },
  { id: 27, topic: "Daily Routine", question: "Do you have the same routine every day?" },
  { id: 28, topic: "Daily Routine", question: "What time do you usually go to bed?" },
  { id: 29, topic: "Daily Routine", question: "Do you think it is important to have a daily routine?" },
  { id: 30, topic: "Daily Routine", question: "How do you organize your study or work time?" },

  // WEATHER
  { id: 31, topic: "Weather", question: "What is your favourite kind of weather?" },
  { id: 32, topic: "Weather", question: "Does the weather affect your mood?" },
  { id: 33, topic: "Weather", question: "What do you usually do on rainy days?" },
  { id: 34, topic: "Weather", question: "Is the weather in your country changing?" },
  { id: 35, topic: "Weather", question: "Do you prefer hot or cold climates?" },

  // TECHNOLOGY
  { id: 36, topic: "Technology", question: "How often do you use a computer?" },
  { id: 37, topic: "Technology", question: "What do you use the internet for mostly?" },
  { id: 38, topic: "Technology", question: "Do you think children use technology too much?" },
  { id: 39, topic: "Technology", question: "Can you live without your smartphone for a day?" },
  { id: 40, topic: "Technology", question: "How has technology changed your life?" },

  // TRAVEL
  { id: 41, topic: "Travel", question: "Do you like travelling?" },
  { id: 42, topic: "Travel", question: "Where was the last place you travelled to?" },
  { id: 43, topic: "Travel", question: "Do you prefer travelling alone or with friends?" },
  { id: 44, topic: "Travel", question: "Which country would you like to visit in the future?" },
  { id: 45, topic: "Travel", question: "What is the best way to travel?" },

  // SPORT
  { id: 46, topic: "Sport", question: "Do you like playing sports?" },
  { id: 47, topic: "Sport", question: "What is the most popular sport in your country?" },
  { id: 48, topic: "Sport", question: "Did you play sports when you were a child?" },
  { id: 49, topic: "Sport", question: "Do you prefer watching sports or playing them?" },
  { id: 50, topic: "Sport", question: "What are the benefits of playing sports?" }
];

export const LEARNING_ACTIVITIES: LearningActivity[] = [
    // INTROVERT ACTIVITIES
    {
        id: 1,
        title: "Digital Association Journal",
        category: "introvert",
        description: "Deeply encode vocabulary by linking words to personal memories.",
        steps: [
            "Choose 5 target words (e.g., 'Scrutiny', 'Self-effacing').",
            "Write the definition in your own words.",
            "Write a paragraph describing a personal memory that links to this word.",
            "Find an image online that represents this feeling and paste it into your notes."
        ]
    },
    {
        id: 2,
        title: "Audio Shadowing (Private)",
        category: "introvert",
        description: "Perfect your pronunciation and intonation without the pressure of an audience.",
        steps: [
            "Use a text-to-speech tool (or the 'Speaking' tab) to hear a sentence.",
            "Record yourself saying the sentence immediately after listening.",
            "Listen to your recording and compare it to the original.",
            "Repeat until your rhythm matches the model exactly."
        ]
    },
    {
        id: 3,
        title: "Mind Map Construction",
        category: "introvert",
        description: "Visual learners can connect new vocabulary to existing knowledge structures.",
        steps: [
            "Place a central theme (e.g., 'Public Life') in the middle of a page.",
            "Branch out using target words like 'Gilded cage' or 'Residence'.",
            "Draw lines connecting these words to synonyms, antonyms, or related concepts.",
            "Use colors to code positive vs. negative connotations."
        ]
    },
    {
        id: 4,
        title: "Creative Writing Challenge",
        category: "introvert",
        description: "Contextualize vocabulary by weaving it into a fictional narrative.",
        steps: [
            "Select 5-8 words from the vocabulary list.",
            "Write a 150-word short story titled 'The Secret Letter'.",
            "Ensure every selected word is used correctly in context.",
            "Highlight the target words and read the story aloud to yourself."
        ]
    },
    {
        id: 5,
        title: "Sentence Transformation",
        category: "introvert",
        description: "Practice grammatical flexibility by rewriting sentences.",
        steps: [
            "Take a sentence from the text (e.g., 'She views her time as an opportunity to serve.').",
            "Rewrite it in 3 different ways using different grammar structures (Passive voice, Cleft sentences, etc.).",
            "Example: 'Serving is viewed by her as an opportunity.'",
            "Check if the meaning remains the same."
        ]
    },

    // EXTROVERT ACTIVITIES
    {
        id: 6,
        title: "Speed Definition Game",
        category: "extrovert",
        description: "High-energy social recall practice with a partner.",
        steps: [
            "Write target words on slips of paper.",
            "Set a timer for 60 seconds.",
            "Describe as many words as possible to your partner without saying the word itself.",
            "Count how many they guessed correctly. Switch roles."
        ]
    },
    {
        id: 7,
        title: "Roleplay: The Interview",
        category: "extrovert",
        description: "Simulate a real-life scenario using the target vocabulary.",
        steps: [
            "Partner A is a journalist; Partner B is Akshata Murty.",
            "The journalist asks questions about 'scrutiny' and 'public funds'.",
            "Partner B must answer using words like 'conscience', 'grounded', and 'engage'.",
            "Record the interview and review it together."
        ]
    },
    {
        id: 8,
        title: "Debate Club",
        category: "extrovert",
        description: "Use vocabulary to construct persuasive arguments.",
        steps: [
            "Topic: 'Public figures deserve no privacy.'",
            "One person argues For, the other Against.",
            "You MUST use at least 3 target words (e.g., 'scrutiny', 'expectations', 'boundary') in your argument.",
            "The person who uses the most vocabulary correctly wins."
        ]
    },
    {
        id: 9,
        title: "Teach It Back",
        category: "extrovert",
        description: "Solidify knowledge by explaining it to others.",
        steps: [
            "Choose 3 difficult words/idioms from the list.",
            "Prepare a 2-minute mini-lesson to teach these words to a friend or study group.",
            "Use examples, gestures, and questions to check their understanding.",
            "Ask them to use the word in a sentence back to you."
        ]
    },
    {
        id: 10,
        title: "The 'Alibi' Game",
        category: "extrovert",
        description: "Creative storytelling in a group setting.",
        steps: [
            "Create a fake story about where you were yesterday.",
            "You must include 5 specific target words (e.g., 'rickshaw', 'manor', 'escape').",
            "Your partner asks rapid-fire questions to find holes in your story.",
            "Keep the story going while naturally using the vocabulary."
        ]
    }
];
