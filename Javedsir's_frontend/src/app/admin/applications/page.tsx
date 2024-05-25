
"use client"
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { useState , useEffect } from "react";
import axios from "axios";
export default function Applications() {
  const [rcAdvTask, setRcAdvtask] = useState(0);
  const [rcChallanTask,setRcChallanTask] = useState(0);
    useEffect(() => {
        // Fetch user's credis when the component mounts
        
        fetchRcadvtask();
        fetchchallantask();
      }, []);

      const fetchchallantask = () => {
        const token = localStorage.getItem('auth-token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
    
        axios.get('http://localhost:4000/Rcchallantask', config)
          .then(response => {
            const { Rcchallantask} = response.data;
            setRcChallanTask(Rcchallantask);
          })
          .catch(error => {
            console.error('Error fetching user credits:', error);
          });
      };

      const fetchRcadvtask = () => {
        const token = localStorage.getItem('auth-token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
    
        axios.get('http://localhost:4000/Rcadvtask', config)
          .then(response => {
            const { Rcadvtask } = response.data;
            setRcAdvtask(Rcadvtask);
          })
          .catch(error => {
            console.error('Error fetching user credits:', error);
          });
      };
    return (
        <>
            <div className="flex items-center mb-4">
                <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>
            </div>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-sm leading-4 text-gray-600 tracking-wider">Service</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-sm leading-4 text-gray-600 tracking-wider">Rate</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-sm leading-4 text-gray-600 tracking-wider">Test Task Completed</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-left text-sm leading-4 text-gray-600 tracking-wider">Test Credits Consumed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border-b border-gray-200">RC Challan</td>
                        <td className="px-4 py-2 border-b border-gray-200">3</td>
                        <td className="px-4 py-2 border-b border-gray-200">{rcChallanTask}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{rcChallanTask*3}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border-b border-gray-200">RC ADV</td>
                        <td className="px-4 py-2 border-b border-gray-200">8</td>
                        <td className="px-4 py-2 border-b border-gray-200">{rcAdvTask}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{rcAdvTask*8}</td>
                    </tr>
                   
                </tbody>
            </table>

            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm mt-8">
                <div className="flex flex-col items-center gap-1 text-center p-4">
                    <h3 className="text-2xl font-bold tracking-tight">
                        You have no applications
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        You can create new application by clicking new button.
                    </p>
                    <Link href="/admin/applications/new">
                        <Button className="mt-4"><CirclePlus className="h-4 w-4 mr-2" />New Application</Button>
                    </Link>
                </div>
            </div> 
        </>
    )
}
