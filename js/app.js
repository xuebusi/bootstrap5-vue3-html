const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        // 使用本地图片路径
        const carouselImages = ref([
            'assets/images/carousel2.png',
            'assets/images/carousel1.jpg',
        ]);

        const solutionImages = ref([
            'assets/images/solution1.png',
            'assets/images/solution2.png',
            'assets/images/solution3.png'
        ]);

        const caseImages = ref([
            'assets/images/solution1.png',
            'assets/images/solution2.png',
            'assets/images/solution3.png'
        ]);

        const teamImages = ref([
            'assets/images/solution1.png',
            'assets/images/solution2.png',
            'assets/images/solution3.png'
        ]);

        onMounted(() => {
            // Intersection Observer for scroll animations
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.card-body').forEach(item => {
                observer.observe(item);
            });
        });

        return {
            carouselImages,
            solutionImages,
            caseImages,
            teamImages
        };
    }
}).mount('#app'); 