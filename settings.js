console.log("✅ Đang dùng đúng settings.js có mật khẩu!");
module.exports = {
    flowFile: 'flows.json', // Flow JSON bạn đang dùng
    uiPort: process.env.PORT || 1880,

    // Để bảo mật nếu bạn muốn thêm sau
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "UTE21146282",
                password: "$2b$08$hLSKfYGnRVTjRFOlGFDX4OspGKHMSaRRxz/IWuxjANTskRJXErOt6",
                permissions: "*"
            }
        ]
    },


    functionGlobalContext: {
            crypto:require('crypto')

    }, // Cho phép dùng biến toàn cục

    editorTheme: {
        projects: {
            enabled: true
        }
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
