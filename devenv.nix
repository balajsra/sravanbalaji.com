{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [
      pkgs.git
      pkgs.yaml-language-server
      pkgs.typescript-language-server
      pkgs.nodePackages.prettier
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