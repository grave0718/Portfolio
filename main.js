const projectsData = {
    'abyss': {
        title: 'Draw It',
        youtubeId: 'z19XPYQDrIM',
        mainImg: './Images/Projects/DrawIt/Shot1.webp',
        thumbnails: [
            './Images/Projects/DrawIt/Shot1.webp',
            './Images/Projects/DrawIt/PlayShot1.webp',
            './Images/Projects/DrawIt/PlayShot2.webp',
            './Images/Projects/DrawIt/PlayShot3.webp'
        ],
        desc: '가상현실에서 핸드트래킹을 통해 그림을 그린 후 로봇팔을 통해 실제 쿠키 위에 그림을 그려주는 게임입니다. 부산 벡스코에서 전시하였습니다.',
        features: [
            '로봇팔과 연계한 체험형 VR 게임 개발',
            '핸드 트래킹을 이용한 직관적인 모래 상호작용',
            '렌더 텍스쳐 저장으로 유저의 경험 영구 저장'
        ],
        techStack: ['Unity', 'C#', 'Meta SDK', 'Shader Graph'],
        playLink: '#',
        blogLink: '#'
    },
    'lab': {
        title: 'Dread Rush',
        mainImg: './Images/Projects/DreadRush/DreadRush.webp',
        thumbnails: [
            './Images/Projects/DreadRush/DreadRush.webp',
            './Images/Projects/DreadRush/PlayShot1.webp',
            './Images/Projects/DreadRush/PlayShot2.webp',
            './Images/Projects/DreadRush/PlayShot3.webp'
        ],
        desc: 'VR로 개발한 좀비 슈팅게임입니다. 컨트롤러에 총모양 서드파티손잡이를 달아 몰입도를 높였습니다.',
        features: [
            '컨트롤러 진동을 통한 햅틱 구현',
            '버튼을 통한 전체 몬스터 제거 구현(폭탄)',
            '목숨 제어를 통한 게임오버 구현'
        ],
        techStack:['Unity', 'C#', 'Meta SDK'],
        playLink: '#',
        blogLink: '#'
    },
    'campus': {
        title: '환영(幻影)',
        youtubeId: 'sJhNLfsNqVc',
        mainImg: './Images/Projects/Illusion/Illusion0.png',
        thumbnails: [
            '/Images/Projects/Illusion/Illusion0.webp',
            '/Images/Projects/Illusion/IllusionPanel.webp',
            '/Images/Projects/Illusion/Illusion1.webp',
            '/Images/Projects/Illusion/Illusion2.webp',
            '/Images/Projects/Illusion/Illusion3.webp'
        ],
        desc: '착각으로 인한 시간의 비가역성을 다룬 인터랙티브 미디어 아트 작품입니다. ',
        features: [
            '스트로보 효과를 사용한 시각적 착시',
            '푸시버튼을 통한 LED 점멸 주기 제어',
            '미디어 아트로 나타낸 시간의 비가역성'
        ],
        techStack: ['Arduino', 'TouchDesigner'],
        playLink: '#',
        blogLink: '#'
    },
    'factory': {
        title: 'Factory Runner',
        mainImg: './Images/Projects/FactoryRunner/OBBY.webp',
        thumbnails: [
            './Images/Projects/FactoryRunner/OBBY.webp',
            './Images/Projects/FactoryRunner/FactoryRunner1.webp',
            './Images/Projects/FactoryRunner/FactoryRunner2.webp',
            './Images/Projects/FactoryRunner/FactoryRunner3.webp',
            './Images/Projects/FactoryRunner/FactoryRunner4.webp',
            './Images/Projects/FactoryRunner/FactoryRunner5.webp'
        ],
        desc: '공장을 배경으로 장애물을 돌파하며 끝까지 달리는 러닝 액션 게임입니다. 다양한 기믹과 속도감이 특징입니다.',
        features: [
            '랜덤 맵 생성 알고리즘 및 쿼터뷰 구현',
            '다양한 장애물 및 점프 기믹 적용',
            '시간감소 및 재시작 시 초기화 기믹 구현'
        ],
        techStack: ['Unity', 'C#'],
        playLink: '#',
        blogLink: '#'
    },
    'graduation': {
        title: '졸업작품 (준비중)',
        mainImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        thumbnails: [
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200'
        ],
        desc: '현재 진행 혹은 구상 중인 졸업작품 프로젝트입니다. 자세한 기획과 개발 과정은 추후 업데이트될 예정입니다.',
        features: [
            '세부 기능 기획 중',
            '기술 스택 선정 중'
        ],
        techStack: ['TBA'],
        playLink: '#',
        blogLink: '#'
    }
};

