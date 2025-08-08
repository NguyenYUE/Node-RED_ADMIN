require('dotenv').config();
console.log("✅ Đang dùng đúng settings.js có mật khẩu!");
process.env.MQTT_USERNAME = 'bomgamehcm123';
process.env.MQTT_PASSWORD = 'Nguyendeptrai123';
module.exports = {
    flowFile: 'flows.json',
    uiPort: process.env.PORT || 1880,

    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "UTE21146282",
                password: "$2y$08$Zi46aTUTpUJwIF0p.HldGeJMAwkT3fwRQiZ6lDONfWNfERwDAczB6",
permissions: "*"
            }
        ]
    },

    functionGlobalContext: {
      env: process.env


    },

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
    },

    // ✅ Thêm contextStorage để cho phép lưu biến flow/global vĩnh viễn
    contextStorage: {
        default: {
            module: "localfilesystem"
        }
    }
};
