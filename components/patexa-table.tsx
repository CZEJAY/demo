"use client"

import * as React from "react"
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Star, MoreHorizontal, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface PatexaItem {
  id: string
  title: string
  isPrivate: boolean
  lastViewed: Date
  creator: {
    name: string
    avatar?: string
  }
}

const columns: ColumnDef<PatexaItem>[] = [
  {
    id: "favorite",
    size: 40,
    cell: () => (
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Star className="h-4 w-4" />
        <span className="sr-only">Favorite</span>
      </Button>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    id: "folders",
    header: "Folders",
    size: 100,
    cell: ({ row }) => (
      row.original.isPrivate && (
        <Badge variant="beta" className="rounded-md">
          Private
        </Badge>
      )
    ),
  },
  {
    accessorKey: "lastViewed",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4 h-8 data-[sorting=true]:font-semibold"
          onClick={() => column.toggleSorting()}
        >
          Last viewed
          {column.getIsSorted() === "asc" && <ChevronUp className="ml-1 h-4 w-4" />}
          {column.getIsSorted() === "desc" && <ChevronDown className="ml-1 h-4 w-4" />}
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.original.lastViewed
      return new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
        .format(-Math.round((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 30)), 'month')
    },
  },
  {
    accessorKey: "creator",
    header: "Creator",
    cell: ({ row }) => {
      const creator = row.original.creator
      return (
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={creator.avatar} />
            <AvatarFallback>{creator.name[0]}</AvatarFallback>
          </Avatar>
          <span>{creator.name}</span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: () => (
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">Actions</span>
      </Button>
    ),
  },
]

interface PatexaTableProps {
  data: PatexaItem[]
}

export function PatexaTable({ data }: PatexaTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <div className=" min-w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead 
                  key={header.id}
                  style={{ width: header.getSize() }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

