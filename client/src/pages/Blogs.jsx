
import logo from '../assets/logo.png';
import Feature from './Feature';

const features = [
    {
        title: 'Built with React',
        description: 'This project is built using React and Tailwind CSS, showcasing modern web development practices.',
    },
    {
        title: 'Responsive Design',
        description: 'The application is designed to be fully responsive, ensuring a great user experience on all devices.',
    },
    {
        title: 'Tailwind CSS',
        description: 'Utilizes Tailwind CSS for styling, allowing for rapid UI development with utility-first classes.',
    },
    {
        title: 'Easy to Customize',
        description: 'The project structure is simple and easy to customize, making it suitable for various applications.',
    },
    {
        title: 'Open Source',
        description: 'This project is open source and available for contributions and improvements.',
    },
    {
        title: 'Cross-Browser Compatibility',
        description: 'The application is tested and works seamlessly across all modern browsers.',
    }
];

const Blog = () => (
    <div className='flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12'>
        <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
            <div className='to-light-blue-500 absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl' />
            <div className='relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20'>
                <div className='mx-auto max-w-md'>
                    <div>
                        <a href='https://digitalinspiration.com/'>
                            <img src={logo} className='h-7 sm:h-8' alt='Logo' />
                        </a>
                    </div>
                    <div className='divide-y divide-gray-200'>
                        <div className='space-y-5 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
                            <h1 className='text-lg font-semibold text-cyan-600'>
                                About This Project
                            </h1>
                            <p>
                                This project is a simple React application that demonstrates the use of Tailwind CSS for styling and layout.
                            </p>
                            <p>
                                It includes a set of features that showcase how to build a modern web application with React and Tailwind CSS.
                            </p>
                            <div className='list-disc space-y-2'>
                                {features.map((feature) => (
                                    <Feature
                                        key={feature.title}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                ))}
                            </div>
                            <p className='text-sm font-medium text-cyan-500'>
                                Built with Tailwind CSS 4 and React 19.
                            </p>
                        </div>
                        <div className='pt-6 text-base leading-6 font-semibold'>
                            Follow us on{' '}
                            <a
                                href='https://facebook.com/hien.phanking'
                                className='text-cyan-600 hover:text-cyan-500'
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Blog;
