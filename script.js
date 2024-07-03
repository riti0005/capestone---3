document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
      const img = container.querySelector('img');
      const imagePath = img.getAttribute('src');
      const anchorTag = container.querySelector('a');
      anchorTag.setAttribute('href', `details.html?image=${imagePath}`);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }
    const imagePath = getQueryParam('image');
    if (imagePath) {
      const imgElement = document.getElementById('imageDetail');
      imgElement.setAttribute('src', imagePath);
    } else {
      console.error('Image path not provided.');
    }
  });