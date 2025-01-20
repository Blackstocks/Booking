// pages/home.jsx

"use client";
import { useState } from "react";
import { Plane, Building2, Home, Package, Train, Bus, Car, Wallet, Shield, ChevronDown, Search, MapPin, ArrowRightLeft } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [tripType, setTripType] = useState("oneWay");
  const [fromCity, setFromCity] = useState({ name: "Jaipur", code: "JAI", desc: "JAI, Jaipur Airport India" });
  const [toCity, setToCity] = useState({ name: "Mumbai", code: "BOM", desc: "BOM, Chhatrapati Shivaji International Airport" });

  const navItems = [
    { icon: Plane, text: "Flights", active: true },
    { icon: Building2, text: "Hotels" },
    { icon: Home, text: "Homestays & Villas" },
    { icon: Package, text: "Holiday Packages" },
    { icon: Train, text: "Trains" },
    { icon: Bus, text: "Buses" },
    { icon: Car, text: "Cabs" },
    { icon: Wallet, text: "Forex Card & Currency" },
    { icon: Shield, text: "Travel Insurance" },
  ];

  const fareTypes = [
    { id: "regular", label: "Regular", desc: "Regular fares", active: true },
    { id: "student", label: "Student", desc: "Extra discounts/baggage" },
    { id: "senior", label: "Senior Citizen", desc: "Up to ₹ 600 off" },
    { id: "armed", label: "Armed Forces", desc: "Up to ₹ 600 off" },
    { id: "doctor", label: "Doctor and Nurses", desc: "Up to ₹ 600 off" },
  ];

  const handleSwapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  return (
    <main className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/banner-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/makemytrip-logo.png" alt="MakeMyTrip Logo" width={120} height={40} />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm cursor-pointer">
                <span>Hi Traveller</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header>
        {/* Navigation */}
        <nav className="bg-white mt-8 max-w-5xl mx-auto rounded-lg shadow-lg">
          <div className="grid grid-cols-9 gap-4 p-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors cursor-pointer ${item.active ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-xs text-center whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </nav>
        {/* Search Form */}
        <div className="max-w-5xl mx-auto mt-4 bg-white rounded-lg shadow-lg p-6">
          {/* Trip Type Selection */}
          <div className="flex space-x-4 mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={tripType === "oneWay"}
                onChange={(e) => setTripType(e.target.value)}
                className="text-blue-500"
              />
              <span>One Way</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={tripType === "roundTrip"}
                onChange={(e) => setTripType(e.target.value)}
                className="text-blue-500"
              />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tripType"
                value="multiCity"
                checked={tripType === "multiCity"}
                onChange={(e) => setTripType(e.target.value)}
                className="text-blue-500"
              />
              <span>Multi City</span>
            </label>
          </div>
          {/* Search Fields */}
          <div className="grid grid-cols-5 gap-4">
            {/* From */}
            <div className="col-span-1 border rounded-lg p-3 cursor-pointer hover:border-blue-500">
              <label className="text-sm text-gray-500">From</label>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-semibold">{fromCity.name}</div>
                  <div className="text-xs text-gray-500">{fromCity.desc}</div>
                </div>
              </div>
            </div>
            {/* Swap Button */}
            <div className="flex items-center justify-center">
              <div 
                className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                onClick={handleSwapCities}
              >
                <ArrowRightLeft className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            {/* To */}
            <div className="col-span-1 border rounded-lg p-3 cursor-pointer hover:border-blue-500">
              <label className="text-sm text-gray-500">To</label>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-semibold">{toCity.name}</div>
                  <div className="text-xs text-gray-500">{toCity.desc}</div>
                </div>
              </div>
            </div>
            {/* Departure */}
            <div className="border rounded-lg p-3 cursor-pointer hover:border-blue-500">
              <label className="text-sm text-gray-500">Departure</label>
              <input
                type="date"
                className="w-full border-none outline-none bg-transparent"
                defaultValue="2025-01-21"
              />
            </div>
            {/* Return */}
            {tripType !== "oneWay" && (
              <div className="border rounded-lg p-3 cursor-pointer hover:border-blue-500">
                <label className="text-sm text-gray-500">Return</label>
                <input
                  type="date"
                  className="w-full border-none outline-none bg-transparent"
                  defaultValue="2025-01-28"
                />
              </div>
            )}
            {/* Travelers & Class */}
            <div className="border rounded-lg p-3 cursor-pointer hover:border-blue-500">
              <label className="text-sm text-gray-500">Travellers & Class</label>
              <div className="font-semibold">1 Traveller, Economy</div>
            </div>
          </div>
          {/* Fare Types */}
          <div className="mt-6">
            <div className="text-sm font-semibold mb-2 flex items-center">
              <span>Select a special fare</span>
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 text-xs rounded">EXTRA SAVINGS</span>
            </div>
            <div className="flex space-x-4">
              {fareTypes.map((fare) => (
                <label
                  key={fare.id}
                  className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer transition-colors ${fare.active ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-500"}`}
                >
                  <input
                    type="radio"
                    name="fareType"
                    value={fare.id}
                    defaultChecked={fare.active}
                    className="text-blue-500"
                  />
                  <div>
                    <div className="font-medium">{fare.label}</div>
                    <div className="text-xs text-gray-500">{fare.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          {/* Search Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}