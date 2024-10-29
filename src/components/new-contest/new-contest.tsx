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
import { Star } from 'iconsax-react';
import { Calendar as CalendarIcon, CheckIcon } from 'lucide-react';

export default function Newcontest() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [period, setPeriod] = useState('AM');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [campaign, setCampaign] = useState('');

  const [imageUrl, setImageUrl] = useState('');
  const [feedUrl, setFeedUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [referenceUrl, setReferenceUrl] = useState('');

  const [premiumChecked, setPremiumChecked] = useState(false);
  const [payTokenContestChecked, setPayTokenContestChecked] = useState(false);

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
  const handlePremiumChange = (checked: boolean | "indeterminate") => {
    if (typeof checked === "boolean") {
      setPremiumChecked(checked);
    }
  };
  
  const handlePayTokenContestChange = (checked: boolean | "indeterminate") => {
    if (typeof checked === "boolean") {
      setPayTokenContestChecked(checked);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!productName) errors.productName = 'Product name is required.';
    if (!date) errors.date = 'Start time is required.';
    if (!hours || !minutes) errors.time = 'Time is required.';
    if (selectedTags.length === 0)
      errors.tags = 'At least one tag is required.';
    if (!category) errors.category = 'Category is required.';
    if (!campaign) errors.campaign = 'Campaign is required.';
    if (!premiumChecked && !payTokenContestChecked)
      errors.checkboxes = 'At least one checkbox must be selected.';

    // URL Validation
    if (imageUrl && !/^https?:\/\/.+/i.test(imageUrl)) {
      errors.imageUrl = 'Please enter a valid URL.';
    }
    if (feedUrl && !/^https?:\/\/.+/i.test(feedUrl)) {
      errors.feedUrl = 'Please enter a valid URL.';
    }
    if (videoUrl && !/^https?:\/\/.+/i.test(videoUrl)) {
      errors.videoUrl = 'Please enter a valid URL.';
    }
    if (referenceUrl && !/^https?:\/\/.+/i.test(referenceUrl)) {
      errors.referenceUrl = 'Please enter a valid URL.';
    }

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
      <Card className="w-full max-w-3xl p-6 shadow-lg rounded-lg ">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold ">
            Create Contest
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Product Name */}
          <div>
            <Label htmlFor="product-name" className="font-medium">
              Product Name*
            </Label>
            <Input
              id="product-name"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1"
            />
            {formErrors.productName && (
              <span className="text-red-500 text-sm">
                {formErrors.productName}
              </span>
            )}
          </div>

          <div className="md:flex md:gap-4">
            {/* Start Time */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Label htmlFor="start-time" className="font-medium">
                Start Time*
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal mt-1',
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
              {formErrors.date && (
                <span className="text-red-500 text-sm">{formErrors.date}</span>
              )}
              {formErrors.time && (
                <span className="text-red-500 text-sm">{formErrors.time}</span>
              )}
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
              {formErrors.tags && (
                <span className="text-red-500 text-sm">{formErrors.tags}</span>
              )}
            </div>
          </div>

          {/* URL Inputs */}
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="image-url" className="font-medium">
                Image URL
              </Label>
              <Input
                id="image-url"
                placeholder="Enter website URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mt-1"
              />
              {formErrors.imageUrl && (
                <span className="text-red-500 text-sm">
                  {formErrors.imageUrl}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <Label htmlFor="twitter-url" className="font-medium">
                Video URL
              </Label>
              <Input
                id="video-url"
                placeholder="Enter Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="mt-1"
              />
              {formErrors.videoUrl && (
                <span className="text-red-500 text-sm">
                  {formErrors.videoUrl}
                </span>
              )}
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="twitter-url" className="font-medium">
                Feed Image URL
              </Label>
              <Input
                id="feed-url"
                placeholder="Enter Feed Image URL"
                value={feedUrl}
                onChange={(e) => setFeedUrl(e.target.value)}
                className="mt-1"
              />
              {formErrors.feedUrl && (
                <span className="text-red-500 text-sm">
                  {formErrors.feedUrl}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <Label htmlFor="telegram-url" className="font-medium">
                Reference URL
              </Label>
              <Input
                id="reference-url"
                placeholder="Enter Reference URL"
                value={referenceUrl}
                onChange={(e) => setReferenceUrl(e.target.value)}
                className="mt-1"
              />
              {formErrors.referenceUrl && (
                <span className="text-red-500 text-sm">
                  {formErrors.referenceUrl}
                </span>
              )}
            </div>
          </div>

          {/* Currency and Category Row */}
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <Label htmlFor="category" className="font-medium">
                Category*
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category1">Product</SelectItem>
                  <SelectItem value="category2">Crypto Games</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.category && (
                <span className="text-red-500 text-sm">
                  {formErrors.category}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <Label htmlFor="campaign" className="font-medium">
                Campaign*
              </Label>
              <Select value={campaign} onValueChange={setCampaign}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="campaign1">
                    Gadgets and Accessories
                  </SelectItem>
                  <SelectItem value="campaign2">
                    Laptop and Computers
                  </SelectItem>
                  <SelectItem value="campaign3">Apple Products</SelectItem>
                  <SelectItem value="campaign4">Crypto Games</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.campaign && (
                <span className="text-red-500 text-sm">
                  {formErrors.campaign}
                </span>
              )}
            </div>
          </div>

          {/* <div className="flex w-full gap-4"> */}

          
          <div className="w-full">
              <Label htmlFor="category" className="font-medium">
                Currency
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="ngn">NGN</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.category && (
                <span className="text-red-500 text-sm">
                  {formErrors.category}
                </span>
              )}
            </div>

            <div className="w-full">
            <Label htmlFor="amount" className="font-medium">
              Amount
            </Label>
            <Input id="amount" placeholder="Enter amount" type='number' className="mt-1" />
          </div>
          {/* </div> */}

          {/* Checkbox Selection */}
          <div className="grid grid-cols-2 gap-4">
  <div className="flex items-center space-x-2">
    <Checkbox
      checked={premiumChecked}
      onCheckedChange={handlePremiumChange}
      id="premium"
    />
    <Label htmlFor="premium">Premium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox
      checked={payTokenContestChecked}
      onCheckedChange={handlePayTokenContestChange}
      id="pay-token-contest"
    />
    <Label htmlFor="pay-token-contest">Pay Token Contest</Label>
  </div>
</div>
          {formErrors.checkboxes && (
            <span className="text-red-500 text-sm">
              {formErrors.checkboxes}
            </span>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full " onClick={handleSubmit}>Create Contest</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
