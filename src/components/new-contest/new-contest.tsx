'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CheckIcon } from 'lucide-react';

import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';

import { Star } from 'iconsax-react';

export default function Newcontest() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [period, setPeriod] = useState('AM'); // Default is AM

  // Handle hours change
  const handleHoursChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value >= 1 && value <= 12) {
      setHours(value);
    }
  };

  // Handle minutes change
  const handleMinutesChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value >= 0 && value < 60) {
      setMinutes(value);
    }
  };

  // Handle AM/PM change
  const handlePeriodChange = (value: React.SetStateAction<string>) => {
    setPeriod(value);
  };

  // Format time
  const formattedTime =
    hours && minutes ? `${hours}:${minutes.padStart(2, '0')} ${period}` : '';

  // Tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = ['Farming', 'Promo'];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex justify-center items-center mt-3">
      <Card className="w-full max-w-3xl p-4">
        <CardHeader>
          <CardTitle>Create New Contest</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {/* Product Name */}
          <div>
            <Label htmlFor="product-name">Product Name*</Label>
            <Input
              id="product-name"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Start Time */}
          <div>
            <Label
              htmlFor="start-time"
              className="text-sm font-medium flex items-center"
            >
              Start-Time
              {/* <TimerStart className="ml-1"  /> */}
            </Label>
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !date && 'text-muted-foreground',
                    )}
                  >
                    <CalendarIcon className="mr-2" />
                    {date ? (
                      `${format(date, 'PPP')} ${formattedTime ? `at ${formattedTime}` : ''}`
                    ) : (
                      <span>Pick a date and time</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate} // Now accepts Date | undefined
                    initialFocus
                  />

                  {/* Time Picker */}
                  <div className="flex justify-evenly pb-5">
                    {/* Hours Input */}
                    <Input
                      type="number"
                      className="w-14"
                      value={hours}
                      onChange={handleHoursChange}
                      placeholder="HH"
                      min="1"
                      max="12"
                    />
                    {/* Minutes Input */}
                    <Input
                      type="number"
                      className="w-14"
                      value={minutes}
                      onChange={handleMinutesChange}
                      placeholder="MM"
                      min="0"
                      max="59"
                    />
                    {/* AM/PM Selector */}
                    <Select value={period} onValueChange={handlePeriodChange}>
                      <SelectTrigger className="w-18">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AM">AM</SelectItem>
                        <SelectItem value="PM">PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </PopoverContent>
              </Popover>

              {/* <span className="absolute right-2 top-3 text-gray-400">
                  <CalendarIcon />
                </span> */}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-medium ">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  variant="outline"
                  className={`flex items-center space-x-2 ${
                    selectedTags.includes(tag) ? 'bg-red-500 text-white' : ''
                  }`}
                >
                  <span>{tag}</span>
                  {selectedTags.includes(tag) && (
                    <CheckIcon className="w-4 h-4" />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Image URL */}
          <div>
            <Label htmlFor="image-url">Image URL</Label>
            <Input id="image-url" placeholder="Enter image URL" />
          </div>

          {/* Video URL */}
          <div>
            <Label
              htmlFor="video-url"
              className="text-sm font-medium flex items-center"
            >
              Video URL
              {/* <VideoAdd className="ml-1" /> */}
            </Label>
            <Input id="video-url" placeholder="Enter video URL" />
          </div>

          {/* Feed Image URL */}
          <div>
            <Label
              htmlFor="feed-image-url"
              className="text-sm font-medium flex items-center"
            >
              Feed Image URL
              {/* <Image className="ml-1" /> */}
            </Label>
            <Input id="feed-image-url" placeholder="Enter feed image URL" />
          </div>

          {/* Reference URL */}
          <div>
            <Label
              htmlFor="reference-url"
              className="text-sm font-medium flex items-center"
            >
              Reference URL
              {/* <Link className="ml-1" /> */}
            </Label>
            <Input id="reference-url" placeholder="Enter reference URL" />
          </div>

          {/* Currency */}
          <div>
            <Label
              htmlFor="currency"
              className="text-sm font-medium flex items-center"
            >
              Currency
              {/* <WalletMoney className="ml-1" /> */}
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="ngn">NGN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Goal */}
          <div>
            <Label htmlFor="goal">Goal</Label>
            <Input id="goal" placeholder="Enter goal" />
          </div>

          {/* Product Code */}
          <div>
            <Label
              htmlFor="product-code"
              className="text-sm font-medium flex items-center"
            >
              Product Code
              {/* <Barcode className="ml-1" /> */}
            </Label>
            <Input id="product-code" placeholder="Enter product code" />
          </div>

          {/* Category */}
          <div>
            <Label htmlFor="category">Category*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Product</SelectItem>
                <SelectItem value="category2">Crypto Games</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amount */}
          <div>
            <Label
              htmlFor="amount"
              className="text-sm font-medium flex items-center"
            >
              Amount
              {/* <Receipt1 className="ml-1" /> */}
            </Label>
            <Input id="amount" placeholder="Enter amount" />
          </div>

          {/* Campaign */}
          <div>
            <Label htmlFor="campaign">Campaign *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Campaign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="campaign1">
                  Gadgets and Accessories
                </SelectItem>
                <SelectItem value="campaign2">Laptop and Computers</SelectItem>
                <SelectItem value="campaign3">Apple Products</SelectItem>
                <SelectItem value="campaign4">Crypto Games</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Premium & Token Contest Checkboxes */}
          <div className="col-span-2 flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="premium" />
              <Label htmlFor="premium" className="flex items-center space-x-1">
                <span>Premium</span>
                <Star className="w-5 h-5" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pay-token-contest" />
              <Label htmlFor="pay-token-contest">Pay Token Contest</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Contest</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
