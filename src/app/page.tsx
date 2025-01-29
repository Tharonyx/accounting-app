"use client";
import { MessageSquare } from "lucide-react";
import * as React from "react";
import { Bell } from "lucide-react"; // Import the Bell icon
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import Sidebar from "@/components/ui/sidebar";
import { Edit } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div>
      <div>
        <nav className="flex items-center justify-between mt-2 bg-white shadow-none">
          {/* Company Dropdown */}
          <div className="flex-shrink-0">
            <Card className="w-[250px] shadow-none border-none">
              <CardContent className="p-2"> {/* Reduced padding */}
                <form>
                  <div className="grid items-center gap-1"> {/* Reduced spacing */}
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="framework" className="text-xs font-semibold">
                        Company name
                      </Label>
                      <Select>
                        <SelectTrigger id="framework" className="border-none p-1 h-8 text-sm"> {/* Adjusted padding & height */}
                          <SelectValue placeholder="Work space" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* First Vertical Line After First Select (closer) */}
          <div className="border-l border-gray-200 h-12 mx-2" /> {/* Reduced mx-4 to mx-2 */}

          {/* Search Input */}
          <div className="flex-1 max-w-md relative mx-8">
            <Input
              placeholder="Search for invoice or customer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 text-left border-0 focus:ring-0"
            />
            <Search className="absolute top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>

          {/* Second Vertical Line Before Second Select */}
          <div className="border-l border-gray-200 h-12 mx-2" /> {/* New line before second Select */}
          <div className="flex items-center space-x-6">
            <MessageSquare className="h-6 w-6 text-gray-600" /> {/* Message Icon */}
          </div>

          <div className="border-l border-gray-200 h-12 mx-2" /> {/* Reduced mx-4 to mx-2 */}

          {/* Email Dropdown */}
          <div className="flex items-center space-x-6">
            <Bell className="h-6 w-6 text-gray-600" /> {/* Bell Icon */}

            {/* Avatar */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Email Dropdown */}
            <Card className="w-[250px] shadow-none border-none">
              <CardContent className="p-2"> {/* Reduced padding */}
                <form>
                  <div className="grid items-center gap-1"> {/* Reduced spacing */}
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="framework" className="text-xs font-semibold">
                        Tharonyx
                      </Label>
                      <Select>
                        <SelectTrigger id="framework" className="border-none p-1 h-8 text-sm"> {/* Adjusted padding & height */}
                          <SelectValue placeholder="tharonyx@gmail.com" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </nav>
        {/* Horizontal line under the navbar */}
        <div className="border-t border-gray-200 mt-0" />
      </div>
      <div className="grid grid-cols-[auto,1fr,1fr] gap-7">
        {/* <!-- Sidebar Section with a fixed width --> */}
        <div className=" w-80">
          <Sidebar />
        </div>

        {/* <!-- Middle Section (Invoices) takes up remaining space --> */}
        <div className="">
          <div className="ml-4 mt-4">
            <p className="text-gray-600 text-sm ">
              Invoices <span className="text-gray-400 text-sm ml-4">create new invoice</span>
            </p>
            <h1 className="text-2xl font-semibold mb-4">Create New Invoice</h1>
          </div>
          <div className="border-t border-gray-200 mt-0" />
          <div className="flex justify-between mt-9 mb-9">
            <div>
              <Card className="w-[250px] shadow-none rounded-xl">
                <CardContent className="p-2"> {/* Reduced padding */}
                  <form>
                    <div className="grid items-center gap-1"> {/* Reduced spacing */}
                      <div className="flex flex-col space-y-1">
                        <Label htmlFor="framework" className="text-xs font-semibold">
                          Language
                        </Label>
                        <Select>
                          <SelectTrigger id="framework" className="border-0 p-1 h-8 text-sm"> {/* Adjusted padding & height */}
                            <SelectValue placeholder="English" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="w-[250px] shadow-none rounded-xl">
                <CardContent className="p-2"> {/* Reduced padding */}
                  <form>
                    <div className="grid items-center gap-1"> {/* Reduced spacing */}
                      <div className="flex flex-col space-y-1">
                        <Label htmlFor="framework" className="text-xs font-semibold">
                          Currency
                        </Label>
                        <Select>
                          <SelectTrigger id="framework" className="border-0 p-1 h-8 text-sm"> {/* Adjusted padding & height */}
                            <SelectValue placeholder="$USD" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-6" />
          <div className="mt-4">
            <h1 className="text-[.7rem] font-semibold text-gray-500">MY DETAILS</h1>
            <div className="mt-8 ml-8">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xs text-gray-400">Company Name</h2>
                  <h3 className="text-base">Tharonyx</h3>
                </div>
                <div className="mr-8 flex "> {/* Added mr-8 */}
                  <Edit className="h-5 w-5 text-gray-500 mr-2" />
                  <h2 className="text-base font-semibold text-gray-500">Edit Details</h2>
                </div>
              </div>
              <div>
                <h2 className="text-xs text-gray-400 mt-4">Address</h2>
                <h3 className="text-base">3200 abcd, london, England</h3>
                <h2 className="text-xs text-gray-400 mt-4">Phone Number</h2>
                <h3 className="text-base">+1 6345 4579 34</h3>
                <h2 className="text-xs text-gray-400 mt-4">Email address</h2>
                <h3 className="text-base">Tharony@gmail.com</h3>
              </div>
              <div>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-[.7rem] font-semibold text-gray-500 mt-8">INVOICE DETAILS</h2>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <Card className="w-[250px] shadow-none rounded-xl">
                    <CardContent className="p-2"> {/* Reduced padding */}
                      <form>
                        <div className="grid items-center gap-1"> {/* Reduced spacing */}
                          <div className="flex flex-col space-y-1">
                            <Label htmlFor="framework" className="text-xs font-semibold">
                              Document Type
                            </Label>
                            <Select>
                              <SelectTrigger id="framework" className="border-0 p-1 h-8 text-sm"> {/* Adjusted padding & height */}
                                <SelectValue placeholder="VAT Invoice" />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                <SelectItem value="next">Next.js</SelectItem>
                                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                <SelectItem value="astro">Astro</SelectItem>
                                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="w-[250px] shadow-none rounded-xl">
                    <CardContent className="p-2"> {/* Reduced padding */}
                      <form>
                        <div className="grid items-center gap-1"> {/* Reduced spacing */}
                          <div className="flex flex-col space-y-1">
                            <Label htmlFor="framework" className="text-xs font-semibold">
                              Document
                            </Label>
                            <Select>
                              <SelectTrigger id="framework" className="border-0 p-1 h-8 text-sm"> {/* Adjusted padding & height */}
                                <SelectValue placeholder="ab 245/5687/4896" />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                <SelectItem value="next">Next.js</SelectItem>
                                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                <SelectItem value="astro">Astro</SelectItem>
                                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h2 className="text-[.7rem] font-semibold text-gray-500 mt-8"> DATES </h2>
                </div>
                {/* calender */}
                <div className="flex flex-row">
                  <div className=" p-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex justify-between space-x-2 w-[240px] text-left font-normal p-6 border border-gray-300 rounded-xl"
                        >
                          {selectedDate ? (
                            format(selectedDate, "PPP")
                          ) : (
                            <span className="text-gray-500">Creating date
                              <br />
                              <span className="text-black">20 jan,2025</span>
                            </span>

                          )}
                          <CalendarIcon className="h-5 w-5 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className=" p-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex justify-between space-x-2 w-[240px] text-left font-normal p-6 border border-gray-300 rounded-xl"
                        >
                          {selectedDate ? (
                            format(selectedDate, "PPP")
                          ) : (
                            <span className="text-gray-500">Creating date
                              <br />
                              <span className="text-black">20 jan,2025</span>
                            </span>

                          )}
                          <CalendarIcon className="h-5 w-5 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div>
                  <div className="p-4">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex justify-between space-x-2 w-[510px] text-left font-normal 
                   p-6 border border-gray-300 rounded-xl"
                        >
                          {selectedDate ? (
                            format(selectedDate, "PPP")
                          ) : (
                            <span className="text-gray-500">
                              Creating date
                              <br />
                              <span className="text-black">20 Jan, 2025</span>
                            </span>
                          )}
                          <CalendarIcon className="h-5 w-5 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 rounded-lg border border-gray-300">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <Badge className="border border-gray-300 rounded-xl p-2 text-white bg-black text-base p-3">Badge 1</Badge>
              <Badge className="border border-gray-300 rounded-xl p-2 text-gray-400 bg-gray-200 text-base p-3">Badge 2</Badge>
              <Badge className="border border-gray-300 rounded-xl p-2 text-gray-400 bg-gray-200 text-base p-3">Badge 3</Badge>
              <Badge className="border border-gray-300 rounded-xl p-2 text-gray-400 bg-gray-200 text-base p-3">Badge 4</Badge>
            </div>
          </div>
        </div>
        {/* <!-- Right Section takes up remaining space --> */}
        <div className="">
          Section 3
        </div>
      </div>
    </div>
  );
}
