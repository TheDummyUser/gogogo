---
title: Nix... Is not a distro
date: 30-1-25
description: About nix/nixos dummy...
---
# Why I Switched to NixOS: A Deep Dive into the Future of Linux Distributions

A few weeks ago, I made the switch to **NixOS**, a unique Linux distribution that has been gaining traction among developers and system administrators. If you're wondering what NixOS is, you're in the right place. In this post, I'll explain what NixOS is, why it's special, and why you might want to consider using it over other Linux distributions.

---

## What is NixOS?

NixOS is a Linux distribution powered by the **Nix package manager** and the **Nix language**. It was created by **Eelco Dolstra** in **2003** as part of his PhD research. Unlike traditional Linux distributions, NixOS takes a purely functional approach to package management and system configuration. This means that everything in NixOS—from individual packages to the entire system configuration—is defined declaratively using the Nix language.

---

## Why NixOS? Key Features and Benefits

Here are some of the key reasons why NixOS stands out from other Linux distributions:

### 1. **Reproducibility**
Nix ensures that builds are reproducible by using a purely functional approach. Each package is built in isolation, and its dependencies are explicitly specified. This makes it easy to reproduce builds across different environments, ensuring consistency and reliability.

### 2. **Dependency Management**
Nix avoids dependency conflicts by allowing multiple versions of the same package to coexist. This eliminates the infamous "dependency hell" problem that plagues traditional package managers like APT or YUM.

### 3. **Atomic Upgrades and Rollbacks**
Nix supports atomic upgrades and rollbacks. This means that changes to the system can be applied or reverted atomically, reducing the risk of system instability. If something goes wrong during an upgrade, you can simply roll back to the previous state with a single command.

### 4. **Declarative System Configuration**
In NixOS, your entire system configuration is defined in a single file (`/etc/nixos/configuration.nix`). This file specifies everything from installed packages to user accounts and system services. You can version-control this file and easily replicate your system on another machine.

### 5. **Multi-User Support**
NixOS allows multiple users to install and use different versions of software without interfering with each other. This is particularly useful in shared environments.

---

## Getting Started with NixOS

If you're ready to give NixOS a try, here's how you can get started:

### Installation
You can install NixOS by downloading the ISO from the [official NixOS website](https://nixos.org/download.html). During installation, you'll be prompted to create a `configuration.nix` file, which will serve as the blueprint for your system.

### Adding Packages
To install packages, simply add them to your `configuration.nix` file. For example, to install the `htop` and `neovim` packages, you would add the following lines:

```nix
environment.systemPackages = with pkgs; [
  htop
  neovim
];
```

After editing the file, rebuild your system using the following command:

```bash
sudo nixos-rebuild switch
```

This will apply the changes and install the specified packages.

---

## Flakes: The Future of NixOS

Nix Flakes are an experimental feature that has become a cornerstone of the Nix ecosystem. Flakes provide a standardized way to define and share Nix projects, making it easier to manage dependencies and ensure reproducibility.

### Enabling Flakes
To enable flakes, add the following line to your `configuration.nix` file:

```nix
nix.settings.experimental-features = [ "nix-command" "flakes" ];
```

After rebuilding your system, you can start using flakes.

### Why Use Flakes?
Flakes enforce a uniform structure for Nix projects, pin versions of dependencies in a lock file, and make it easier to write reproducible Nix expressions. Here's a breakdown of what a flake looks like:

- **description**: A string describing the flake.
- **inputs**: An attribute set of all the dependencies of the flake.
- **outputs**: A function that takes the realized inputs and produces an attribute set of outputs.
- **nixConfig**: Configuration options for Nix, such as binary caches.

### Example Flake
Here's an example of a simple flake:

```nix
{
  description = "My first flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }: {
    packages.x86_64-linux.hello = nixpkgs.legacyPackages.x86_64-linux.hello;
  };
}
```

---

## Development Environments with `devenv`

One of the most powerful features of NixOS is its ability to create reproducible development environments. Tools like **devenv** and **direnv** make this process even easier.

### Installing `devenv`
To install `devenv`, run the following command:

```bash
nix-env --install --attr devenv -f https://github.com/NixOS/nixpkgs/tarball/nixpkgs-unstable
```

### Setting Up a Development Environment
To create a development environment, navigate to your project directory and run:

```bash
devenv init
```

This will generate the following files:
- `.envrc`: Automatically loads the environment when you enter the directory.
- `devenv.nix`: Defines the development environment.
- `devenv.yaml`: Configuration file for `devenv`.
- `.gitignore`: Ensures that temporary files are ignored by Git.

### Example `devenv.nix`
Here's an example of a `devenv.nix` file:

```nix
{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = [ pkgs.git pkgs.nodejs ];

  # https://devenv.sh/languages/
  languages.rust.enable = true;

  android = {
    enable = true;
    reactNative.enable = true;
    platforms.version = [ "35" ];
    systemImageTypes = [ "google_apis_playstore" ];
    abis = [ "arm64-v8a" "x86_64" ];
    platformTools.version = "35.0.2";
    buildTools.version = [ "35.0.0" ];
    emulator = {
      enable = true;
      version = "35.2.5";
    };
    sources.enable = false;
    systemImages.enable = true;
    ndk.enable = true;
    googleAPIs.enable = true;
    googleTVAddOns.enable = true;
    extras = [ "extras;google;gcm" ];
    extraLicenses = [
      "android-sdk-preview-license"
      "android-googletv-license"
      "android-sdk-arm-dbt-license"
      "google-gdk-license"
      "intel-android-extra-license"
      "intel-android-sysimage-license"
      "mips-android-sysimage-license"
    ];
    # android-studio = pkgs.android-studio;
  };

  # https://devenv.sh/processes/
  processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/scripts/
  scripts.hello.exec = ''
    echo hello from $GREET
  '';

  enterShell = ''
    hello
    git --version
  '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
```

This sets up a development environment with Node.js, and android studo with all the required path as ANDROID_HOME OR JAVA_HOME

### automatic shell activation:
first install direnv, then add this to you bashrc or zshrc file 

bash
```
eval "$(direnv hook bash)"
```

zsh
```
eval "$(direnv hook zsh)"
```

if you are using oh my zsh then you add direnv to you zsh plugins as
```
plugins=(devenv)
```

so this direnv looks up for the .envrc file which is connected to the .nix files to install all the required pkgs and paths

## Conclusion

NixOS is a revolutionary Linux distribution that offers unparalleled reproducibility, dependency management, and system configuration. Whether you're a developer looking for a reliable development environment or a system administrator managing multiple machines, NixOS has something to offer.

With features like flakes and tools like `devenv`, NixOS is paving the way for the future of Linux distributions. If you're curious, I highly recommend giving it a try. You might just find that it's the perfect fit for your needs.
