import React, { Suspense } from 'react';
import UserProfile from "./Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from './api/Spinner';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <UserProfile />
      </Suspense>
    </div>
  );
}

export default App;
