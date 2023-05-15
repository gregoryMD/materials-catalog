# Materials Catalog Component Demo

This is a materials management component implement as a full-stack web application. It allows users to create and edit a catalog of materials, such as sand, gravel, and dirt, for construction projects. At a high level, this feature:

- Displays the current list of materials
- Allows the user to create, edit, and delete materials
- Selects a material's color through a color picker
- Calculates and displays the total value of materials listed

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The React/Typescript UI component makes calls to a REST API backend.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Discussion

- I chose Next.js as a framework for its support of full-stack web applications in one codebase with folder-based routing. Next also ships with React, ESLint and Tailwind CSS pre-installed.
- I used MongoDB as the database with Mongoose as an ODM.
- Updated or new item data is sent to the backend on blur, I feel this keeps the number of requests within reason.
- Should new items be added to the list only when a new name is entered or when any detail is updated? Absent any clarification I chose to have all inputs send the request on blur. The add button creates a new blank item in the application state that is only added to the DB once an input field is edited.

### Trade-offs

- Validations for the inputs have not been implemented yet, as a result it is possible to add an 'empty' new item to the list by clicking into and out of an input without entering anything.
- Currently the styling is approximate as I consider functionality and test coverage to have more importance and I wanted to keep development time on this project close to the 2-3 hours specififed in the prompt.
- Implementing a database took slightly longer than using a simple in-memory store would have, but this was necessary due to Next's file-based routing. The time saved elsewhere by using Next & create-next-app likely offset the time that would have been saved by skipping the database implementation.
- Test coverage is minimal, in the limited time available I tried to strike a balance between full functionality, basic styling and some tests to demonstrate competency.
- Other details that need to be completed in subsequent iterations: the color picker should include a text field, the date input is currently formatted as a string. These are items I intend to return to but did not have time to revisit within the time constraint.

### Roadmap

- Increase Test coverage
- Refine styling to exactly match mock-ups & improve responsiveness
- Validation for material details inputs
- Improve color picker and date inputs
