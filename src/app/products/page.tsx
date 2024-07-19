"use client";
import { useSearchParams } from "next/navigation";

const Page = () => {
    const params = useSearchParams();
    return <div>{params.get('search')}</div>;
};
export default Page;