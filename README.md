- This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

  ## 环境与工具版本（Windows）

  > 以下为当前项目在 Windows 上已验证可用的一组配置，建议尽量保持一致，避免 Gradle / NDK / CMake 等兼容性问题。

  - **操作系统**: Windows 10/11 x64  
  - **Node.js**: `>= 22.11.0`（见 `package.json` 中 `engines.node`）  
  - **React Native CLI**: 使用本地依赖 `@react-native-community/cli`（通过 `npx react-native` 调用）  
  - **JDK**:
    - 推荐安装: **Eclipse Temurin JDK 21 (HotSpot)**  
    - 示例安装路径: `C:\Program Files\Eclipse Adoptium\jdk-21.0.10.7-hotspot`  
    - 项目中通过 `org.gradle.java.home`（`android/gradle.properties`）指向此 JDK
  - **Android Studio / SDK**:
    - Android SDK 根目录示例: `C:\Users\<你的用户名>\AppData\Local\Android\Sdk`
    - 已使用并建议安装的组件：
      - **SDK Platforms**: `Android 15 (API 35)`（目录 `platforms\android-35`）
      - **Build-Tools**: `35.0.0`（目录 `build-tools\35.0.0`）
      - **Platform-Tools**: 最新版本（包含 `adb`）
  - **NDK**:
    - 版本: `27.1.12297006`  
    - 安装目录示例: `C:\Users\<你的用户名>\AppData\Local\Android\Sdk\ndk\27.1.12297006`  
    - 在 `android/build.gradle` 中通过 `ndkVersion = "27.1.12297006"` 固定
  - **CMake**:
    - 建议安装版本: `>= 3.22.1`（Android SDK 中的 CMake 或系统 CMake 均可）  
    - 项目通过 `android/local.properties` 的 `cmake.dir` 可显式指定（该文件不提交到 Git）
  - **Ninja**:
    - 版本: `>= 1.13.2`  
    - 推荐通过 `winget install Ninja-build.Ninja` 安装，并确保 `ninja.exe` 在 `PATH` 中
  - **设备调试**:
    - 需开启手机的 “开发者选项” 与 “USB 调试”
    - 使用 `adb devices` 确认设备为 `device` 状态  
    - 推荐在调试时执行 `adb reverse tcp:8081 tcp:8081` 保证 Metro 端口连通

  # Getting Started

  > **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

  ## Step 1: Start Metro

  First, you will need to run **Metro**, the JavaScript build tool for React Native.

  To start the Metro dev server, run the following command from the root of your React Native project:

  ```sh
  # Using npm
  npm start
  
  # OR using Yarn
  yarn start
  ```

  ## Step 2: Build and run your app

  With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

  ### Android

  ```sh
  # Using npm
  npm run android
  
  # OR using Yarn
  yarn android
  ```

  ### iOS

  For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

  The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

  ```sh
  bundle install
  ```

  Then, and every time you update your native dependencies, run:

  ```sh
  bundle exec pod install
  ```

  For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

  ```sh
  # Using npm
  npm run ios
  
  # OR using Yarn
  yarn ios
  ```

  If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

  This is one way to run your app — you can also build it directly from Android Studio or Xcode.

  ## Step 3: Modify your app

  Now that you have successfully run the app, let's make changes!

  Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

  When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

  - **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
  - **iOS**: Press <kbd>R</kbd> in iOS Simulator.

  ## Congratulations! :tada:

  You've successfully run and modified your React Native App. :partying_face:

  ### Now what?

  - If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
  - If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

  # Troubleshooting

  If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

  # Learn More

  To learn more about React Native, take a look at the following resources:

  - [React Native Website](https://reactnative.dev) - learn more about React Native.
  - [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
  - [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
  - [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
  - [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
