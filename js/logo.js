// 获取加载动画和图片元素
const loadingContainer = document.getElementById('loading-container');
const contentContainer = document.getElementById('content-container');
const loadedImage = document.getElementById('loading-image');
const socialContainer = document.getElementById('social-container');


// 图片加载完成事件
loadedImage.addEventListener('load', function () {
    // 隐藏加载动画，显示内容容器
    loadingContainer.style.display = 'none';
    contentContainer.style.display = 'block';
});

// 如果加载时间小于 2000 毫秒（2 秒），则设置一个 2 秒的定时器
const minLoadingTime = 2000;

setTimeout(() => {
    loadingContainer.style.display = 'none';
    contentContainer.style.display = 'block';
    socialContainer.style.display = 'block';
}, minLoadingTime);