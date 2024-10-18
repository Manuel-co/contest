'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarIcon, CheckIcon, Star } from 'lucide-react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function Newcontest() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
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
    <div className="flex justify-center items-center h-screen">
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
            <Label htmlFor="start-time">Start Time</Label>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date ?? undefined)} // Convert null to undefined
                showTimeSelect
                dateFormat="dd/MM/yyyy HH:mm"
                className="w-full p-2 rounded-md"
              />

              {/* <span className="absolute right-2 top-3 text-gray-400">
                  <CalendarIcon />
                </span> */}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Tags</label>
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
            <Label htmlFor="video-url">Video URL</Label>
            <Input id="video-url" placeholder="Enter video URL" />
          </div>

          {/* Feed Image URL */}
          <div>
            <Label htmlFor="feed-image-url">Feed Image URL</Label>
            <Input id="feed-image-url" placeholder="Enter feed image URL" />
          </div>

          {/* Reference URL */}
          <div>
            <Label htmlFor="reference-url">Reference URL</Label>
            <Input id="reference-url" placeholder="Enter reference URL" />
          </div>

          {/* Currency */}
          <div>
            <Label htmlFor="currency">Currency</Label>
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
            <Label htmlFor="product-code">Product Code</Label>
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
            <Label htmlFor="amount">Amount</Label>
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
                Premium <Star className="w-5 h-5" />
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
