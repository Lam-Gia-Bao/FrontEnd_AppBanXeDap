const menuButton = document.getElementById("menu-button");
    const nav = document.getElementById("main-nav");
    const toast = document.getElementById("toast");
    menuButton.addEventListener("click", () => nav.classList.toggle("open"));
    document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
    document.querySelectorAll(".heart, .bag, .search").forEach(button => button.addEventListener("click", () => {
      toast.textContent = button.classList.contains("heart") ? "Đã lưu sản phẩm yêu thích." : "Tính năng cửa hàng đang được phát triển.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 2600);
    }));

