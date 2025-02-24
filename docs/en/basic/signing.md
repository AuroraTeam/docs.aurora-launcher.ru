# Launcher signing

To reduce the frequency of antivirus programs flagging your Launcher, it needs to be signed with a Code Signing certificate. Ideally, you should contact one of the many trusted certification authorities to obtain this certificate. However, to start, we will sign our launcher with a self-signed certificate.

## Certificate Generation

For a convenient and user-friendly interface, we will use [XCA](https://www.hohnstaedt.de/xca/index.php/download). Download and install it.

- First, go to the `File` menu and select `New Database`. Name it as you like and place it wherever you want.
- In the `Certificates` tab, click on `New Certificate`. Now we will create a root certificate.
- Go to the `Subject` tab and fill in the `commonName` field (e.g., `ServerMC Root CA`), this is required. Other fields are optional.
- At the bottom, you will see the `Generate a new key` button. Select the key type `RSA` and length `4096 bit`. A new key must be created for each new certificate.
- Go to the `Extensions` tab, select `Certification Authority` from the `Type` list. In the `Validity Period` section, specify how many years the certificate will be valid. The typical validity period for a root certificate is between 10 and 50 years. Don't forget to click `Apply` to calculate the dates.
- Go to the `Key Usage` tab and select `Certificate Sign` and `CRL Sign` in the left column.
- Go to the `Netscape` tab, nothing should be filled in or selected here.
- Create the root certificate by clicking `OK`.
- To enhance security, you can create an intermediate certificate. To do this, repeat the steps above, but in the `Signing` section, specify the root certificate. All subsequent certificates should have a shorter validity period than the root certificate.
- Create a Code Signing certificate by specifying the intermediate certificate (or root certificate) in the `Signing` section.
- Fill in the `Subject` tab similarly.
- In the `Extensions` tab, select `End Entity` from the `Type` list. Set the validity period as desired.
- In the `Key Usage` tab, select `Digital Signature` in the left column and `Code Signing` and `Microsoft Individual Code Signing` in the right column.
- Create the Code Signing certificate by clicking `OK`.
- Select the Code Signing certificate and click `Export` in the `PKCS#12 chain` format. Remember the password, as it will be needed for setting up `certificatePassword`.
![1.png](/signing/1.webp)

## Executable file signing

After generating the certificate, we drop it into the `ssl` folder (or any other) and edit the `script/electron-build.ts` file. We look for these lines

```ts:line-numbers=28
"nsis": {
            "artifactName": "${name}-Setup-${version}.${ext}"
        },
```

And add these lines after.

```ts
"win": {
            "target": "nsis",
            "signingHashAlgorithms": [
                "sha256"
            ],
            "certificateFile": "./ssl/Sign.pfx",
            "certificatePassword": "password"
        },
```

##### Description of config settings

- `target` - leave unchanged
- `signingHashAlgorithms` - what type of hash generation was used. If you [generated a certificate](#certificate-generation) leave unchanged
- `certificateFile` - path to certificate file
- `certificatePassword` - certificate password
- `artifactName` - installer file name mask
