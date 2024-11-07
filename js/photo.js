// 클릭한 썸네일에 해당하는 앨범을 나열하는 함수
function showAlbum(photoId) {
  const albumContainer = document.getElementById('albumContainer');
  albumContainer.innerHTML = ''; // 기존 앨범 내용 지우기

  // 각 사진 ID에 대한 관련된 썸네일 목록
  const photos = {
    1: [
      '../photoAlbum/1.jpg',
      '../photoAlbum/2.jpg',
      '../photoAlbum/3.jpg',
      '../photoAlbum/4.jpg',
      '../photoAlbum/5.jpg',
    ],
    2: [
      '../photoAlbum/2.jpg',
      '../photoAlbum/1.jpg',
      '../photoAlbum/3.jpg',
      '../photoAlbum/4.jpg',
      '../photoAlbum/5.jpg',
    ],
    3: [
      '../photoAlbum/3.jpg',
      '../photoAlbum/1.jpg',
      '../photoAlbum/2.jpg',
      '../photoAlbum/4.jpg',
      '../photoAlbum/5.jpg',
    ],
    4: [
      '../photoAlbum/4.jpg',
      '../photoAlbum/2.jpg',
      '../photoAlbum/3.jpg',
      '../photoAlbum/5.jpg',
      '../photoAlbum/1.jpg',
    ],
    5: [
      '../photoAlbum/5.jpg',
      '../photoAlbum/4.jpg',
      '../photoAlbum/2.jpg',
      '../photoAlbum/3.jpg',
      '../photoAlbum/1.jpg',
    ],
  };

  // 선택된 photoId에 해당하는 썸네일을 추가
  const relatedPhotos = photos[photoId];

  relatedPhotos.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Related photo ${src}`;
    img.classList.add('thumbnail'); // 썸네일 스타일을 적용하기 위해 클래스를 추가
    img.onclick = () => showModal(src); // 클릭 시 큰 사진을 모달로 보여줌
    albumContainer.appendChild(img);
  });

  albumContainer.style.display = 'flex'; // 앨범 표시
}

// 클릭된 썸네일을 모달로 크게 보여주는 함수
function showModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = src;
  modal.style.display = 'flex'; // 모달 보이기
}

// 모달 닫기
const closeModal = document.querySelector('.close');
closeModal.onclick = function () {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none'; // 모달 닫기
};

// 페이지가 처음 로드될 때 앨범을 숨기기
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('albumContainer').style.display = 'none';
});
