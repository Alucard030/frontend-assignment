# React Application

This is a React application built with Vite, designed with performance and modularity in mind. The application supports testing, test coverage reporting, and is deployed for easy access.

---

## 🛠 Installation, Setup, Testing, and Coverage

```bash
# Clone the repository
git clone <repository-url>
cd <repository-directory>

# Install dependencies
npm install

# Start the development server
npm start

# Run tests
npm run test

# Generate test coverage report
npx vitest --coverage

# Test coverage report:
---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   97.62 |    93.02 |   94.73 |   97.62 | 
 src                       |     100 |      100 |     100 |     100 | 
  App.jsx                  |     100 |      100 |     100 |     100 | 
 src/common                |     100 |      100 |     100 |     100 | 
  ErrorScreen.jsx          |     100 |      100 |     100 |     100 | 
  Loader.jsx               |     100 |      100 |     100 |     100 | 
 src/components/Pagination |   95.89 |    92.85 |     100 |   95.89 | 28-30
  index.jsx                |   95.89 |    92.85 |     100 |   95.89 | 28-30
 src/components/Table      |   98.16 |       90 |   85.71 |   98.16 | 
  TableBody.jsx            |     100 |      100 |     100 |     100 | 
  TableCaption.jsx         |     100 |      100 |     100 |     100 | 
  TableHead.jsx            |     100 |      100 |     100 |     100 | 
  TableRow.jsx             |     100 |      100 |     100 |     100 | 
  index.jsx                |   95.23 |    66.66 |   66.66 |   95.23 | 35-36
 src/constants             |     100 |      100 |     100 |     100 | 
  networkConstants.js      |     100 |      100 |     100 |     100 | 
 src/hooks                 |   93.33 |      100 |     100 |   93.33 | 
  useFetch.js              |   93.33 |      100 |     100 |   93.33 | 15-16
 src/utils.js              |     100 |    83.33 |     100 |     100 | 
  tableUtils.js            |     100 |    83.33 |     100 |     100 | 7
---------------------------|---------|----------|---------|---------|-------------------

# Deployed application
The application is live and accessible at:  
https://starlit-dusk-b07ce9.netlify.app
