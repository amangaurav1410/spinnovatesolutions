"use client";

import * as React from "react";
import { Calendar, Clock, Video, CheckCircle2, User, Mail } from "lucide-react";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { cn } from "@/lib/utils";

export function CalBooking() {
  const [selectedDay, setSelectedDay] = React.useState<number>(1);
  const [selectedTime, setSelectedTime] = React.useState<string>("10:00 AM PST");
  const [confirmed, setConfirmed] = React.useState(false);
  const [attendeeName, setAttendeeName] = React.useState("");
  const [attendeeEmail, setAttendeeEmail] = React.useState("");

  const days = [
    { id: 1, day: "Tomorrow", date: "Thu, Oct 29" },
    { id: 2, day: "Friday", date: "Fri, Oct 30" },
    { id: 3, day: "Monday", date: "Mon, Nov 02" },
    { id: 4, day: "Tuesday", date: "Tue, Nov 03" },
  ];

  const times = [
    "09:30 AM PST",
    "10:00 AM PST",
    "11:30 AM PST",
    "01:30 PM PST",
    "03:00 PM PST",
    "04:30 PM PST",
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (attendeeName && attendeeEmail) {
      setConfirmed(true);
    }
  };

  if (confirmed) {
    return (
      <div className="p-8 rounded-3xl border border-blue-500/30 bg-blue-500/5 text-center space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <div>
          <Badge variant="blue" size="sm">
            Confirmed Calendar Invitation
          </Badge>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
            30-Min Systems Audit Call Booked!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Scheduled for{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              {days.find((d) => d.id === selectedDay)?.date} at {selectedTime}
            </span>
            . A Google Meet / Teams link has been sent to{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              {attendeeEmail}
            </span>
            .
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setConfirmed(false)}
        >
          Reschedule or Book Another Time
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-lg">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-blue-500" />
            <h3 className="font-bold text-slate-900 dark:text-white">
              Quick 30-Min Architecture Discovery
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Direct video call with Siddharth Patel, Principal Architect
          </p>
        </div>
        <Badge variant="blue" size="sm">
          Free Consultation
        </Badge>
      </div>

      <div className="py-4 space-y-4">
        {/* Day selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            1. Select Day
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {days.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedDay(item.id)}
                className={cn(
                  "p-2.5 rounded-xl border text-left transition-all cursor-pointer",
                  selectedDay === item.id
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold"
                    : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300"
                )}
              >
                <div className="text-[11px] font-semibold">{item.day}</div>
                <div className="text-xs">{item.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            2. Select Time Slot (30 Mins)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {times.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedTime(slot)}
                className={cn(
                  "py-2 px-3 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer",
                  selectedTime === slot
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Confirmation inputs */}
        <form onSubmit={handleBooking} className="pt-2 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="Your Work Email"
                value={attendeeEmail}
                onChange={(e) => setAttendeeEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <Button type="submit" variant="glow" size="md" className="w-full">
            Confirm 30-Minute Discovery Slot
          </Button>
        </form>
      </div>
    </div>
  );
}

