const Footer = () => {
    return (
        <footer className="mt-8 border-t border-gray-700 bg-gray-800/50 text-gray-300">
            <div className="mx-auto max-w-screen-xl px-3 py-2.5">
                <p className="text-center text-sm md:text-base">
                    Made with ❤️ by{' '}
                    <a target="_blank" className="text-primary-500 hover:underline" href="https://github.com/Saee2803">
                        @Saee2803
                    </a>
                    . Source is on{' '}
                    <a
                        target="_blank"
                        className="text-primary-500 hover:underline"
                        href="https://github.com/Saee2803/Star_WeatherPerformance"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
