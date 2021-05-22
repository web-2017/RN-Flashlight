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

Accessing credentials for mario0285 in project prayertime
Google Certificate Fingerprint: 71:5D:AC:6C:8F:E0:AD:01:3B:F1:93:99:BD:69:7E:67:6D:3C:E9:83
Google Certificate Hash (SHA-1): 715DAC6C8FE0AD013BF19399BD697E676D3CE983
Google Certificate Hash (SHA-256): EEA57A62935996ECB00A892F9D6FB3FC6355B261343833C3BD8E9BD858021B3C
Facebook Key Hash: cV2sbI/grQE78ZOZvWl+Z2086YM=

> expo fetch:android:upload-cert

filepath = ./prayertime_upload_cert.pem

> expo fetch:android:keystore

Keystore credentials
Keystore password: f74cb7eafd484496a5156bec286bf31a
Key alias: QG1hcmlvMDI4NS9wcmF5ZXJ0aW1l
Key password: 8c7ce4452633460b96e4c72821ab718a
Path to Keystore: ./prayertime.jks
