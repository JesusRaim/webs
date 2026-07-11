const icons = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/>',
  brain: '<path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.5A3.5 3.5 0 0 0 4 15a3.5 3.5 0 0 0 5 3.16V20h6v-1.84A3.5 3.5 0 0 0 20 15a3.5 3.5 0 0 0-2-6.5V8a3.5 3.5 0 0 0-3.5-3.5c-.96 0-1.84.39-2.5 1.02A3.48 3.48 0 0 0 9.5 4.5Z"/><path d="M9 10h6M9 14h6M12 6v12"/>',
  terminal: '<path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/><path d="m7 9 3 3-3 3M13 15h4"/>',
  monitor: '<rect width="18" height="12" x="3" y="4" rx="1"/><path d="M8 20h8M12 16v4"/>',
  app: '<rect width="16" height="16" x="4" y="4" rx="3"/><path d="M8 9h8M8 13h5"/>',
  window: '<rect width="18" height="16" x="3" y="4" rx="1"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  gamepad: '<path d="M6.5 9h11a3 3 0 0 1 2.86 3.91l-1.28 4.26a2 2 0 0 1-3.24.87L13.5 16h-3l-2.34 2.04a2 2 0 0 1-3.24-.87l-1.28-4.26A3 3 0 0 1 6.5 9Z"/><path d="M8 12v4M6 14h4M16 13h.01M18 15h.01"/>',
  chip: '<rect width="10" height="10" x="7" y="7" rx="1"/><path d="M9 2v5M15 2v5M9 17v5M15 17v5M2 9h5M2 15h5M17 9h5M17 15h5"/>',
  file: '<path d="M6 3h8l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h6"/>',
  graduation: '<path d="m3 10 9-5 9 5-9 5Z"/><path d="M7 12.2V16c2.7 2 7.3 2 10 0v-3.8M21 10v5"/>',
  shopping: '<path d="M5 8h14l-1 13H6Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
};

export function renderCategoryIcon(iconName) {
  const icon = icons[iconName] ?? icons.app;

  return `<svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>`;
}
