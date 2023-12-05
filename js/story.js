function showContent(contentId) {
  var buttons = document.querySelectorAll('.story-btn__button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
    button.style.backgroundColor = '';
    button.style.color = '';
  });

  var activeButton = document.querySelector(`button[data-content="${contentId}"]`);
  activeButton.classList.add('active');
  activeButton.style.backgroundColor = '#222222';
  activeButton.style.color = '#8DFD1B';

  var contents = document.querySelectorAll('.story-content');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  var selectedContent = document.getElementById(`${contentId}Content`);
  selectedContent.style.display = 'flex';

  // Сохраняем ID активной кнопки в localStorage
  localStorage.setItem('activeButton', contentId);
}

// Проверяем localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  var activeButtonId = localStorage.getItem('activeButton');
  if (activeButtonId) {
    showContent(activeButtonId);
  }
});
