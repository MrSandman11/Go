const debounce = (fn, raf = NaN) => (...args) => {
  if (raf) return;

  raf = requestAnimationFrame(() => {
    fn(...args);
    raf = NaN;
  });
};

export default debounce;
