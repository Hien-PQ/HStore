// import React, { useState } from "react";

// import { Area } from "recharts";

const sendMessage = () => {
    console.log("Message sent!");
    alert("Message sent!");
};

// const Area = () => {


//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState("");

//     const handleSend = () => {
//         if (input.trim() !== "") {
//             setMessages([...messages, input]);
//             setInput("");
//         }
//     };

//     return (
//         <div className="w-full max-w-md bg-white rounded shadow p-4">
//             <div className="h-48 overflow-y-auto border-b mb-2">
//                 {messages.map((msg, idx) => (
//                     <div key={idx} className="p-1 text-gray-800">{msg}</div>
//                 ))}
//             </div>
//             <div className="flex mt-2">
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={e => setInput(e.target.value)}
//                     placeholder="Type your message..."
//                     className="flex-1 p-2 border rounded-l"
//                 />
//                 <button
//                     onClick={handleSend}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
//                 >
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// }

const Notification = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1>HStore Chat Box Page</h1>
            <p>This is the HStore Chat Box page where you can interact with the AI.</p>
            <p>Feel free to ask any questions or start a conversation!</p>
            <input
                type="text"
                placeholder="Type your message here..."
                className="mt-4 p-2 border border-gray-300 rounded w-1/2"
            />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => { sendMessage() }}>
                Send
            </button>
            <p className="mt-4 text-gray-500">This is a simple AI chat box page.</p>
            {/* <div className="mt-4 text-sm text-gray-400 flex flex-row items-center">
                <Area /> is imported but not used.
            </div> */}
        </div>
    );
};

export default Notification;