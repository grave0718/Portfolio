const projectsData = {
    'abyss': {
        title: 'Draw It',
        mainImg: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800',
        thumbnails: [
            'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=200',
            'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&q=80&w=200',
            'https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&q=80&w=200',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=200'
        ],
        desc: '심해를 탐험하는 VR 생존 어드벤처 게임입니다. Unity URP를 사용하여 수중 포스트 프로세싱 효과를 구현하고, 핸드 트래킹을 통한 상호작용을 최적화했습니다.',
        features: [
            'URP 기반 수중 렌더링 및 Caustics 효과 구현',
            '핸드 트래킹을 이용한 직관적인 아이템 상호작용',
            '동적 난이도 조절 시스템 (DDA) 적용'
        ],
        techStack: ['Unity', 'C#', 'Oculus SDK', 'Shader Graph'],
        playLink: '#',
        blogLink: '#'
    },
    'lab': {
        title: 'Dread Rush',
        mainImg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        thumbnails: [
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200',
            'https://images.unsplash.com/photo-1481481322814-3d0d8be5ff71?auto=format&fit=crop&q=80&w=200'
        ],
        desc: 'Unreal Engine 5의 Lumen을 활용한 고퀄리티 그래픽의 방탈출 게임입니다. 물리 기반 퍼즐과 멀티플레이 기능을 C++로 구현했습니다.',
        features: [
            'Lumen을 활용한 실시간 글로벌 일루미네이션',
            '물리기반 퍼즐 기믹 구현',
            'Steamworks API를 이용한 멀티플레이 연동'
        ],
        techStack: ['Unreal Engine 5', 'C++', 'Steamworks API'],
        playLink: '#',
        blogLink: '#'
    },
    'campus': {
        title: '환영(幻影)',
        mainImg: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
        thumbnails: [
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=200',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=200'
        ],
        desc: '신입생을 위한 교내 증강현실 가이드 앱입니다. GPS와 이미지 마커를 결합하여 건물 정보와 길 안내를 제공합니다.',
        features: [
            'Vuforia를 활용한 이미지 마커 인식 및 콘텐츠 증강',
            'GPS 기반의 최단거리 길 안내 알고리즘 구현',
            '건물별 혼잡도 실시간 체크 기능'
        ],
        techStack: ['Unity', 'AR Foundation', 'Vuforia', 'C#'],
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
    document.getElementById('modalPlayBtn').href = data.playLink;
    document.getElementById('modalBlogBtn').href = data.blogLink;
    
    // Set Images
    const mainImgEl = document.getElementById('modalMainImg');
    mainImgEl.style.backgroundImage = `url('${data.mainImg}')`;
    
    const thumbsEl = document.getElementById('modalThumbnails');
    thumbsEl.innerHTML = '';
    
    data.thumbnails.forEach((thumb, index) => {
        const div = document.createElement('div');
        div.className = `thumb-img ${index === 0 ? 'active' : ''}`;
        div.style.backgroundImage = `url('${thumb}')`;
        
        div.onclick = function() {
            // Remove active from all
            document.querySelectorAll('.thumb-img').forEach(el => el.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            // Change main image
            mainImgEl.style.backgroundImage = `url('${thumb.replace('w=200', 'w=800')}')`; // Load higher res for main config
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
});
