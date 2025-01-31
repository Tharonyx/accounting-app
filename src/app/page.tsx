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
import Image from "next/image";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div>
      <div className=" bg-white shadow-none">
        <nav className="flex flex-wrap items-center justify-between gap-4 md:gap-0">
          {/* Company Dropdown */}
          <div className="flex-shrink-0">
            <Card className="w-[200px] md:w-[250px] shadow-none border-none">
              <CardContent className="p-2">
                <form>
                  <div className="grid items-center gap-1">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="company" className="text-xs font-semibold">
                        Company Name
                      </Label>
                      <Select>
                        <SelectTrigger id="company" className="border-none p-1 h-8 text-sm">
                          <SelectValue placeholder="Workspace" />
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

          {/* First Divider */}
          <div className="hidden md:block border-l border-gray-200 h-12 mx-2" />

          {/* Search Input */}
          <div className="flex-1 relative mx-2 md:mx-8 w-full md:max-w-md">
            <Input
              placeholder="Search for invoice or customer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 border-0 focus:ring-0 rounded-md"
            />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>



          {/* Icons and Profile */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <MessageSquare className="h-6 w-6 text-gray-600 hidden md:block" />

            {/* Second Divider */}
            <div className="hidden md:block border-l border-gray-200 h-12 mx-2" />

            <div className="relative inline-block">
              <Bell className="w-6 h-6 md:w-7 md:h-7 text-gray-500" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">
                3
              </span>
            </div>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Email Dropdown (Hidden on Small Screens) */}
            <div className="hidden md:block">
              <Card className="w-[200px] md:w-[250px] shadow-none border-none">
                <CardContent className="p-2">
                  <form>
                    <div className="grid items-center gap-1">
                      <div className="flex flex-col space-y-1">
                        <Label htmlFor="email" className="text-xs font-semibold">
                          Tharonyx
                        </Label>
                        <Select>
                          <SelectTrigger id="email" className="border-none p-1 h-8 text-sm">
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
          </div>
        </nav>
      </div>

      <div className="flex">
        {/* <!-- Sidebar Section with a fixed width --> */}
        <div className=" w-80">
          <Sidebar />
        </div>

        {/* <!-- Middle Section (Invoices) takes up remaining space --> */}
        <div className="w-[30rem] border-r mr-0">
          <div className="ml-4 mt-4">
            <p className="text-gray-600 text-sm ">
              Invoices <span className="text-gray-400 text-sm ml-4">create new invoice</span>
            </p>
            <h1 className="text-2xl font-semibold mb-2">Create New Invoice</h1>
          </div>
          <div className="-mx-2 border-t border-gray-200 mt-0" />
          <div className="flex justify-between mt-9 mb-9 mr-3">
            <div>
              <Card className="w-[180px] shadow-none rounded-xl">
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
              <Card className="w-[180px] shadow-none rounded-xl">
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
          <div className="-mx-2 border-t border-gray-200 mt-0" />
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
                <h3 className="text-base">Tharonyx@gmail.com</h3>
              </div>
              <div>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-[.7rem] font-semibold text-gray-500 mt-8">INVOICE DETAILS</h2>
              </div>
              <div className="flex justify-between mt-4 mr-3">
                <div>
                  <Card className="w-[180px] shadow-none rounded-xl">
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
                  <Card className="w-[180px] shadow-none rounded-xl">
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
                          className="flex justify-between space-x-2 w-[180px] text-left font-normal p-6 border border-gray-300 rounded-xl"
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
                          className="flex justify-between space-x-2 w-[180px] text-left font-normal p-6 border border-gray-300 rounded-xl"
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
                          className="flex justify-between space-x-2 w-[396px] text-left font-normal 
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
            <div className="flex gap-2 justify-between mr-3">
              <Badge className="border border-gray-300 rounded-xl p-2 text-white bg-black text-base p-3">Badge 1</Badge>
              <Badge className="border border-gray-300 rounded-xl p-2 text-gray-400 bg-gray-200 text-base p-3">Badge 2</Badge>
              <Badge className="border border-gray-300 rounded-xl p-2 text-gray-400 bg-gray-200 text-base p-3">Badge 3</Badge>
              <Badge className="border border-gray-300 rounded-xl p-2 text-gray-400 bg-gray-200 text-base p-3">Badge 4</Badge>
            </div>
          </div>
        </div>

        {/* <!-- Right Section takes up remaining space --> */}
        <div className="flex-1">
          <div className="m-8 border-0 shadow-md bg-white p-4">
            <div className="flex justify-between ">
              <div>
                <h1 className="text-xl font-semibold">Dominik Tyka</h1>
                <h3 className="text-sm">Product designer, Carcow, Poland</h3>
              </div>
              <div>
                <h3 className="text-sm">+1 258 741 963</h3>
                <h3 className="text-sm">tharonyx@gmail.com</h3>
                <h3 className="text-sm"><span className="font-semibold">TAX ID</span>852741963 </h3>
                <h3 className="text-sm"> <span className="font-semibold">GSTIN</span> 12AB8564TR439TY </h3>
                <h3 className="text-sm"> <span>NRIC/FIN/ID</span>A1234569 </h3>
              </div>
            </div>
            <div className="mb-14">
              <div className="text-sm">
                <p className="">Invoice: <span className="font-bold text-black ml-7">FV 00001/09/2022</span></p>
                <p className="mt-3">Client: <span className="font-bold text-black ml-9">Creme Digital Inc.</span></p>
                <p className="ml-20">2081 Still Street</p>
                <p className="ml-20">Toledo, OH</p>
                <p className="ml-20">USA</p>
                <p className="font-semibold ml-20">TAX ID: <span className="font-normal">931-3039-32</span></p>
                <p className="mt-3">Date: <span className="ml-11">24 Jan, 2022</span></p>
              </div>
            </div>
            <div className="border-t border-black">
              <div className="flex justify-between font-semibold text-sm mt-7 mb-8">
                <div>
                  <h1>Description</h1>
                </div>
                <div>
                  <h1>Total (INR)</h1>
                </div>
              </div>
              <div className="mx-auto bg-white ">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-sm">UX design consultation for the period <span className="font-semibold">1</span> </h2>
                    <p className="text-sm">
                      <strong> December 2022 to 31 December 2022</strong>
                    </p>
                  </div>
                  <p className="text-sm ">120,000.00</p>
                </div>

                {/* Divider */}
                <hr className="border-dashed border-gray-400 my-4" />

                {/* Tax Details */}
                <div className="mb-4 flex justify-between">
                  <div>
                    <p className="text-sm font-semibold mb-4">CGST @ 9%</p>
                    <p className="text-sm font-semibold">SGST @ 9%</p>
                  </div>
                  <div className="mb">
                    <p className="text-right text-sm mb-4">1,080.00</p>
                    <p className="text-right text-sm">1,080.00</p>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-dashed border-gray-400 my-4" />

                {/* Total */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-semibold">Total</h2>
                  <p className="text-sm font-bold">120,000.00</p>
                </div>

                <p className="text-sm text-right mb-4">Rupees One Lakh Twenty Thousand Rupees Only</p>

                {/* Signature Section */}
                <div className="border-t border-black py-12">
                  <img className="" src="/signature.png" alt="Signature" />
                  <p className="font-bold text-sm">Athreya Chidambi</p>
                  <p className="text-xs">Note: GST will be paid by me, Jay Janikaram</p>
                </div>

                <hr className="border-dashed border-gray-400 my-4" />

                {/* Payment Details */}
                <div className="text-center mt-6 mb-6">
                  <p className=" text-xs ">
                    Payment made via bank transfer / cheque in the name of: <strong>Jay Janikaram</strong>
                  </p>
                  <p className="text-xs">
                    MyBank a/c no 01234567890, MG Road Branch, Bangalore, India | rtgs/neft ifsc MYB0000010001
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t"></div>
      <div className="m-5">
        <div className="text-right">
          <Button className="border-2 rounded-xl p-3 mr-5">Cancel</Button>
          <Button className="border-2 rounded-xl p-3 bg-blue-700 text-white hover:bg-blue-700">Create Invoice</Button>
        </div>
      </div>
    </div>
  );
}
