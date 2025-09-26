# Semantic Release Automated Changelog

## [3.2.3](https://github.com/AlaskaAirlines/auro-toast/compare/v3.2.2...v3.2.3) (2025-09-26)


### Bug Fixes

* **toaster:** fixed issue regarding scss file import and added register to toaster so users can call it directly ([d9a34a3](https://github.com/AlaskaAirlines/auro-toast/commit/d9a34a31769ee1a61c08dc4be85f1fd393890e97))

## [3.2.2](https://github.com/AlaskaAirlines/auro-toast/compare/v3.2.1...v3.2.2) (2025-09-04)


### Bug Fixes

* update auro-library to latest version ([e4c8b12](https://github.com/AlaskaAirlines/auro-toast/commit/e4c8b12a3aa6684b275192e03be603bc182b3d53))


### Performance Improvements

* update button for icon fix and all other auro dependencies [#74](https://github.com/AlaskaAirlines/auro-toast/issues/74) ([7ea7c53](https://github.com/AlaskaAirlines/auro-toast/commit/7ea7c5304d621c455ea59e719c2a173f9411f85e))

## [3.2.1](https://github.com/AlaskaAirlines/auro-toast/compare/v3.2.0...v3.2.1) (2025-07-28)


### Bug Fixes

* correct close button size ([64bc611](https://github.com/AlaskaAirlines/auro-toast/commit/64bc6114aaff0dccc331baa4244f541e0420b67f))

# [3.2.0](https://github.com/AlaskaAirlines/auro-toast/compare/v3.1.3...v3.2.0) (2025-07-24)


### Bug Fixes

* correct attr name typo ([4461fc8](https://github.com/AlaskaAirlines/auro-toast/commit/4461fc8201064ffbdac1fea762469e8482898752))


### Features

* add custom hide duration as an attribute [#21](https://github.com/AlaskaAirlines/auro-toast/issues/21) ([56bf369](https://github.com/AlaskaAirlines/auro-toast/commit/56bf3692cf189969fc0c61376f6126f480e75bae))


### Performance Improvements

* update docs and make attribute expect milliseconds ([1312bf0](https://github.com/AlaskaAirlines/auro-toast/commit/1312bf0d15b2f8281164cdda43da91bacf915339))

## [3.1.3](https://github.com/AlaskaAirlines/auro-toast/compare/v3.1.2...v3.1.3) (2025-07-24)


### Bug Fixes

* update pre-commit script to use npx and simplify eslint command ([53269cb](https://github.com/AlaskaAirlines/auro-toast/commit/53269cb526ac5803b8a0b7276d06eed2f63b6372))

## [3.1.2](https://github.com/AlaskaAirlines/auro-toast/compare/v3.1.1...v3.1.2) (2025-07-16)


### Bug Fixes

* add themeable type styles ([e894341](https://github.com/AlaskaAirlines/auro-toast/commit/e8943415123297962c26ef5d4694b2245425f3d9))
* scss linter errors ([7420712](https://github.com/AlaskaAirlines/auro-toast/commit/742071205ffd7c36c971208f9b696c65496e6d75))
* update docs head content ([aeb2e2a](https://github.com/AlaskaAirlines/auro-toast/commit/aeb2e2a8b5cd73bfaae38567886950db262eac3f))

## [3.1.1](https://github.com/AlaskaAirlines/auro-toast/compare/v3.1.0...v3.1.1) (2025-05-01)


### Bug Fixes

* update SCSS token formatting ([f162cde](https://github.com/AlaskaAirlines/auro-toast/commit/f162cde6f16f6a01c37b55e63bcceacf6eb66545))

# [3.1.0](https://github.com/AlaskaAirlines/auro-toast/compare/v3.0.0...v3.1.0) (2025-04-30)


### Features

* update to use new theming tokens [#63](https://github.com/AlaskaAirlines/auro-toast/issues/63) ([61e5671](https://github.com/AlaskaAirlines/auro-toast/commit/61e5671a4695230a626a22489570d0bb0279d4c8))

# [3.0.0](https://github.com/AlaskaAirlines/auro-toast/compare/v2.4.2...v3.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([daf09f5](https://github.com/AlaskaAirlines/auro-toast/commit/daf09f5802eb9661df36908059c7fea21f08e205))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [2.4.2](https://github.com/AlaskaAirlines/auro-toast/compare/v2.4.1...v2.4.2) (2025-02-08)


### Performance Improvements

* update dependencies ([a8d225c](https://github.com/AlaskaAirlines/auro-toast/commit/a8d225cd98cb9496b64c96520fb45c84d8a69e1f))

## [2.4.1](https://github.com/AlaskaAirlines/auro-toast/compare/v2.4.0...v2.4.1) (2024-12-23)


### Performance Improvements

* update node to version 22 ([5e40bc9](https://github.com/AlaskaAirlines/auro-toast/commit/5e40bc9f4fe6a5f04d7a6f7438f6f352b7d37698))

# [2.4.0](https://github.com/AlaskaAirlines/auro-toast/compare/v2.3.0...v2.4.0) (2024-11-14)


### Features

* update auro-library to 3.0.2 ([3765fae](https://github.com/AlaskaAirlines/auro-toast/commit/3765faef5900a6a252c0ac1002a4eed603f033bd))

# [2.3.0](https://github.com/AlaskaAirlines/auro-toast/compare/v2.2.0...v2.3.0) (2024-11-13)


### Features

* support fully customized toasts [#53](https://github.com/AlaskaAirlines/auro-toast/issues/53) ([4d6f91a](https://github.com/AlaskaAirlines/auro-toast/commit/4d6f91afb5739c93b2ec2b998f7f86cb9c62af19))

# [2.2.0](https://github.com/AlaskaAirlines/auro-toast/compare/v2.1.0...v2.2.0) (2024-11-01)


### Bug Fixes

* remove customsize attribute [#51](https://github.com/AlaskaAirlines/auro-toast/issues/51) ([01ef209](https://github.com/AlaskaAirlines/auro-toast/commit/01ef209259836b6a5747f43eddc8455ac0dc4f01))


### Features

* update auro-icon package and icon size token applied [#51](https://github.com/AlaskaAirlines/auro-toast/issues/51) ([181e614](https://github.com/AlaskaAirlines/auro-toast/commit/181e614e4ae6d9ffa3e741eef40146ed0fa4dbca))


### Performance Improvements

* update dependencies ([72a5cb2](https://github.com/AlaskaAirlines/auro-toast/commit/72a5cb2283aed51744fbc96de89664ecec716a4c))

# [2.1.0](https://github.com/AlaskaAirlines/auro-toast/compare/v2.0.1...v2.1.0) (2024-10-24)


### Bug Fixes

* remove min-height style ([7cadc5d](https://github.com/AlaskaAirlines/auro-toast/commit/7cadc5d7c5a8669f5c1f34b9dea01e77229f2d89))


### Features

* **api:** add register static method [#49](https://github.com/AlaskaAirlines/auro-toast/issues/49) ([2105fbf](https://github.com/AlaskaAirlines/auro-toast/commit/2105fbf6f181cf1689bd36adeb785d05414701e6))


### Performance Improvements

* update dependency versions ([3762e5d](https://github.com/AlaskaAirlines/auro-toast/commit/3762e5d0e8b87d8308cce1decbf03108c6a3368a))

## [2.0.1](https://github.com/AlaskaAirlines/auro-toast/compare/v2.0.0...v2.0.1) (2024-10-09)


### Bug Fixes

* make auro-library a normal dep instead of devDep ([6ce7415](https://github.com/AlaskaAirlines/auro-toast/commit/6ce741520d1aed3c0c7c07a6fd09de23c6bd415a))

# [2.0.0](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.6...v2.0.0) (2024-09-30)


### Bug Fixes

* **hover:** corrects minor visual jump in close button on hover ([b323af2](https://github.com/AlaskaAirlines/auro-toast/commit/b323af2a973a2dfd595276bda97bda834d506206))


### Features

* add tag name as attribute when custom registered ([9ee3022](https://github.com/AlaskaAirlines/auro-toast/commit/9ee3022285387258ec725fdaeb0165f717fb5fec))
* refactor color token structure with tier 3 tokens [#37](https://github.com/AlaskaAirlines/auro-toast/issues/37) ([6c5798e](https://github.com/AlaskaAirlines/auro-toast/commit/6c5798e0ea401b21c7fa73c50c6ce6e21b1f5f3c))
* **version:** implement custom versioned components ([cf0b4da](https://github.com/AlaskaAirlines/auro-toast/commit/cf0b4da9ec6587f546d3d40508c8ad75047cb1b7))


### Performance Improvements

* **icon:** update to use dynamic named icon ([d197718](https://github.com/AlaskaAirlines/auro-toast/commit/d197718bd77e8a31b31a5989bb8feb504060fed4))
* refactor custom component registration config ([f53c1a2](https://github.com/AlaskaAirlines/auro-toast/commit/f53c1a265b4aa8a669d84ea92f82018c8cf58838))
* replace hard coded values with tokens ([e876f93](https://github.com/AlaskaAirlines/auro-toast/commit/e876f93352407b5c8e85fa233856c8bb98c0bddf))
* update dependencies ([cbed764](https://github.com/AlaskaAirlines/auro-toast/commit/cbed76442e6707a5f8cfdd4b5f196c48aff181ed))


### BREAKING CHANGES

* trigger major release for theming support #37

## [1.1.6](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.5...v1.1.6) (2024-02-22)


### Performance Improvements

* **docs:** update logic for JS examples ([004f8a0](https://github.com/AlaskaAirlines/auro-toast/commit/004f8a07d76199b788fd30e05eb26c78d0155441))

## [1.1.5](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.4...v1.1.5) (2024-02-22)


### Performance Improvements

* **examples:** refactor JS examples ([90c273a](https://github.com/AlaskaAirlines/auro-toast/commit/90c273ae215f13ec3af915918c19277d1a493122))

## [1.1.4](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.3...v1.1.4) (2024-02-15)


### Performance Improvements

* **demo:** update demo file names ([b643b10](https://github.com/AlaskaAirlines/auro-toast/commit/b643b10a133f707ceb3fe4e4c47419ff5382302d))
* **deps:** update dependencies ([756faba](https://github.com/AlaskaAirlines/auro-toast/commit/756fabaf486267a04881efde05e30fc4a0d44a5a))

## [1.1.3](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.2...v1.1.3) (2024-02-13)


### Performance Improvements

* update auro deps and add ESM badge ([3a408b1](https://github.com/AlaskaAirlines/auro-toast/commit/3a408b12f9502e10bb5d1c69af7ca293068440cf))

## [1.1.2](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.1...v1.1.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([14f2978](https://github.com/AlaskaAirlines/auro-toast/commit/14f2978580b46c1a2629b1cbf5299fe05c5fcdbc))
* **cdn:** update references from unpkg to jsdelivr ([fcb4a38](https://github.com/AlaskaAirlines/auro-toast/commit/fcb4a38cd0965fc6a3f856f8b9a7ab0d5e417f8f))

## [1.1.1](https://github.com/AlaskaAirlines/auro-toast/compare/v1.1.0...v1.1.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([cfc98cf](https://github.com/AlaskaAirlines/auro-toast/commit/cfc98cf060f70281c354aceda5155917c07e48e8))

# [1.1.0](https://github.com/AlaskaAirlines/auro-toast/compare/v1.0.1...v1.1.0) (2024-01-21)


### Features

* add suport for SSR projects [#31](https://github.com/AlaskaAirlines/auro-toast/issues/31) ([54e5b44](https://github.com/AlaskaAirlines/auro-toast/commit/54e5b445c82d8fc10e8441cfcbf12186403c4509))


### Performance Improvements

* update to support node policy ([7006b4d](https://github.com/AlaskaAirlines/auro-toast/commit/7006b4d72dfb586d41f1b75d710a7c27ebaeb89b))

## [1.0.1](https://github.com/AlaskaAirlines/auro-toast/compare/v1.0.0...v1.0.1) (2023-11-16)


### Bug Fixes

* feedback review for update library dependency and remove unused code ([a1b662a](https://github.com/AlaskaAirlines/auro-toast/commit/a1b662aa72d65b19d7f9a6298930ca59d9aa79b4))


### Performance Improvements

* **token:** update token per new theming [#44](https://github.com/AlaskaAirlines/auro-toast/issues/44) ([404d451](https://github.com/AlaskaAirlines/auro-toast/commit/404d4510f2b607f766bebe4d4af1bcbcdd2411d0))

# 1.0.0 (2023-07-18)


### Bug Fixes

* **lit:** update template to import from correct ref ([937d2d9](https://github.com/AlaskaAirlines/auro-toast/commit/937d2d9a573041952fbc8c9a9713f21d70707006))


### Features

* add close button [#10](https://github.com/AlaskaAirlines/auro-toast/issues/10) ([c80d7cc](https://github.com/AlaskaAirlines/auro-toast/commit/c80d7cccee7491d53a494c4865adbb47220994be))
* do not auto-dismiss error toast [#26](https://github.com/AlaskaAirlines/auro-toast/issues/26) ([543153b](https://github.com/AlaskaAirlines/auro-toast/commit/543153bec8e8679d2ef11aa80cc8943530b81fa0))
* placement of toast on UI [#14](https://github.com/AlaskaAirlines/auro-toast/issues/14) ([3d00d89](https://github.com/AlaskaAirlines/auro-toast/commit/3d00d89f25e3312c83dcb6b4bea108856e41ae25))
* support type property [#8](https://github.com/AlaskaAirlines/auro-toast/issues/8) ([c0c7907](https://github.com/AlaskaAirlines/auro-toast/commit/c0c7907a3b2a6d117ef1615f94e63eb3465a1bda))
* **ux/ui:** build of component [#5](https://github.com/AlaskaAirlines/auro-toast/issues/5) ([4ed9ef1](https://github.com/AlaskaAirlines/auro-toast/commit/4ed9ef1ce7bcf32f0f902dfbd03fc085d63273d5))
* **ux/ui:** hide toast after five seconds [#13](https://github.com/AlaskaAirlines/auro-toast/issues/13) ([4d6c587](https://github.com/AlaskaAirlines/auro-toast/commit/4d6c587e2c85da9b942a0eee4ee0daf9a5229c1c))
* **ux/ui:** implement toaster [#19](https://github.com/AlaskaAirlines/auro-toast/issues/19) ([e6145a6](https://github.com/AlaskaAirlines/auro-toast/commit/e6145a648e2b2c06e1ba4c4666e857d1fca1a69f))
* **ux/ui:** support noIcon property [#9](https://github.com/AlaskaAirlines/auro-toast/issues/9) ([a01a4e6](https://github.com/AlaskaAirlines/auro-toast/commit/a01a4e61d6ce74aff2150f97f8da6cf0013495f3))


### Performance Improvements

* **demo:** create api.html file ([00f3e64](https://github.com/AlaskaAirlines/auro-toast/commit/00f3e64e9afbd745ba0ff6e8a16c280307e9df12))
* **mobile:** allow greater touch surface [#22](https://github.com/AlaskaAirlines/auro-toast/issues/22) ([f14b932](https://github.com/AlaskaAirlines/auro-toast/commit/f14b932bd4c0fd97457eff0fe69e5f07f215c42c))
* **screenreader:** notify when toast is visible ([e8d2ee9](https://github.com/AlaskaAirlines/auro-toast/commit/e8d2ee96d6fbe6df1b19c56e0c771a2af86f7032))
