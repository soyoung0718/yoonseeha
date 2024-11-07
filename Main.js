let currentSlide = 0;

const slides = document.querySelectorAll('.photosContainer > div'); // 모든 사진들
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0; // 첫 번째로 돌아가기
  } else if (index < 0) {
    currentSlide = totalSlides - 1; // 마지막으로 돌아가기
  }

  const slideContainer = document.querySelector('.photosContainer');
  const slideWidth = slides[0].offsetWidth; // 각 슬라이드의 너비

  // 슬라이드를 넘기기
  slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.querySelector('.photosContainer').addEventListener('click', function () {
  currentSlide++;
  showSlide(currentSlide); // 슬라이드 전환
});

showSlide(currentSlide); // 초기 슬라이드 보여주기
