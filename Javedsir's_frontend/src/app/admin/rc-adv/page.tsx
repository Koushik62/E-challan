// "use client";
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import { Bird, Copy, Download, Rabbit, Turtle } from "lucide-react"

// function RCChallan() {

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//     }
//     return (
//         <>
//             <h1 className="text-lg font-semibold md:text-2xl">RC Challan API</h1>
//             <main className="grid flex-1 gap-4 overflow-auto p-4 pt-0 md:grid-cols-2 lg:grid-cols-3">
//                 <div className="relative hidden flex-col items-start gap-8 md:flex">
//                     <form onSubmit={handleSubmit} className="grid w-full items-start gap-6">
//                         <fieldset className="grid gap-6 rounded-lg border p-4">
//                             <legend className="-ml-1 px-1 text-sm font-medium">
//                                 Input
//                             </legend>
//                             <div className="grid gap-3">
//                                 <Label htmlFor="model">Enter RC Number Here</Label>
//                                 <Input type="text" placeholder="EG. KA53HC8324" />
//                             </div>
//                             <div className="grid gap-3">
//                                 <Label htmlFor="temperature">Enter Chasis Number Here</Label>
//                                 <Input type="text" placeholder="Eg. 00364" />
//                             </div>
//                             <div className="flex justify-between">
//                                 <Button type="submit">
//                                     Run API
//                                 </Button>
//                                 <Button variant="outline">
//                                     Sample
//                                 </Button>
//                             </div>
//                         </fieldset>
//                     </form>
//                 </div>

//                 <div className="relative flex h-full min-h-[50vh] flex-col lg:col-span-2">
//                     <fieldset className="grid gap-6 rounded-lg border p-4">
//                         <legend className="-ml-1 px-1 text-sm font-medium">
//                             Output
//                         </legend>
//                         <Tabs defaultValue="account">
//                             <TabsList className="grid w-full grid-cols-2">
//                                 <TabsTrigger value="account">Tabular</TabsTrigger>
//                                 <TabsTrigger value="password">JSON</TabsTrigger>
//                             </TabsList>
//                             <div className="flex justify-end mt-2">
//                         <Badge variant="destructive" className="">
//                             Status: Pending
//                         </Badge>
//                     </div>
//                             <TabsContent value="account">
//                                 <Card>
//                                     <CardContent className="space-y-2 min-h-[300px]">
                                        
//                                     </CardContent>
//                                 </Card>
//                             </TabsContent>
//                             <TabsContent value="password">
//                                 <Card>
//                                     <CardContent className="space-y-2 min-h-[300px]">
                                        
//                                     </CardContent>
//                                 </Card>
//                             </TabsContent>
//                         </Tabs>
//                         <div className="flex gap-3">
//                             <Button>
//                                 <Copy className="mr-2 h-4 w-4" /> Copy JSON
//                             </Button>
//                             <Button variant="outline">
//                                 <Download className="mr-2 h-4 w-4" /> Download
//                             </Button>
//                         </div>
//                     </fieldset>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default RCChallan
"use client";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Bird, Copy, Download, Rabbit, Turtle } from "lucide-react"
import React, { useState } from 'react';
import axios from 'axios';

