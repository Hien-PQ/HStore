import {
    //  LineChart, 
    //  Line, 
    XAxis, YAxis, CartesianGrid,
    //  Legend, 
    Tooltip, Area, AreaChart,

} from 'recharts';
const data = [
    { name: 'March', User: 100, Viewer: 240, amt: 2400 },
    { name: 'April', User: 300, Viewer: 139, amt: 2210 },
    { name: 'May', User: 200, Viewer: 480, amt: 2290 },
    { name: 'June', User: 278, Viewer: 390, amt: 2000 },
    { name: 'July', User: 189, Viewer: 580, amt: 2181 },
    { name: 'August', User: 239, Viewer: 380, amt: 2500 },
    { name: 'September', User: 349, Viewer: 430, amt: 2100 },
];

const About = () => {
    return (

        <div className="flex flex-col justify-center items-center text-2xl font-bold">
            <h1 className="mb-4">Data User Statistics</h1>
            <div className="flex items-center justify-center py-4 text-2xl font-bold">
                <AreaChart width={1230} height={650} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="User" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="Viewer" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    )
}

export default About