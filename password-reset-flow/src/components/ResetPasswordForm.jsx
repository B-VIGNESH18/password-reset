// ResetPasswordForm.jsx
import React from 'react';

const ResetPasswordForm = () => {
    // Logic for resetting password
    return (
        // JSX for resetting password form
        <form>
            {/* New password input */}
            <input type="password" placeholder="Enter new password" />
            {/* Confirm password input */}
            <input type="password" placeholder="Confirm new password" />
            {/* Submit button */}
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPasswordForm;
