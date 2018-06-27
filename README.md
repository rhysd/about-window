'About This App' Window for [Electron](https://github.com/atom/electron) Apps
=============================================================================
[![npm version](https://badge.fury.io/js/about-window.svg)](https://www.npmjs.com/package/about-window)

[This package](https://www.npmjs.com/package/about-window) provides 'About This App' window for [Electron](https://github.com/atom/electron) applications.

- [x] Create 'About This App' window from given parameters
  - [x] Icon path
  - [x] Copy right
  - [x] App name and Versions
  - [x] Description
- [x] Gather package information from package.json
- [x] Automatically detect package.json
- [x] Adjust window size to its contents automatically
- [x] CSS customizability

You can install this module via [npm](https://www.npmjs.com/).

```sh
$ npm install about-window
```

Only one function is exported as default.  Please see [TypeScript type definition](index.d.ts).
The function can be called from both main process and renderer process.

```typescript
export default function openAboutWindow(info: {
    icon_path: string;
    product_name?: string;
    package_json_dir?: string;
    bug_report_url?: string;
    bug_link_text?: string;
    copyright?: string;
    homepage?: string;
    description?: string;
    license?: string;
    css_path?: string | string[];
    adjust_window_size?: boolean;
    win_options?: BrowserWindowOptions;
    use_version_info?: boolean;
}): BrowserWindow
```

Only `icon_path` property is required, others are optional.
I recommend to specify as below to extract information from package.json as much as possible.
Path to package.json is also automatically detected if possible.

```typescript
openAboutWindow({
    icon_path: 'path/to/icon.png'
});
```

If `string` value is passed to the first parameter, it is passed to `icon_path`. So following is a shorthand of above code:

```typescript
openAboutWindow('path/to/icon.png');
```

You can check [an example app](example) to know how to use this package.

```sh
$ git clone https://github.com/rhysd/about-window.git
$ cd about-window/example
$ npm install
$ npm start

# Or for debug
$ npm run debug
```

### Parameter's properties of `openAboutWindow()`

| Name | Description | Type |
|------|-------------|------|
| `icon_path` | Path to icon file of the application. The path is passed to `src` property of `<img>` element. **Required** | string |
| `package_json_dir` | Path to directory which contains package.json.  If not specified, it will try to detect a path to package.json.  If also failed, it gives up and show less information in 'About This App' window. **Optional** | string |
| `bug_report_url` | URL to bug report page.  If not specified, 'bugs' entry in package.json is used. **Optional** | string |
| `copyright` | Copyright notice shown in window.  If not specified, it is replaced with license description generated by 'license' entry of package.json. **Optional** | string |
| `homepage` | URL of application's web page.  If not specified, 'homepage' entry of package.json is used instead. **Optional** | string |
| `description` | Description of the application.  If not specified, 'description' entry of package.json is used instead. **Optional** | string |
| `license` | License of the application.  If not specified, 'license' entry of package.json is used instead. This property is used when `copyright` is not specified. **Optional** | string |
| `win_options` | Options of 'About This App' window.  It is merged into default options. **Optional** | [BrowserWindow options object](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions) |
| `css_path` | Path(s) to user-defined CSS file.  It will be inserted to DOM of the window. **Optional** | (array of) string |
| `adjust_window_size` | Adjust the window size to its content not to show scroll bar. **Optional** | boolean |
| `open_devtools` | For debug purpose, Chrome DevTools will start when the window is opened. **Optional** | boolean |
| `use_inner_html` | If `true`, set the value with `.innerHTML` on copyright, license and description Default is `false`. **Optional** | boolean |
| `bug_link_text` | Text for a bug report link. **Optional** | string |
| `product_name` | Name of the application **Optional** | string |
| `use_version_info` | If `false`, the versions of electron, chrome, node, and v8 will not be displayed. Default is `true`. **Optional** | boolean |

**Note:** If you set `use_inner_html` to `true`, please ensure that contents don't contain any untrusted external input
in order to avoid XSS. Be careful.

## Screen Shots

### Linux

![Linux screenshot](https://raw.githubusercontent.com/rhysd/ss/master/about-window/about-window-linux.png)

### OS X

![OS X screenshot](https://raw.githubusercontent.com/rhysd/ss/master/about-window/about-window-os-x.png)

### Windows

![Windows screenshot](https://raw.githubusercontent.com/rhysd/ss/master/about-window/about-window-windows.jpg)

## License

[MIT License](/LICENSE.txt).

