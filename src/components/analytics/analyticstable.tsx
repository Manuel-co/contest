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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Import Avatar component

// Sample data for the table
const data: User[] = [
  {
    id: "1",
    username: "johndoe",
    status: "Premium",
    ContestJoined: 5,
    contestWon: 2,
    referral: 10, // Added referral count
  },
  {
    id: "2",
    username: "janedoe",
    status: "Regular",
    ContestJoined: 3,
    contestWon: 0,
    referral: 5, // Added referral count
  },
  {
    id: "3",
    username: "sam_smith",
    status: "Premium",
    ContestJoined: 8,
    contestWon: 3,
    referral: 8, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
  {
    id: "4",
    username: "alice",
    status: "Regular",
    ContestJoined: 2,
    contestWon: 1,
    referral: 12, // Added referral count
  },
];

// Define the user type
export type User = {
  id: string;
  username: string;
  status: "Premium" | "Regular";
  ContestJoined: number;
  contestWon: number;
  referral: number; // Added referral type
};

// Define the columns for the new data structure
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
      id: "avatar",
      header: "Avatar",
      cell: ({ row }) => (
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-2">{row.getValue("username")}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div>{row.getValue("status")}</div>,
    },
    {
      accessorKey: "ContestJoined", // Ensure this matches your data field name
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
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id)}
              >
                Copy user ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View user</DropdownMenuItem>
              <DropdownMenuItem>View contest details</DropdownMenuItem>
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
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
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
        <div>
          <span>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                table.setPageIndex(pageNumber);
              }}
              className="w-16 border"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
