api.onPageChange(() => {
  const tabButtons = document.querySelectorAll('.tab-tos');
  const tabContents = document.querySelectorAll('.tab-tos-content');

  if (tabButtons.length === 0 || tabContents.length === 0) return;

  tabButtons.forEach(tab => {
    tab.addEventListener('click', () => {
      tabButtons.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const tabId = tab.dataset.tabTos;
      document.getElementById(tabId).classList.add('active');
    });
  });
});