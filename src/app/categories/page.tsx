"use client";
import { usePathname } from "next/navigation";

const Page = () => {
    const params = usePathname();
    return <div>{params}</div>;
};
export default Page;