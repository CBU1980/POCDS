# Icons

## Fetch icons from Figma

Imports icons from Figma

```
yarn import-icons
```

## Build

Minifies SVGS and creates a JS modules. Build files are in git for demo purposes.

```
yarn build
```

## Config

First create a config file `icons.config.json`, then add your token, file id, frame, path for icons and page.

```
{
  "figmaPersonalToken": "TOKEN",
  "fileId": "FILE_ID",
  "frame": "FRAME_NAME",
  "iconsPath": "ICON_PATH",
  "page": "PAGE"
}

```
