"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data for the table
const data: User[] = [
  {
    id: "1",
    username: "john_smith",
    status: "Premium",
    ContestJoined: 5,
    contestWon: 2,
    referral: 10,
  },
  {
    id: "2",
    username: "jane_williams",
    status: "Regular",
    ContestJoined: 3,
    contestWon: 0,
    referral: 5,
  },
  {
    id: "3",
    username: "michael_jones",
    status: "Premium",
    ContestJoined: 8,
    contestWon: 3,
    referral: 8,
  },
  {
    id: "4",
    username: "emily_brown",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12,
  },
  {
    id: "5",
    username: "charles_davis",
    status: "Regular",
    ContestJoined: 7,
    contestWon: 2,
    referral: 15,
  },
  {
    id: "6",
    username: "lucy_evans",
    status: "Premium",
    ContestJoined: 10,
    contestWon: 4,
    referral: 20,
  },
  {
    id: "7",
    username: "oliver_clark",
    status: "Regular",
    ContestJoined: 3,
    contestWon: 1,
    referral: 6,
  },
  {
    id: "8",
    username: "isabella_martin",
    status: "Premium",
    ContestJoined: 6,
    contestWon: 3,
    referral: 9,
  },
  {
    id: "9",
    username: "liam_turner",
    status: "Regular",
    ContestJoined: 4,
    contestWon: 1,
    referral: 8,
  },
  {
    id: "10",
    username: "sophia_wright",
    status: "Premium",
    ContestJoined: 9,
    contestWon: 5,
    referral: 18,
  },
  {
    id: "11",
    username: "james_harris",
    status: "Regular",
    ContestJoined: 3,
    contestWon: 0,
    referral: 7,
  },
  {
    id: "12",
    username: "ava_roberts",
    status: "Premium",
    ContestJoined: 8,
    contestWon: 4,
    referral: 10,
  },
  {
    id: "13",
    username: "william_king",
    status: "Regular",
    ContestJoined: 5,
    contestWon: 2,
    referral: 12,
  },
  {
    id: "14",
    username: "mia_thompson",
    status: "Premium",
    ContestJoined: 11,
    contestWon: 6,
    referral: 25,
  },
  {
    id: "15",
    username: "noah_moore",
    status: "Regular",
    ContestJoined: 4,
    contestWon: 1,
    referral: 11,
  },
  {
    id: "16",
    username: "amelia_jackson",
    status: "Premium",
    ContestJoined: 9,
    contestWon: 4,
    referral: 14,
  },
  {
    id: "17",
    username: "logan_martinez",
    status: "Regular",
    ContestJoined: 3,
    contestWon: 0,
    referral: 4,
  },
  {
    id: "18",
    username: "harper_lopez",
    status: "Premium",
    ContestJoined: 7,
    contestWon: 3,
    referral: 17,
  },
  {
    id: "19",
    username: "jackson_anderson",
    status: "Regular",
    ContestJoined: 6,
    contestWon: 2,
    referral: 13,
  },
  {
    id: "20",
    username: "evelyn_scott",
    status: "Premium",
    ContestJoined: 10,
    contestWon: 5,
    referral: 20,
  },
];

// Define the user type
export type User = {
  id: string;
  username: string;
  status: "Premium" | "Regular";
  ContestJoined: number;
  contestWon: number;
  referral: number;
};

// Define the columns for the new data structure
export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "username", // Changed from avatar
    header: "Username", // Updated header
    cell: ({ row }) => (
      <div className="flex items-center">
        <span>{row.getValue("username")}</span> {/* Displaying username directly */}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "ContestJoined",
    header: () => <div className="text-right">Contest Joined</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("ContestJoined")}</div>
    ),
  },
  {
    accessorKey: "contestWon",
    header: () => <div className="text-right">Contest Won</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("contestWon")}</div>
    ),
  },
  {
    accessorKey: "referral",
    header: () => <div className="text-right">Referral</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("referral")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function Analyticstable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter usernames..."
          value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("username")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filter <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Button>
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          <Button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Button>
        </div>
      </div>
    </div>
  );
}
