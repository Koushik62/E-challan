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


function RCChallan() {
    const [rcNumber, setRcNumber] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [outputData, setOutputData] = useState(null);
    const [status, setStatus] = useState('Pending');
    const [disposedData, setDisposedData] = useState([]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStatus('Loading...');  // Update status to Loading while fetching
        try {
            const response = await fetch(`http://103.211.219.91/vehiclenumber/HR55AA6786`, {
                method: 'GET'
                
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            setOutputData(data);
            
            const disposedData = data.response[0].response.data.Disposed_data;

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
            <h1 className="text-lg font-semibold md:text-2xl">Pay Challan</h1>
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
                                <Button type="submit">Submit</Button>
                                
                            </div>
                        </fieldset>
                    </form>
                </div>

                <div className="relative flex h-full min-h-[50vh] flex-col lg:col-span-2">
                    <fieldset className="grid gap-6 rounded-lg border p-4">
                        <legend className="-ml-1 px-1 text-sm font-medium">Output</legend>
                        
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



