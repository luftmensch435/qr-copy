# User Guide: QR Copy

Welcome to the user guide for the QR Copy! This guide will provide you with the necessary information to use the app effectively. Let's get started.

## Table of Contents

- [User Guide: QR Copy](#user-guide-qr-copy)
  - [Table of Contents](#table-of-contents)
  - [Introduction ](#introduction-)
  - [Getting Started ](#getting-started-)
    - [Accessing the App ](#accessing-the-app-)
    - [Supported Browsers ](#supported-browsers-)
  - [Using the App ](#using-the-app-)
    - [Step 1: Generate QR Code ](#step-1-generate-qr-code-)
    - [Step 2: Scan QR code ](#step-2-scan-qr-code-)
  - [Developers](#developers)
    - [Things to change for your own needs: ](#things-to-change-for-your-own-needs-)
    - [External Dependencies](#external-dependencies)

## Introduction <a name="introduction"></a>

Copy and paste across devices text using QR code!

## Getting Started <a name="getting-started"></a>

### Accessing the App <a name="accessing-the-app"></a>

[QR Copy](https://luftmensch435.github.io/qr-copy/), or open your preferred web browser and enter the app's URL https://luftmensch435.github.io/qr-copy/ in the address bar. Press Enter.

### Supported Browsers <a name="supported-browsers"></a>

QR Copy is tested on the following web browsers:

- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge (latest version)

## Using the App <a name="using-the-app"></a>

### Step 1: Generate QR Code <a name="step-1-copy"></a>

1. Open your web browser and access the app.
2. Type or paste the text you want to copy.
3. Scroll down for the QR code.

> Text is limited to a max length of 1500 characters.

### Step 2: Scan QR code <a name="step-2-paste"></a>

1. On your second device, open your QR code scanner. (It's built-in to the camera app on most modern smartphones.)
2. Select the text you want to copy, or just use the `Copy to Clipboard` button.
3. The text is ready to paste!

## Developers

It's just ridiculous to not have a proper data link between devices nowadays. There's bluetooth but it requires pairing, there's Apple's continuity thing but it requires an Apple device (and who knows when Airdrop will find the phone right next to itself), there's text recognition but it sees "1"s as "l"s. I guess you can email yourself but it takes 5 minutes for MFA, and all that's left is manual copying? which is also prone to human error. 

### Things to change for your own needs: <a name="potential-upgrade"></a>

- This app is limited to a max length of 1500 characters due to the size of the generated QR code, the resolution of most screens and cameras, but current QR code standard can encode up to ~7000 character.
- Use data URL scheme for transfer images.

### External Dependencies

- [Bootstrap](https://getbootstrap.com)
- [jQuery](https://jquery.com)
- [qrious](https://github.com/neocotic/qrious)