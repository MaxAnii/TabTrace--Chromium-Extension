import { useEffect, useRef, useState } from "react";
import "./App.css";

import ChromePromise from "chrome-promise/chrome-promise";
function App() {
  const [historyItems, setHistoryItems] = useState([
    {
      id: "17461",
      lastVisitTime: 1699283753230.9949,
      title:
        '(265) "Phir Se Ud Chala Full Song Rockstar" | Ranbir Kapoor - YouTube',
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=2mWaqsC3U7k&list=RD2mWaqsC3U7k&start_radio=1",
      visitCount: 1,
    },
    {
      id: "19",
      lastVisitTime: 1699283705424.491,
      title: "(265) YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/",
      visitCount: 332,
    },
    {
      id: "17460",
      lastVisitTime: 1699283672552.207,
      title:
        "(265) When You Can't Control Your Laughter 😂 Live In Interview - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=JQ9OubhCg2Q",
      visitCount: 1,
    },
    {
      id: "33",
      lastVisitTime: 1699283464169.1338,
      title: "(20+) Facebook",
      typedCount: 103,
      url: "https://www.facebook.com/",
      visitCount: 503,
    },
    {
      id: "17459",
      lastVisitTime: 1699283438298.282,
      title: "(20+) Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/profile.php?id=61552655093026",
      visitCount: 1,
    },
    {
      id: "11517",
      lastVisitTime: 1699283384041.5881,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch",
      visitCount: 13,
    },
    {
      id: "17458",
      lastVisitTime: 1699283364968.092,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch?v=305393892268035",
      visitCount: 1,
    },
    {
      id: "41",
      lastVisitTime: 1699282898207.223,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?ref=tab",
      visitCount: 289,
    },
    {
      id: "16791",
      lastVisitTime: 1699282729370.9,
      title: "(20+) Krazy Anime - Videos | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/KrazyAnime/",
      visitCount: 151,
    },
    {
      id: "17457",
      lastVisitTime: 1699282699970.098,
      title: "(265) PAKISTANIS ARE SAVAGE PT 10 @ZakirKhan - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=2C2It0CtUpI",
      visitCount: 1,
    },
    {
      id: "17456",
      lastVisitTime: 1699282581064.404,
      title: "(265) C Language Tutorials In Hindi - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",
      visitCount: 1,
    },
    {
      id: "17455",
      lastVisitTime: 1699282580290.854,
      title: "C Language Tutorials In Hindi - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR&si=oV7Lf5wdl6q0EdW5",
      visitCount: 1,
    },
    {
      id: "17453",
      lastVisitTime: 1699282571385.803,
      title:
        "(265) C Language Tutorial For Beginners In Hindi (With Notes) 🔥 - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=ZSPZob_1TOk",
      visitCount: 1,
    },
    {
      id: "17452",
      lastVisitTime: 1699282570215.069,
      title:
        "(265) C Language Tutorial For Beginners In Hindi (With Notes) 🔥 - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?si=bQTRu94eEaixEo_i&v=ZSPZob_1TOk&feature=youtu.be",
      visitCount: 2,
    },
    {
      id: "17450",
      lastVisitTime: 1699282480633.841,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/viewscore?viewscore=AE0zAgBck7C1bRo7T6bQuMJly7jo5bxfb1fc7jWwSzDf0a5-G-B9K2hMbSeYrTMItlg0bh8",
      visitCount: 1,
    },
    {
      id: "17449",
      lastVisitTime: 1699282480602.268,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/viewscore?viewscore=AE0zAgBck7C1bRo7T6bQuMJly7jo5bxfb1fc7jWwSzDf0a5-G-B9K2hMbSeYrTMItlg0bh8",
      visitCount: 2,
    },
    {
      id: "17432",
      lastVisitTime: 1699282474695.701,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/formResponse",
      visitCount: 5,
    },
    {
      id: "17448",
      lastVisitTime: 1699282299027.537,
      title:
        "If C income is 20% more than B income and B income is 25% more than A",
      typedCount: 0,
      url: "https://www.doubtnut.com/qna/17685",
      visitCount: 1,
    },
    {
      id: "17447",
      lastVisitTime: 1699282161340.383,
      title:
        "The income of A is 150% of the income of B and the income of C is 120%",
      typedCount: 0,
      url: "https://www.doubtnut.com/qna/647830377",
      visitCount: 2,
    },
    {
      id: "17446",
      lastVisitTime: 1699282158195.481,
      title:
        "The income of A is 150% of the income of B and the income of C is 120% of the income of A. If the total income of A, B and C together is Rs. 86,000, what is C’s income? - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=The+income+of+A+is+150%25+of+the+income+of+B+and+the+income+of+C+is+120%25+of+the+income+of+A.+If+the+total+income+of+A%2C+B+and+C+together+is+Rs.+86%2C000%2C+what+is+C%E2%80%99s+income%3F&sca_esv=579769985&sxsrf=AM9HkKm4m9pao6Dx1-LoMPBc8hjRJNo4xg%3A1699281404275&ei=_PlIZdiyENzXseMPoriDsAU&ved=0ahUKEwjYoObDzK-CAxXca2wGHSLcAFYQ4dUDCBA&uact=5&oq=The+income+of+A+is+150%25+of+the+income+of+B+and+the+income+of+C+is+120%25+of+the+income+of+A.+If+the+total+income+of+A%2C+B+and+C+together+is+Rs.+86%2C000%2C+what+is+C%E2%80%99s+income%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiqgFUaGUgaW5jb21lIG9mIEEgaXMgMTUwJSBvZiB0aGUgaW5jb21lIG9mIEIgYW5kIHRoZSBpbmNvbWUgb2YgQyBpcyAxMjAlIG9mIHRoZSBpbmNvbWUgb2YgQS4gSWYgdGhlIHRvdGFsIGluY29tZSBvZiBBLCBCIGFuZCBDIHRvZ2V0aGVyIGlzIFJzLiA4NiwwMDAsIHdoYXQgaXMgQ-KAmXMgaW5jb21lPzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIHECMY6gIYJzIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBATIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAUjRG1CdFVidFXACeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQH4AQKoAhTiAwQYACBBiAYBugYGCAEQARgL&sclient=gws-wiz-serp",
      visitCount: 2,
    },
    {
      id: "17441",
      lastVisitTime: 1699282151240.102,
      title:
        "Rahul gives a crystal diamond ring to his wife Vijeta on their wedding anniversary. However, the ring falls off Vijeta's hand and breaks into three pieces the weights of which are in the ratio of 2 : 3 : 4. The value of each piece is directly proportional to the square of their weights. The given value of the diamond in the ring was Rs. 24,300. Find the loss due to breakage. - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=Rahul+gives+a+crystal+diamond+ring+to+his+wife+Vijeta+on+their+wedding+anniversary.+However%2C+the+ring+falls+off+Vijeta%27s+hand+and+breaks+into+three+pieces+the+weights+of+which+are+in+the+ratio+of+2+%3A+3+%3A+4.+The+value+of+each+piece+is+directly+proportional+to+the+square+of+their+weights.+The+given+value+of+the+diamond+in+the+ring+was+Rs.+24%2C300.+Find+the+loss+due+to+breakage.&sca_esv=579769985&sxsrf=AM9HkKkl7nimGy_7glZV7Sm5WEekPJoDsA%3A1699281134357&ei=7vhIZeukFdvYseMP3eWkUA&ved=0ahUKEwjr04vDy6-CAxVbbGwGHd0yCQoQ4dUDCBA&uact=5&oq=Rahul+gives+a+crystal+diamond+ring+to+his+wife+Vijeta+on+their+wedding+anniversary.+However%2C+the+ring+falls+off+Vijeta%27s+hand+and+breaks+into+three+pieces+the+weights+of+which+are+in+the+ratio+of+2+%3A+3+%3A+4.+The+value+of+each+piece+is+directly+proportional+to+the+square+of+their+weights.+The+given+value+of+the+diamond+in+the+ring+was+Rs.+24%2C300.+Find+the+loss+due+to+breakage.&gs_lp=Egxnd3Mtd2l6LXNlcnAi-QJSYWh1bCBnaXZlcyBhIGNyeXN0YWwgZGlhbW9uZCByaW5nIHRvIGhpcyB3aWZlIFZpamV0YSBvbiB0aGVpciB3ZWRkaW5nIGFubml2ZXJzYXJ5LiBIb3dldmVyLCB0aGUgcmluZyBmYWxscyBvZmYgVmlqZXRhJ3MgaGFuZCBhbmQgYnJlYWtzIGludG8gdGhyZWUgcGllY2VzIHRoZSB3ZWlnaHRzIG9mIHdoaWNoIGFyZSBpbiB0aGUgcmF0aW8gb2YgMiA6IDMgOiA0LiBUaGUgdmFsdWUgb2YgZWFjaCBwaWVjZSBpcyBkaXJlY3RseSBwcm9wb3J0aW9uYWwgdG8gdGhlIHNxdWFyZSBvZiB0aGVpciB3ZWlnaHRzLiBUaGUgZ2l2ZW4gdmFsdWUgb2YgdGhlIGRpYW1vbmQgaW4gdGhlIHJpbmcgd2FzIFJzLiAyNCwzMDAuIEZpbmQgdGhlIGxvc3MgZHVlIHRvIGJyZWFrYWdlLkgAUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQHiAwQYACBB&sclient=gws-wiz-serp",
      visitCount: 4,
    },
    {
      id: "17445",
      lastVisitTime: 1699281458573.956,
      title:
        "A diamond broke into three pait, the ratio of weight of three part is",
      typedCount: 0,
      url: "https://www.doubtnut.com/qna/643555552",
      visitCount: 2,
    },
    {
      id: "17442",
      lastVisitTime: 1699281408121.306,
      title:
        "[Solved] A diamond is broken into three parts in the ratio 1: 2 : 3.",
      typedCount: 0,
      url: "https://testbook.com/question-answer/a-diamond-is-broken-into-three-parts-in-the-ratio--5fe239d746be4606b0e220cd",
      visitCount: 1,
    },
    {
      id: "17436",
      lastVisitTime: 1699281399567.1848,
      title:
        "If A : B = 2 : 3, B : C = 5 : 7 and C : D = 3 : 10, then what is A : D equal to? - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=If+A+%3A+B+%3D+2+%3A+3%2C+B+%3A+C+%3D+5+%3A+7+and+C+%3A+D+%3D+3+%3A+10%2C+then+what+is+A+%3A+D+equal+to%3F&sca_esv=579769985&sxsrf=AM9HkKl95nhg9Kf-L8vQcwf10e8jIMKVng%3A1699280767485&ei=f_dIZb2JG97vseMP-dK7sAg&ved=0ahUKEwj9xJGUyq-CAxXed2wGHXnpDoYQ4dUDCBA&uact=5&oq=If+A+%3A+B+%3D+2+%3A+3%2C+B+%3A+C+%3D+5+%3A+7+and+C+%3A+D+%3D+3+%3A+10%2C+then+what+is+A+%3A+D+equal+to%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiUElmIEEgOiBCID0gMiA6IDMsIEIgOiBDID0gNSA6IDcgYW5kIEMgOiBEID0gMyA6IDEwLCB0aGVuIHdoYXQgaXMgQSA6IEQgZXF1YWwgdG8_MgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMgcQIxjqAhgnMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQLhgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBMhYQABgDGI8BGOUCGOoCGLQCGIwD2AEBSKogUNUGWIcacAF4AJABAJgBAKABAKoBALgBA8gBAPgBAfgBAqgCFOIDBBgAIEGIBgG6BgYIARABGAs&sclient=gws-wiz-serp",
      visitCount: 3,
    },
    {
      id: "17437",
      lastVisitTime: 1699281399080.688,
      title:
        "if A:B=2:3,B:C=5:7 and c:d=3:10, Then what is A:D equal to? - Brainly.in",
      typedCount: 0,
      url: "https://brainly.in/question/3424564#:~:text=Answer,-2%20people%20found&text=A%20%3A%20D%20%3D%2030%20%3A%20210%20%3D%201%20%3A%207.",
      visitCount: 2,
    },
    {
      id: "17438",
      lastVisitTime: 1699281397005.075,
      title: "Brainly.in - For students. By students.",
      typedCount: 0,
      url: "https://brainly.in/app/ask?q=Rahul+gives+a+crystal+diamond+ring+to+his+wife+Vijeta+on+their+wedding+anniversary.+However%2C+the+ring+falls+off+Vijeta%27s+hand+and+breaks+into+three+pieces+the+weights+of+which+are+in+the+ratio+of+2+%3A+3+%3A+4.+The+value+of+each+piece+is+directly+proportional+to+the+square+of+their+weights.+The+given+value+of+the+diamond+in+the+ring+was+Rs.+24%2C300.+Find+the+loss+due+to+breakage.&source=topbar",
      visitCount: 3,
    },
    {
      id: "17440",
      lastVisitTime: 1699281375190.343,
      title:
        "A diamond falls and breaks into three pieces whose weights are in the ratio 3:4:5. the value of the diamond - Brainly.in",
      typedCount: 0,
      url: "https://brainly.in/question/4776080?referrer=searchResults",
      visitCount: 1,
    },
    {
      id: "17439",
      lastVisitTime: 1699281349591.388,
      title:
        "A solid diamond falls and breaks into three pieces whose weights are in the ratio of 2 : 3 : 4. the value of - Brainly.in",
      typedCount: 0,
      url: "https://brainly.in/question/1935835?referrer=searchResults",
      visitCount: 1,
    },
    {
      id: "17434",
      lastVisitTime: 1699281128316.757,
      title:
        "Seats for Maths, English and General Knowledge are in the ratio of 5 : 7 : 8 respectively. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the respective ratio of increased seats - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=Seats+for+Maths%2C+English+and+General+Knowledge+are+in+the+ratio+of+5+%3A+7+%3A+8+respectively.+There+is+a+proposal+to+increase+these+seats+by+40%25%2C+50%25+and+75%25+respectively.+What+will+be+the+respective+ratio+of+increased+seats&oq=Seats+for+Maths%2C+English+and+General+Knowledge+are+in+the+ratio+of+5+%3A+7+%3A+8+respectively.+There+is+a+proposal+to+increase+these+seats+by+40%25%2C+50%25+and+75%25+respectively.+What+will+be+the+respective+ratio+of+increased+seats&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzYxOWowajGoAgCwAgA&sourceid=chrome&ie=UTF-8",
      visitCount: 3,
    },
    {
      id: "17435",
      lastVisitTime: 1699280775929.439,
      title:
        "[Solved] Seats for Math, English and General Knowledge are in the rat",
      typedCount: 0,
      url: "https://testbook.com/question-answer/seats-for-math-english-and-general-knowledge-are--60117c702c8514bc83559774",
      visitCount: 1,
    },
    {
      id: "17433",
      lastVisitTime: 1699280676631.583,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/formResponse",
      visitCount: 1,
    },
    {
      id: "17431",
      lastVisitTime: 1699280674709.8,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/viewform?fbzx=-8521070441491086687",
      visitCount: 1,
    },
    {
      id: "17430",
      lastVisitTime: 1699280575175.555,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/viewform",
      visitCount: 1,
    },
    {
      id: "17429",
      lastVisitTime: 1699280575134.144,
      title: "Aptitude Test Series - 8",
      typedCount: 0,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScJgzNegXa_DQAqnozzRwfPTwgl00lGzsRgAxkJA5ojSp76Tg/viewform?usp=send_form",
      visitCount: 2,
    },
    {
      id: "16836",
      lastVisitTime: 1699279813104.733,
      title: "(20+) AnimeDo - Videos | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/100094786373374/",
      visitCount: 2,
    },
    {
      id: "17427",
      lastVisitTime: 1699277760632.67,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=878752043903894",
      visitCount: 1,
    },
    {
      id: "17425",
      lastVisitTime: 1699274968722.188,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=1002935254275278",
      visitCount: 3,
    },
    {
      id: "17426",
      lastVisitTime: 1699239184735.8652,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=694842165594047",
      visitCount: 1,
    },
    {
      id: "17414",
      lastVisitTime: 1699238184462.3762,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=1080272733353677",
      visitCount: 2,
    },
    {
      id: "17424",
      lastVisitTime: 1699233075071.269,
      title: "explain useeffect in react - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=explain+useeffect+in+react&sca_esv=579685236&sxsrf=AM9HkKksokI18nyKfpepUE7l3AwbRpl1Og%3A1699232947930&ei=szxIZe22ONvdseMP_cW-0Ak&oq=explain+use&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2V4cGxhaW4gdXNlKgIIADIKEAAYgAQYFBiHAjIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESI43UABY7CVwAXgBkAEAmAHxA6ABjBuqAQcyLTkuMi4xuAEDyAEA-AEBwgIEECMYJ8ICBxAjGIoFGCfCAgcQABiKBRhDwgILEAAYgAQYsQMYgwHCAgsQLhiABBixAxiDAcICCBAAGIoFGJECwgILEAAYigUYsQMYkQLCAgoQABiKBRixAxhDwgIIEAAYigUYsQPiAwQYACBBiAYB&sclient=gws-wiz-serp",
      visitCount: 2,
    },
    {
      id: "17423",
      lastVisitTime: 1699232948617.014,
      title: "what are hooks in react - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=what+are+hooks+in+react&sca_esv=579685236&sxsrf=AM9HkKlGQRwsIZ5ZNQVjZ0XKA2TZ8VXAqg%3A1699232789477&ei=FTxIZajQHNjNseMPpfyGuAo&ved=0ahUKEwjorrq2l66CAxXYZmwGHSW-AacQ4dUDCBA&uact=5&oq=what+are+hooks+in+react&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3doYXQgYXJlIGhvb2tzIGluIHJlYWN0MgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiPUVDnDljVTnABeAGQAQCYAdQCoAG2LqoBBjItMjAuM7gBA8gBAPgBAagCFMICBxAjGOoCGCfCAhAQABiKBRjqAhi0AhhD2AEBwgIHECMYigUYJ8ICBBAjGCfCAggQABiKBRiRAsICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICCxAAGIoFGLEDGIMBwgIJEAAYigUYChhDwgIKEAAYigUYsQMYQ8ICDRAAGIoFGLEDGIMBGEPCAgcQABiKBRhDwgIHEAAYgAQYCsICChAAGIAEGBQYhwLiAwQYACBBiAYBugYGCAEQARgB&sclient=gws-wiz-serp",
      visitCount: 2,
    },
    {
      id: "17422",
      lastVisitTime: 1699232832256.96,
      title: "cnd full form - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=cnd+full+form&sca_esv=579685236&sxsrf=AM9HkKklDmk_7748GMqLPiP2kRo5VzI0aA%3A1699232815449&ei=LzxIZYaBG9iUseMPr7z50Aw&oq=cnd+fu&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmNuZCBmdSoCCAAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKhmUMlHWJFXcAJ4AZABAJgBlwKgAZAGqgEDMi0zuAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAgcQABiKBRhDwgIIEAAYgAQYsQPCAgcQABiABBgK4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp",
      visitCount: 2,
    },
    {
      id: "17421",
      lastVisitTime: 1699232816217.4448,
      title: "cnd - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=cnd&oq=cnd&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE2MDlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8",
      visitCount: 2,
    },
    {
      id: "17420",
      lastVisitTime: 1699232790319.727,
      title: "how do you optimize the large react app - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=how+do+you+optimize+the+large+react+app&sca_esv=579685236&sxsrf=AM9HkKmv7H8IAw_7_pk7YkvNLLfAQY-9Xg%3A1699232581014&ei=RTtIZZM51qGx4w-YjanYAw&ved=0ahUKEwjT74bTlq6CAxXWUGwGHZhGCjsQ4dUDCBA&uact=5&oq=how+do+you+optimize+the+large+react+app&gs_lp=Egxnd3Mtd2l6LXNlcnAiJ2hvdyBkbyB5b3Ugb3B0aW1pemUgdGhlIGxhcmdlIHJlYWN0IGFwcDIFECEYoAEyBBAhGBUyCBAhGBYYHhgdMggQIRgWGB4YHTIIECEYFhgeGB1IxOYBUABY490BcAB4AJABAJgBxQKgAYtNqgEGMi0zNS40uAEDyAEA-AEBwgIHECMYigUYJ8ICCBAAGIoFGJECwgIHEAAYigUYQ8ICCxAAGIAEGLEDGIMBwgILEAAYigUYsQMYgwHCAgsQLhiABBixAxiDAcICBBAjGCfCAgUQABiABMICBRAuGIAEwgIIEAAYgAQYsQPCAggQABiKBRixA8ICChAAGIAEGBQYhwLCAgYQABgWGB7CAggQABgWGB4YD8ICCBAAGBYYHhgKwgIIEAAYigUYhgPCAgcQIRigARgK4gMEGAAgQYgGAQ&sclient=gws-wiz-serp",
      visitCount: 2,
    },
    {
      id: "17416",
      lastVisitTime: 1699232757509.274,
      title: "what is react fragment - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=what+is+react+fragment&sca_esv=579685236&sxsrf=AM9HkKnTUypKyZZ9V-m0ZjD0xxRLX1u8bg%3A1699232071713&ei=RzlIZaSJK_SRseMP4sm0yAU&oq=what+is+react+f&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3doYXQgaXMgcmVhY3QgZioCCAAyCBAAGIoFGJECMgoQABiABBgUGIcCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI1k5Q1gtYxENwBXgBkAEAmAGwAqABkSSqAQYyLTE1LjO4AQPIAQD4AQGoAhTCAgcQIxjqAhgnwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAcICFhAuGAMYjwEY5QIY6gIYtAIYjAPYAQHCAgQQIxgnwgILEAAYgAQYsQMYgwHCAgsQLhiABBixAxiDAcICCBAAGIAEGLEDwgILEAAYigUYsQMYgwHCAgcQIxiKBRgnwgIHEAAYigUYQ8ICBxAuGIoFGEPCAggQLhiABBixA8ICCBAuGIoFGLEDwgIFEC4YgATCAgcQABiABBgKwgINEAAYgAQYFBiHAhixA8ICBhAAGBYYHuIDBBgAIEGIBgG6BgYIARABGAs&sclient=gws-wiz-serp",
      visitCount: 3,
    },
    {
      id: "17418",
      lastVisitTime: 1699232647578.2139,
      title: "How to use React Fragments? | refine",
      typedCount: 0,
      url: "https://refine.dev/blog/how-react-fragments-is-works/#introduction",
      visitCount: 2,
    },
    {
      id: "17419",
      lastVisitTime: 1699232633877.9941,
      title: "How to use React Fragments? | refine",
      typedCount: 0,
      url: "https://refine.dev/blog/how-react-fragments-is-works/#what-is-react-fragment",
      visitCount: 1,
    },
    {
      id: "17417",
      lastVisitTime: 1699232619788.0708,
      title: "How to use React Fragments? | refine",
      typedCount: 0,
      url: "https://refine.dev/blog/how-react-fragments-is-works/#:~:text=React%20Fragment%20is%20a%20feature,element%20in%20a%20root%20element.",
      visitCount: 1,
    },
    {
      id: "17415",
      lastVisitTime: 1699232072533.349,
      title:
        "what are the different types of components that we can render using react router? - Google Search",
      typedCount: 0,
      url: "https://www.google.com/search?q=what+are+the+different+types+of+components+that+we+can+render+using+react+router%3F&oq=what+are+the+different+types+of+components+that+we+can+render+using+react+router%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTQ0ODQ2ajBqMagCALACAA&sourceid=chrome&ie=UTF-8",
      visitCount: 2,
    },
    {
      id: "17413",
      lastVisitTime: 1699205213103.561,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=1035561137473663",
      visitCount: 2,
    },
    {
      id: "17412",
      lastVisitTime: 1699205209449.167,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=670936085006470",
      visitCount: 2,
    },
    {
      id: "17333",
      lastVisitTime: 1699202456577.8142,
      title: "(20+) Video | Facebook",
      typedCount: 0,
      url: "https://www.facebook.com/watch/?v=6417447855047224",
      visitCount: 3,
    },
    {
      id: "17411",
      lastVisitTime: 1699201651934.628,
      title:
        "(262) Palestine🇵🇸sad song / salaam ya mehdi urdu subtitles / being muslim do subscribe+🔔 #salamyamahdi - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=FNOgYIpjV9s",
      visitCount: 1,
    },
    {
      id: "17410",
      lastVisitTime: 1699201378337.544,
      title:
        "(262) أنا ثائر أنا ثائر | الرادود هادي فاعور | Ahrarun Ahrarun - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=wrCIJHbyhpw",
      visitCount: 1,
    },
    {
      id: "17409",
      lastVisitTime: 1699201149353.042,
      title:
        "(262) Janam Fida-e-Haideri | Amjad Baltistani | Original Video - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=UJB3o3v3uV0",
      visitCount: 1,
    },
    {
      id: "5593",
      lastVisitTime: 1699200460888.419,
      title: "(262) Coke Studio Season 8| Tajdar-e-Haram| Atif Aslam - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=a18py61_F_w",
      visitCount: 2,
    },
    {
      id: "17408",
      lastVisitTime: 1699200285259.778,
      title:
        "(262) 'Tu Jo Mila' VIDEO Song - K.K. Pritam | Salman Khan, Nawazuddin, Harshaali | Bajrangi Bhaijaan - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=6DCOjq0omBc",
      visitCount: 1,
    },
    {
      id: "17407",
      lastVisitTime: 1699199906314.418,
      title:
        "(262) 'Bhar Do Jholi Meri' FULL VIDEO Song - Adnan Sami | Bajrangi Bhaijaan | Salman Khan Pritam - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=zk0-f92gg9A",
      visitCount: 1,
    },
    {
      id: "17406",
      lastVisitTime: 1699199892725.56,
      title:
        "(262) Ertugrul X Osman X Malik Shah X Sencer | Jawab-e-Shikwa | Allama Iqbal - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=qRQvvyKXGM4",
      visitCount: 1,
    },
    {
      id: "17405",
      lastVisitTime: 1699199886671.702,
      title:
        "(262) The Conqueror of Jerusalem: Saladin Ayyubi - The Tearful Life Story! - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=07FtlU6xkVk",
      visitCount: 1,
    },
    {
      id: "17403",
      lastVisitTime: 1699199862792.4321,
      title: "(262) sahalov din ayubi - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/results?search_query=sahalov+din+ayubi",
      visitCount: 2,
    },
    {
      id: "17404",
      lastVisitTime: 1699199862078.326,
      title:
        "(262) Who is Saladin? The Untold Truth of Salahuddin Ayyubi Explained in 10 Minutes - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=CaTgBuUuJ6Q",
      visitCount: 2,
    },
    {
      id: "17402",
      lastVisitTime: 1699199812448.222,
      title: "(262) ASKING AWKWARDLY PRIVATE QUESTIONS 🤣 #shorts - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/shorts/EMDsWBT1tUA",
      visitCount: 1,
    },
    {
      id: "17401",
      lastVisitTime: 1699199811985.135,
      title:
        "(262) Ghaib Pe Emaan? #sahiladeem #HazratAdam #EonPodcast #Portal #lawsofphysics - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/shorts/MdCvmcd5lR8",
      visitCount: 2,
    },
    {
      id: "17400",
      lastVisitTime: 1699199810966.887,
      title:
        "(262) Free Palestine 🇯🇴 #viralshort #trendingshorts #viralvideo #islamicstatus #trending - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/shorts/oDScPKmc5_o",
      visitCount: 2,
    },
    {
      id: "17399",
      lastVisitTime: 1699199805137.449,
      title:
        "(262) imam e kaba se munajra - by engineer Mohammad Ali Mirza --??????,🔥🔥🔥✅ - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/shorts/OdtA4MeFKCI",
      visitCount: 2,
    },
    {
      id: "17398",
      lastVisitTime: 1699199803128.185,
      title: "(262) Salam ya Mahdi | fee Palestine - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/shorts/yRSrGZ_ljhE",
      visitCount: 2,
    },
    {
      id: "17397",
      lastVisitTime: 1699199776837.25,
      title:
        "(262) Shafqat Amanat Ali (Fuzon) - Khamaj (Mora Saiyaan) - High Quality - With Lyrics - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=PQm7-m0vqNk",
      visitCount: 1,
    },
    {
      id: "17396",
      lastVisitTime: 1699199603196.767,
      title:
        "(262) क्यों Anu जी ने यह Audition देख मारा अपने आप को चाँटा? | Indian Idol | Daily Mix - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=3EVpA80hR9E",
      visitCount: 1,
    },
    {
      id: "17395",
      lastVisitTime: 1699199562759.902,
      title: "(262) redux - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/results?search_query=redux",
      visitCount: 1,
    },
    {
      id: "17371",
      lastVisitTime: 1699199382358.467,
      title: "MaxAnii/Web-History-Extension",
      typedCount: 0,
      url: "https://github.com/MaxAnii/Web-History-Extension",
      visitCount: 3,
    },
    {
      id: "17394",
      lastVisitTime: 1699199288152.96,
      title:
        "(262) Vennu Mallesh - It's My Life What Ever I Wanna Do - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=kJa2kwoZ2a4",
      visitCount: 1,
    },
    {
      id: "17393",
      lastVisitTime: 1699199199143.9731,
      title: "(262) song by a chinese girl great expression - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=p908rvjzE2A",
      visitCount: 1,
    },
    {
      id: "17392",
      lastVisitTime: 1699199145076.658,
      title:
        "(262) Funny Singing | Funny Asian Man Singing | Funny Singer | funniest Singer | Singer | China ke gane - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=RginaCA1t1c",
      visitCount: 1,
    },
    {
      id: "17391",
      lastVisitTime: 1699199133497.569,
      title: "(262) memes i found on summer break - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=nK7-UThyPag",
      visitCount: 1,
    },
    {
      id: "17390",
      lastVisitTime: 1699199052446.0508,
      title: "(262) you laugh 2 times, you restart - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=pl0KA-wPT8A",
      visitCount: 1,
    },
    {
      id: "17389",
      lastVisitTime: 1699198999162.365,
      title: "(262) Anday Wala Burger.mp4 - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=ezY7F8OJ9Rg",
      visitCount: 1,
    },
    {
      id: "17388",
      lastVisitTime: 1699198960686.319,
      title: "(262) funny phone call 😂 #memes - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=-mpPkKVbIyY",
      visitCount: 1,
    },
    {
      id: "17387",
      lastVisitTime: 1699198945537.3608,
      title: "(262) BLACK BOY CRYING AND SMILING ATTITUDE #shorts - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=VP-o1Ta2ZsY",
      visitCount: 1,
    },
    {
      id: "17386",
      lastVisitTime: 1699198934866.226,
      title: "(262) bald guy drinks orange juice - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=tcfitI7XMYo",
      visitCount: 1,
    },
    {
      id: "17385",
      lastVisitTime: 1699198902322.573,
      title: "(262) Hello Im Under The Water... - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=SfT4FMkh1-w",
      visitCount: 1,
    },
    {
      id: "17384",
      lastVisitTime: 1699198818761.595,
      title: "(262) Hardest Name in Africa - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=W85F-UmnbF4",
      visitCount: 1,
    },
    {
      id: "17381",
      lastVisitTime: 1699198755219.733,
      title:
        "(262) Funny Arab Idol Hilarious audition, can't stop laughing - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=RIUdYTEZNps",
      visitCount: 2,
    },
    {
      id: "17382",
      lastVisitTime: 1699198754043.831,
      title: "(262) russian funny dance - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/results?search_query=russian+funny+dance+",
      visitCount: 2,
    },
    {
      id: "17383",
      lastVisitTime: 1699198690156.9,
      title: "(262) Dimitri original translation - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=3Nkb3g-yySs",
      visitCount: 1,
    },
    {
      id: "17380",
      lastVisitTime: 1699198544229.829,
      title:
        "(262) apka favorite Subject is called बैंगन !! Funny meme 😂!! AKV - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=N3JFAHkxk1Y",
      visitCount: 1,
    },
    {
      id: "17378",
      lastVisitTime: 1699198537608.614,
      title: "(262) 80 roti MEME - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/results?search_query=80+roti+MEME",
      visitCount: 2,
    },
    {
      id: "17379",
      lastVisitTime: 1699198517227.4429,
      title:
        "(262) mathura vrindavan hotel me sherpal devpal ne khai 40 roti - cheeta bol rahe hain - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=9aPlJSaDASM",
      visitCount: 1,
    },
    {
      id: "17377",
      lastVisitTime: 1699198495993.836,
      title: "(262) 80 roti khane wala - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/results?search_query=80+roti+khane+wala",
      visitCount: 1,
    },
    {
      id: "17376",
      lastVisitTime: 1699198481394.6582,
      title: "(262) AASI ROTI - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/results?search_query=AASI+ROTI",
      visitCount: 1,
    },
    {
      id: "17375",
      lastVisitTime: 1699198426123.463,
      title:
        "(262) Asal Mein - Darshan Raval | Official Video | Indie Music Label - Latest Hit song 2020 - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=beqprrnaKFc&list=RDK0ibsAQTyRQ&index=9",
      visitCount: 1,
    },
    {
      id: "17374",
      lastVisitTime: 1699198348436.856,
      title:
        "(262) Dil(Lyrical):Ek Villain Returns| John,Disha,Arjun,Tara,Raghav,Kaushik-Guddu | Mohit,Ektaa |Bhushan K - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=NgjERPTaC4Y&list=RDK0ibsAQTyRQ&index=8",
      visitCount: 1,
    },
    {
      id: "48",
      lastVisitTime: 1699198314601.39,
      title: "PM-USPY (SSSJKL)",
      typedCount: 0,
      url: "https://www.aicte-jk-scholarship-gov.in/submittedDBT16.php",
      visitCount: 13,
    },
    {
      id: "46",
      lastVisitTime: 1699198311095.74,
      title: "PM-USPY (SSSJKL)",
      typedCount: 0,
      url: "https://www.aicte-jk-scholarship-gov.in/submitted.php",
      visitCount: 15,
    },
    {
      id: "49",
      lastVisitTime: 1699198299971.21,
      title: "PM-USPY (SSSJKL)",
      typedCount: 0,
      url: "https://www.aicte-jk-scholarship-gov.in/login.php?r=session_timeout",
      visitCount: 16,
    },
    {
      id: "17373",
      lastVisitTime: 1699198206186.6829,
      title: "(262) Yashal Shahid | Sajna | Lightingale Productions - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=5rvkSr5uN1E&list=RDK0ibsAQTyRQ&index=7",
      visitCount: 1,
    },
    {
      id: "17365",
      lastVisitTime: 1699198010662.501,
      title:
        "(262) Meri Jaan / Ya Tuli Khanjar Maare | Bhoomi 2023 | Mithoon | Abdul Rashid Hafiz, Asees Kaur | Kashmir - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=mhFsxO9WE8c&list=RDK0ibsAQTyRQ&index=6",
      visitCount: 2,
    },
    {
      id: "17372",
      lastVisitTime: 1699198010656.92,
      title:
        "(262) Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar - YouTube",
      typedCount: 0,
      url: "https://www.youtube.com/watch?v=huxhqphtDrM&list=RDK0ibsAQTyRQ&index=6",
      visitCount: 1,
    },
    {
      id: "17370",
      lastVisitTime: 1699197749283.507,
      title: "General",
      typedCount: 0,
      url: "https://github.com/MaxAnii/test-API/settings",
      visitCount: 2,
    },
    {
      id: "17369",
      lastVisitTime: 1699197748711.367,
      title: "MaxAnii/test-API",
      typedCount: 0,
      url: "https://github.com/MaxAnii/test-API",
      visitCount: 4,
    },
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchHistoryItems, setSearchHistoryItems] = useState("");
  const toggleSelect = useRef();
  const select = useRef([]);
  const chrome = new ChromePromise();
  // chrome.history
  //   .search({
  //     text: "",
  //   })
  //   .then((result) => {
  //     setHistoryItems(result);
  //     if (searchHistoryItems.length === 0) setFilteredData(result);
  //   });

  const setData = () => {
    console.log(searchHistoryItems.length);
    if (searchHistoryItems.length !== 0) {
      console.log("yes");
      setFilteredData(
        historyItems.filter(
          (elem) =>
            elem.title.includes(searchHistoryItems) ||
            elem.url.includes(searchHistoryItems)
        )
      );
    } else {
      setFilteredData(historyItems);
    }
  };
  useEffect(() => {
    setData();
  }, [searchHistoryItems]);
  const checkboxvalue = (index) => {
    select.current.check = select.current.check ? false : true;
    console.log(select.current[index].value);
  };

  const handaleSelectToggle = () => {
    for (let i = 0; i < select.current.length; i++) {
      select.current[i].checked = toggleSelect.current.checked;
      console.log(select.current[i].value);
    }
  };
  return (
    <div className="m-2 ">
      <input
        type="text"
        value={searchHistoryItems}
        onChange={(e) => setSearchHistoryItems(e.target.value)}
        className="ml-3 border-2  focus:border-orange-600 w-[350px] p-2 mb-2 rounded-md block"
      ></input>

      <input
        type="checkBox"
        onChange={handaleSelectToggle}
        ref={(element) => (toggleSelect.current = element)}
      ></input>
      <span>select All</span>
      {filteredData.map((item, index) => {
        const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=16`;
        return (
          <div
            key={item.id}
            className="hover:bg-[#ECE3CE] flex rounded-md p-3 "
          >
            <div>
              <input
                ref={(element) => {
                  select.current[index] = element;
                }}
                value={item.url}
                type="checkBox"
                onChange={() => checkboxvalue(index)}
              />
            </div>
            <div className="pt-4 px-3">
              <img
                src={faviconUrl}
                alt={`Favicon of: ${item.url}`}
                width="16"
                height="16"
                loading="lazy"
              />
            </div>
            <div>
              <a href={item.url} target="_blank">
                <span>{item.title.slice(0, 75) + " ..."}</span>
                <br />
                <div href={item.url} target="_blank" className="text-gray-500">
                  {item.url.slice(7, 30)}
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
