console.log("Hello, Login Page Loaded with TypeScript!");

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Specify the type as HTMLFormElement
    const loginForm = document.querySelector('form') as HTMLFormElement | null;

    if (loginForm) {
        loginForm.addEventListener('submit', (e: Event) => {
            e.preventDefault(); // Prevent actual form submission

            // Use type assertions for specific input elements
            const emailInput = document.getElementById('email') as HTMLInputElement;
            const passwordInput = document.getElementById('password') as HTMLInputElement;

            const email = emailInput.value;
            const password = passwordInput.value;

            console.log("Attempting login with:", { email, password });
            
            // Add a loading effect to the button
            const btn = document.querySelector('.submit-btn') as HTMLButtonElement;
            const originalText = btn.textContent || 'Sign In';
            
            btn.textContent = 'Processing...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert(`Success! Logged in as: ${email}`);
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }
});
