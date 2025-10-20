// TODO: 填寫你的資料 — 只改這一段 PROFILE
const PROFILE = {
  name: "郭竺恩",
  headline: "軟體工程師",
  tagline: "熱愛學習與創作，記錄成長的開發者",
  location: "台灣，高雄",
  avatar: "images/avatar.jpg",
  chips: ["程式設計", "作品集", "自我成長"],

  about: [
    "你好！我是王小明，目前專注於 Web 與遊戲開發。",
    "我喜歡挑戰不同領域的專案，並持續紀錄學習歷程。"
  ],

  skills: {
    前端: ["HTML", "CSS", "JavaScript", "React"],
    後端: ["Node.js", "Express", "MongoDB"],
    工具: ["Git", "Figma", "Docker"]
  },

  projects: [
    {
      title: "個人作品集網站",
      year: "2025",
      summary: "一個展示技能與專案的一頁式網站。",
      image: "images/project1.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      links: [{ label: "GitHub", url: "#" }]
    }
  ],

  timeline: [
    { date: "2023", title: "開始學習程式設計", desc: "自學網頁基礎" },
    { date: "2024", title: "完成第一個專案", desc: "製作小型遊戲 Demo" }
  ],

  contact: {
    email: "example@mail.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username"
  },

  resumePdf: "resume.pdf"
};

// 動態渲染
const app = document.getElementById("app");

function renderProfile() {
  document.getElementById("site-title").textContent = PROFILE.name;
  document.getElementById("footer-name").textContent = PROFILE.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  app.innerHTML = `
    <section>
      <img src="${PROFILE.avatar}" alt="${PROFILE.name}" style="width:120px;border-radius:50%;margin-bottom:1rem;">
      <h1>${PROFILE.name}</h1>
      <h3>${PROFILE.headline}</h3>
      <p>${PROFILE.tagline}</p>
      <div class="chips">${PROFILE.chips.map(c=>`<span class="chip">${c}</span>`).join("")}</div>
    </section>

    <section>
      <h2>關於我</h2>
      ${PROFILE.about.map(p=>`<p>${p}</p>`).join("")}
    </section>

    <section>
      <h2>技能</h2>
      ${Object.entries(PROFILE.skills).map(([k,v])=>`
        <h3>${k}</h3>
        <div class="skills">${v.map(s=>`<span class="chip">${s}</span>`).join("")}</div>
      `).join("")}
    </section>

    <section>
      <h2>作品集</h2>
      ${PROFILE.projects.map(p=>`
        <div class="project">
          <img src="${p.image}" alt="${p.title}">
          <h3>${p.title} <small>(${p.year})</small></h3>
          <p>${p.summary}</p>
          <div class="chips">${p.tags.map(t=>`<span class="chip">${t}</span>`).join("")}</div>
          <div>${p.links.map(l=>`<a href="${l.url}" target="_blank">${l.label}</a>`).join(" | ")}</div>
        </div>
      `).join("")}
    </section>

    <section>
      <h2>成長歷程</h2>
      <div class="timeline">
        ${PROFILE.timeline.map(t=>`
          <div>
            <strong>${t.date}</strong> - ${t.title}<br>
            <small>${t.desc}</small>
          </div>
        `).join("")}
      </div>
    </section>

    <section>
      <h2>聯絡我</h2>
      <p>Email: <a href="mailto:${PROFILE.contact.email}">${PROFILE.contact.email}</a></p>
      <p>
        ${PROFILE.contact.github ? `<a href="${PROFILE.contact.github}" target="_blank">GitHub</a>` : ""}
        ${PROFILE.contact.linkedin ? ` | <a href="${PROFILE.contact.linkedin}" target="_blank">LinkedIn</a>` : ""}
      </p>
      ${PROFILE.resumePdf ? `<p><a href="${PROFILE.resumePdf}" target="_blank">下載履歷 PDF</a></p>` : ""}
    </section>
  `;
}

// 主題切換
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", ()=>{
  const html = document.documentElement;
  const theme = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});
if(localStorage.getItem("theme")){
  document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
}

renderProfile();
