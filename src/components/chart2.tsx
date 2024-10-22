"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const description = "A simple area chart"

// Sample data for daily, weekly, and monthly
const dailyData = [
  { day: "Mon", users: 50 },
  { day: "Tue", users: 60 },
  { day: "Wed", users: 40 },
  { day: "Thu", users: 70 },
  { day: "Fri", users: 80 },
  { day: "Sat", users: 90 },
  { day: "Sun", users: 100 },
]

const weeklyData = [
  { week: "Week 1", users: 400 },
  { week: "Week 2", users: 700 },
  { week: "Week 3", users: 300 },
  { week: "Week 4", users: 500 },
]

const monthlyData = [
  { month: "January", users: 186 },
  { month: "February", users: 305 },
  { month: "March", users: 237 },
  { month: "April", users: 73 },
  { month: "May", users: 209 },
  { month: "June", users: 214 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Chart2component() {
  const [view, setView] = useState<"daily" | "weekly" | "monthly">("monthly")

  // Function to get the appropriate data based on the view
  const getChartData = () => {
    switch (view) {
      case "daily":
        return dailyData
      case "weekly":
        return weeklyData
      default:
        return monthlyData
    }
  }

  return (
    <Card className="w-[100%] h-50 mt-4">
      <CardHeader>
      <CardTitle className="flex justify-between items-center">
  <div>Visitors</div>
  <div className="w-[180px]">
    <Select value={view} onValueChange={(value) => setView(value as "daily" | "weekly" | "monthly")}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select interval" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="daily">Daily</SelectItem>
        <SelectItem value="weekly">Weekly</SelectItem>
        <SelectItem value="monthly">Monthly</SelectItem>
      </SelectContent>
    </Select>
  </div>
</CardTitle>

        <CardDescription>Showing total visitors for the selected time range</CardDescription>
      </CardHeader>
      <CardContent>
        {/* View Selection Dropdown */}
        {/* <div className="flex gap-4 mb-4">
          <Select value={view} onValueChange={(value) => setView(value as "daily" | "weekly" | "monthly")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select interval" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={getChartData()}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={view === "daily" ? "day" : view === "weekly" ? "week" : "month"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="users"
              type="natural"
              fill="var(--color-users)"
              fillOpacity={0.4}
              stroke="var(--color-users)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the {view} period
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
