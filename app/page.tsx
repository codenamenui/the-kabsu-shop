import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href="/login">Login</Link> <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link href="/admin" className="p-5 bg-white">
                Admin
            </Link>
        </div>
    );
}
