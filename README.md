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
