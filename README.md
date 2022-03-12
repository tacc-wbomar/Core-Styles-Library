# TACC Core Styles

A pattern library for shared styles of TACC WMA Workspace Portals & Websites

> __Notice__: Currently only [Core CMS] is using these styles.


## Related Repositories

- [Core CMS], the base CMS code for TACC WMA CMS Websites


## Local Development Setup

### Prequisites for Building the Library

* Nodejs 12.x (LTS)

### Quick Start

1. Install dependencies: `npm`
2. Build and run library: `npm run serve`¹

<sub>¹ Ensure port `____` is available locally.</sub>

### Linting and Formatting Conventions

No linting is emplemented, _yet_.


### Testing

All testing is manual.

### Production Deployment

This pattern library is not deployed alone _yet_.


## Contributing

### Development Workflow

We use a modifed version of [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) as our development workflow. Our [development site](https://dev.cep.tacc.utexas.edu) (accessible behind the TACC Network) is always up-to-date with `main`, while the [production site](https://prod.cep.tacc.utexas.edu) is built to a hashed commit tag.
- Feature branches contain major updates, bug fixes, and hot fixes with respective branch prefixes:
    - `task/` for features and updates
    - `bug/` for bugfixes
    - `fix/` for hotfixes

### Best Practices

Sign your commits ([see this link](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) for help)

### Resources

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)


<!-- Link Aliases -->

[Core CMS]: https://github.com/TACC/Core-CMS
[Core Portal]: https://github.com/TACC/Core-Portal
