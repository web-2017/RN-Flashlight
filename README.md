## npx expo-optimize /folderpath (command = yarn gzip)

> npx expo-optimize <project-directory> [options]

- options: https://www.npmjs.com/package/expo-optimize
- This library uses the natively powered package Sharp behind the scenes to optimally reduce your project's assets for use in an app or website.

then =>

### Build Project android or ios

- npx expo-optimize
- npx build:android | expo build:ios

then =>

#### Get keys for android and save it below
- get keys
> expo fetch:android:hashes

> expo fetch:android:upload-cert

> expo fetch:android:keystore
Keystore credentials
Keystore password: 423ec687852644cdba7a5a5b289f5a61
Key alias:         QG1hcmlvMDI4NS9mbGFzaGxpZ2h0
Key password:      d9e2f8894c3a41aea905160e94814235
