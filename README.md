# catppuccin-frappe

A Claude Code mod that paints the Claude desktop and mobile apps in
[Catppuccin Frappé](https://catppuccin.com/palette): Frappé surfaces, text and
accent colours (mauve accent, red/green/yellow status, peach literals, Frappé git
colours), plus a backdrop of soft Catppuccin colour blobs drifting slowly behind
frosted-glass panels.

The look is dark-only, since Frappé is a dark palette. The terminal CLI and
editors do not draw mod themes, so it only shows in the desktop and mobile apps.

## Install

At the prompt of a terminal session:

```
/plugin install catppuccin-frappe --marketplace amornnan19/claude-catppuccin-frappe-theme
```

Answer `y` to add the marketplace, then pick a scope (user scope applies it to
every session).

From a shell:

```bash
claude plugin install catppuccin-frappe --marketplace amornnan19/claude-catppuccin-frappe-theme
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box,
then Plugins, Add marketplace with `amornnan19/claude-catppuccin-frappe-theme`, then Add plugin.

No GitHub account or credentials are needed: the repository is public.

To update to the latest version later:

```bash
claude plugin marketplace update catppuccin-frappe
claude plugin update catppuccin-frappe@catppuccin-frappe
```

## Notes

- Text is Frappé `text` lifted slightly (`#d0d8f7`) and cards sit between
  `base` and `surface0`, so the desktop app's contrast check accepts the theme.
- With reduced motion turned on, the colour blobs rest in place.

## Develop

```bash
claude plugin validate .
claude plugin test .
```
