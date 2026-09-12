{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    just
    just-lsp
    nixd
    nixfmt
    prettier
    typescript-language-server
    yaml-language-server
  ];

  # https://devenv.sh/languages/
  # languages.rust.enable = true;
  languages.javascript = {
    enable = true;
    npm.enable = true;
    npm.install.enable = true;
  };
  languages.nix.enable = true;
}
