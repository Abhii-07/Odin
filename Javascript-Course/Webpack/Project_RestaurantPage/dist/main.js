(() => {
  "use strict";
  var e = {
    d: (t, n) => {
      for (var d in n)
        e.o(n, d) &&
          !e.o(t, d) &&
          Object.defineProperty(t, d, { enumerable: !0, get: n[d] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  e.d({}, { Z: () => n });
  const t = document.querySelector("#content"),
    n = t;
  !(function () {
    let e = document.createElement("nav");
    e.setAttribute("id", "top-bar"),
      t.appendChild(e),
      (function () {
        const e = document.querySelector("#top-bar");
        let t = document.createElement("div");
        t.setAttribute("id", "logo-container"), e.appendChild(t);
        let n = document.createElement("img");
        (n.src = "images/pizza-slice-solid.svg"), n.setAttribute("id", "logo");
        let d = document.createElement("h2");
        (d.textContent = "pizzamanía"),
          d.setAttribute("id", "logo-text"),
          document.getElementById("logo-container").appendChild(n),
          document.getElementById("logo-container").appendChild(d);
      })(),
      (function () {
        let e = document.createElement("ul");
        e.setAttribute("id", "top-bar-ul"),
          document.getElementById("top-bar").appendChild(e);
        let t = document.createElement("li"),
          n = document.createElement("li"),
          d = document.createElement("li");
        t.setAttribute("id", "lOne"),
          n.setAttribute("id", "lTwo"),
          d.setAttribute("id", "lThree"),
          document.getElementById("top-bar-ul").appendChild(t),
          document.getElementById("top-bar-ul").appendChild(n),
          document.getElementById("top-bar-ul").appendChild(d);
        let i = document.createElement("a"),
          a = document.createElement("a"),
          c = document.createElement("a");
        (i.textContent = "Home"),
          (a.textContent = "Menu"),
          (c.textContent = "Contact"),
          i.classList.add("active-tab"),
          a.classList.add("tab"),
          c.classList.add("tab"),
          (i.dataset.tabTarget = "#home-container"),
          (a.dataset.tabTarget = "#menu-container"),
          (c.dataset.tabTarget = "#contact-container"),
          document.getElementById("lOne").appendChild(i),
          document.getElementById("lTwo").appendChild(a),
          document.getElementById("lThree").appendChild(c);
      })();
  })(),
    (function () {
      let e = document.createElement("div");
      e.setAttribute("id", "home-container"),
        (e.dataset.tabContent = ""),
        e.classList.add("active"),
        n.appendChild(e),
        (function () {
          let e = document.createElement("div");
          e.setAttribute("id", "home-img-container");
          let t = document.createElement("h1");
          (t.textContent = "We make THE Pizza"),
            t.setAttribute("id", "home-title");
          let n = document.createElement("h4");
          (n.textContent = "Don't believe us? take a slice."),
            n.setAttribute("id", "home-subtitle"),
            document.getElementById("home-container").appendChild(e),
            document.getElementById("home-img-container").appendChild(t),
            document.getElementById("home-img-container").appendChild(n);
        })(),
        (function () {
          let e = document.createElement("h1");
          e.setAttribute("id", "about-title"), (e.textContent = "ABOUT");
          let t = document.createElement("p");
          t.setAttribute("id", "about-text"),
            (t.textContent =
              "Lorem ipsum dolor sit amet consectetur adipiscing elit curae, convallis blandit etiam vestibulum tortor odio commodo, posuere eleifend penatibus suspendisse maecenas pharetra ante. Lacinia mi ad sociis elementum dictum vehicula gravida ligula molestie, ullamcorper ultricies leo urna libero cursus hendrerit dictumst, at in aliquam et potenti accumsan tempus sociosqu."),
            document.getElementById("home-container").appendChild(e),
            document.getElementById("home-container").appendChild(t);
        })();
    })(),
    (function () {
      let e = document.createElement("div");
      e.setAttribute("id", "menu-container"),
        (e.dataset.tabContent = ""),
        n.appendChild(e),
        (function () {
          let e = document.createElement("h1");
          e.setAttribute("id", "menu-title"),
            (e.textContent = "Make your choice!"),
            document.getElementById("menu-container").appendChild(e);
        })(),
        (function () {
          let e = document.createElement("div");
          e.setAttribute("id", "tile-container"),
            document.getElementById("menu-container").appendChild(e),
            (function (e) {
              for (let e = 0; e < 6; e++) {
                let t = document.createElement("div");
                t.classList.add("menu-tiles"),
                  t.setAttribute("id", `tile${e + 1}`),
                  document.getElementById("tile-container").appendChild(t);
                let n = document.createElement("div");
                n.classList.add("tile-div"),
                  n.setAttribute("id", `div${e + 1}`),
                  document.getElementById(`tile${e + 1}`).appendChild(n);
                let d = document.createElement("p");
                d.classList.add("tile-text"),
                  (d.textContent =
                    "Lorem ipsum dolor sit amet consectetur adipiscing elit curae."),
                  document.getElementById(`tile${e + 1}`).appendChild(d);
              }
            })(),
            (function () {
              const e = document.getElementById("div1"),
                t = document.getElementById("div2"),
                n = document.getElementById("div3"),
                d = document.getElementById("div4"),
                i = document.getElementById("div5"),
                a = document.getElementById("div6");
              let c = document.createElement("img");
              (c.src = "images/pepperoni.jpg"), c.classList.add("menu-images");
              let o = document.createElement("img");
              (o.src = "images/cheese-onion.jpg"),
                o.classList.add("menu-images");
              let l = document.createElement("img");
              (l.src = "images/onions.jpg"), l.classList.add("menu-images");
              let m = document.createElement("img");
              (m.src = "images/chicken.jpg"), m.classList.add("menu-images");
              let s = document.createElement("img");
              (s.src = "images/mushroom.jpg"), s.classList.add("menu-images");
              let r = document.createElement("img");
              (r.src = "images/Sausage.jpg"),
                r.classList.add("menu-images"),
                document.getElementById("tile1").insertBefore(c, e),
                document.getElementById("tile2").insertBefore(o, t),
                document.getElementById("tile3").insertBefore(l, n),
                document.getElementById("tile4").insertBefore(m, d),
                document.getElementById("tile5").insertBefore(s, i),
                document.getElementById("tile6").insertBefore(r, a);
            })(),
            (function () {
              let e = document.createElement("h2"),
                t = document.createElement("h2"),
                n = document.createElement("h2"),
                d = document.createElement("h2"),
                i = document.createElement("h2"),
                a = document.createElement("h2");
              e.classList.add("tile-title"),
                t.classList.add("tile-title"),
                n.classList.add("tile-title"),
                d.classList.add("tile-title"),
                i.classList.add("tile-title"),
                a.classList.add("tile-title"),
                (e.textContent = "Pepperoni Pizza"),
                (t.textContent = "Cheese Onion"),
                (n.textContent = "Onions Pizza"),
                (d.textContent = "Chicken Pizza"),
                (i.textContent = "Mushroom Pizza"),
                (a.textContent = "Sausage Pizza"),
                document.getElementById("div1").appendChild(e),
                document.getElementById("div2").appendChild(t),
                document.getElementById("div3").appendChild(n),
                document.getElementById("div4").appendChild(d),
                document.getElementById("div5").appendChild(i),
                document.getElementById("div6").appendChild(a);
            })();
        })();
    })(),
    (function () {
      let e = document.createElement("div");
      e.setAttribute("id", "contact-container"), (e.dataset.tabContent = "");
      let t = document.createElement("h1");
      (t.textContent = "Contact us"),
        n.appendChild(e),
        document.getElementById("contact-container").appendChild(t),
        (function () {
          let e = document.createElement("div");
          e.setAttribute("id", "data-container"),
            document.getElementById("contact-container").appendChild(e);
        })(),
        (function () {
          let e = document.createElement("div");
          e.classList.add("single-data-container"),
            e.setAttribute("id", "container-one"),
            document.getElementById("data-container").appendChild(e);
          let t = document.createElement("img");
          t.classList.add("contact-icons"),
            (t.src = "images/adress-card-solid.svg"),
            document.getElementById("container-one").appendChild(t);
          let n = document.createElement("h4");
          n.classList.add("contact-text"),
            (n.textContent = "Lorem street 5555"),
            document.getElementById("container-one").appendChild(n);
        })(),
        (function () {
          let e = document.createElement("div");
          e.classList.add("single-data-container"),
            e.setAttribute("id", "container-two"),
            document.getElementById("data-container").appendChild(e);
          let t = document.createElement("img");
          t.classList.add("contact-icons"),
            (t.src = "images/at-solid.svg"),
            document.getElementById("container-two").appendChild(t);
          let n = document.createElement("h4");
          n.classList.add("contact-text"),
            (n.textContent = "loremipsum@dolorSit.amet"),
            document.getElementById("container-two").appendChild(n);
        })(),
        (function () {
          let e = document.createElement("div");
          e.classList.add("single-data-container"),
            e.setAttribute("id", "container-three"),
            document.getElementById("data-container").appendChild(e);
          let t = document.createElement("img");
          t.classList.add("contact-icons"),
            (t.src = "images/phone-solid.svg"),
            document.getElementById("container-three").appendChild(t);
          let n = document.createElement("h4");
          n.classList.add("contact-text"),
            (n.textContent = "0111-555-888"),
            document.getElementById("container-three").appendChild(n);
        })();
    })(),
    (function () {
      const e = document.querySelectorAll("[data-tab-target]"),
        t = document.querySelectorAll("[data-tab-content]");
      e.forEach((n) => {
        n.addEventListener("click", () => {
          const d = document.querySelector(n.dataset.tabTarget);
          t.forEach((e) => {
            e.classList.remove("active");
          }),
            e.forEach((e) => {
              e.classList.remove("active-tab");
            }),
            n.classList.add("active-tab"),
            d.classList.add("active");
        });
      });
    })();
})();
