// 导航栏滚动效果
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark/90');
        navbar.classList.remove('bg-dark/60');
        backToTopBtn.classList.remove('translate-y-20', 'opacity-0');
    } else {
        navbar.classList.remove('bg-dark/90');
        navbar.classList.add('bg-dark/60');
        backToTopBtn.classList.add('translate-y-20', 'opacity-0');
    }
});

// 移动端菜单切换
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa fa-times"></i>';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 关闭移动菜单（如果打开）
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 返回顶部按钮
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 复制服务器IP
const copyIpBtn = document.getElementById('copy-ip');
const serverIp = document.getElementById('server-ip');
const copyMessage = document.getElementById('copy-message');

copyIpBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(serverIp.textContent)
        .then(() => {
            copyMessage.classList.remove('hidden');
            setTimeout(() => {
                copyMessage.classList.add('hidden');
            }, 2000);
        })
        .catch(err => {
            console.error('复制失败: ', err);
        });
});    