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
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    npm = {
      enable = true;
      install.enable = true;
    };
  };

  languages.nix.enable = true;
}
