const news=[
{id:1,title:"ELITES launches a new platform for fast and reliable news",category:"Kenya",date:"October 5, 2026",text:"ELITES News brings readers a clean and simple place to follow important stories from Kenya and around the world."},
{id:2,title:"Business leaders discuss opportunities for young entrepreneurs",category:"Business",date:"October 5, 2026",text:"Entrepreneurs are looking at new ways to grow businesses, create jobs and use digital tools."},
{id:3,title:"Technology continues to transform everyday life",category:"Technology",date:"October 4, 2026",text:"Digital services are changing how people communicate, learn, work and access information."},
{id:4,title:"Latest political developments attract public attention",category:"Politics",date:"October 4, 2026",text:"Political discussions remain a major topic as citizens follow national developments."},
{id:5,title:"Sports stars prepare for an exciting weekend",category:"Sports",date:"October 3, 2026",text:"Fans are looking forward to a busy weekend of competition and entertainment."},
{id:6,title:"Entertainment industry embraces new digital audiences",category:"Entertainment",date:"October 3, 2026",text:"Creators are using social platforms and streaming services to reach wider audiences."},
{id:7,title:"Kenyan innovators build solutions for local challenges",category:"Kenya",date:"October 2, 2026",text:"Young innovators are developing practical ideas in education, agriculture and technology."},
{id:8,title:"Small businesses turn to digital payments and online sales",category:"Business",date:"October 2, 2026",text:"More small businesses are using digital tools to serve customers and manage daily operations."},
{id:9,title:"New apps make learning more accessible",category:"Technology",date:"October 1, 2026",text:"Students are increasingly using online resources to supplement classroom learning."}
];

function card(n){return `<div class="card"><div class="card-img">${n.category}</div><div class="card-body"><span class="category-label">${n.category}</span><h3>${n.title}</h3><p>${n.text}</p><span class="date">${n.date}</span><br><a class="btn" style="margin-top:12px" href="article.html?id=${n.id}">Read more</a></div></div>`}
function render(list,id){const el=document.getElementById(id);if(el)el.innerHTML=list.map(card).join("")}
function init(){render(news,"newsGrid");["Kenya","Politics","Business","Sports","Entertainment","Technology"].forEach(c=>render(news.filter(n=>n.category===c),c.toLowerCase()+"Grid"))}
function searchNews(){const q=document.getElementById("searchInput").value.toLowerCase();render(news.filter(n=>(n.title+n.text+n.category).toLowerCase().includes(q)),"newsGrid")}
function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
function subscribe(e){e.preventDefault();document.getElementById("subscribeMsg").textContent="Thank you for subscribing to ELITES News!";e.target.reset()}
function loadArticle(){const box=document.getElementById("article");if(!box)return;const id=Number(new URLSearchParams(location.search).get("id"))||1;const n=news.find(x=>x.id===id)||news[0];box.innerHTML=`<a class="back" href="index.html">← Back to ELITES</a><p class="category-label">${n.category}</p><h1>${n.title}</h1><p class="article-meta">Published ${n.date} · ELITES News</p><div class="article-image">${n.category}</div><p>${n.text}</p><p>This is a demonstration article for the ELITES News website. In a production version, this section can contain the full verified story, photographs, video, author information, related stories and source references.</p><p>ELITES aims to present news clearly and make it easy for readers to discover stories that matter to them.</p>`}
init();loadArticle();
