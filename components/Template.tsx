import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
    <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">
        <header>
            <a href="#">
                UBC DSCI Club
            </a>
        </header>

        <main className="mt-8">
            <h2 className="mt-6 text-gray-700 dark:text-gray-200">Hi Olivia,</h2>

            <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                Welcome to UBC DSCI Club! You’re already on your way to creating beautiful visual products.
                We’ve created a quick intro video to get you up and running as soon as possible. 
                If you have any questions, <a href="#" className="underline transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">please get in touch</a>.
            </p>

            <iframe className="w-full h-64 my-10 rounded-lg md:h-80" src="https://www.youtube.com/embed/L6Jwa7al8os" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Thanks, <br/>
                UBC DSCI Club Team
            </p>
        </main>
        

        <footer className="mt-8 text-center">
            <h3 className="font-medium text-gray-800 dark:text-white">Download the app</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Get the most of UBC DSCI Club by installing our new mobile app.</p>

            <p className="mt-6 text-gray-500 dark:text-gray-400">
                This email was sent to <a href="#" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank">contact@merakiui.com</a>. 
                If you'd rather not receive this kind of email, you can <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">unsubscribe</a> or <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">manage your email preferences</a>.
            </p>

        </footer>
    </section>
);

export default EmailTemplate;