(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.research-filter-btn');
    var groups = document.querySelectorAll('.research-group');
    if (!buttons.length || !groups.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        groups.forEach(function (g) {
          g.style.display = (filter === '*' || g.getAttribute('data-category') === filter) ? '' : 'none';
        });
      });
    });
  });
})();
