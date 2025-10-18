"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    productOfInterest: "",
    projectTimeFrame: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-8 border-gray-300 border shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="border-0 border-b-2 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-black placeholder:text-gray-600 bg-transparent"
            required
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Last name *"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="border-0 border-b-2 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-black placeholder:text-gray-600 bg-transparent"
            required
          />
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone *"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border-0 border-b-2 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-black placeholder:text-gray-600 bg-transparent"
            required
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-0 border-b-2 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-black placeholder:text-gray-600 bg-transparent"
            required
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Address *"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="border-0 border-b-2 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-black placeholder:text-gray-600 bg-transparent"
            required
          />
        </div>

        <div>
          <Select
            value={formData.productOfInterest}
            onValueChange={(value) =>
              setFormData({ ...formData, productOfInterest: value })
            }
          >
            <SelectTrigger aria-label="Select product of interest" className="border-0 border-b-2 border-black rounded-none px-0 focus:ring-0 bg-transparent data-[placeholder]:text-gray-600 text-black">
              <SelectValue placeholder="Product Of Interest? *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="roof">Roof</SelectItem>
              <SelectItem value="metal-roof">Metal Roof</SelectItem>
              <SelectItem value="shingles-roof">Shingles Roof</SelectItem>
              <SelectItem value="tile-roof">Tile Roof</SelectItem>
              <SelectItem value="stone-coated-metal">
                Stone Coated Metal
              </SelectItem>
              <SelectItem value="windows-and-doors">
                Windows and Doors
              </SelectItem>
              <SelectItem value="solatube">Solatube</SelectItem>
              <SelectItem value="roof-cleaning">Roof Cleaning</SelectItem>
              <SelectItem value="repairs">Repairs</SelectItem>
              <SelectItem value="remodeling">Remodeling</SelectItem>
              <SelectItem value="new-construction">New Construction</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select
            value={formData.projectTimeFrame}
            onValueChange={(value) =>
              setFormData({ ...formData, projectTimeFrame: value })
            }
          >
            <SelectTrigger aria-label="Select project time frame" className="border-0 border-b-2 border-black rounded-none px-0 focus:ring-0 bg-transparent data-[placeholder]:text-gray-600 text-black">
              <SelectValue placeholder="Project Time Frame?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">Urgent</SelectItem>
              <SelectItem value="1-2months">1-2 Months</SelectItem>
              <SelectItem value="3-6months">3-6 Months</SelectItem>
              <SelectItem value="not-sure">Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-2 pt-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, consent: checked as boolean })
            }
            className="mt-1 border-gray-400"
          />
          <label
            htmlFor="consent"
            className="text-xs text-gray-700 leading-tight"
          >
            By clicking a submission button, I agree to Consent to receiving
            personalized marketing text messages and emails. To inform me about
            booking my free consultation, remind me of meeting, and extend any
            promotional deal. *
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-black hover:bg-black/90 text-[#ffde11] font-bold text-base py-6 rounded-sm"
        >
          SUBMIT
        </Button>

        <div className="text-center">
          <a
            href="#"
            className="text-xs text-gray-600 inline-flex items-center gap-1"
          >
            Report abuse
          </a>
        </div>
      </form>
    </div>
  );
}
