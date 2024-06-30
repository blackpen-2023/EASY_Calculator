// 우클릭 방지
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 키보드 단축키 방지
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

function startConcatenation() {
    const firstNumber = document.getElementById('firstNumber').value.trim();
    const secondNumber = document.getElementById('secondNumber').value.trim();
    const result = document.getElementById('result');
    const loadingBar = document.getElementById('loadingBar');
    const statusMessage = document.getElementById('statusMessage');
    const loadingContainer = document.querySelector('.loading-container');

    // 입력값이 없으면 "None"을 표시
    if (!firstNumber || !secondNumber) {
        result.textContent = 'None';
        return;
    }

    // 숫자 이외의 문자가 입력되면 경고 메시지를 표시
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('숫자만 입력해주세요');
        return;
    }

    // 로딩바 초기화
    loadingBar.style.width = '0';
    loadingContainer.style.display = 'block';
    statusMessage.textContent = '로딩중..';

    // 로딩바 애니메이션 시작
    setTimeout(() => {
        loadingBar.style.width = '100%';
    }, 0);

    // 3초 후에 결과 출력
    setTimeout(() => {
        loadingContainer.style.display = 'none';
        const concatenatedResult = firstNumber + secondNumber;
        result.textContent = concatenatedResult;
    }, 3000);
}
