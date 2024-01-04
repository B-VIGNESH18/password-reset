// App.js
import React from 'react';
import EnterEmailForm from './components/EnterEmailForm';
import ResetPasswordPage from './components/ResetPasswordPage';

const App = () => {
    // Main app logic
    return (
        // JSX for the main app structure
        <div>
            {/* Conditionally render components based on user flow */}
            <EnterEmailForm />
            <ResetPasswordPage />
        </div>
    );
};

export default App;
