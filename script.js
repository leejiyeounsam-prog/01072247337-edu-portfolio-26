// 프로젝트 탭 필터링 로직
document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag-btn');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // 기존 활성화된 탭의 active 클래스 제거
            document.querySelector('.tag-btn.active').classList.remove('active');
            // 클릭한 탭에 active 클래스 추가
            tag.classList.add('active');
            
            // TODO: 실제 프로젝트 데이터(JSON)를 바탕으로 
            // 선택한 카테고리에 맞는 카드만 화면에 다시 렌더링하는 로직 추가 예정
            console.log(`${tag.textContent} 카테고리가 선택되었습니다.`);
        });
    });
});