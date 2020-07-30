# Today Tasks

This app is built to make users focus on their daily tasks without the clutter of tasks that should have been done yesterday or the complete tasks.

The app is divded into 3 views:

-   Today Tasks (Default view): This is where the app launches and this is where you need to focus your energy. It will show only the tasks added or completed today, after midnight the complete tasks will be transferred to the Complete Tasks view, and the uncomplete tasks will be transferred to Previous Tasks view.
-   Incomplete Tasks: The uncomplete tasks from previous days will be here for you to review or transfer to today's tasks.
-   Complete Tasks: The completed tasks from previous days will be here for you to get an overview of your accomplishments.

### Utilized

-   [x] React
-   [x] Redux
-   [x] Netlify
-   [x] Local storage
-   [ ] Firebase (For synchronizing tasks between multiple devices)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
