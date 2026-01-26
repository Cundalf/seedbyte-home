const links = window.SEEDBYTE_CONFIG?.purchaseLinks ?? {};

const linkMap = {
  amazon: links.amazon,
  gumroad: links.gumroad,
  cafecito: links.cafecito,
};

document.querySelectorAll("[data-link-key]").forEach((anchor) => {
  const key = anchor.dataset.linkKey;
  if (!key || !linkMap[key]) {
    return;
  }
  anchor.href = linkMap[key];
});
