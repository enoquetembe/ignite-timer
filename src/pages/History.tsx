import { TableData } from '../components/TableData'
import { Status } from '../components/Status'

export function History() {
  return (
    <main className="flex flex-1 flex-col p-14 text-timer-gray-100">
      <h1 className="text-2xl font-bold font-roboto-mono">My history</h1>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-timer-gray-600 p-4 pl-6 text-left text-gray-100 text-sm leading-[1.6] rounded-tl-lg">
                Task
              </th>
              <th className="bg-timer-gray-600 p-4  text-left text-gray-100 text-sm leading-[1.6]">
                Duration
              </th>
              <th className="bg-timer-gray-600 p-4 text-left text-gray-100 text-sm leading-[1.6]">
                Start
              </th>
              <th className="bg-timer-gray-600 p-4 pr-6 text-left text-gray-100 text-sm leading-[1.6] rounded-tr-lg">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <TableData>Study</TableData>
              <TableData>20 minutes</TableData>
              <TableData>2 days ago</TableData>
              <TableData>
                <Status status="Finished" statusColor="timer-green-light" />
              </TableData>
            </tr>
            <tr>
              <TableData>Study</TableData>
              <TableData>20 minutes</TableData>
              <TableData>2 days ago</TableData>
              <TableData>
                <Status status="In progress" statusColor="timer-yellow" />
              </TableData>
            </tr>
            <tr>
              <TableData>Study</TableData>
              <TableData>20 minutes</TableData>
              <TableData>2 days ago</TableData>
              <TableData>
                <Status status="Canceled" statusColor="timer-red" />
              </TableData>
            </tr>
            <tr>
              <TableData>Study</TableData>
              <TableData>20 minutes</TableData>
              <TableData>2 days ago</TableData>
              <TableData>
                <Status status="Finished" statusColor="timer-green-light" />
              </TableData>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
