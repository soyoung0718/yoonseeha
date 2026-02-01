// 썸네일을 클릭하면 관련된 사진이 앨범 형태로 모달에 표시되는 함수
function showAlbum(photoId) {
  const albumModal = document.getElementById('albumModal');
  const albumContainer = document.getElementById('albumContainer');
  albumContainer.innerHTML = ''; // 기존 앨범 내용 지우기

  // 각 사진 ID에 대한 관련된 썸네일 목록
  const photos = {
    1: ['../photoAlbum/1.jpg', '../photoAlbum/2.jpg', '../photoAlbum/3.jpg'],
    4: ['../photoAlbum/4.jpg', '../photoAlbum/5.jpg', '../photoAlbum/6.jpg'],
    7: [
      '../photoAlbum/7.jpg',
      '../photoAlbum/8.jpg',
      '../photoAlbum/9.jpg',
      '../photoAlbum/10.jpg',
      '../photoAlbum/11.jpg',
    ],
    31: ['../photoAlbum/31.png', '../photoAlbum/32.png',
      '../photoAlbum/33.png', '../photoAlbum/35.png',
      '../photoAlbum/36.png', '../photoAlbum/37.png',
      '../photoAlbum/38.png', '../photoAlbum/39.png',
      '../photoAlbum/40.png', '../photoAlbum/41.png',
      '../photoAlbum/42.png', '../photoAlbum/43.png'
    ],
    49: ['../photoAlbum/49.png', '../photoAlbum/51.png'],
    50: ['../photoAlbum/50.png'],
    12: ['../photoAlbum/12.jpg', '../photoAlbum/13.jpg'],
    14: ['../photoAlbum/14.jpg', '../photoAlbum/15.jpg', '../photoAlbum/16.jpg'],
    18: ['../photoAlbum/18.jpg', '../photoAlbum/19.jpg'],
    20: ['../photoAlbum/20.jpg'],
    21: [
      '../photoAlbum/21.jpg',
      '../photoAlbum/22.jpg',
      '../photoAlbum/23.jpg',
      '../photoAlbum/24.jpg',
      '../photoAlbum/25.jpg',
      '../photoAlbum/26.jpg',
      '../photoAlbum/27.jpg',
    ],
    28: ['../photoAlbum/28.jpg', '../photoAlbum/29.jpg', '../photoAlbum/30.jpg'],
  };

  // 선택된 photoId에 해당하는 썸네일들을 앨범에 추가
  const relatedPhotos = photos[photoId];

  relatedPhotos.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Related photo ${src}`;
    img.classList.add('thumbnail'); // 썸네일 스타일을 적용하기 위해 클래스를 추가
    img.onclick = () => showModal(src); // 클릭 시 큰 사진을 모달로 보여줌
    albumContainer.appendChild(img);
  });

  // 앨범 모달을 보여줍니다.
  albumModal.style.display = 'block';
}

// 클릭된 썸네일을 모달로 크게 보여주는 함수
function showModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = src;
  modal.style.display = 'flex'; // 모달 보이기
}

// 모달 닫기

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none'; // 모달 닫기
}

// 앨범 모달 닫기
const closeAlbumModal = document.querySelector('#albumModal .close');
if (closeAlbumModal) {
  closeAlbumModal.addEventListener('click', function () {
    closeModal('albumModal'); // 앨범 모달 닫기
  });
}

// 큰 사진 모달 닫기
const closeImageModal = document.querySelector('#myModal .close');
if (closeImageModal) {
  closeImageModal.addEventListener('click', function () {
    closeModal('myModal'); // 큰 사진 모달 닫기
  });
}

// 배경 클릭 시 모달 닫기 (배경 클릭 시 모달이 닫히도록 처리)
window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('albumModal')) {
    closeModal('albumModal');
  } else if (event.target === document.getElementById('myModal')) {
    closeModal('myModal');
  }
});
