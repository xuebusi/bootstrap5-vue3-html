const { createApp, ref } = Vue;

createApp({
    setup() {
        const companyImage = ref('assets/images/company.png');
        const mission = ref('我们致力于提供高质量的软件解决方案，帮助客户实现业务目标。我们的团队由经验丰富的专业人士组成，专注于创新和客户满意度。');
        const values = ref(['客户至上', '创新驱动', '诚信与透明', '团队合作']);

        return {
            companyImage,
            mission,
            values
        };
    }
}).mount('#app'); 