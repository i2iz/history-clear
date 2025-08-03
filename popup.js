document.getElementById("btn").addEventListener("click", (e) => {
    chrome.history.deleteAll(() => {
        e.target.textContent = "삭제 완료!";
        e.target.disabled = true;

        setTimeout(() => {
            e.target.textContent = "클릭 시 기록 삭제";
            e.target.disabled = false;
        }, 3000);
    });
});
