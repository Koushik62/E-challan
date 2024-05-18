import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Applications() {
    return (
        <>
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>
            </div>
            <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Service</th>
      <th scope="col">Rate</th>
      <th scope="col">Test Task Completed</th>
      <th scope="col">Test Credits Consumed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RC Basic Verification</td>
      <td>3</td>
      <td>7</td>
      <td>21</td>
    </tr>
    <tr>
      <td>RC Card OCR</td>
      <td>3</td>
      <td>1</td>
      <td>3</td>
    </tr>
    <tr>
      <td>RC Advanced Verification</td>
      <td>8</td>
      <td>18</td>
      <td>144</td>
    </tr>
  </tbody>
</table>

            {/* <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                <div className="flex flex-col items-center gap-1 text-center">
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
            </div> */}
        </>
    )
}
