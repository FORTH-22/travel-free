(function () {
  let bannerNavUl = document.getElementById("banner-nav-ul");
  let bannerNav = document.getElementById("banner-nav");
  let bannerNavUlLis = document.querySelectorAll("#banner-nav-ul li");
  let sonMenuAll = document.querySelectorAll(".menu-container .son-menu");

  bannerNavUl.addEventListener("mouseover", function (e) {
    if (e.target.tagName.toLowerCase() === "li") {
      let tarData = e.target.getAttribute("data-t");
      // 排他操作
      for (let i = 0; i < bannerNavUlLis.length; i++) {
        bannerNavUlLis[i].className = '';
      }

      // 给当前被点击的 li 加深背景
      e.target.className = "current";

      // 寻找对应的二级菜单
      let theMenu = document.querySelector(
        ".menu-container .son-menu[data-t = " + tarData + "]"
      );

      // 排他操作
      for (let i = 0; i < sonMenuAll.length; i++) {
        sonMenuAll[i].className = "son-menu";
      }

      theMenu.className = "son-menu current";
    }
  });

  //   鼠标移开时  就隐藏
  bannerNav.addEventListener("mouseleave", function () {
    for (let i = 0; i < bannerNavUlLis.length; i++) {
      bannerNavUlLis[i].className = bannerNavUlLis[i].getAttribute("data-t");
      sonMenuAll[i].className = "son-menu";
    }
  });
})();
