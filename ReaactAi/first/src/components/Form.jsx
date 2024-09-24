// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [index, setIndex] = useState(0);
    const [error, setError] = useState(""); // State for error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Clear any previous error

        // Check if input is empty
        if (firstName.trim() === "") {
            setError("Input is mandatory. Please enter a valid query.");
            return;  // Stop the form submission
        }

        setIsLoading(true);
        setData([]);  // Clear previous data
        setMessage("");  // Clear previous message
        setIndex(0);  // Reset the index for new data flow

        try {
            const response = await fetch(`http://localhost:8084/ai/prompt?prompt=${encodeURIComponent(firstName)}`, {
                method: 'GET',
            });

            const text = await response.text();
            setData(text.split("\n"));  // Assume data is newline-separated for incremental display
        } catch (error) {
            console.log('Error fetching data:', error);
        }

        setIsLoading(false);
    };

    // Simulate displaying data incrementally
    useEffect(() => {
        if (data.length > 0 && index < data.length) {
            const timer = setTimeout(() => {
                setMessage(prev => prev + data[index] + "\n");
                setIndex(prev => prev + 1);
            }, 500); // Adjust the delay as needed

            return () => clearTimeout(timer);
        }
    }, [data, index]);

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        placeholder="Enter Your Query"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} 
                        className="border p-2 rounded w-full"
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Get Response
                </button>
            </form>

            {/* Display error message if input is empty */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="border p-4 rounded min-h-[200px] bg-gray-100 overflow-auto">
                {isLoading ? <p>Loading...</p> : 
                    <pre className="whitespace-pre-wrap text-gray-800">{message}</pre>
                }
            </div>
        </div>
    );
}

export default Form;
