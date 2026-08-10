const THEME_STORAGE_KEY = "mis-webs-theme";
const AUTOMATIC_THEME = "automatic";
const MANUAL_THEMES = new Set(["dark", "spring", "summer", "autumn", "winter"]);
const SEASONAL_THEMES_BY_MONTH = [
  "winter",
  "winter",
  "spring",
  "spring",
  "spring",
  "summer",
  "summer",
  "summer",
  "autumn",
  "autumn",
  "autumn",
  "winter",
];
const MADRID_TIME_ZONE = "Europe/Madrid";

export function initTheme(themeSelect) {
  const preference = getSavedPreference();

  applyTheme(preference);
  themeSelect.value = preference;

  themeSelect.addEventListener("change", (event) => {
    const selectedPreference = normalizePreference(event.target.value);

    applyTheme(selectedPreference);
    saveTheme(selectedPreference);
  });
}

function getSavedPreference() {
  try {
    const savedPreference = localStorage.getItem(THEME_STORAGE_KEY);
    const preference = normalizePreference(savedPreference);

    if (savedPreference !== preference) {
      saveTheme(preference);
    }

    return preference;
  } catch {
    return AUTOMATIC_THEME;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // La aplicación sigue funcionando si el navegador bloquea el almacenamiento local.
  }
}

function applyTheme(preference) {
  document.documentElement.dataset.theme = getAppliedTheme(preference);
}

function getAppliedTheme(preference) {
  if (preference !== AUTOMATIC_THEME) {
    return preference;
  }

  const madridMonth = Number(
    new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      timeZone: MADRID_TIME_ZONE,
    }).format(new Date()),
  );

  return SEASONAL_THEMES_BY_MONTH[madridMonth - 1];
}

function normalizePreference(preference) {
  return MANUAL_THEMES.has(preference) ? preference : AUTOMATIC_THEME;
}
