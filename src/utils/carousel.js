// utils/carousel.js
export function initCarousel(wrapperRef, cardRef, options = {}) {
  const settings = {
    interval: options.interval || 5000,
    tickRate: options.tickRate || 50,
    autoplay: options.autoplay ?? true,
    showProgress: options.showProgress ?? true,
  };

  const wrapper = wrapperRef;
  const items = wrapper.querySelectorAll(".lt_space_for_images");

  if (!items.length) return;

  let index = 1;
  const totalSlides = items.length;

  // Clone slides
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[items.length - 1].cloneNode(true);
  firstClone.setAttribute("data-index", totalSlides);
  lastClone.setAttribute("data-index", -1);
  wrapper.appendChild(firstClone);
  wrapper.insertBefore(lastClone, wrapper.firstChild);

  const allSlides = wrapper.querySelectorAll(".lt_space_for_images");
  let slideWidth = items[0].clientWidth;

  wrapper.style.transform = `translateX(-${slideWidth * index}px)`;
  wrapper.style.transition = "transform 0.5s ease-in-out";

  function updateSlide() {
    wrapper.style.transition = "transform 0.5s ease-in-out";
    wrapper.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  wrapper.addEventListener("transitionend", () => {
    if (allSlides[index].getAttribute("data-index") == -1) {
      wrapper.style.transition = "none";
      index = totalSlides;
      wrapper.style.transform = `translateX(-${slideWidth * index}px)`;
    } else if (allSlides[index].getAttribute("data-index") == totalSlides) {
      wrapper.style.transition = "none";
      index = 1;
      wrapper.style.transform = `translateX(-${slideWidth * index}px)`;
    }
    requestAnimationFrame(() => updateSlide());
  });

  // Controls
  const nextSlide = () => {
    if (index >= allSlides.length - 1) return;
    index++;
    updateSlide();
  };
  const prevSlide = () => {
    if (index <= 0) return;
    index--;
    updateSlide();
  };

  document.querySelectorAll(".lt_design_control.right").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      nextSlide();
    })
  );
  document.querySelectorAll(".lt_design_control.left").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      prevSlide();
    })
  );

  // Autoplay
  if (settings.autoplay) {
    setInterval(() => {
      nextSlide();
    }, settings.interval);
  }

  // Progress buttons
  const buttons = document.querySelectorAll(".lt_cardSelector");
  let progressInterval;

  if (settings.showProgress && buttons.length) {
    buttons.forEach((btn) => {
      const bar = document.createElement("span");
      bar.classList.add("progress-fill");
      btn.appendChild(bar);
    });

    function setActiveButton(idx) {
      buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === idx);
        btn.querySelector(".progress-fill").style.width = "0%";
        btn.querySelector(".lt_button_textContent").style.color = "gray";
      });
      buttons[idx].querySelector(".lt_button_textContent").style.color = "#000";
    }

    function startProgress() {
      let fill = buttons[index - 1].querySelector(".progress-fill");
      let elapsed = 0;
      clearInterval(progressInterval);

      progressInterval = setInterval(() => {
        elapsed += settings.tickRate;
        let percent = Math.min((elapsed / settings.interval) * 100, 100);
        fill.style.width = percent + "%";
        if (percent >= 100) {
          clearInterval(progressInterval);
          nextSlide();
        }
      }, settings.tickRate);
    }

    const originalUpdateSlide = updateSlide;
    updateSlide = function () {
      originalUpdateSlide();
      setActiveButton(index - 1);
      startProgress();
    };

    buttons.forEach((btn, i) =>
      btn.addEventListener("click", () => {
        index = i + 1;
        updateSlide();
      })
    );

    setActiveButton(index - 1);
    startProgress();
  }

  // Titles animation
  const titles = document.querySelectorAll(".platform-name");
  titles.forEach((title, idx) => {
    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateX(0)";
    }, idx * 400);
  });

  // CTA card
  if (cardRef) {
    cardRef.style.cursor = "pointer";
    cardRef.addEventListener("click", () => {
      window.location.href = "https://www.lightleap.ai/free-trial-sign-up";
    });

    const header = cardRef.querySelector(".display-6.fw-bold");
    if (header) {
      header.textContent = "Request a Demo";
    }
  }
}
