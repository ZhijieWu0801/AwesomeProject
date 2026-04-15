| `# React Native APK 打包指南`                                |
| ------------------------------------------------------------ |
|                                                              |
| `本指南详细介绍如何将 React Native 项目打包为 Android APK 文件。` |
|                                                              |
| `## 环境准备`                                                |
|                                                              |
| `确保你的开发环境已正确配置：`                               |
|                                                              |
| `### 1. 安装 JDK`                                            |
| `- 推荐版本：JDK 11 或更高版本`                              |
| `- 下载地址：[Oracle JDK](https://www.oracle.com/java/technologies/downloads/) 或 [OpenJDK](https://openjdk.org/)` |
| `- 配置环境变量：确保 `JAVA_HOME` 指向 JDK 安装目录`         |
|                                                              |
| `### 2. 安装 Android SDK`                                    |
| `- 推荐使用 [Android Studio](https://developer.android.com/studio) 安装和管理 Android SDK` |
| `- 配置环境变量：`                                           |
| `  ```bash`                                                  |
| `  # Windows`                                                |
| `  ANDROID_HOME = C:\Users\<用户名>\AppData\Local\Android\Sdk` |
| `  `                                                         |
| `  # macOS/Linux`                                            |
| `  export ANDROID_HOME=$HOME/Android/Sdk`                    |
| `  ````                                                      |
| `- 确保安装以下 SDK 组件：`                                  |
| `  - SDK Platforms: Android 15 (API 35) 或更高版本`          |
| `  - Build-Tools: 35.0.0 或更高版本`                         |
| `  - Platform-Tools: 最新版本`                               |
|                                                              |
| `### 3. 配置 Gradle`                                         |
| `- 项目会自动使用本地 Gradle 包装器，无需单独安装`           |
| `- 确保网络连接正常，Gradle 需要下载依赖`                    |
|                                                              |
| `## 生成签名密钥`                                            |
|                                                              |
| `Android 应用需要签名才能发布，使用 `keytool` 命令生成签名密钥：` |
|                                                              |
| `### 1. 打开命令行工具`                                      |
| `- Windows：使用 PowerShell 或 cmd`                          |
| `- macOS/Linux：使用终端`                                    |
|                                                              |
| `### 2. 执行密钥生成命令`                                    |
|                                                              |
| ````bash`                                                    |
| `keytool -genkeypair -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias` |
| `````                                                        |
|                                                              |
| `### 3. 输入相关信息`                                        |
| `按照提示输入以下信息：`                                     |
| `- 密钥库密码`                                               |
| `- 别名密码`                                                 |
| `- 姓名和组织信息`                                           |
| `- 国家/地区代码`                                            |
|                                                              |
| `### 4. 保存密钥文件`                                        |
| `将生成的 `my-release-key.jks` 文件复制到 `android/app` 目录下。` |
|                                                              |
| `## 配置签名信息`                                            |
|                                                              |
| `### 1. 修改 `android/app/build.gradle` 文件`                |
|                                                              |
| `打开 `android/app/build.gradle` 文件，在 `android` 块中添加签名配置：` |
|                                                              |
| ````gradle`                                                  |
| `android {`                                                  |
| `    // ... 其他配置`                                        |
| `    `                                                       |
| `    signingConfigs {`                                       |
| `        release {`                                          |
| `            storeFile file('my-release-key.jks')`           |
| `            storePassword '你的密钥库密码'`                 |
| `            keyAlias 'my-key-alias'`                        |
| `            keyPassword '你的别名密码'`                     |
| `        }`                                                  |
| `    }`                                                      |
| `    `                                                       |
| `    buildTypes {`                                           |
| `        release {`                                          |
| `            // ... 其他配置`                                |
| `            signingConfig signingConfigs.release`           |
| `        }`                                                  |
| `    }`                                                      |
| `}`                                                          |
| `````                                                        |
|                                                              |
| `### 2. 安全建议`                                            |
| `为了安全，建议使用 `gradle.properties` 文件存储密码，而非硬编码：` |
|                                                              |
| `1. 在 `android` 目录下创建 `gradle.properties` 文件`        |
| `2. 添加以下内容：`                                          |
| `   ```properties`                                           |
| `   MYAPP_RELEASE_STORE_FILE=my-release-key.jks`             |
| `   MYAPP_RELEASE_KEY_ALIAS=my-key-alias`                    |
| `   MYAPP_RELEASE_STORE_PASSWORD=你的密钥库密码`             |
| `   MYAPP_RELEASE_KEY_PASSWORD=你的别名密码`                 |
| `   ````                                                     |
| `3. 修改 `build.gradle` 文件：`                              |
| `   ```gradle`                                               |
| `   signingConfigs {`                                        |
| `       release {`                                           |
| `           storeFile file(MYAPP_RELEASE_STORE_FILE)`        |
| `           storePassword MYAPP_RELEASE_STORE_PASSWORD`      |
| `           keyAlias MYAPP_RELEASE_KEY_ALIAS`                |
| `           keyPassword MYAPP_RELEASE_KEY_PASSWORD`          |
| `       }`                                                   |
| `   }`                                                       |
| `   ````                                                     |
|                                                              |
| `## 构建 APK`                                                |
|                                                              |
| `### 1. 进入 Android 目录`                                   |
|                                                              |
| ````bash`                                                    |
| `cd android`                                                 |
| `````                                                        |
|                                                              |
| `### 2. 清理构建缓存（可选）`                                |
|                                                              |
| ````bash`                                                    |
| `# Windows`                                                  |
| `./gradlew clean`                                            |
|                                                              |
| `# macOS/Linux`                                              |
| `./gradlew clean`                                            |
| `````                                                        |
|                                                              |
| `### 3. 构建发布版本`                                        |
|                                                              |
| ````bash`                                                    |
| `# Windows`                                                  |
| `./gradlew assembleRelease`                                  |
|                                                              |
| `# macOS/Linux`                                              |
| `./gradlew assembleRelease`                                  |
| `````                                                        |
|                                                              |
| `## 获取 APK 文件`                                           |
|                                                              |
| `构建完成后，APK 文件会生成在以下路径：`                     |
|                                                              |
| `````                                                        |
| `android/app/build/outputs/apk/release/app-release.apk`      |
| `````                                                        |
|                                                              |
| `## 验证 APK`                                                |
|                                                              |
| `### 1. 查看 APK 签名信息`                                   |
|                                                              |
| ````bash`                                                    |
| `keytool -printcert -jarfile app-release.apk`                |
| `````                                                        |
|                                                              |
| `### 2. 查看 APK 包信息`                                     |
|                                                              |
| ````bash`                                                    |
| `# 使用 Android SDK 中的 aapt 工具`                          |
| `aapt dump badging app-release.apk`                          |
| `````                                                        |
|                                                              |
| `## 常见问题及解决方案`                                      |
|                                                              |
| `### 1. Gradle 构建失败`                                     |
| `- **原因**：网络连接问题、依赖下载失败、SDK 版本不匹配`     |
| `- **解决方案**：`                                           |
| `  - 检查网络连接`                                           |
| `  - 确保 Android SDK 版本与项目配置一致`                    |
| `  - 执行 `./gradlew clean` 后重新构建`                      |
| `  - 检查 `build.gradle` 文件中的依赖版本`                   |
|                                                              |
| `### 2. 签名错误`                                            |
| `- **原因**：密钥库文件路径错误、密码或别名输入错误`         |
| `- **解决方案**：`                                           |
| `  - 检查密钥库文件是否正确复制到 `android/app` 目录`        |
| `  - 确认密码和别名是否输入正确`                             |
| `  - 检查 `build.gradle` 中的签名配置`                       |
|                                                              |
| `### 3. 权限问题`                                            |
| `- **原因**：应用需要的权限未在 `AndroidManifest.xml` 中声明` |
| `- **解决方案**：在 `android/app/src/main/AndroidManifest.xml` 中添加必要的权限` |
|                                                              |
| `### 4. 构建过程缓慢`                                        |
| `- **原因**：Gradle 首次构建需要下载大量依赖`                |
| `- **解决方案**：`                                           |
| `  - 确保网络连接稳定`                                       |
| `  - 考虑使用 Gradle 离线模式`                               |
| `  - 配置 Gradle 缓存`                                       |
|                                                              |
| `## 发布准备`                                                |
|                                                              |
| `### 1. 版本号配置`                                          |
| `在 `android/app/build.gradle` 文件中配置版本信息：`         |
|                                                              |
| ````gradle`                                                  |
| `android {`                                                  |
| `    defaultConfig {`                                        |
| `        versionCode 1`                                      |
| `        versionName "1.0"`                                  |
| `        // ... 其他配置`                                    |
| `    }`                                                      |
| `}`                                                          |
| `````                                                        |
|                                                              |
| `### 2. 应用图标和启动页`                                    |
| `确保在 `android/app/src/main/res` 目录下配置了适当的应用图标和启动页。` |
|                                                              |
| `### 3. 混淆配置（可选）`                                    |
| `如果需要代码混淆，在 `android/app/build.gradle` 文件中配置：` |
|                                                              |
| ````gradle`                                                  |
| `buildTypes {`                                               |
| `    release {`                                              |
| `        minifyEnabled true`                                 |
| `        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'` |
| `        // ... 其他配置`                                    |
| `    }`                                                      |
| `}`                                                          |
| `````                                                        |
|                                                              |
| `## 总结`                                                    |
|                                                              |
| `1. **准备环境**：安装 JDK 和 Android SDK`                   |
| `2. **生成密钥**：使用 keytool 生成签名密钥`                 |
| `3. **配置签名**：在 build.gradle 中配置签名信息`            |
| `4. **构建 APK**：执行 gradlew assembleRelease 命令`         |
| `5. **验证 APK**：检查签名和包信息`                          |
| `6. **发布应用**：将 APK 上传到应用商店`                     |
|                                                              |
| `遵循以上步骤，你就可以成功将 React Native 项目打包为可发布的 APK 文件。` |