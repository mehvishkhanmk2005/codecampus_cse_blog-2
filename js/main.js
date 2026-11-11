const postsGrid = document.getElementById("postsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const dialog = document.getElementById("postDialog");
const dialogContent = document.getElementById("dialogContent");
let activeCategory = "All";

function renderPosts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = posts.filter(post => {
    const categoryMatch = activeCategory === "All" || post.category === activeCategory;
    const textMatch = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query);
    return categoryMatch && textMatch;
  });
  postsGrid.innerHTML = filtered.map(post => `
    <article class="post-card">
      <div class="post-art art-${post.art}">
        <span class="art-symbol">${post.symbol}</span>
        <span class="art-small">${post.artLabel}</span>
      </div>
      <div class="post-content">
        <div class="post-meta"><span class="category">${post.category}</span><span>${post.readTime}</span></div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <button class="read-link" data-post-id="${post.id}">Read article <span>↗</span></button>
      </div>
    </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  filters.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  renderPosts();
});
searchInput.addEventListener("input", renderPosts);
postsGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-post-id]");
  if (!button) return;
  const post = posts.find(item => item.id === Number(button.dataset.postId));
  if (!post) return;
  dialogContent.innerHTML = `<article class="dialog-body"><div class="post-meta"><span class="category">${post.category}</span><span>${post.date}</span><span>${post.readTime}</span></div><h2>${post.title}</h2>${post.content}</article>`;
  dialog.showModal();
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
renderPosts();