function RCChallan() {
    const [rcNumber, setRcNumber] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [outputData, setOutputData] = useState(null);
    const [status, setStatus] = useState('Pending');
    const [disposedData, setDisposedData] = useState([]);

    

const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('Loading...');  // Update status to Loading while fetching 

    const options = {
        method: 'POST',
        url: 'https://rto-vehicle-information-india.p.rapidapi.com/getVehicleInfo',
        headers: {
            'Content-type': 'application/json',
            'X-RapidAPI-Key': '742c463415msh55159cb981c077ep151d70jsnccb39958e318',
            'X-RapidAPI-Host': 'rto-vehicle-information-india.p.rapidapi.com'
        },
        data: {
            vehicle_no: `${rcNumber}`,
            consent: 'Y',
            consent_text: 'I hereby give my consent for Eccentric Labs API to fetch my information'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.data);
        setOutputData(response.data.data);

        const disposedData = response.data.data;
        console.log(disposedData);
        // Set the Disposed_data to state
        setDisposedData(disposedData);
        setStatus('Completed');
    } catch (error) {
        console.error('Error fetching data: ', error);
        setStatus('Failed');
    }
};


    return (
        <>
            <h1 className="text-lg font-semibold md:text-2xl">RC ADV API</h1>
            <main className="grid flex-1 gap-4 overflow-auto p-4 pt-0 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative hidden flex-col items-start gap-8 md:flex">
                    <form onSubmit={handleSubmit} className="grid w-full items-start gap-6">
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">Input</legend>
                            <div className="grid gap-3">
                                <Label htmlFor="model">Enter RC Number Here</Label>
                                <Input type="text" placeholder="EG. KA53HC8324" value={rcNumber} onChange={(e) => setRcNumber(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="temperature">Enter Chasis Number Here</Label>
                                <Input type="text" placeholder="Eg. 00364" value={chassisNumber} onChange={(e) => setChassisNumber(e.target.value)} />
                            </div>
                            <div className="flex justify-between">
                                <Button type="submit">Run API</Button>
                                <Button variant="outline">Sample</Button>
                            </div>
                        </fieldset>
                    </form>
                </div>

                <div className="relative flex h-full min-h-[50vh] flex-col lg:col-span-2">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <legend className="-ml-1 px-1 text-sm font-medium">Output</legend>
                        <Tabs defaultValue="account">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Tabular</TabsTrigger>
                                <TabsTrigger value="password">JSON</TabsTrigger>
                            </TabsList>
                            <div className="flex justify-end mt-2">
                                <Badge variant={status === "complete" ? "null" : "destructive"}>
                                    Status: {status}
                                </Badge>
                            </div>



                            <TabsContent value="account">
                                <Card>
                                <CardContent className="space-y-2 w-[550px] h-[300px] overflow-x-auto overflow-y-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Field
                                                </th>
                                                <th scope="col" className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Value
                                                </th>
                                            </tr>
                                        </thead>
                                        {status === 'Loading...' && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
                                            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
                                            </div>
                                        )}
                                        
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        
                                            {status === 'Completed'  ? (
                                                <>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Registration Authority</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.registration_authority}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Registration No</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.registration_no}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Registration Date</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.registration_date}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Chassis No</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.chassis_no}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Engine No</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.engine_no}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Owner Name</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.owner_name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vehicle Class</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.vehicle_class}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fuel Type</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.fuel_type}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maker Model</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.maker_model}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fitness Upto</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.fitness_upto}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Insurance Upto</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.insurance_upto}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fuel Norms</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.fuel_norms}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Road Tax Paid Upto</td>
                                                        <td className="w-1/2 px-6 py-4 whitespace-nowrap text-sm text-gray-500">{disposedData.road_tax_paid_upto}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" className="py-5 bg-gray-100"></td>
                                                    </tr>
                                                    </> 
                                                    
                                                ) : (
                                                <tr>
                                                    <td colSpan="2" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Loading...</td>
                                                </tr>
                                                )}
                                        </tbody>
                                    </table>
                                </CardContent>


                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardContent className="space-y-1 w-[550px]  h-[300px] overflow-x-auto overflow-y-auto scrollbar-w-[10px] scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 ">
                                        {/* Render JSON data here */}
                                        <pre className="text-sm p-2">{JSON.stringify(outputData, null, 2)}</pre>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                        <div className="flex gap-3">
                            <Button onClick={() => navigator.clipboard.writeText(JSON.stringify(outputData))}>
                                <Copy className="mr-2 h-4 w-4" /> Copy JSON
                            </Button>
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" /> Download
                            </Button>
                        </div>
                    </fieldset>
                </div>
            </main>
        </>
    );
}

export default RCChallan;




