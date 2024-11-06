document.querySelectorAll('.photo2, .photo3, .photo4, .photo5').forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    const mainImage = document.querySelector('.photo1 img');
    mainImage.src = this.querySelector('img').src; // 클릭한 썸네일 이미지로 main image 변경
  });
});
