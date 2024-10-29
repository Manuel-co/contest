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
import { Star } from 'iconsax-react';

export default function Newcontest() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [period, setPeriod] = useState('AM');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const tags = ['Farming', 'Promo'];

  const handleHoursChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value >= 1 && value <= 12) {
      setHours(value);
    }
  };

  const handleMinutesChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value >= 0 && value < 60) {
      setMinutes(value);
    }
  };

  const handlePeriodChange = (value: React.SetStateAction<string>) => {
    setPeriod(value);
  };

  const formattedTime =
    hours && minutes ? `${hours}:${minutes.padStart(2, '0')} ${period}` : '';

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!date) errors.date = 'Start time is required.';
    if (!hours || !minutes) errors.time = 'Time is required.';
    if (selectedTags.length === 0) errors.tags = 'At least one tag is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form submitted');
    }
  };

  return (
    <div className="flex justify-center items-center mt-3 px-4">
      <Card className="w-full max-w-3xl p-6 shadow-lg rounded-lg bg-white">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-800">Create New Contest</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Product Name */}
          <div>
            <Label htmlFor="product-name" className="font-medium">Product Name*</Label>
            <Input
              id="product-name"
              placeholder="Enter product name"
              required
              className="mt-1"
            />
          </div>

          <div className="md:flex md:gap-4">
  {/* Start Time */}
  <div className="w-full md:w-1/2 mb-4 md:mb-0">
    <Label htmlFor="start-time" className="font-medium">Start Time*</Label>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal mt-1',
            !date && 'text-muted-foreground'
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
          onSelect={setDate}
          initialFocus
        />
        <div className="flex justify-evenly pb-5 mt-2">
          <Input
            type="number"
            className="w-14"
            value={hours}
            onChange={handleHoursChange}
            placeholder="HH"
            min="1"
            max="12"
          />
          <Input
            type="number"
            className="w-14"
            value={minutes}
            onChange={handleMinutesChange}
            placeholder="MM"
            min="0"
            max="59"
          />
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
    {formErrors.date && <span className="text-red-500 text-sm">{formErrors.date}</span>}
  </div>

  {/* Tags */}
  <div className="w-full md:w-1/2">
    <Label className="font-medium">Tags*</Label>
    <div className="flex items-center flex-wrap gap-2 mt-2">
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
    {formErrors.tags && <span className="text-red-500 text-sm">{formErrors.tags}</span>}
  </div>
</div>



          {/* URLs Row */}
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="image-url" className="font-medium">Image URL</Label>
              <Input id="image-url" placeholder="Enter image URL" className="mt-1" />
            </div>

            <div className="w-1/2">
              <Label htmlFor="video-url" className="font-medium">Video URL</Label>
              <Input id="video-url" placeholder="Enter video URL" className="mt-1" />
            </div>
          </div>

          {/* Feed and Reference URL Row */}
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="feed-image-url" className="font-medium">Feed Image URL</Label>
              <Input id="feed-image-url" placeholder="Enter feed image URL" className="mt-1" />
            </div>

            <div className="w-1/2">
              <Label htmlFor="reference-url" className="font-medium">Reference URL</Label>
              <Input id="reference-url" placeholder="Enter reference URL" className="mt-1" />
            </div>
          </div>

          {/* Goal and Product Code Row */}
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="goal" className="font-medium">Goal</Label>
              <Input id="goal" placeholder="Enter goal" className="mt-1" />
            </div>

            <div className="w-1/2">
              <Label htmlFor="product-code" className="font-medium">Product Code</Label>
              <Input id="product-code" placeholder="Enter product code" className="mt-1" />
            </div>
          </div>

          {/* Currency and Category Row */}
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="currency" className="font-medium">Currency</Label>
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

            <div className="w-1/2">
              <Label htmlFor="category" className="font-medium">Category*</Label>
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
          </div>

          {/* Amount */}
          <div>
            <Label htmlFor="amount" className="font-medium">Amount</Label>
            <Input id="amount" placeholder="Enter amount" className="mt-1" />
          </div>

          {/* Campaign */}
          <div>
            <Label htmlFor="campaign" className="font-medium">Campaign *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Campaign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="campaign1">Gadgets and Accessories</SelectItem>
                <SelectItem value="campaign2">Laptop and Computers</SelectItem>
                <SelectItem value="campaign3">Apple Products</SelectItem>
                <SelectItem value="campaign4">Crypto Games</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Premium & Token Contest Checkboxes */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="premium" />
              <Label htmlFor="premium" className="flex items-center space-x-1 font-medium">
                <span>Premium</span>
                <Star className="w-5 h-5" />
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pay-token-contest" />
              <Label htmlFor="pay-token-contest" className="font-medium">Pay Token Contest</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSubmit}>
            Create Contest
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
