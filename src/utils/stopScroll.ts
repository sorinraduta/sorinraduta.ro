export function stopScroll() {
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;

  window.scrollTo(scrollLeft, scrollTop); // snap to current position

  const cancelScroll = (e: Event) => {
    e.preventDefault();
    window.scrollTo(scrollLeft, scrollTop); // keep locking position
  };

  window.addEventListener("scroll", cancelScroll, { passive: false });
  window.addEventListener("wheel", cancelScroll, { passive: false });
  window.addEventListener("touchmove", cancelScroll, { passive: false });

  // Remove after a brief moment to avoid locking forever
  setTimeout(() => {
    window.removeEventListener("scroll", cancelScroll);
    window.removeEventListener("wheel", cancelScroll);
    window.removeEventListener("touchmove", cancelScroll);
  }, 1000);
}

export default stopScroll;