const modal = document.getElementById('projectModal');

function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Set textual context
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    
    // Set Features
    const featuresEl = document.getElementById('modalFeatures');
    featuresEl.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresEl.appendChild(li);
    });
    
    // Set Tech Stack
    const techStackEl = document.getElementById('modalTechStack');
    techStackEl.innerHTML = '';
    data.techStack.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techStackEl.appendChild(span);
    });
    
    // Set Links
    document.getElementById('modalBlogBtn').href = data.blogLink;
    
    // Set Images
    const mainImgEl = document.getElementById('modalMainImg');
    const thumbsEl = document.getElementById('modalThumbnails');
    
    // Clear any previous iframe and thumbnails
    mainImgEl.innerHTML = '';
    thumbsEl.innerHTML = '';

    if (data.youtubeId) {
        mainImgEl.style.backgroundImage = 'none';
        mainImgEl.style.cursor = 'default';
        mainImgEl.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${data.youtubeId}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        
        // Add a special video thumbnail at the beginning
        const vidThumb = document.createElement('div');
        vidThumb.className = 'thumb-img active';
        vidThumb.style.backgroundImage = `url('https://img.youtube.com/vi/${data.youtubeId}/mqdefault.jpg')`;
        vidThumb.style.position = 'relative';
        vidThumb.innerHTML = '<i class="fab fa-youtube" style="color:#ff0000; font-size: 2rem; position: absolute; top:50%; left:50%; transform:translate(-50%, -50%); filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.8));"></i>';
        
        vidThumb.onclick = function() {
            document.querySelectorAll('.thumb-img').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            mainImgEl.style.backgroundImage = 'none';
            mainImgEl.style.cursor = 'default';
            mainImgEl.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${data.youtubeId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        };
        thumbsEl.appendChild(vidThumb);
    } else {
        mainImgEl.style.backgroundImage = `url('${data.mainImg}')`;
        mainImgEl.style.cursor = 'zoom-in';
    }
    
    data.thumbnails.forEach((thumb, index) => {
        const div = document.createElement('div');
        // If there's no youtubeId, the first thumbnail is active
        if (!data.youtubeId && index === 0) {
            div.className = 'thumb-img active';
        } else {
            div.className = 'thumb-img';
        }
        
        div.style.backgroundImage = `url('${thumb}')`;
        
        div.onclick = function() {
            // Remove active from all
            document.querySelectorAll('.thumb-img').forEach(el => el.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            
            // Clear iframe if any
            mainImgEl.innerHTML = '';
            // Change main image
            mainImgEl.style.backgroundImage = `url('${thumb.replace('w=200', 'w=800')}')`; 
            mainImgEl.style.cursor = 'zoom-in';
        };
        
        thumbsEl.appendChild(div);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of modal-content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Carousel Scroll Logic
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projectsGrid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (grid && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const cardWidth = grid.querySelector('.project-card').offsetWidth + 32; // Include gap
            grid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            const cardWidth = grid.querySelector('.project-card').offsetWidth + 32; // Include gap
            grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
    }

    // Full Screen Image Viewer Logic
    const mainImgEl = document.getElementById('modalMainImg');
    const fullScreenViewer = document.getElementById('fullScreenViewer');
    const fullScreenImg = document.getElementById('fullScreenImg');

    if (mainImgEl && fullScreenViewer && fullScreenImg) {
        mainImgEl.addEventListener('click', function() {
            const bg = this.style.backgroundImage;
            if (bg && bg !== 'none') {
                const url = bg.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
                fullScreenImg.src = url;
                
                if (url.includes('IllusionPanel')) {
                    fullScreenImg.style.cursor = 'zoom-in';
                } else {
                    fullScreenImg.style.cursor = 'default';
                }
                
                fullScreenViewer.classList.add('active');
            }
        });

        fullScreenViewer.addEventListener('click', (e) => {
            if (e.target === fullScreenImg && fullScreenImg.src.includes('IllusionPanel')) {
                if (fullScreenViewer.classList.contains('zoomed-container')) {
                    fullScreenViewer.classList.remove('zoomed-container');
                    fullScreenImg.style.cursor = 'zoom-in';
                } else {
                    fullScreenViewer.classList.add('zoomed-container');
                    fullScreenImg.style.cursor = 'zoom-out';
                }
                return;
            }
            fullScreenViewer.classList.remove('active');
            fullScreenViewer.classList.remove('zoomed-container');
        });
    }
});
