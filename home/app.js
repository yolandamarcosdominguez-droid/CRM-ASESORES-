document.querySelectorAll('.post').forEach(function (b) {
  b.addEventListener('click', function () {
    try { localStorage.setItem('crm-rol', b.dataset.rol); } catch (e) { /* modo privado */ }
    location.href = b.dataset.ir;
  });
});
