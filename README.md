![LUSID_by_Finbourne](./resources/Finbourne_Logo_Teal.svg)

# LUSID<sup>®</sup> JavaScript SDK

A generated version of the SDK is included in the `sdk` folder based on the OpenAPI specification named `lusid.json` in the root folder.  The most up to date version of the OpenAPI specification can be downloaded from https://api.lusid.com/swagger/v0/swagger.json

The SDK can also be installed using `npm`:

```
$ npm install @finbourne/lusid-preview
```

# Generating the SDK
If you would prefer to generate the Javsscript SDK locally from the FINBOURNE OpenAPI specification, follow these steps:

- download the latest swagger.json file from https://api.lusid.com/swagger/index.html
- save it in this directory as lusid.json
- run `$ docker-compose up && docker-compose rm -f`
 
 ## Build Status

| branch | status |
| --- | --- |
| `master` |  [![Build and test main branch status](https://github.com/finbourne/lusid-sdk-js-preview/actions/workflows/build-and-test.yaml/badge.svg)](https://github.com/finbourne/lusid-sdk-js-preview/actions/workflows/build-and-test.yaml) [![Daily build status](https://github.com/finbourne/lusid-sdk-js-preview/actions/workflows/cron.yaml/badge.svg)](https://github.com/finbourne/lusid-sdk-js-preview/actions/workflows/build-and-test-branches.yaml)|
| `develop` | [![Development branch build and test status](https://github.com/finbourne/lusid-sdk-js-preview/actions/workflows/build-and-test-branches.yaml/badge.svg)](https://travis-ci.org/finbourne/lusid-sdk-js) |
