const root = document.documentElement;
const appearance = document.querySelector('#appearance');
const systemTheme = matchMedia('(prefers-color-scheme:light)');
let preference = root.dataset.appearance || 'dark';

function paintTheme() {
  const theme = preference === 'auto' ? (systemTheme.matches ? 'light' : 'dark') : preference;
  root.dataset.theme = theme;
  root.dataset.appearance = preference;
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#F4F4F5' : '#0E0F10';
}

appearance.value = preference;
appearance.addEventListener('change', () => {
  preference = appearance.value;
  try { localStorage.setItem('embodent-site:appearance', preference); } catch {}
  paintTheme();
});
systemTheme.addEventListener('change', paintTheme);

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const narrow = matchMedia('(max-width:880px)');

function closeMenu(returnFocus = false) {
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = 'Menu';
  navigation.removeAttribute('data-open');
  if (returnFocus) menu.focus();
}

menu.addEventListener('click', () => {
  const opening = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(opening));
  menu.textContent = opening ? 'Close' : 'Menu';
  navigation.toggleAttribute('data-open', opening);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && narrow.matches && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
narrow.addEventListener('change', () => closeMenu());
window.addEventListener('pageshow', () => closeMenu());

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const content = document.getElementById(button.dataset.copy);
    const result = button.closest('.code-block').querySelector('.copy-result');
    try {
      await navigator.clipboard.writeText(content.textContent);
      result.textContent = button.dataset.copy === 'citation-code' ? 'Citation copied.' : 'Command copied.';
    } catch {
      result.textContent = 'Select the text and copy it. Clipboard access is unavailable.';
    }
  });
});

root.classList.add('js');
