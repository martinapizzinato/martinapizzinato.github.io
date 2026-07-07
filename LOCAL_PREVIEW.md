# Previewing the site locally

This site is pinned to **Hugo 0.111.3** (see `.github/workflows/hugo.yml`) because the
vendored PaperMod theme breaks on newer Hugo versions. Use the same version locally so what
you see matches what gets deployed.

## One-time setup

Run this once, from the project root:

```bash
mkdir -p bin
curl -sL -o /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.111.3/hugo_extended_0.111.3_darwin-universal.tar.gz
tar -xzf /tmp/hugo.tar.gz -C bin hugo
rm /tmp/hugo.tar.gz
./bin/hugo version
```

The last command should print `hugo v0.111.3 ... +extended`. This downloads a standalone
`hugo` binary into `./bin/` (already git-ignored) — nothing is installed system-wide.

## Every time you want to preview

From the project root:

```bash
./bin/hugo server -D
```

Then open **http://localhost:1313/** in your browser. Leave the command running — it
watches your files and auto-reloads the page whenever you save a change (e.g. editing
files under `content/` or `config.yml`).

Press `Ctrl+C` in the terminal to stop the server.

## Pushing changes when you're happy

Once the local preview looks right:

```bash
git add -A
git commit -m "describe your change"
git push
```

GitHub Actions will rebuild and redeploy automatically — no need to build or push anything
manually beyond this.
