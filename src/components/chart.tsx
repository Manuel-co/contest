"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A bar chart"

// Sample data for daily, weekly, and monthly
const dailyData = [
  { day: "Mon", users: 5 },
  { day: "Tue", users: 8 },
  { day: "Wed", users: 6 },
  { day: "Thu", users: 10 },
  { day: "Fri", users: 7 },
  { day: "Sat", users: 4 },
  { day: "Sun", users: 9 },
]

const weeklyData = [
  { week: "Week 1", users: 25 },
  { week: "Week 2", users: 45 },
  { week: "Week 3", users: 65 },
  { week: "Week 4", users: 35 },
]

const monthlyData = [
  { month: "January", users: 16 },
  { month: "February", users: 35 },
  { month: "March", users: 37 },
  { month: "April", users: 73 },
  { month: "May", users: 29 },
  { month: "June", users: 24 },
  { month: "July", users: 54 },
  { month: "August", users: 91 },
  { month: "September", users: 74 },
  { month: "October", users: 193 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Chartcomponent() {
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
          Average Sign Up
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
        <CardDescription>Time-based User Signups</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={getChartData()}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={view === "daily" ? "day" : view === "weekly" ? "week" : "month"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="users" fill="var(--color-users)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Sign up for the {view} period
        </div>
      </CardFooter>
    </Card>
  )
}
