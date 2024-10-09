import Link from "next/link";
import React from "react";

const AdminPage = () => {
    return (
        <div>
            <Link
                href="/admin/store"
                className="bg-white rounded-lg m-2 p-2 text-black"
            >
                Manage Stores
            </Link>
            <Link
                href="/admin/users"
                className="bg-white rounded-lg m-2 p-2 text-black"
            >
                Manage Users
            </Link>
            <Link
                href="/admin/access"
                className="bg-white rounded-lg m-2 p-2 text-black"
            >
                Manage Admin
            </Link>
        </div>
    );
};

export default AdminPage;
