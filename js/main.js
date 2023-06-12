// 페이지 로드 시, 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', checkScrollHeight);

function checkScrollHeight() {
    const profileHeight = 857;
    const stacksHeight = 1765;
    const projectHeight = 2375;

    // 현재 스크롤 위치
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // 메뉴 항목들
    const home = document.querySelector('.home_nav a');
    const profile = document.querySelector('.profile_nav a');
    const stacks = document.querySelector('.stacks_nav a');
    const project = document.querySelector('.project_nav a');

    // 모든 메뉴 항목들의 active 클래스를 삭제하는 함수
    function removeActiveClass() {
        home.classList.remove('active');
        profile.classList.remove('active');
        stacks.classList.remove('active');
        project.classList.remove('active');
    }

    // 현재 스크롤 위치에 따라 active 클래스를 추가
    if (currentScrollPosition < profileHeight) {
        removeActiveClass();
        home.classList.add('active');
    } else if (currentScrollPosition < stacksHeight) {
        removeActiveClass();
        profile.classList.add('active');
    } else if (currentScrollPosition < projectHeight) {
        removeActiveClass();
        stacks.classList.add('active');
    } else {
        removeActiveClass();
        project.classList.add('active');
    }
}
