function openGift(box, link) {
  box.classList.add("open");

  setTimeout(() => {
    window.location.href = link;
  }, 700);
}
