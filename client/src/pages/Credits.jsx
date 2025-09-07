import React from 'react';

const Credits = () => {
    return (
        <div className="flex-1 bg-white dark:bg-gray-900 p-4 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold dark:text-white mb-4">Credits</h1>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 min-h-[60vh]">
                    <p className="text-gray-600 dark:text-gray-300">
                        Credits content will be displayed here.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Credits;