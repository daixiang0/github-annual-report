# Introduction

GitHub annual report uses OAuth with GitHub API to get user's repo and commit info, totally safe.

**Please try more times if inaccurate**

## Comment

- **Open repo，only count public repos，no private data issue**
- **only analyze master branch since network traffic**
- consider a request over 30s as failed

## Majar dependences

- [create-react-app](https://github.com/facebook/create-react-app)
- [ant-design](https://github.com/ant-design/ant-design)
- [rest.js](https://github.com/octokit/rest.js)
- [axios](https://github.com/axios/axios)
- [react-id-swiper](https://github.com/kidjp85/react-id-swiper)
- [react-animations](https://github.com/FormidableLabs/react-animations)
- [typed.js](https://github.com/mattboldt/typed.js)

## Quick start

This app needs to use Github OAuth API, so update client id and client secret with your own data in `src/utils/constant.js`.

```bash
$ npm install -g yarn
$ yarn start
```
