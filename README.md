# Getting Started with test-consumer-app

This project was created to test cunsumption of the `@segment/email-editors` package.  It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Testing the package build locally

To build and link the package locally, you can do the following:

1. Create the package

In the root directory of the [segmentio/content-editors](https://github.com/segmentio/content-editors) repo, run the following:

```
yarn editor-components:build
yarn ci:pack
```

2. Update the `package.json` in this repo to point to the packaged build

```
{
  ...
  "dependencies": {
    ...
    "@segment/email-editors": "file:[your-path-to-repo]/content-editors/packages/editor-components/email-editors.tgz",
    ...
  },
  ...
}
```

3. In the root directory of this repo, run
```
npm update @segment/email-editors
```

4. Start the project
```
npm start
```

5. In the browser, navigate to [http://localhost:3000/](http://localhost:3000/).
