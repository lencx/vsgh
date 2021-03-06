# FAQ

## React

> [Cannot use JSX unless the '--jsx' flag is provided when “jsx” is “react-jsx”](https://stackoverflow.com/questions/64965203/cannot-use-jsx-unless-the-jsx-flag-is-provided-when-jsx-is-react-jsx)

"Ctrl + Shift + P" or Click Typescript version at the bottom right of the window. TypeScript: Select TypeScript Version Use Workspace Version... 4.1.2"

## vsc

[vsce package throws error without message](https://github.com/microsoft/vscode-vsce/issues/391)

```bash
vsce package

> tsc -p tsconfig.extension.json
ERROR  Make sure to edit the README.md file before you package or publish your extension.
```

```bash
# ignore node_modules in .vscodeignore
This extension consists of 14259 files, out of which 13749 are JavaScript files. For performance reasons, you should bundle your extension: https://aka.ms/vscode-bundle-extension . You should also exclude unnecessary files by adding them to your .vscodeignore: https://aka.ms/vscode-vscodeignore
```

---

[I get 403 Forbidden (or 401 Unauthorized) error when I try to publish my extension?](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

One easy mistake to make when creating the PAT (Personal Access Token) is to not select **`All accessible organizations`** in the Organizations field drop-down (instead selecting a specific organization). You should also set the Authorized Scopes to Marketplace (Manage) for the publish to work.

```bash
> vsce login lencx
Personal Access Token for publisher 'lencx': ***********

ERROR  Failed request: (401)
```

---

[manage page](https://marketplace.visualstudio.com/manage/publishers)
