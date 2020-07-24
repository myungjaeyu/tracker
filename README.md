# tracker

## Usage

```bash
$ git clone https://github.com/myungjaeyu/tracker.git && cd tracker

$ yarn install

$ yarn boot

$ yarn start

# client
# http://localhost:3000

# api proxy
# http://localhost:3000/api/tracker/trackinginfo?code=04&invoice=363301363800

# api
# http://localhost:3001/api/tracker/trackinginfo?code=04&invoice=363301363800

# storybook
# http://localhost:9009

$ yarn build

$ yarn serve
# http://localhost:8080
# http://localhost:8080/api/tracker/trackinginfo?code=04&invoice=363301363800

$ yarn serve-ui
# http://localhost:9009
```

## Packages

- [packages/api](https://github.com/myungjaeyu/tracker/tree/master/packages/api/src)
- [packages/client](https://github.com/myungjaeyu/tracker/tree/master/packages/client/src)
- [packages/design-system](https://github.com/myungjaeyu/tracker/tree/master/packages/design-system/src)

#### Directory Structure
```bash
tracker/
│
├── storybook-static/ # (design-system)
│
├── dist/ # (api, client)
│
├── packages/
│   ├── api/
│   ├── client/
│   └── design-system/
│
└── package.json
```

### Docker Container

```bash
$ yarn build

$ docker-compose build && docker-compose up

# http://localhost:5000
```

## License