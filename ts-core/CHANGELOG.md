# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.18.0](https://github.com/differentialhq/differential/compare/v3.17.0...v3.18.0) (2024-03-29)

### Bug Fixes

- Cache auth results in-memory ([#199](https://github.com/differentialhq/differential/issues/199)) ([504fd0e](https://github.com/differentialhq/differential/commit/504fd0e0d6e14583d84f0bc32a4b38bbbcd724c0))

# [3.17.0](https://github.com/differentialhq/differential/compare/v3.16.0...v3.17.0) (2024-03-28)

### Features

- Call configuration and docs ([#192](https://github.com/differentialhq/differential/issues/192)) ([f1d405a](https://github.com/differentialhq/differential/commit/f1d405a6f5614343816d1577f2ebbf56577a41ed))
- Retry config via call config ([#191](https://github.com/differentialhq/differential/issues/191)) ([b69f603](https://github.com/differentialhq/differential/commit/b69f6033a780d8bce6f00fb124ac841114ee7fdd))

# [3.16.0](https://github.com/differentialhq/differential/compare/v3.15.0...v3.16.0) (2024-03-24)

### Bug Fixes

- Fix polling cycle race condition ([#181](https://github.com/differentialhq/differential/issues/181)) ([e51bc6f](https://github.com/differentialhq/differential/commit/e51bc6fcefaa2f2a3fabfb5e789176fcee4926bb))

### Features

- Add FORCE_POLL_DELAY to ResultsPoller ([#177](https://github.com/differentialhq/differential/issues/177)) ([9bf1407](https://github.com/differentialhq/differential/commit/9bf14072bd41d06a52b16f225188f9b6f7cd7858))

# [3.15.0](https://github.com/differentialhq/differential/compare/v3.14.0...v3.15.0) (2024-03-23)

### Bug Fixes

- Documentation updates based on feedback ([#166](https://github.com/differentialhq/differential/issues/166)) ([9553c42](https://github.com/differentialhq/differential/commit/9553c424049324f61da26b457ce973a1c81fafe5))
- Minor fixes to failure modes and error handling docs ([1376bf6](https://github.com/differentialhq/differential/commit/1376bf615ae160eac95c21d5faeb48e6958c4e7c))
- Resolve test warnings ([#176](https://github.com/differentialhq/differential/issues/176)) ([e6c4d66](https://github.com/differentialhq/differential/commit/e6c4d66957bcbade2b064ae9ab9b4af389c97c8f))

### Features

- Inject API secret into deployments ([#156](https://github.com/differentialhq/differential/issues/156)) ([6478816](https://github.com/differentialhq/differential/commit/64788163d705e8e65214a1f392dbba81feec4173))

# [3.14.0](https://github.com/differentialhq/differential/compare/v3.13.1...v3.14.0) (2024-02-29)

### Bug Fixes

- Auto-retry jobs when machine stalls ([#139](https://github.com/differentialhq/differential/issues/139)) ([7ceb438](https://github.com/differentialhq/differential/commit/7ceb438ec686d11709a027c6117c61c6380c56fb))

## [3.13.1](https://github.com/differentialhq/differential/compare/v3.13.0...v3.13.1) (2024-02-15)

### Bug Fixes

- Polling with more efficiency ([#131](https://github.com/differentialhq/differential/issues/131)) ([f295aa7](https://github.com/differentialhq/differential/commit/f295aa7f1dd636b379f12cc3a30cfe4886b053cd))

## [3.12.2](https://github.com/differentialhq/differential/compare/v3.12.1...v3.12.2) (2024-02-12)

### Bug Fixes

- Cleanup resource probes on PollingAgent abort ([#125](https://github.com/differentialhq/differential/issues/125)) ([bfc23ae](https://github.com/differentialhq/differential/commit/bfc23aedd9ad0f013f379771535aa587def8d8fb)), closes [/github.com/differentialhq/differential/blob/c43e67579b8a129faf9381a75a05fd50182fb050/ts-core/src/events.ts#L29](https://github.com//github.com/differentialhq/differential/blob/c43e67579b8a129faf9381a75a05fd50182fb050/ts-core/src/events.ts/issues/L29)

## [3.12.1](https://github.com/differentialhq/differential/compare/v3.12.0...v3.12.1) (2024-02-12)

### Bug Fixes

- Add maxIdleCycles ([#113](https://github.com/differentialhq/differential/issues/113)) ([266fca0](https://github.com/differentialhq/differential/commit/266fca0fa34d7c9c9d0ce595b457191569f880d5))

# [3.12.0](https://github.com/differentialhq/differential/compare/v3.11.0...v3.12.0) (2024-02-11)

### Features

- Attach deployment to machine and events ([#124](https://github.com/differentialhq/differential/issues/124)) ([f9c0ce5](https://github.com/differentialhq/differential/commit/f9c0ce50e66fb50caf911c24ce5ade61d16bac8e))

# [3.11.0](https://github.com/differentialhq/differential/compare/v3.10.1...v3.11.0) (2024-02-10)

**Note:** Version bump only for package @differentialhq/core

## [3.10.1](https://github.com/differentialhq/differential/compare/v3.10.0...v3.10.1) (2024-01-31)

### Bug Fixes

- Throttle polling to recover from server failures ([#98](https://github.com/differentialhq/differential/issues/98)) ([865de2a](https://github.com/differentialhq/differential/commit/865de2a6135ab35b58266cb312dea31e45642436))

# [3.10.0](https://github.com/differentialhq/differential/compare/v3.9.0...v3.10.0) (2024-01-31)

### Bug Fixes

- A more readable e2e caching test ([#94](https://github.com/differentialhq/differential/issues/94)) ([ceef93f](https://github.com/differentialhq/differential/commit/ceef93f1050e63b573087881bf51f8b088124577))
- Fix serializing unregistered function errors ([#96](https://github.com/differentialhq/differential/issues/96)) ([f844184](https://github.com/differentialhq/differential/commit/f844184d4fe71e25ddb7f23b90caac0063720b54))

### Features

- Adding the retryable function decorator ([#91](https://github.com/differentialhq/differential/issues/91)) ([5992e1c](https://github.com/differentialhq/differential/commit/5992e1cb2bcb45785db792418b9e1ffdc0871edf))

# [3.9.0](https://github.com/differentialhq/differential/compare/v3.8.0...v3.9.0) (2024-01-25)

### Bug Fixes

- Expose `cached` in the SDK and fix control-plane to respect the decorator ([#86](https://github.com/differentialhq/differential/issues/86)) ([07897cb](https://github.com/differentialhq/differential/commit/07897cb1acbc995a1eff8510ccd9855bc2ec85ab))
- Fix caching test timeouts ([#93](https://github.com/differentialhq/differential/issues/93)) ([1e39e9a](https://github.com/differentialhq/differential/commit/1e39e9a37ac05249917d027e900f2033d0db20c1))

### Features

- Add caching ([#81](https://github.com/differentialhq/differential/issues/81)) ([c654700](https://github.com/differentialhq/differential/commit/c6547005cb1ac59fef764f0a89e1b1c7fc390dd0))
- Implementing retries for job stalling ([#90](https://github.com/differentialhq/differential/issues/90)) ([c201765](https://github.com/differentialhq/differential/commit/c201765482e5e2d2394bd53406a5628fa37382ef))

# [3.8.0](https://github.com/differentialhq/differential/compare/v3.7.1...v3.8.0) (2024-01-18)

### Bug Fixes

- Fix job poll timer initialization ([#82](https://github.com/differentialhq/differential/issues/82)) ([de383d6](https://github.com/differentialhq/differential/commit/de383d63a5f62654975cade8476fa7f07aaa9ff8))
- Update cluster definition ([449ba0a](https://github.com/differentialhq/differential/commit/449ba0aca92a593d28ef54537fb6acb88cd90805))

### Features

- Adding cluster activity ([#73](https://github.com/differentialhq/differential/issues/73)) ([f3b9545](https://github.com/differentialhq/differential/commit/f3b95457a2dae93e653516d2c3dc74202a2a4f84))
- Publish client metrics to control plane ([#69](https://github.com/differentialhq/differential/issues/69)) ([b7b1e74](https://github.com/differentialhq/differential/commit/b7b1e74cdaaaa54de622591dafa0273bcc994f26)), closes [#68](https://github.com/differentialhq/differential/issues/68)

## [3.7.1](https://github.com/differentialhq/differential/compare/v3.7.0...v3.7.1) (2024-01-13)

### Bug Fixes

- Improve polling and shutdown stability ([#62](https://github.com/differentialhq/differential/issues/62)) ([db017d6](https://github.com/differentialhq/differential/commit/db017d677b5133496647bcefc471a06fac2fd447))
- Reduce open handles ([#57](https://github.com/differentialhq/differential/issues/57)) ([0dbf051](https://github.com/differentialhq/differential/commit/0dbf051d689b285b80229ce0053c5b8f4452d63b))
- Remove the deprecated services object ([07206ac](https://github.com/differentialhq/differential/commit/07206ace86971d4873c3df90f76ac08b23b333a2))

# [3.7.0](https://github.com/differentialhq/differential/compare/v3.6.1...v3.7.0) (2024-01-11)

### Bug Fixes

- Remove incorrect file import ([1b81f62](https://github.com/differentialhq/differential/commit/1b81f62fb6394ed111dd7e058b97fbc63e87e770))
- Send service definitions to control-plane ([#48](https://github.com/differentialhq/differential/issues/48)) ([3a17ee2](https://github.com/differentialhq/differential/commit/3a17ee2627f8964bee441372484070b62b0ace82))
- Test fixes ([#54](https://github.com/differentialhq/differential/issues/54)) ([1249b4f](https://github.com/differentialhq/differential/commit/1249b4f59a75019d057e0b58a25b7b128e8edbd7))
- Update contract with getFunctionMetrics ([ca663d8](https://github.com/differentialhq/differential/commit/ca663d8a057c67e6dee929e446c667176dbe6730))

### Features

- Allow polling wait time configuration ([#56](https://github.com/differentialhq/differential/issues/56)) ([689238b](https://github.com/differentialhq/differential/commit/689238b650e92ac67d375c2a7ff3c859939f6388))
- Register service definitions ([#55](https://github.com/differentialhq/differential/issues/55)) ([36d8b3f](https://github.com/differentialhq/differential/commit/36d8b3f45e43d79b96cf378b1b575b5696c8d47b))

## [3.6.1](https://github.com/differentialhq/differential/compare/v3.6.0...v3.6.1) (2024-01-07)

### Bug Fixes

- Fix documentation on idempotency ([#45](https://github.com/differentialhq/differential/issues/45)) ([f735951](https://github.com/differentialhq/differential/commit/f735951c2bc97259e51122a3b328df205cced496))

# [3.6.0](https://github.com/differentialhq/differential/compare/v3.5.0...v3.6.0) (2024-01-07)

### Features

- Add `idempotent` utility ([#44](https://github.com/differentialhq/differential/issues/44)) ([8cc3b54](https://github.com/differentialhq/differential/commit/8cc3b54dd93f50e26306d9e1fd23a16804318498))

# [3.5.0](https://github.com/differentialhq/differential/compare/v3.4.6...v3.5.0) (2024-01-06)

### Bug Fixes

- Add updated contract to sdk ([4794d59](https://github.com/differentialhq/differential/commit/4794d59f6ecc3176da8244742e54e9be0339e488))

### Features

- Allow jobs to be called idempotently ([#42](https://github.com/differentialhq/differential/issues/42)) ([118e4b5](https://github.com/differentialhq/differential/commit/118e4b5e7a3141664c9b67e62856e7ba285f4937))

## [3.4.6](https://github.com/differentialhq/differential/compare/v3.4.5...v3.4.6) (2024-01-01)

**Note:** Version bump only for package @differentialhq/core

## [3.4.5](https://github.com/differentialhq/differential/compare/v3.4.4...v3.4.5) (2024-01-01)

**Note:** Version bump only for package @differentialhq/core

## [3.4.4](https://github.com/differentialhq/differential/compare/v3.4.3...v3.4.4) (2024-01-01)

**Note:** Version bump only for package @differentialhq/core

## [3.4.3](https://github.com/differentialhq/differential/compare/v3.4.2...v3.4.3) (2024-01-01)

**Note:** Version bump only for package @differentialhq/core

## [3.4.2](https://github.com/differentialhq/differential/compare/v3.4.1...v3.4.2) (2024-01-01)

**Note:** Version bump only for package @differentialhq/core

## [3.4.1](https://github.com/differentialhq/differential/compare/v3.4.0...v3.4.1) (2023-12-31)

### Bug Fixes

- Fix formatting in the docs ([5db68f8](https://github.com/differentialhq/differential/commit/5db68f8691c43430aa0302eadae76e7ddf14f07a))

# [3.4.0](https://github.com/differentialhq/differential/compare/v3.3.1...v3.4.0) (2023-12-31)

### Features

- End to end encryption for payloads ([#36](https://github.com/differentialhq/differential/issues/36)) ([834651d](https://github.com/differentialhq/differential/commit/834651dc3170aff3c704d5518344c8ec98e6e3d3))

## [3.3.1](https://github.com/differentialhq/differential/compare/v3.3.0...v3.3.1) (2023-12-30)

### Bug Fixes

- Add function execution time param ([ab67932](https://github.com/differentialhq/differential/commit/ab679328b06ac3a9761e2b76d115525719ff7615))

# [3.3.0](https://github.com/differentialhq/differential/compare/v3.2.3...v3.3.0) (2023-12-30)

### Features

- Record function execution time ([#29](https://github.com/differentialhq/differential/issues/29)) ([6889495](https://github.com/differentialhq/differential/commit/68894954268babe6e826c6e0c507e17e066a6140)), closes [#28](https://github.com/differentialhq/differential/issues/28)

## [3.2.3](https://github.com/differentialhq/differential/compare/v3.2.2...v3.2.3) (2023-12-29)

### Bug Fixes

- Build typescript sdk before publishing ([410a22c](https://github.com/differentialhq/differential/commit/410a22c4678785e1649051e5849cc76d12c63db9))
- Shard jobs by the service name ([#26](https://github.com/differentialhq/differential/issues/26)) ([c4defa5](https://github.com/differentialhq/differential/commit/c4defa5d63119cc16fb0a1e01a5e7148aa043327))

## [3.2.2](https://github.com/differentialhq/differential/compare/v3.2.1...v3.2.2) (2023-12-29)

**Note:** Version bump only for package @differentialhq/core

## [3.2.1](https://github.com/differentialhq/differential/compare/v3.2.0...v3.2.1) (2023-12-28)

### Bug Fixes

- Allow endpoint to the control-plane to be configured ([b9b5559](https://github.com/differentialhq/differential/commit/b9b5559b16b105ce2b7c77ba40e120f71d51566b))

# [3.2.0](https://github.com/differentialhq/differential/compare/v3.1.4...v3.2.0) (2023-12-28)

### Features

- Admin console v1 ([#15](https://github.com/differentialhq/differential/issues/15)) ([9ec8db9](https://github.com/differentialhq/differential/commit/9ec8db9122a8d1de4fa6ad7f3965ec09871652cc))

## [3.1.4](https://github.com/differentialhq/differential/compare/v3.1.3...v3.1.4) (2023-12-24)

**Note:** Version bump only for package @differentialhq/core

## [3.1.3](https://github.com/differentialhq/differential/compare/v3.1.2...v3.1.3) (2023-12-24)

**Note:** Version bump only for package @differentialhq/core

## [3.1.2](https://github.com/differentialhq/differential/compare/v3.1.1...v3.1.2) (2023-12-24)

### Bug Fixes

- Raise exception on unauthorised polling errors ([#7](https://github.com/differentialhq/differential/issues/7)) ([148eda7](https://github.com/differentialhq/differential/commit/148eda7aeda9bc7a44a9fa4e546d0ddc470fe2bf)), closes [#6](https://github.com/differentialhq/differential/issues/6)

## [3.1.1](https://github.com/differentialhq/differential/compare/v0.0.0...v3.1.1) (2023-12-24)

### Bug Fixes

- Allow parallel function executions upto concurrency limit ([e431ff3](https://github.com/differentialhq/differential/commit/e431ff3cd41bce61a460e2bc89858d526c25df85))
- Allow services to start idempotently ([bf1c307](https://github.com/differentialhq/differential/commit/bf1c3079f1e8c4be56f9953a42c20e829397d8e1))
- Deprecate unused modules ([27394f4](https://github.com/differentialhq/differential/commit/27394f46aa1b752568db4250d0f29205fc3c3d67))
- Enforce service name param ([#5](https://github.com/differentialhq/differential/issues/5)) ([b0aadd7](https://github.com/differentialhq/differential/commit/b0aadd7e43a6c65b40d250c227ec906d65ee2320))
- Fix types to be more strict on call and background ([ec29dd2](https://github.com/differentialhq/differential/commit/ec29dd2d75a3e9a1a950f17e914ba8300d925333))
- Remove obsolete dependency ([2c81915](https://github.com/differentialhq/differential/commit/2c81915383dcafeed14961207d9ffee4dff99c84))
- Remove obsolete fly and listenerconfigs ([9ba1719](https://github.com/differentialhq/differential/commit/9ba171922a0160f20b557bf5c85631c2a549a15a))

# [3.1.0](https://github.com/differentialHQ/differential/compare/v0.0.0...v3.1.0) (2023-12-24)

### Bug Fixes

- Allow parallel function executions upto concurrency limit ([e431ff3](https://github.com/differentialHQ/differential/commit/e431ff3cd41bce61a460e2bc89858d526c25df85))
- Allow services to start idempotently ([bf1c307](https://github.com/differentialHQ/differential/commit/bf1c3079f1e8c4be56f9953a42c20e829397d8e1))
- Deprecate unused modules ([27394f4](https://github.com/differentialHQ/differential/commit/27394f46aa1b752568db4250d0f29205fc3c3d67))
- Enforce service name param ([#5](https://github.com/differentialHQ/differential/issues/5)) ([b0aadd7](https://github.com/differentialHQ/differential/commit/b0aadd7e43a6c65b40d250c227ec906d65ee2320))
- Fix types to be more strict on call and background ([ec29dd2](https://github.com/differentialHQ/differential/commit/ec29dd2d75a3e9a1a950f17e914ba8300d925333))
- Remove obsolete dependency ([2c81915](https://github.com/differentialHQ/differential/commit/2c81915383dcafeed14961207d9ffee4dff99c84))
- Remove obsolete fly and listenerconfigs ([9ba1719](https://github.com/differentialHQ/differential/commit/9ba171922a0160f20b557bf5c85631c2a549a15a))
