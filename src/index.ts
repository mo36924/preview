import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("preview", async () => {
      const panel = vscode.window.createWebviewPanel(
        "preview",
        "preview",
        vscode.window.activeTextEditor?.viewColumn ?? vscode.ViewColumn.One,
        {},
      );

      const html = "<h1>Hello</h1>";
      // try {
      //   const data = await vscode.workspace.fs.readFile(
      //     // eslint-disable-next-line ts/no-non-null-asserted-optional-chain
      //     vscode.Uri.joinPath(vscode.workspace.workspaceFolders?.[0].uri!, "index.html"),
      //   );
      //   html = new TextDecoder().decode(data);
      // } catch {}

      panel.webview.html = html;
    }),
  );
}
