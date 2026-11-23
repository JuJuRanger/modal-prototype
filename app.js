const $ = id => document.getElementById(id);
const backdrop = $('backdrop'), status = $('status');
function openModal(){ backdrop.hidden = false; $('cancel').focus(); }
function closeModal(){ backdrop.hidden = true; $('open').focus(); }
$('open').addEventListener('click', openModal);
$('cancel').addEventListener('click', closeModal);
$('confirm').addEventListener('click', () => { closeModal(); status.textContent = 'ลบโปรเจกต์แล้ว'; });
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !backdrop.hidden) closeModal(); });
