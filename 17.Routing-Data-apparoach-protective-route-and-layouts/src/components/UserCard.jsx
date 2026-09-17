import React from "react";
import { Mail, Phone, MapPin, UserRound } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center">
            <UserRound size={28} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              {user.name?.firstname} {user.name?.lastname}
            </h2>

            <p className="text-slate-300 text-sm">@{user.username}</p>
          </div>
        </div>
      </div>

      {/* User Details */}
      <div className="p-5 space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
            <Mail size={18} />
          </div>

          <div>
            <p className="text-xs text-slate-500">Email</p>
            <p className="text-sm font-medium text-slate-800 break-all">
              {user.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-100 text-green-600">
            <Phone size={18} />
          </div>

          <div>
            <p className="text-xs text-slate-500">Phone</p>
            <p className="text-sm font-medium text-slate-800">{user.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
            <MapPin size={18} />
          </div>

          <div>
            <p className="text-xs text-slate-500">Address</p>
            <p className="text-sm font-medium text-slate-800">
              {user.address?.number} {user.address?.street}
            </p>

            <p className="text-sm text-slate-500">
              {user.address?.city} - {user.address?.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
