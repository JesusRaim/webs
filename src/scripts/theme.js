const THEME_STORAGE_KEY = "mis-webs-theme";
const THEMES = new Set(["light", "dark"]);

export function initTheme(themeSelect) {
  const theme = getSavedTheme();

  applyTheme(theme);
  themeSelect.value = theme;

  themeSelect.addEventListener("change", (event) => {
    const selectedTheme = normalizeTheme(event.target.value);

    applyTheme(selectedTheme);
    saveTheme(selectedTheme);
  });
}

function getSavedTheme() {
  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "light";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // La aplicación sigue funcionando si el navegador bloquea el almacenamiento local.
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function normalizeTheme(theme) {
  return THEMES.has(theme) ? theme : "light";
}
